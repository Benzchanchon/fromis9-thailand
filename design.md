# fromis_9 Thailand — Design System Extraction

Source of truth: [Figma — Fromis_9 TH Project](https://www.figma.com/design/7lISR8yFfCMjN2qg35HyPR/Fromis_9-TH_Project?node-id=0-1&m=dev)

This document records the design currently present in Figma. It is an extraction, not a redesign, and it does not define or invent member data, editorial copy, or production content.

## Reading this document

- **Measured** means the value was read from the selected Figma layer or derived exactly from measured parent/child dimensions.
- **Observed** means the rule is visually present and repeated, but is not exposed as a named Figma token.
- **Inferred** is used only for responsive behavior because the file contains desktop frames only.
- When a value is described as approximate or unresolved, use the Figma layer itself rather than treating this document as authority for a new value.

## Inspected frames

All three supplied designs are desktop frames at 1440px wide. The Member Profile Detail outer height should be treated as content-driven after the Performance thumbnails were normalized to 16:9; its updated top-level height was not remeasured as a fixed token.

| Frame | Measured size | Main sections |
| --- | ---: | --- |
| Home | 1440 × 3715 | Navbar, Hero, Latest News, Members, Latest Release, rainbow strip, Footer |
| Members | 1440 × 2122 | Navbar, Members header, Members grid, rainbow strip, Footer |
| Member Profile Detail | 1440px wide; content-driven height | Navbar, member hero, profile information, featured performances, member navigation, rainbow strip, Footer |

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
Do not hard-code the Member Profile Detail page height.
The page expands naturally based on its sections.

### Column patterns

- News and featured performances: three equal columns.
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

### Performance Card sizing

PerformanceCard width follows the desktop grid.
Thumbnail must use aspect-ratio: 16 / 9.
Card height is content-driven and must not be hard-coded.
Text content may increase card height naturally.

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

Major page sections and reusable UI structures use semantic layer names.
Some deeply nested layout frames may remain generic, but they should not
determine component architecture.

## Responsive considerations (inferred from desktop only)

No tablet or mobile frames are present, so the following describe structural behavior only. They do not establish new breakpoints or a mobile redesign.

### Mobile navigation

Mobile and compact navigation are intentionally deferred.
Do not invent a hamburger menu or mobile navigation during
the current desktop implementation phase.

Responsive/mobile behavior will be implemented after
dedicated mobile designs are added to Figma.

The following responsive notes are future implementation guidance only.
Do not implement these transformations during the current desktop-only phase.

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
6. **Responsive behavior is intentionally deferred.**
There are no tablet/mobile frames yet. Responsive and mobile implementation
must wait for dedicated Figma designs and should not be invented during
the current desktop-only phase.

The former Performance ratio conflict is resolved in Figma:
all three thumbnails use 16:9 containers at 410.67 × 231px
with cover cropping.

The Footer variant question is also resolved:
Home is the canonical Footer.

Member Profile Detail page height and PerformanceCard height
are content-driven and must not be hard-coded.

Mobile and compact navigation are intentionally deferred until
dedicated mobile designs are added to Figma.

All remaining extracted rules should remain visually faithful
to the current desktop Figma frames.
