# Final mobile bug audit

## Scope and result

Tested the existing implementation at 320, 375, 390, 430 and 1440 CSS pixels in headless Microsoft Edge (Chromium). No redesign, new pages, content/data changes, deployment or commit. Existing dirty mobile implementation changes were preserved.

## Confirmed bugs fixed

| Severity | Bug | Correction |
| --- | --- | --- |
| Major | Mobile Profile facts inherited desktop column-first ordering. | A mobile-only semantic definition list uses the requested reading order. Desktop retains its independent two-column layout. Both views use the same facts and row renderer; the inactive view is `display: none`, including for accessibility and keyboard navigation. |
| Major | Route changes used `behavior: auto` with global smooth scrolling, allowing detail pages to appear at the previous scroll position while animating upward. | Reset with `behavior: instant` in a layout effect, on pathname changes only. |
| Minor | Reduced-motion CSS removed structural transforms from focused hamburger spans and link hit areas. The open menu lost its X-shaped close icon. | Keep reduced animation/transition durations and suppress direct control movement without erasing descendant/pseudo-element positioning. |

No remaining blocker found within the tested scope. No subjective spacing redesign was applied.

## Exact source files changed in this audit

- `src/components/profile/ProfileInfoGrid.tsx`
- `src/components/profile/ProfileInfoGrid.module.css`
- `src/components/routing/ScrollToTop.tsx`
- `src/styles/globals.css`

QA files added: `artifacts/mobile-qa/audit.cjs`, `audit-routing.cjs`, `audit-compare.cjs`, this report, and their JSON/PNG outputs. Existing `artifacts/mobile-qa/interactions.cjs` was updated to assert the intended visible profile order; its result JSON was refreshed. Other files shown by git status predate this audit.

## Verification

- **Profile order:** Stage Name → Full Name → Korean Name → Date of Birth → Position → Height → Weight → Blood Type → MBTI Type → Representative Emoji → Instagram. All five members pass at all four mobile widths. Biographies/data unchanged; portraits and assigned featured performances verified.
- **Layout matrix:** 55 route/width cases: Home, Members, all five profiles, Performances, News and two representative news details. Zero horizontal overflow, overflowing elements, broken loaded images or page runtime errors. No mobile target under the 24px bounding/pseudo-hitbox check. Primary menu/filter/action controls retain their larger targets. Full-page visual review found no clipping, overlap, broken radii, image spill or content-height issue.
- **Interactions:** 44 groups pass across four mobile widths. All six categories on each archive; initial six items, newest-first order, Load More increments and exhaustion, and reset on filter changes. Performance featured section appears only for All. Video play/watch destinations, member Instagram, news sources, related links and social links pass popup URL, `_blank`, `noopener noreferrer` and null opener checks.
- **Routing/navigation/scroll:** 70 groups pass across all five widths. Mobile menu opens/closes on every page type and all five members, active route is correct, and scrolling works afterward. Member/news list-to-detail and previous/next reset to top after the destination renders. Filters and Load More retain nonzero scroll position. Home member profile navigation works. External attributes also checked on Home release Spotify/YouTube links.
- **Article edges and regression checks:** 98 groups pass. All 15 news slugs at all five widths resolve to the right title; related news excludes the current article; navigation matches adjacent sorted articles, including first/last boundaries. Invalid news/member slugs return to their respective lists. Reduced-motion close icon now retains its structural transform.
- **Accessibility:** Visible semantic links/buttons, image alt attributes (decorative avatars intentionally empty), menu labels/state, keyboard focus and Enter interaction checked. Mobile Profile DOM reading order matches visual order. This is a targeted audit, not a formal screen-reader/WCAG certification.
- **Desktop:** All 11 tested routes have identical measured geometry before/after this audit. Ten screenshots are pixel-identical. Nagyung has only a small thumbnail raster variation (45,760 pixels within x81–489/y1487–1716, maximum channel difference 7); layout and surrounding UI are unchanged. The preceding mobile implementation QA separately records comparison against the locked desktop baseline.
- **Code health:** `pnpm typecheck` and `pnpm build` pass before and after fixes. `git diff --check` passes; Git reports only existing LF/CRLF normalization notices. No lint script is configured, so no linter was introduced.

## Evidence

- [Measurements, all five widths](audit-after/measurements.json)
- [Interaction results](interactions.json)
- [Routing and scroll results](audit-routing.json)
- [Article/profile/reduced-motion results](audit-results.json)
- [Desktop comparison](audit-comparison.json)
- [Six-page visual overview](audit-overview.png)

390px full-page screenshots:

- [Home](audit-after/home-390.png)
- [Members](audit-after/members-390.png)
- [Member Detail](audit-after/members-hayoung-390.png)
- [Performances](audit-after/performances-390.png)
- [News](audit-after/news-390.png)
- [News Detail](audit-after/news-park-jiwon-musical-debut-hells-kitchen-opening-390.png)

## Limitations

Real-device Safari/iOS and Android browser testing was not performed. External destination dispatch/security attributes were tested with navigation stubs; third-party playback/login/service availability was not certified. Remote images loaded successfully in the network-enabled capture run but remain dependent on their external hosts. Sandbox-only network failures were not treated as application defects. The page/card heights remain content-driven.

MOBILE READY FOR RELEASE
