# Mobile implementation and QA — 2026-09-12

## Result
All four remaining mobile page types are implemented on the existing shared pages. Desktop layout was preserved; no content, data, routes, package dependencies, or deployment configuration changed.

- Member Detail: responsive 4:5 portrait and badge, stacked biography, all 11 facts with clickable Instagram, newest eligible three performances, and stacked member navigation with avatars.
- Performances: wrapping filter pills, vertical featured card, single-column archive, visible play controls, original sorting/filtering/Load More behavior.
- News: the same wrapping filters and stacked featured treatment, readable single-column cards, original Read More routes and Load More behavior.
- News Detail: smaller centered title, fluid 2:1 hero, 16px/1.8 body text, left-aligned source close to the article, stacked related cards and previous/next navigation.

## Responsive strategy and shared components
Use the established 640px mobile breakpoint, 20px side gutters, 26px section headings, 28–32px page headings, and 24–48px section spacing. Reuse the existing 900px breakpoint for two-column intermediate card layouts and featured-card stacking.

The four pages now opt into the existing Navbar, Footer, and RainbowVitaminStrip mobile behavior using their existing mobileHome prop. No duplicate shell, page, or data implementation was created. Mobile Home/Members source files were untouched.

Shared responsive CSS was added for ContentRail, editorial headers/cards/filters, article body/navigation, profile facts/navigation, NewsCard, and PerformanceCard. New primary actions, filters, and navigation links have at least 44px height. Existing compact footer and inline links received transparent minimum 24px hit areas, and the logo received a 44px hit area; these preserve the established visual spacing and prevent overlapping hit areas. Social buttons keep the existing 32px dimensions.

## Figma availability
Attempted to inspect page 0:1 of file 7lISR8yFfCMjN2qg35HyPR. Figma MCP returned the Starter-plan call-limit error. Dedicated frames could not be confirmed. As explicitly authorized, these pages adapt the approved desktop implementation using the existing Mobile Home/Members language. No new design system or replacement content was invented.

## Verification
- Typecheck: PASS (`pnpm typecheck`).
- Production build: PASS (`pnpm build`).
- Diff whitespace check: PASS.
- Layout matrix: all 11 requested routes at 320, 375, 390, 430, and 1440px — 55 cases.
- All 55 cases: no horizontal overflow, offscreen layout elements, broken images, or JavaScript runtime errors.
- All 44 mobile cases: no visible link/button hit area below 24 × 24px.
- Interaction suite: 44 groups passed across the four mobile widths. Each group covers multiple actions/assertions.
- All performance/news filters exercised; sorting and rendered titles checked against the existing data, Load More tested until exhausted, and changing filters resets the visible batch.
- All five member routes checked for 11 unchanged facts, the original newest eligible three-performance selection, Instagram, and previous/next navigation.
- Both requested articles checked for source links, related-news selection excluding the current item, related routes, and available previous/next links.
- Navbar open/close and route changes, Home/Member card links, Footer routes, all social links, keyboard focus, and reduced-motion behavior checked.
- Outbound links were actually clicked in isolated test tabs and checked for their exact URL, new-tab behavior, noopener/noreferrer, and null opener. The destination HTML was intercepted for this test; external site availability and video playback are not claimed.
- Screenshot capture used live external images. Initial sandbox network denial was resolved by rerunning with approved network access; no asset substitutions were made.
- Full-page screenshot capture scrolls through the page and waits for image decoding/painting, avoiding blank offscreen thumbnails.

## Desktop regression
The reference is the clean starting commit a2388ea, which already includes the approved Mobile Home/Members work over Desktop v1.0.0. A read-only baseline server serves those original source files from Git without checking out or overwriting the worktree.

All 11 desktop routes have identical measured heading, section, card, image, navigation, footer geometry and total page heights before/after. Non-media pixels are identical across every desktop comparison. Five captures show small raster differences confined to unchanged image areas or the rainbow gradient (maximum channel difference 14/255; gradient difference 1/255). These are not layout, typography, spacing, or content changes; full screenshots are not claimed to be byte-identical.

Mobile Home and Members at 390px are pixel-identical before/after, including the shared shell.

Raw evidence: [layout matrix](after/measurements.json), [interaction results](interactions.json), [desktop/mobile comparison](comparison.json).

## Screenshots
All are full-page captures at device scale factor 1.

- [Member Detail — 390px](after/members-hayoung-390.png)
- [Performances — 390px](after/performances-390.png)
- [News — 390px](after/news-390.png)
- [News Detail — 390px](after/news-park-jiwon-musical-debut-hells-kitchen-opening-390.png)
- [Tour article — 390px](after/news-fromis9-2026-asia-tour-tomorrow-glow-seoul-390.png)
- [Four-page overview](mobile-overview.png)

The after folder also includes full-page 390px captures of Home, Members, and all five member routes, plus 1440px captures of every requested route. Before contains the corresponding desktop reference captures and the two established mobile references.

## Exact changed/added files
Paths are relative to the repository root. The list below includes all application changes and QA artifacts created in this pass; this report itself is also added.

- `PROJECT_STATUS.md`
- `src/components/cards/NewsCard.module.css`
- `src/components/cards/PerformanceCard.module.css`
- `src/components/editorial/ArticleBody.module.css`
- `src/components/editorial/ArticleHeader.module.css`
- `src/components/editorial/ArticleNavigation.module.css`
- `src/components/editorial/EditorialPageHeader.module.css`
- `src/components/editorial/FeaturedEditorialCard.module.css`
- `src/components/editorial/PillFilterBar.module.css`
- `src/components/layout/ContentRail.module.css`
- `src/components/layout/Footer.module.css`
- `src/components/layout/Navbar.module.css`
- `src/components/profile/MemberNavigation.module.css`
- `src/components/profile/ProfileInfoGrid.module.css`
- `src/components/ui/InlineArrowLink.module.css`
- `src/pages/MemberProfilePage.module.css`
- `src/pages/MemberProfilePage.tsx`
- `src/pages/NewsDetailPage.module.css`
- `src/pages/NewsDetailPage.tsx`
- `src/pages/NewsPage.module.css`
- `src/pages/NewsPage.tsx`
- `src/pages/PerformancesPage.module.css`
- `src/pages/PerformancesPage.tsx`
- `artifacts/mobile-qa/baseline-server.cjs`
- `artifacts/mobile-qa/capture.cjs`
- `artifacts/mobile-qa/compare.cjs`
- `artifacts/mobile-qa/comparison.json`
- `artifacts/mobile-qa/interactions.cjs`
- `artifacts/mobile-qa/interactions.json`
- `artifacts/mobile-qa/mobile-overview.png`
- `artifacts/mobile-qa/after/home-1440.png`
- `artifacts/mobile-qa/after/home-390.png`
- `artifacts/mobile-qa/after/measurements.json`
- `artifacts/mobile-qa/after/members-1440.png`
- `artifacts/mobile-qa/after/members-390.png`
- `artifacts/mobile-qa/after/members-chaeyoung-1440.png`
- `artifacts/mobile-qa/after/members-chaeyoung-390.png`
- `artifacts/mobile-qa/after/members-hayoung-1440.png`
- `artifacts/mobile-qa/after/members-hayoung-390.png`
- `artifacts/mobile-qa/after/members-jiheon-1440.png`
- `artifacts/mobile-qa/after/members-jiheon-390.png`
- `artifacts/mobile-qa/after/members-jiwon-1440.png`
- `artifacts/mobile-qa/after/members-jiwon-390.png`
- `artifacts/mobile-qa/after/members-nagyung-1440.png`
- `artifacts/mobile-qa/after/members-nagyung-390.png`
- `artifacts/mobile-qa/after/news-1440.png`
- `artifacts/mobile-qa/after/news-390.png`
- `artifacts/mobile-qa/after/news-fromis9-2026-asia-tour-tomorrow-glow-seoul-1440.png`
- `artifacts/mobile-qa/after/news-fromis9-2026-asia-tour-tomorrow-glow-seoul-390.png`
- `artifacts/mobile-qa/after/news-park-jiwon-musical-debut-hells-kitchen-opening-1440.png`
- `artifacts/mobile-qa/after/news-park-jiwon-musical-debut-hells-kitchen-opening-390.png`
- `artifacts/mobile-qa/after/performances-1440.png`
- `artifacts/mobile-qa/after/performances-390.png`
- `artifacts/mobile-qa/before/home-1440.png`
- `artifacts/mobile-qa/before/home-390.png`
- `artifacts/mobile-qa/before/measurements.json`
- `artifacts/mobile-qa/before/members-1440.png`
- `artifacts/mobile-qa/before/members-390.png`
- `artifacts/mobile-qa/before/members-chaeyoung-1440.png`
- `artifacts/mobile-qa/before/members-hayoung-1440.png`
- `artifacts/mobile-qa/before/members-jiheon-1440.png`
- `artifacts/mobile-qa/before/members-jiwon-1440.png`
- `artifacts/mobile-qa/before/members-nagyung-1440.png`
- `artifacts/mobile-qa/before/news-1440.png`
- `artifacts/mobile-qa/before/news-fromis9-2026-asia-tour-tomorrow-glow-seoul-1440.png`
- `artifacts/mobile-qa/before/news-park-jiwon-musical-debut-hells-kitchen-opening-1440.png`
- `artifacts/mobile-qa/before/performances-1440.png`
- `artifacts/mobile-qa/REPORT.md`

MOBILE IMPLEMENTATION COMPLETE — READY FOR FINAL QA

