# fromis_9 Thailand — Design System Extraction

Source of truth: [Figma — Fromis_9 TH Project](https://www.figma.com/design/7lISR8yFfCMjN2qg35HyPR/Fromis_9-TH_Project?node-id=0-1&m=dev)

This document records the design currently present in Figma. It is an extraction, not a redesign, and it does not define or invent member data, editorial copy, or production content.

## Reading this document

- **Measured** means the value was read from the selected Figma layer or derived exactly from measured parent/child dimensions.
- **Observed** means the rule is visually present and repeated, but is not exposed as a named Figma token.
- **Inferred** is used only for responsive behavior because the file contains desktop frames only.
- When a value is described as approximate or unresolved, use the Figma layer itself rather than treating this document as authority for a new value.

## Inspected frames

The reviewed desktop set contains six pages at 1440px wide. Top-level page heights are measurements of the current Figma compositions, not implementation tokens; every page must grow naturally with content. The Member Profile Detail outer height remains content-driven after its Performance thumbnails were normalized to 16:9.

| Frame | Figma node | Measured size | Main sections |
| --- | --- | ---: | --- |
| Home | — | 1440 × 3715 | Navbar, Hero, Latest News, Members, Latest Release, rainbow strip, Footer |
| Members | — | 1440 × 2122 | Navbar, Members header, Members grid, rainbow strip, Footer |
| Member Profile Detail | — | 1440px wide; content-driven height | Navbar, member hero, profile information, featured performances, member navigation, rainbow strip, Footer |
| Performances | `91:11` | 1440 × 2863 | Navbar, page header, filters, featured performance, performance grid, load more, rainbow strip, Footer |
| News | `100:11` | 1440px wide; content-driven height | Navbar, page header, filters, featured news, news grid, load more, rainbow strip, Footer |
| News Detail | `103:13` | 1440 × 3851 in the current sample; content-driven in implementation | Navbar, article header, hero image, article body, related news, previous/next navigation, rainbow strip, Footer |

A separate Mobile Home frame now exists at `114:15` (390 × 4128). It is not a replacement for these desktop specifications and does not define mobile layouts for Members, Member Profile, Performances, News, or News Detail.

## Visual direction

The site is a bright, friendly fan-club editorial experience with a clean white base and concentrated bursts of color. The design balances energetic K-pop photography with a soft, rounded, approachable interface.

The Vitamin ME-inspired visual language is expressed through:

- fruit emoji and fruit-shaped or circular member markers;
- small playful confetti/fruit decorations around page headings and portraits;
- a saturated pink brand accent against white and near-black;
- pale pastel section backgrounds and a soft multicolor release-section gradient;
- a thin full-width rainbow spectrum strip immediately before the footer;
- rounded display typography, pill actions, circular controls, and rounded image corners;
- generous whitespace, simple grids, and restrained shadows rather than dense decoration.

Keep these motifs as accents. The primary structure is still a clean editorial grid; do not add new visual motifs, decorative systems, or colors that are not present in Figma.

### Desktop consistency review

Performances (`91:11`), News (`100:11`), and News Detail (`103:13`) are visually accepted as part of the existing system. They reuse the same 80px Navbar, Outfit hierarchy, pink active/action color, restrained vitamin decoration, rounded image/card language, 1280px editorial rail, 24px card gaps, rainbow strip, and dark Footer seen in Home, Members, and Member Profile.

Performances and News intentionally form a sibling pair: centered page introduction, filter pills, one large featured editorial card, centered gallery heading, three-column content grid, and a compact load-more action. News Detail shifts to a reading layout while retaining the same shell, typography, metadata treatment, related cards, and footer transition. No new global visual tokens are required for these pages.

Minor Figma construction differences are resolved later in this document as implementation rules: use the canonical flexible three-column rail instead of the 402px Performances card width, and reuse the Home Footer instead of preserving the 362px Footer copies in the new frames.

## Color palette

The following values were read from Figma selection colors. Some near-duplicate colors are retained because the current file uses both.

| Role | Value | Usage in the current design |
| --- | --- | --- |
| Brand pink | `#FF5E85` | Active navigation, eyebrows, dates, links, primary CTAs, play icon, hover CTA |
| Primary ink | `#111113` | Headings, card titles, body emphasis, inline links |
| Footer ink | `#111218` | Footer background |
| Secondary text | `#4E4F59` | Supporting copy |
| Muted text | `#797B89` | Metadata and low-emphasis copy |
| Muted text alternate | `#8D8E9A` | Additional metadata/secondary labels |
| Primary border | `#E9EAF0` | Navbar divider, card strokes, profile row dividers, member navigation |
| Border alternate | `#E4E5EC` | Secondary subtle borders/surfaces |
| White | `#FFFFFF` | Main canvas, cards, inverse text |
| Soft surface | `#FAFAFC` | Latest News background and Member Detail hero background |
| Pale yellow | `#FFFFE5` | Circular performance play control and warm highlight surfaces |
| Cyan accent | `#29BDE3` | Playful Members-page decoration |
| Green action | `#5EFF79` | Spotify action in Latest Release |
| Red action | `#FF0707` | YouTube action in Latest Release |
| Orange accent | `#FF9A52` | Release badge/accent |
| Black overlay | `#000000` with opacity | Image dimming/contrast overlays; opacity is not consistently tokenized |

The rainbow strip uses a continuous pink → orange/yellow → green → cyan spectrum. Its exact gradient stops were not exposed as a named style; copy them from the Figma rectangle rather than approximating new stops.

### Color rules

- Pink is the only global brand/action color. Cyan, orange, green, red, and yellow are contextual accents.
- Use near-black for primary copy and the slightly different footer ink only where the Figma footer uses it.
- Keep full-page backgrounds white. Use `#FAFAFC` or the release gradient only for the sections shown with those treatments.
- Do not collapse the two border grays or the two ink colors until the design owner confirms whether the differences are intentional.

## Typography hierarchy
### Heading alignment

Heading alignment depends on context and must follow Figma:

- Home section headings: left-aligned
- Members page hero/header: centered
- Member Detail "Profile": centered
- Member Detail "Featured Performances": left-aligned
- Performances and News page headers: centered
- Performances "All Performances" and News "Latest News": centered
- News Detail article header and "Related News": centered; article prose and in-article headings: left-aligned

Do not globally center SectionHeading components.
The reusable SectionHeading component should support alignment variants.

### Typeface

The inspected text layers use **Outfit**. Maintain Outfit across navigation, display headings, cards, metadata, and buttons. The rounded geometry of Outfit is a major part of the visual character.

### Confirmed text settings

| Role | Figma setting |
| --- | --- |
| Section heading, e.g. Featured Performances | Outfit Bold, 32px, auto line height, 0% letter spacing |
| Performance card title | Outfit Bold, 18px, 130% line height, 0% letter spacing |

### Observed hierarchy

The remaining hierarchy is visually consistent but was not exposed as a complete named text-style scale. Treat these as role/scale ranges and read the exact text layer before implementation.

| Role | Observed treatment |
| --- | --- |
| Hero display | Approximately 48–64px, Bold, high-contrast white, compact multiline measure |
| Page/member display title | Approximately 40–56px, Bold, primary ink |
| Section title | 32px Bold where measured; alignment follows the specific Figma context |
| Card/member title | Approximately 18–24px, Bold |
| Body | Approximately 14–16px, Regular/Medium, 1.5-ish line-height visually |
| Navigation/button | Approximately 14–16px, Medium/Bold |
| Eyebrow/metadata | Approximately 12–18px, Bold; commonly pink and sometimes uppercase |
| Secondary member data | Approximately 14–16px, Regular/Medium, muted gray |

Typography is generally left-aligned inside cards and profile content.
Section-heading alignment is context-dependent and must follow the
Heading alignment rules above. Pink uppercase eyebrows often pair
with a short horizontal rule. Avoid introducing serif or condensed
display faces.

## Layout and grid system

### Desktop rails

- Desktop artboard: **1440px** wide.
- Primary content rail: **1280px** wide.
- Standard desktop outer margin: **80px** on each side.
- Standard three-column card gap: **24px**.
- The performance row confirms the grid mathematically: three **410.67px** cards plus two **24px** gaps fill the 1280px rail.
- Most sections use horizontal Auto Layout and vertical stacks.
  Some Member Profile Detail sections use freeform positioning in Figma,
  but the frontend implementation should remain content-driven and must
  not rely on fixed page heights.

### Page height rule

Top-level page height must be content-driven.
Do not hard-code the Member Profile Detail, Performances, News, or News Detail page height.
The page expands naturally based on its sections.

### Column patterns

- News and featured performances: three equal columns.
- Performances and News listing grids: three equal flexible columns that fill the 1280px rail with 24px gaps.
- Performances and News featured stories: a single two-column editorial card within the 1280px rail, with media on the left and copy/actions on the right.
- News Detail: a full-rail hero followed by a narrower centered reading column; related news returns to the three-column 1280px grid.
- Members: three cards on the first row and two cards centered on the second row.
- Latest Release: two-column white panel, image/media on the left and release details/actions on the right.
- Member hero: two columns, 4:5 portrait on the left and biography/stat content on the right.
- Profile information: two equal columns of label/value rows.
- Footer: three upper columns followed by a divider and a full-width legal row.

Do not stretch content past the 1280px rail on desktop. Full-bleed color, hero imagery, the rainbow strip, navbar, and footer may span the full 1440px frame.

## Section spacing

Padding is listed as left / top / right / bottom. These are measured values from the current desktop frames.

### Home

| Section | Measured height | Padding | Internal gap/notes |
| --- | ---: | --- | --- |
| Navbar | 80px | 80 / 0 / 80 / 0 | Horizontal space-between, vertically centered |
| Hero | 657px | Content begins on the 80px rail | Full-bleed image and contrast gradient |
| Latest News | 719px | 80 / 72 / 80 / 61 | 48px section stack gap; `#FAFAFC` surface |
| Members | 1301px | 80 / 59 / 80 / 96 | 64px section stack gap; white surface |
| Latest Release | 577px | 80 / 35 / 80 / 96 | 15px section stack gap; pastel gradient surface |
| Rainbow strip | 25px | Full bleed | Separate rectangle before Footer |
| Footer | 356px | 80 / 24 / 80 / 48 | Dark surface |

### Members

| Section | Measured height | Padding | Internal gap/notes |
| --- | ---: | --- | --- |
| Navbar | 80px | Same visual rule as Home | Active item changes to Members |
| Members header | 315px | 96 / 64 / 96 / 64 | 16px heading stack gap; centered decoration |
| Members grid | 1340px | 80 / 24 / 80 / 120 | 64px row/section gap |
| Rainbow strip | 25px | Full bleed | Separate rectangle before Footer |
| Footer | Follow Home canonical Footer | 80 / 24 / 80 / 48 | Reuse the Home Footer structure and spacing |

### Member Profile Detail

| Section | Measured height | Padding | Internal gap/notes |
| --- | ---: | --- | --- |
| Navbar | 80px | Same 80px desktop rails | Lowercase layer name in this frame |
| Member hero | 780px | 80 / 80 / 80 / 80 | Two-column layout; `#FAFAFC` surface |
| Profile information | 431px | 80 / 27 / 80 / 0 | 53px main gap |
| Featured performances | Content-driven | 80 / 51 / 80 / 96 | 40px section gap; expands with the 16:9 cards |
| Performance row | Content-driven | Inside 1280px rail | Three columns, 24px gap; height follows card content |
| Member navigation | 111px | 80 / 16 / 80 / 16 | Horizontal previous/next arrangement; 1px border |
| Rainbow strip | 25px | Full bleed | Separate rectangle before Footer |
| Footer | Follow Home canonical Footer | 80 / 24 / 80 / 48 | Reuse the Home Footer structure and spacing |

Use the measured section values to reproduce the desktop composition. For Featured Performances, rely on Auto Layout/Hug sizing rather than the previous fixed parent heights; the section now expands around the 16:9 thumbnails. Do not normalize other off-scale values without design approval.

### Performances

Figma frame: `performances-page` (`91:11`).

| Section | Measured height | Padding / geometry | Internal gap/notes |
| --- | ---: | --- | --- |
| Navbar | 80px | 80px desktop rails | Performances is the active pink route |
| Page header | 311px | Full-width wrapper; content centered | Eyebrow with short rules, display title, subtitle, restrained vitamin decorations |
| Filter bar | 86px | Centered, content-sized pills | Current pills are 38px high; active filter is pink |
| Featured performance | 508px wrapper | 80px outer rails | Featured card is 1280 × 444 with 32px inner inset; media is 680 × 380 and copy is 488px wide |
| All Performances heading | 124px | Full-width centered heading | Eyebrow and short horizontal rules repeat the page-header language |
| Performance grid | Content-driven; 1225px in the current sample | 80px outer rails | Three rows in the sample; 24px column gap and 48px row gap |
| Load more | 142px wrapper | Centered control | Current button is 263 × 46; keep it content-sized |
| Rainbow strip | 25px | Full bleed | Separate rectangle before Footer |
| Footer | Source frame is 362px; follow Home canonical Footer | 80 / 24 / 80 / 48 | Reuse the Home Footer structure and spacing |

The Figma listing cards in this page currently measure 402 × 355px inside a 1280px row. Three 402px cards plus two 24px gaps leave 26px unused at the row end. Treat this as a construction artifact rather than a new grid token: implementation must use three equal flexible columns across the full 1280px rail (approximately 410.67px each) with 24px gaps. Card and section heights remain content-driven, and thumbnails remain 16:9.

### News

Figma frame: `news-page` (`100:11`).

| Section | Sizing rule | Padding / geometry | Internal gap/notes |
| --- | --- | --- | --- |
| Navbar | 80px | 80px desktop rails | News is the active pink route |
| Page header | Follow the Performances header pattern | Full-width wrapper; content centered | Eyebrow, title, subtitle, and restrained decorations use the same visual system |
| Filter bar | Content-driven | Centered, content-sized pills | Same 38px-high pill treatment; active filter is pink |
| Featured news | Content-driven | 80px outer rails; one 1280px editorial card | Two-column media/copy treatment with pink metadata and a compact pill CTA |
| Latest News heading | Content-driven | Full-width centered heading | Eyebrow/rule treatment matches Performances |
| News grid | Content-driven | 80px outer rails | Three equal flexible columns with 24px gaps; current sample uses three rows |
| Load more | Content-driven wrapper | Centered control | Keep the button content-sized, not full-width |
| Rainbow strip | 25px | Full bleed | Separate rectangle before Footer |
| Footer | Follow Home canonical Footer | 80 / 24 / 80 / 48 | Do not preserve a page-specific footer variant |

News titles and summaries must be allowed to wrap. Rows may align visually, but card height must not be fixed in a way that clips longer editorial or localized content.

### News Detail

Figma frame: `news-detail-page` (`103:13`).

| Section | Measured/sizing rule | Padding / geometry | Internal gap/notes |
| --- | --- | --- | --- |
| Navbar | 80px | 80px desktop rails | News remains the active pink route |
| Article header | Content-driven | Centered within the desktop rail | Category/date metadata, multiline headline, and supporting deck are centered |
| Hero image | Content-driven media block | 80px outer rails | Wide rounded editorial image; preserve its crop and do not stretch it |
| Main article body | Content-driven | Narrow centered reading column | Left-aligned prose, in-article headings, image/caption blocks, and a pale-pink callout |
| Related news | Content-driven | 80px outer rails | Centered heading followed by three cards with 24px gaps |
| Related news cards | 462px in the current sample; content-driven in implementation | Current measured width is 411px with 24px gaps (rounding across the rail) | 240px media in the sample; title, summary, and link must grow naturally |
| Previous/next navigation | 153px in the current sample | 80px outer rails; two 500px text areas aligned to opposite sides | Keep labels and titles readable; do not truncate by fixing the overall page height |
| Rainbow strip | 25px | Full bleed | Starts after the article/navigation content, never at a fixed page Y position |
| Footer | Source frame is 362px; follow Home canonical Footer | 80 / 24 / 80 / 48 | Reuse the Home Footer structure and spacing |

The current Figma sample is 3851px tall, but that number records this article only. Article length, embedded media, related-card copy, and navigation titles determine the final page height.

## Border radius and elevation

- **16px** is the confirmed radius on performance cards and is the dominant large-card treatment.
- Member portraits, news images/cards, the release panel, and profile portrait visually use a **12–16px** rounded range; read each Figma layer before implementation because a single named radius token is not present.
- Pill buttons and chips use a fully rounded radius (implementation equivalent of `999px`).
- Avatar, badge, and play controls are circular.
- Performance cards use a 1px inside border plus a subtle drop shadow.
- News cards also use restrained elevation; member cards are primarily image-and-type compositions without a heavy outer card surface.
- Avoid strong shadows, thick borders, or sharp rectangular controls.

## Buttons and links

### Button patterns

- **Primary brand pill:** pink fill, white Bold label, optional arrow/icon.
- **Secondary hero pill:** high-contrast light/transparent treatment over the hero image with an outline.
- **Context action pills:** green for Spotify and red for YouTube only in the Latest Release context.
- **Hover CTA pill:** pink pill centered over a dimmed member portrait.
- **Circular media control:** pale-yellow circle with a pink play triangle.
- **Inline arrow link:** text-only Bold label with a right arrow; used in news, member, and performance cards.

Buttons are compact and content-sized rather than full-width on desktop. Preserve clear horizontal padding and the pill silhouette. The Figma file does not define disabled, loading, keyboard-focus, or complete pressed states.

## Card patterns

### News card

- Three-up within the 1280px rail, with 24px gaps.
- White card on the `#FAFAFC` section background.
- Wide editorial thumbnail, visually close to **16:9**, using `cover` cropping.
- Rounded image/card corners and subtle border/shadow.
- Content stack: pink date/meta, dark Bold title, muted summary, inline arrow link.
- Keep title and summary lengths flexible; no fixed production content is defined here.
- On the News page and in News Detail related content, use equal flexible grid columns rather than copying 411px rounding values as fixed CSS widths.

### Member card

- Image-first composition; the outer card does not need a strong white panel or shadow.
- Portrait image uses a consistent **4:5** ratio.
- Home uses a more compact portrait treatment (visually about 300 × 375); the Members page uses a larger treatment (visually about 360 × 450).
- Secondary line/date is muted.
- A circular fruit badge sits near the portrait's top-right corner.
- Members-page card includes a pink inline `View Profile` arrow link.
- The explicit hover example dims the portrait and centers a pink `View Profile` pill. Treat this as the interactive state of the same card, not a different content variant.
- Layout is three cards on row one and two centered cards on row two. The observed second row is symmetric within the content area.

### Member card alignment

MemberCard has two presentation contexts:

- Home MemberCard:
  compact presentation with centered member identity.

- Members Page MemberCard:
  larger 4:5 portrait with member name, secondary metadata,
  and View Profile link left-aligned below the portrait.

Both should reuse the same underlying MemberCard component
with layout/presentation variants rather than separate components.

### Performance card

- Measured desktop width: **410.67px**. The outer height is content-driven by Auto Layout after the thumbnail update; do not hard-code the previous height.
- 16px radius, clipped content, white fill, 1px inside `#E9EAF0` stroke, subtle drop shadow.
- Measured thumbnail container: **410.67 × 231px**, ratio **16:9**.
- Thumbnail uses a `FILL`/cover image crop and a centered circular play control. Do not stretch the source image.
- Content area uses **24px** padding and a **16px** vertical stack gap.
- Content order: pink date/meta, dark Bold title, inline `Watch Performance` arrow link.
- Performance title is Outfit Bold 18px with 130% line height.
- The Performances page source frame contains a 402px listing-card construction, but this does not replace the canonical 1280px / three-column / 24px-gap rule. Use flexible columns and preserve 16:9 media.

### Performance Card sizing

PerformanceCard width follows the desktop grid.
Thumbnail must use aspect-ratio: 16 / 9.
Card height is content-driven and must not be hard-coded.
Text content may increase card height naturally.

### Featured editorial card

Performances and News share a page-level featured-card pattern:

- one white rounded panel within the 1280px desktop rail;
- large rounded media on the left and a vertically centered information stack on the right;
- category/date metadata above a large dark headline;
- muted supporting copy followed by a compact pink primary pill;
- generous inner padding and no heavy elevation;
- media uses `cover` without stretching, while the copy column and outer card grow when text wraps.

The Performances frame measures the panel at 1280 × 444px with a 32px inset, a 680 × 380px media area, a 488px copy column, and a 48px space between the media and copy. News repeats the same visual proportion. Treat height as content-driven despite the measured sample.

### News Detail article

- Article metadata, headline, and deck form a centered header; long headlines may wrap to multiple lines.
- The lead image spans the primary desktop rail and uses the same rounded editorial image language as the cards.
- Long-form copy uses a narrower centered reading measure with left-aligned paragraphs and headings.
- A pale-pink callout is an editorial emphasis block, not a new global surface color.
- In-article media and captions remain inside the reading flow and increase page height naturally.
- Related News reuses `NewsCard` in the canonical three-column rail.
- Previous/next article links are a paired navigation pattern with the next item right-aligned.

### Latest Release panel

- White rounded panel inside a soft pastel-gradient section.
- Two-column desktop composition: near-square album/package image on the left; metadata, title, supporting copy, and action pills on the right.
- Small orange release chip/date treatment.
- Spotify and YouTube retain their contextual green and red fills.
- Preserve generous whitespace and do not add extra release metadata that is not supplied by content/data sources.

### Profile information rows

- Two equal desktop columns.
- Each column contains label/value rows divided by thin `#E9EAF0` rules.
- Labels are lower emphasis; values use darker, stronger type.
- Rows align to a consistent baseline and should tolerate longer localized values.

## Navbar rules

- Measured size: **1440 × 80px**.
- Horizontal padding: **80px**.
- White fill with a **1px inside `#E9EAF0`** bottom/outer divider treatment.
- Three horizontal groups: brand lockup, primary routes, social actions.
- Brand lockup uses dark `fromis_9`, pink `Thailand`, and a small fan-club descriptor.
- Navigation contains Home, Members, Performances, and News in the current design.
- Exactly one route is pink to show the active page; inactive routes use primary ink.
- Social icons sit at the far right and use the same optical weight.
- No sticky behavior, compact mobile navbar, menu icon, or expanded mobile menu is defined in Figma.

## Footer rules

- The **Home page Footer is the canonical source** for every page.
- Full-width near-black surface (`#111218`).
- A separate **25px** rainbow strip sits immediately above it; the strip is not part of the Footer layer.
- Canonical desktop height: **356px**.
- Canonical desktop padding: **80px horizontal, 24px top, 48px bottom**.
- Upper content is split into brand/description, sitemap, and social columns.
- A thin low-contrast divider separates the upper columns from the legal row.
- Primary footer copy is white; supporting copy is muted against the dark surface; pink remains the accent.
- Members, Member Profile Detail, and future pages must reuse the Home Footer component rather than preserve their existing measured variants.

## Image aspect ratios and crop behavior

| Image role | Ratio/treatment |
| --- | --- |
| Home hero | Full-bleed 1440 × 657 section, approximately 2.19:1; image covers the section beneath a contrast gradient |
| News thumbnail | Observed near 16:9, cover crop |
| Featured Performance media | Measured 680 × 380, approximately 16:9, cover crop |
| Featured News media | Follow the same wide editorial/approximately 16:9 treatment, cover crop |
| News Detail hero | Wide image within the 1280px rail; preserve the Figma crop and rounded corners |
| News Detail in-article media | Preserve the supplied image ratio within the narrower reading column; do not stretch |
| Member card portrait | 4:5, cover crop |
| Member profile portrait | 4:5, visually about 480 × 600 on desktop, cover crop |
| Latest Release image | Observed square or near-square product/album presentation |
| Performance thumbnail | Measured 410.67 × 231, 16:9, cover crop |
| Footer/member navigation avatar | Circle (1:1 source cropped to a circle) |

Keep focal points centered or intentionally positioned so faces and products survive responsive crops. Do not stretch imagery.

## Reusable component patterns

These are repeated UI patterns that should become reusable implementation components without altering the Figma appearance:

- `SiteShell` / desktop content rail
- `Navbar` with active-route state
- `Footer`
- `RainbowVitaminStrip`
- `SectionHeading` with optional eyebrow, short rule, subtitle, and decorative marks
- `EditorialPageHeader` for the centered Performances and News introductions
- `PillFilterBar` with active-filter state
- `FeaturedEditorialCard` with Performance and News content variants
- `LoadMoreButton`

### SectionHeading variants
- align: left | center
- eyebrow: optional
- rule: optional
- subtitle: optional
- decoration: optional

- `PillButton` with primary, secondary, contextual-service, and overlay variants
- `InlineArrowLink`
- `CircularMediaButton`
- `NewsCard`
- `MemberCard` with default and hover states
- `FruitBadge` / decorative fruit mark
- `PerformanceCard`
- `LatestReleasePanel`
- `ProfileInfoGrid` and `ProfileInfoRow`
- `MemberNavigation` with previous/next variants
- `ArticleHeader`
- `ArticleBody` with prose, heading, callout, media, and caption blocks
- `RelatedNewsSection`
- `ArticleNavigation` with previous/next variants

Major page sections and reusable UI structures use semantic layer names.
Some deeply nested layout frames may remain generic, but they should not
determine component architecture.

## Responsive and mobile status

The current update documents the desktop pages only. A dedicated Mobile Home frame now exists at `114:15` (390 × 4128), so the former statement that the file contains no mobile design is no longer accurate. That frame is a separate mobile composition and must not alter the 1440px desktop specifications above.

### Concrete Mobile Home reference

Mobile Home currently establishes a 390px frame, 20px side rails, a 56px navbar with visible logo and hamburger icon, stacked 350px-wide news cards, a two-column member grid, a stacked 350px release composition, a 20px rainbow strip, and a vertically stacked footer. Its closed navbar is designed, but the expanded menu state is not.

This update did not perform a full mobile extraction or approve those values as cross-page tokens. Members, Member Profile, Performances, News, News Detail, tablet layouts, and the expanded mobile menu remain separate/deferred design work.

### Deferred responsive guidance

The following notes remain future structural guidance for pages without dedicated mobile frames. They do not establish new breakpoints or authorize a mobile redesign during the current desktop phase.

- Keep a fluid container capped at 1280px and reduce the 80px side padding as the viewport narrows.
- Change three-column news/member/performance layouts to two columns and then one column when the cards can no longer preserve their intended width and gaps.
- Keep the two-card final member row centered at widths that still support the desktop grid; let it follow the standard responsive grid below that point.
- Stack Member Detail hero columns with the 4:5 portrait before the biography content.
- Stack the two Profile Information columns into one continuous list while preserving row dividers.
- Stack or wrap the Latest Release media/content columns and allow the service action pills to wrap.
- Preserve 4:5 member imagery and the 16:9 Performance thumbnail crop.
- Allow card titles and metadata to wrap; do not hard-code heights that clip localized or longer content.
- Footer columns should collapse into a readable vertical stack while keeping the legal row distinct.
- Member previous/next navigation may need a stacked or compressed arrangement; Figma does not define which.
- Maintain touch targets and visible keyboard focus when states are designed; these states are not supplied in the desktop file.

## Inconsistencies and deferred decisions

1. **Desktop rails differ in the Members header.** The main site rail is 80px/1280px, while `Members_header` uses 96px horizontal padding. This may be intentional for centered decoration, but it breaks the otherwise consistent rail.
2. **Spacing does not resolve to one scale.** Common values such as 16, 24, 40, 48, 64, 80, 96, and 120 coexist with one-off values such as 15, 27, 35, 51, 59, and 61. No named spacing token set is visible.
3. **Near-duplicate neutral colors lack explicit roles.** `#111113` vs `#111218`, `#E9EAF0` vs `#E4E5EC`, and multiple muted grays are all used without clearly named semantic tokens.
4. **Typography is applied directly rather than documented as a complete scale.** Outfit is confirmed, as are selected 32px and 18px Bold roles, but a full named type-style system is not evident from the inspected layers.
5. **Interaction states are incomplete.** One MemberCard hover treatment is shown, but corresponding focus, pressed, disabled, loading, and complete hover states for other controls are not defined.
6. **Mobile coverage is partial.** Mobile Home exists at `114:15`, but the expanded navigation, tablet behavior, and mobile versions of the other five page types are not defined.
7. **The Performances listing grid has a construction discrepancy.** Its current 402px cards and two 24px gaps occupy 1254px of a 1280px row. Preserve the canonical 1280px rail with three equal flexible columns and 24px gaps unless the design owner explicitly approves the trailing 26px.
8. **New-page Footer frames measure 362px while Home remains the 356px canonical Footer.** Reuse Home rather than creating another Footer variant.
9. **The News frame contains a layer named `Featured Performance Section`.** Its content and role are Featured News; treat the name as a semantic layer-label error, not a shared content type.

The former Performance ratio conflict remains resolved: Member Detail uses 410.67 × 231px thumbnails, and the Performances listing frame uses 402 × 226px thumbnails. Both are 16:9 with cover cropping; width follows the applicable flexible grid rather than becoming a new fixed token.

The Footer variant question is also resolved:
Home is the canonical Footer.

Member Profile Detail, Performances, News, and News Detail page heights, along with PerformanceCard and editorial card heights, are content-driven and must not be hard-coded.

Mobile Home's closed navbar is present in Figma. The expanded menu and compact navigation behavior for other pages remain deferred until dedicated mobile designs are added.

All remaining extracted rules should remain visually faithful
to the current desktop Figma frames.
