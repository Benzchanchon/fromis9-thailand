# History: content, visual assets, and QA

## Latest editorial cleanup

Removed the visible reference section (including its heading), image-credit links, and card-end citations. Source URLs and credits remain centralized in data and documented here. No Former Members UI was added. Earlier QA/refinement notes below describe historical iterations.

Image selection changes:

- Glass Shoes: replaced the general pre-debut profile photograph with the actual single artwork, `glass-shoes-cover.png`. [Wiki file](https://kpop.fandom.com/wiki/File:Fromis_9_Glass_Shoes_cover_art.png).
- To. Heart: replaced the small album cover with an official nine-member classroom promotional photograph from January 2018, `to-heart-official-group.jpg`. [Soompi's official teaser coverage](https://www.soompi.com/article/1106067wpp/idol-school-girl-group-fromis_9-kicks-off-debut-teasers-releasing-track-list). This image was published in the January 16 update.
- NOW TOMORROW.: added `now-tomorrow-official-poster.jpg` from the [official flover Japan announcement](https://fromis9.fanpla.jp/news/detail/48965), replacing a text-only presentation. The poster identifies the Seoul opening dates and the tour name.
- Retained the directly relevant first-win photograph, Unlock My World and From Our 20's covers, Glow ME concept photo, and TOMORROW GLOW. poster. Eight timeline images now render. Older replaced assets remain on disk and were not overwritten.

Manual factual review: existing data says NOW TOMORROW. opened on **8 August 2025**. The official flover Japan announcement and [Melon ticket notice](https://ticket.melon.com/csoon/detail.htm?csoonId=10474) instead list **9–10 August 2025**, also visible on the poster. The existing primary-source-based date is retained in this presentation-only change; this discrepancy needs a separate factual decision. The official Japan site also contains a Tokyo encore announcement for early 2026, so the existing claim that the tour ended in Seoul should be rechecked against its full schedule before a future factual update.

Typography/layout: preserved the alternating desktop / single-column mobile timeline and root SVG. Card headings use consistent 700 weight and 1.4–1.45 line height. Paragraphs retain 16px desktop / 15px mobile with 1.8 line height and 12px paragraph gaps. Desktop row gaps are 40px; mobile remains 32px. Photos no longer sit inside an extra padded frame, artwork retains a subtle surface, and posters remain centered with their entire image visible. Thai wording was simplified without adding milestones.

Changed files this pass: `src/pages/HistoryPage.tsx`, `src/pages/HistoryPage.module.css`, `src/components/history/HistoryTimeline.tsx`, `src/components/history/HistoryTimeline.module.css`, `src/data/history.ts`, `PROJECT_STATUS.md`, this document, and the three images listed above. No shared layout/CSS or unrelated pages changed.

Validation: typecheck and production build passed (118 modules). Browser checks passed at 320, 375, 390, 430, and 1440px: no horizontal overflow or page errors, eight images decoded successfully, 19 chronological milestones, zero citation links in main content, and no Former Members markup. Updated full-page screenshots are `history-clean-1440.png` and `history-clean-390.png` in the existing QA directory. Desktop/mobile debut-card and footer-area screenshots were visually inspected.

Current scope: the Former Members section is temporarily removed from `/history`. Its data, components, and four photos remain available for later use. Only the seven timeline images are rendered. The provenance notes below also document the retained assets from the initial implementation.

## Research scope

Reviewed on 14 September 2026. The primary factual source is [Kpop Wiki — fromis_9](https://kpop.fandom.com/wiki/Fromis_9). The normal page reader was blocked, so the complete current public article wikitext was read using Fandom's public `action=parse` API rather than relying on an older search preview.

The article supplies formation, debut, release history, management transitions, lineup changes, first win, and the former-member table. English prose was not copied: related events were grouped into 19 milestones with two concise Thai paragraphs each. Names of releases, songs, agencies, programs, and tours remain in their original forms. Former-member notes describe their historical contribution without speculating about departure reasons.

Additional factual verification was limited to:

- [Kpop Wiki — Glow Me](https://kpop.fandom.com/wiki/Glow_Me): verifies the second full album's 21 July 2026 release and Vitamin ME title track, beyond the main article's release listing.
- [Kpop Wiki — 2025 fromis_9 World Tour 'Now Tomorrow.'](https://kpop.fandom.com/wiki/2025_fromis_9_World_Tour_%27Now_Tomorrow.%27): verifies the first world tour's 8 August 2025 opening, locations, and early-2026 Seoul finale. The main page lists the tour but does not give those details.
- [Soompi — 2026 Asia Tour 'Tomorrow Glow'](https://www.soompi.com/article/1858411wpp/fromis_9-announces-2026-asia-tour-tomorrow-glow): linked by the main article; verifies the 29 July announcement and 11 September update naming Taipei, Tokyo, and Hong Kong. Those details are presented as announced plans, not a claim that all shows have occurred.

No conflicting facts were found among these sources during this pass. No backend or automatic fact updates were introduced.

## Milestones

`date` is the last relevant event/announcement in a grouped entry, not necessarily its earliest date. `dateLabel` displays the actual period. Entries are sorted oldest → newest without mutating source data; Current Chapter is derived from the maximum date.

| Date used for ordering | Milestone |
| --- | --- |
| 2017-09-29 | Idol School and formation |
| 2017-11-30 | fromis_9 name and Glass Shoes pre-debut |
| 2018-01-24 | To. Heart official debut |
| 2018-10-10 | To. Day, Off The Record, and full-team From.9 |
| 2019-06-04 | flover name and Fun Factory |
| 2020-09-16 | My Little Society and postponed Japanese plans |
| 2021-09-07 | Pledis transition, Talk & Talk, and first music-show win |
| 2022-06-27 | Midnight Guest and From Our Memento Box |
| 2022-07-31 | Gyuri's activities end; eight-member chapter |
| 2022-08-26 | Love From. first solo-concert announcement |
| 2023-06-05 | Unlock My World and official lightstick |
| 2024-08-12 | Supersonic |
| 2024-12-31 | From and end of Pledis contracts |
| 2025-03-26 | Five-member ASND chapter and trademark rights |
| 2025-06-25 | From Our 20's |
| 2025-08-08 | NOW TOMORROW. first world tour |
| 2026-04-01 | Like You Better (Japanese Ver.) debut |
| 2026-07-21 | Glow ME and Vitamin ME |
| 2026-09-11 | TOMORROW GLOW. Asia-tour announcement update |

Former members use the main article's table: Lee Saerom (이새롬, 2017–2024), Roh Jisun (노지선, 2017–2024), Lee Seoyeon (이서연, 2017–2024), and Jang Gyuri (장규리, 2017–2022). Former positions are adapted into Thai from that table. No former-member detail links/routes exist.

## Image research (separate from factual research)

All eleven files are local, new additions under `src/assets/images/History/`. Existing images were not overwritten. Sources and credits are centralized in `history.ts` / `formerMembers.ts` and linked beneath the images. The file pages were used to obtain public image URLs. Promotional photographs, album artwork, the first-win broadcast image, and an original tour announcement poster were chosen; no fan edits or generated historical imagery were used.

| Local file | Image source |
| --- | --- |
| formation-2017.png | [Pre-debut group profile](https://kpop.fandom.com/wiki/File:Fromis_9_group_profile_photo_(1).png) |
| to-heart-cover.png | [To. Heart digital artwork](https://kpop.fandom.com/wiki/File:Fromis_9_To._Heart_digital_album_cover.png) |
| talk-and-talk-first-win.png | [The Show first win](https://kpop.fandom.com/wiki/File:Fromis_9_first_music_show_win_(September_7,_2021).png) |
| unlock-my-world-cover.png | [Unlock My World digital artwork](https://kpop.fandom.com/wiki/File:Fromis_9_Unlock_My_World_digital_cover_album_art.png) |
| from-our-20s-cover.png | [From Our 20's digital artwork](https://kpop.fandom.com/wiki/File:Fromis_9_From_Our_20%27s_online_cover.png) |
| glow-me-concept.png | [Glow Me group concept photo](https://kpop.fandom.com/wiki/File:Fromis_9_Glow_Me_group_concept_photo_(2).png) |
| tomorrow-glow-tour.jpg | [Soompi: original Seoul-opening tour poster](https://www.soompi.com/article/1858411wpp/fromis_9-announces-2026-asia-tour-tomorrow-glow) |
| saerom-memento.png | [Saerom: From Our Memento Box concept](https://kpop.fandom.com/wiki/File:Fromis_9_Lee_Saerom_From_Our_Memento_Box_concept_photo_1.png) |
| jisun-memento.png | [Jisun: From Our Memento Box concept](https://kpop.fandom.com/wiki/File:Fromis_9_Roh_Jisun_From_Our_Memento_Box_concept_photo_3.png) |
| seoyeon-memento.png | [Seoyeon: From Our Memento Box concept](https://kpop.fandom.com/wiki/File:Fromis_9_Lee_Seoyeon_From_Our_Memento_Box_concept_photo_3.png) |
| gyuri-memento.png | [Gyuri: From Our Memento Box concept](https://kpop.fandom.com/wiki/File:Fromis_9_Jang_Gyuri_From_Our_Memento_Box_concept_photo_1.png) |

The tour image is the original announcement poster for the Seoul opening, not the later three-city update graphic. Its alt text identifies this correctly. Gyuri's source is landscape; its card uses a 35% horizontal focal position to preserve her face in the shared portrait treatment.

## Visual implementation

The [reference History page](https://www.fromisthfanclub.com/history) informed only the abstract growth metaphor. Its tree, artwork, color scheme, spacing, and card layout were not copied. This page uses the existing project's white/pink editorial system, Vitamin ME accents, Outfit typography, shared containers, header, navbar, footer, rainbow strip, and accessibility patterns.

- Desktop: central gradient stem, alternating branches, year nodes, content-driven cards.
- At 900px and below: single left stem and non-alternating cards; former-member grid becomes two columns.
- At 640px and below: simpler branches, compact dates and cards, single-column former-member cards, established mobile navigation/footer.
- Subtle node/branch hover and card lift only; reduced motion disables those transitions/transforms.

## Manual review before publication

- Design owner should approve the new History layout and Thai editorial phrasing.
- Kpop Wiki is editable community content; recheck latest facts and tour schedule when publishing.
- Asset selections are real but replaceable. Confirm preferred photos and the landscape Gyuri crop.
- Downloading/crediting copyrighted promotional material does not establish permission. Image reuse rights have not been cleared; review them before deployment. Some wiki file descriptions identify fair-use material rather than an open reuse license.
- No factual placeholders, former-member detail pages, deployment, or commits were added by this task.

## Files created / changed

Modified existing files:

- `src/app/App.tsx` — `/history` route.
- `src/components/layout/Navbar.tsx` — shared desktop/mobile History navigation.
- `src/components/layout/Footer.tsx` — History sitemap link.
- `src/components/editorial/PageHeaderDecoration.tsx` — History-only decoration variant.
- `PROJECT_STATUS.md` — History implementation/QA status.

Created source/document files:

- `src/types/history.ts`
- `src/data/history.ts`
- `src/data/formerMembers.ts`
- `src/pages/HistoryPage.tsx`
- `src/pages/HistoryPage.module.css`
- `src/components/history/HistoryTimeline.tsx`
- `src/components/history/HistoryTimeline.module.css`
- `src/components/cards/FormerMemberCard.tsx`
- `src/components/cards/FormerMemberCard.module.css`
- `docs/HISTORY_SOURCES.md`

Eleven new binary assets are listed individually in the image-source table above. No existing shared CSS, member/news/performance data, or `design.md` was changed.

## Initial implementation QA results

- `pnpm.cmd typecheck`: passed.
- `pnpm.cmd build`: passed (124 modules; no build warnings).
- Production `/history`: passed at 320, 375, 390, 430, 900, and 1440px. No horizontal overflow, page errors, broken images, or factual placeholders. All 19 entries remain chronological; exactly one Current Chapter and four former-member cards render.
- Mobile menu: History link opens the same route and closes the shared menu; active History state verified.
- Existing routes `/`, `/members`, `/members/hayoung`, `/performances`, `/news`, and `/news/fromis9-2026-asia-tour-tomorrow-glow-seoul`: checked at 390 and 1440px. Main-content screenshot dimensions matched the clean starting repository; pixel comparison found no differences at standard 0.1 tolerance (ignores tiny browser image-resampling differences). Navbar/Footer History links verified on each route.
- Reduced motion: timeline card transforms disabled.
- Data checks: unique milestone IDs, sorted/copied arrays, source immutability, empty-data safety, and future-entry selection verified with in-memory fixtures only.
- Full-page QA screenshots and test scripts are outside the repository in `C:/Users/lc670131/.codex/visualizations/2026/08/29/01a04bdd-3487-7e10-a356-8f56f0bcecc3/history-qa/` (`history-1440.png`, `history-390.png`). Top, Current Chapter, and former-member detail crops were also inspected.

## History refinement

### Uniform timeline image system

- All 19 milestones now have required images. Every image uses the same 16:9 cover frame, rounded corners, alignment, and responsive spacing. Per-image focal positions only adjust cropping, not frame geometry.
- Selection priority: official event/era image, official poster, official concept image, then official album cover. Sources are retained on each image record, without visible caption links.
- Newly illustrated milestones: formation, From.9, Fun Factory, My Little Society, From Our Memento Box, Gyuri lineup change, Love From concert, Supersonic, From/contracts, ASND five-member chapter, Japanese debut.
- Fallbacks: formation uses the pre-debut profile; Gyuri's departure uses her Memento Box concept image; the ASND chapter uses the later From Our 20's cover; contract-end context uses the From cover. Combined-era milestones use the relevant release image, not a photograph of every event in the entry.
- New local assets: from9-era.png, fun-factory-era.png, my-little-society-era.png, memento-box-wide.png (official concept photo 3), love-from-poster.png, supersonic-era.png, from-cover.png, japanese-debut-cover.png. Exact originating file URLs are recorded in src/data/history.ts.
- Validation: typecheck/build passed; all 19 images loaded with uniform ratios and no horizontal overflow at 320, 390, 430, and 1440px. Timeline facts and ordering are unchanged. Updated full-page captures: history-uniform-1440.png and history-uniform-390.png in the QA directory.
- Image rights still require publication review; these are official-origin images mirrored by the cited archives, not a grant of reuse permission.

- Removed the entire Former Members section and its page-specific layout CSS. Retained the data, reusable card, and images for later use; no assets were deleted.
- Moved the compact reference block to the right edge of the desktop rail, with right-aligned heading, copy, and links. On mobile it returns to left alignment. Source destinations and external-link attributes are unchanged.
- Kept the root SVG, stem, alternating desktop timeline, mobile single-line layout, images, colors, and Current Chapter logic.
- Increased paragraph type to 16px / 1.85 line height on desktop and 15px / 1.9 on mobile. Improved heading line height, metadata/captions, card padding, paragraph gaps, and bottom section spacing. No fixed card/page heights were introduced.
- Edited Thai wording for clarity without adding events, dates, or factual claims. All 19 milestone IDs, date values, categories, image references, and source URLs remain unchanged.
- Files changed in this refinement only: `src/pages/HistoryPage.tsx`, `src/pages/HistoryPage.module.css`, `src/components/history/HistoryTimeline.module.css`, `src/data/history.ts`, `PROJECT_STATUS.md`, and this report. Shared layout/styles and unrelated page/data files were not modified.
- Updated screenshots: `history-refined-1440.png` and `history-refined-390.png` in the QA folder above. Additional top, reference, Current Chapter, and footer-area crops document the refinements.
- Refinement validation: typecheck and production build passed (117 modules). At 320, 375, 390, 430, 900, and 1440px, all 19 dates remain chronological, exactly one Current Chapter renders, all seven timeline images load, and there is no horizontal overflow or Former Members markup. Reference alignment and rail-edge position were measured. Existing six-route main-content screenshots still match at 390/1440px with standard 0.1 pixel tolerance. Keyboard focus and reduced motion passed. A before/after SHA-256 audit confirmed that only the four History source files changed; all unrelated source files and assets remained identical.
