# Project state

Updated: **2026-10-10** (owner reference date, America/Buenos_Aires).

## Verified state at the end of Iteration 0

- Directory: `C:\dev\personal\portfolio-hernan`.
- Repository: `hernan-go/portfolio-hernan`; `origin`: `https://github.com/hernan-go/portfolio-hernan.git`.
- Branch: `main`; local tracking reference: `origin/main`.
- Initial state: clean working tree. The closing snapshot, **before the first documentation commit**, contained six new untracked Markdown files awaiting review, with no changes to previously tracked files, staging, commits or branch changes. This records the end of Iteration 0; it is not a permanent statement of the current Git state or confirmation that a documentation commit exists.
- **Verify Git status again at the start of every iteration.**
- No fetch was performed. The current GitHub state and remote synchronization have not been verified.
- Product: completed and published portfolio; includes Hero, eight Work cases, three LAB projects, Profile, Contact and NotFound. The previous audit checked navigation and selected production interactions; it did not certify all functionality.
- PRISMA CRM has not been added to LAB. The `prisma` Work case is the institutional WordPress website.

## Activity and authorization

Previous activity: comprehensive code and production audit, preserved in full in [AUDIT-2026-10-10.md](AUDIT-2026-10-10.md). No P0 issues were identified within the audited scope; ESLint and TypeScript passed without emitting files or caching. These results belong to the historical audit; H1–H5 implementation checks are recorded separately below. H12 was confirmed during H4 verification and is an independent finding outside the historical H1–H11 report.

Iteration 0 — structural documentation: only `AGENTS.md` and the five requested Markdown documents in `docs/` were created. Consistency, paths, new content, Git state and the absence of functional changes were checked. No builds were run in that phase and production was not changed.

Current iteration: **1 — H5 documentary closure**. H1 began on `main`, with documentation commit `70a7828` as HEAD and a clean working tree. The owner authorized H1 implementation exclusively in `src/sections/Contact.tsx`, then approved the result after visually reviewing Contact at 320 px: complete links and values are visible, text wraps correctly and the tree's aesthetic is preserved. H1 implementation and documentation are incorporated in commit `fb064c8`.

H1 is **implemented and validated for the original clipping problem at 320 px**. The change adds an explicit mobile grid column and `min-w-0` on the tree, allows the paragraph to use the remaining row width and wrap, keeps each label with its separator, and applies `overflow-wrap: anywhere` to long values. Font sizes, icons, connectors, colors, contact text, link destinations and functionality were preserved.

Checks performed during H1 implementation:

- ESLint: `eslint . --no-cache`, without autofix; passed.
- Application and configuration TypeScript: `tsc -p tsconfig.app.json --noEmit --incremental false` and `tsc -p tsconfig.node.json --noEmit --incremental false`; both passed.
- Local browser measurements and screenshot review at 320, 390, 768, 1024 and 1440 px, compared with baseline commit `70a7828`. At 320 px, Contact's internal width decreased from 336 to 305 px, matching its usable width. Original text geometry at the other four widths was unchanged.
- Long email/profile values and a simulation of the contact rows' text at 200% were checked at those five widths using temporary in-memory variants. At 320 px, values remained within the available width. Icons and connectors retained matching vertical centers in multiline rows.
- Keyboard navigation and visible focus were checked at 320 px; contact link destinations were inspected and preserved. This did not verify delivery through external contact services.
- `git diff --check` passed. The local preview was compiled and served in memory with output writing disabled; no build artifacts were generated. No deployment occurred.

The text enlargement check was a targeted simulation, not real browser zoom or a cross-browser certification. Manual verification with real zoom and other browsers remains pending.

### H2 — Non-modal transcript panel

H2 analysis and implementation began on `main`, with `fb064c8` as HEAD and a clean working tree. The owner authorized changes only to transcript behavior in `PhoneMockup`, within `src/sections/Contact.tsx`, and subsequently reviewed and approved the implementation technically. H2 is **implemented and validated within the checked scope**.

The transcript now uses a titled non-modal region instead of dialog/modal semantics. Its trigger exposes `aria-expanded` and sets `aria-controls` only while the referenced panel is mounted. A layout effect focuses the title after opening and restores focus to the trigger after closing, once the committed DOM has removed local `inert`. Close and Escape inside the panel dismiss it; Tab and Shift+Tab remain unrestricted. The scrollable text is keyboard-focusable. Only the covered conversation subtree is inert, leaving Contact and the rest of the portfolio interactive.

Checks performed during H2 implementation:

- Click, Enter and Space opening; initial title focus; Close and Escape dismissal; trigger focus restoration; and repeated opening/closing cycles passed in local browser tests.
- Forward and backward keyboard navigation left the panel normally without reaching covered controls. Escape outside the panel left it open. After closing, `inert` was removed and no dangling `aria-controls` reference remained.
- End/Home reached the bottom and returned to the top of the scrollable text in a temporary in-memory enlarged-text fixture at 320 px. This was a text-size simulation, not real browser zoom.
- Screenshot review and measurements at 320, 390, 768, 1024 and 1440 px confirmed title focus and no horizontal overflow in the transcript text. Functional tests ran in the local development application with React StrictMode enabled; no focus-cycle failure was observed.
- Audio remained playing before, during and after opening/closing, with advancing playback time and one mounted audio element. No playback pause or reset was observed.
- `eslint . --no-cache` without autofix, `tsc -p tsconfig.app.json --noEmit --incremental false` and `tsc -p tsconfig.node.json --noEmit --incremental false` all passed. `git diff --check` also passed.

There were no substantial visual changes: phone geometry, panel placement/dimensions, typography, colors, spacing, transcript text, buttons and animations were preserved. Focus indicators were added to the title and scrollable area. Browser focus may scroll as needed to reveal its target. H1 and the audio implementation were not changed.

**Pending verification limits:** no real screen reader was available; other browsers and real zoom were not tested. The browser/DOM checks and text-size simulation do not certify those behaviors or complete accessibility conformance.

H2 implementation and documentation are incorporated in commit `ebf1573`. H1 and H2 remain complete within their validated scopes; their pending verification limits remain open.

### H3 — Work CTA focus indicator

H3 implementation began on `main`, with `ebf1573` as HEAD and a clean working tree. The owner authorized changes only to the active CTA in `src/components/work/WorkProjectDetails.tsx`, then reviewed and approved the implementation. H3 is **implemented and validated within the checked scope**.

The original `clip-path` polygon, background, padding and color transition were moved from the interactive `<a>` to a single internal `<span>`. The anchor retains its link semantics, `href`, `target`, `rel` and one keyboard focus stop, with the existing `focus-visible` outline. The span has no interactive role, `tabIndex` or `aria-hidden`. Hover is coordinated through `group` and `group-hover`. The rectangular exterior focus indicator is now fully visible, without clipping by the anchor or its ancestors in the checked layouts.

Checks performed during H3 implementation:

- Tab and Shift+Tab confirmed the normal navigation order and a single focus stop, with real `:focus-visible` activation. Enter activated both "View repository" and "Visit Live" and opened their preserved destinations; GitHub redirected the repository destination to its sign-in page.
- Local browser measurements compared the original CTA from `ebf1573` with the corrected implementation at 320, 390, 768, 1024 and 1440 px. "View repository" remained 188.625 × 28 px at all five widths, with unchanged font size, line height and polygon coordinates. Screenshots confirmed the complete focus outline at those widths; clipping ancestors contained it.
- Visual comparison of normal and hover states confirmed the original shape, colors, typography and 200 ms background transition. Responsive composition was preserved. "Visit Live" was also checked for keyboard focus and activation; "Link pending" was unchanged in the diff but was not exercised at runtime.
- `eslint . --no-cache` without autofix, `tsc -p tsconfig.app.json --noEmit --incremental false` and `tsc -p tsconfig.node.json --noEmit --incremental false` all passed. `git diff --check` passed. These implementation checks were not rerun during documentary closure, except for `git diff --check`.

**Pending verification limits:** testing used the integrated browser. Other browsers, real browser zoom and a real screen reader were not tested; these results do not certify complete accessibility conformance.

H3 implementation and documentation are incorporated in commit `e3585fb`. H1, H2 and H3 remain complete within their checked scopes, with the pending verification limits above.

### H4 — Contrast of unselected Work project names

H4 analysis and implementation began on `main`, with `e3585fb` as HEAD and a clean working tree. The owner authorized only the unselected name color adjustment in `src/components/work/WorkPreviewGrid.tsx`, then technically and visually reviewed and approved the implementation, including the hierarchy between selected and unselected projects. H4 is **implemented and validated within the checked scope**.

The unselected `<h3>` replaces `text-neutral-500` with `text-[#B8B8B8]`, preserves `group-hover:text-neutral-200` and adds `group-focus-visible:text-neutral-200`. Selected names retain `text-neutral-100`; the pink selection underline remains. Typography, sizes, spacing, layout, logos, backgrounds and animations were preserved. The global gradient and grain texture were not changed. The separate mobile selector retains its original colors.

Checks performed during H4 implementation:

- Before/after screenshot review and geometry measurements against `e3585fb` at 320, 390, 640, 767, 768, 1024, 1279, 1280, 1440 and 1500 px covered mobile, tablet, desktop and breakpoint boundaries. Button positions/dimensions and label font sizes/line heights matched. Normal, hover, selected and keyboard-focus text states retained their visual hierarchy.
- Tab activated `:focus-visible` without simultaneous hover; Shift+Tab returned to the preceding selector. Enter and Space selected projects, with the selected label retaining `neutral-100`. Hover and keyboard focus use `neutral-200` on unselected names. These H4 text-state checks did not establish outline visibility; the independent outline correction is recorded under H12 below.
- `eslint . --no-cache` without autofix, `tsc -p tsconfig.app.json --noEmit --incremental false` and `tsc -p tsconfig.node.json --noEmit --incremental false` all passed. `git diff --check` passed. Documentary closure does not rerun the implementation tests; it checks document consistency, `git diff --check` and Git status.

Contrast evidence is separated by method:

| Method | Result and interpretation |
|---|---|
| Calculation from CSS colors using relative sRGB luminance | `#B8B8B8` against `#1b1b1b`: **8.68:1**, compared with **3.64:1** for the original `neutral-500`. This is a color-pair calculation, not a measurement of rendered glyphs. |
| Real screenshot sampling | Text-free background patches near labels at 768, 1024, 1279, 1280, 1440 and 1500 px contained grayscale values from **27 to 57** on the 0–255 scale, including the rendered gradient and grain. Samples were decoded from JPEG captures in memory; compression introduces imprecision and the samples are not an exhaustive pixel survey. |
| Conservative calculation based on those samples | Accounting for possible text attenuation by the grain overlay yields approximately **5.25:1** against the brightest sampled background. This is a modeled ratio based on measured background values, not a direct glyph contrast measurement. |
| Extreme texture simulation | Compositing white at 25% over both `#B8B8B8` and the lightest gradient endpoint, `#1b1b1b`, yields **4.61:1**. This conservative scenario does not assert that the actual grain reaches that extreme. |

**Pending verification limits:** tests used the integrated browser; other browsers, real browser zoom and a real screen reader were not tested. The calculations and sampled JPEG backgrounds do not certify every rendered pixel or complete accessibility conformance.

### H12 — Invisible keyboard focus outline in the Work project selector

**Priority: P1. Status: implemented and validated within the checked scope.** During H4 verification, keyboard focus matched `:focus-visible`, but the button's computed outline style remained `none` with a 2 px width. This reproduced in the original and corrected versions of `WorkPreviewGrid.tsx`; it is independent of H4 and was not introduced or corrected by the color adjustment.

The generated CSS confirms the original cause: `focus:outline-none` sets `--tw-outline-style: none` and `outline-style: none`. `focus-visible:outline-2` sets the width but reuses `var(--tw-outline-style)`, so it does not restore a visible outline style. The authorized correction adds `focus-visible:outline-solid` to both `src/components/work/WorkPreviewGrid.tsx` and the independent mobile selector, `src/components/work/WorkBackpackSelector.tsx`. It restores a solid pink `#FF707C` keyboard outline with the existing 2 px width and 4 px offset. `focus:outline-none` remains, preserving click-focus behavior and the browser's existing `:focus-visible` heuristic.

H12 implementation began on `main`, with `3f409e8` as HEAD. The owner reviewed mobile selector captures and approved the result technically and visually.

Checks performed during H12 implementation:

- All eight projects were checked with Tab, Shift+Tab, Enter and Space at 320, 390, 768, 1024 and 1440 px. Selection succeeded with both activation keys at every width.
- Computed styles confirmed actual `:focus-visible` activation and `outline-style: solid`, a 2 px width, 4 px offset and `#FF707C` color. Screenshot review confirmed all 40 outlines were complete, including mobile buttons near the backpack, connectors and viewport edges; no clipping was observed.
- Before/after measurements against `3f409e8` confirmed unchanged button geometry and distribution at all five widths. Selected, inactive, hover and focus states were checked; no regressions in selection, hover or H4 contrast were observed. Existing logos, colors and interactions were preserved.
- `eslint . --no-cache` without autofix, `tsc -p tsconfig.app.json --noEmit --incremental false` and `tsc -p tsconfig.node.json --noEmit --incremental false` all passed. `git diff --check` passed. Documentary closure checks consistency, `git diff --check` and Git status without rerunning implementation tests.

**Pending verification limits:** testing used the integrated browser. Other browsers, real browser zoom and a real screen reader were not tested; these results do not certify complete accessibility conformance.

H12 implementation and documentation are incorporated in `bf0c4f2`. H4 implementation and documentation are incorporated in `3f409e8`. No builds, installations, staging, commits, pushes or deployment were performed during the H12 implementation or documentary closure interventions themselves.

### H5 — Finite LAB motion and interaction-triggered Work capture playback

**Status: implemented and validated within the checked scope, with owner technical, visual and functional approval.** H5 work began on `main` at `bf0c4f2`. The five authorized code files are `src/sections/Lab.tsx`, `src/components/lab/LabStoryOrbit.tsx`, `src/components/lab/LabProjectBoxes.tsx`, `src/sections/Work.tsx` and `src/components/work/WorkProjectImage.tsx`.

LAB now initializes selection from `labProjects[0].id`. This additional functional correction selects the first array entry rather than a fixed ID, allowing a future first-position PRISMA CRM entry without another selection-logic change. No project was added, reordered or edited; PRISMA CRM integration remains separately planned and authorized.

The three narrative rings run once per project during the current visit, for **4.8 seconds**, with angular displacements of **+8°, −9° and +11°**. These small displacements preserve the original directions and editorial composition, then leave the rings static. Shared playback history prevents involuntary replay when returning to a project, scrolling or changing responsive composition. The selected box retains a fixed, subdued violet interior light; its infinite pulse was removed, and the light follows selection. `prefers-reduced-motion: reduce` keeps the orbit representation static. Narrative text, typography, colors and central composition were preserved.

Work's initial capture stays static at the top. Each explicit grid/backpack selection, including selecting the same project again, can request one complete top-to-bottom pass at the original **45 px/s**. Original pauses, opacity effects and return to the top are retained; the capture then stays static. There is no automatic repetition or additional control. A shared selection request is consumed by only the active mobile/desktop composition, avoiding duplicate playback. Selecting another project cancels the previous pass. Contain-mode, absent and non-overflowing captures remain static; reduced motion prevents playback.

Resize handling compares frame width, frame height and rendered image height with the dimensions recorded before playback. An unchanged geometry leaves the pass running. A geometry change cancels it and returns the capture to the top without automatically starting another pass. A pending explicit request can wait for image loading; loading, scroll and responsive changes do not create additional requests.

Verification evidence is separated by source and method:

- **Codex browser checks:** Work was exercised in the integrated development browser with React StrictMode, using the eight projects at 320, 390, 768, 1024 and 1440 px. Selection, Tab/Shift+Tab, Enter/Space, focus and responsive presentation were checked. Initial static presentation, repeated explicit selection, project replacement, scroll and mobile/desktop resize behavior were inspected without observed duplicate playback. Zepelin's complete cycle was observed: 427 px at 45 px/s, return to the top, and no automatic repetition after waiting more than two cycle durations. Full-cycle waits were not performed for every other project. These browser checks preceded the final unchanged-dimensions resize adjustment.
- **Codex simulations and automated checks:** in-memory browser fixtures explicitly fixed `reduce` and `no-preference`; all 40 reduced-motion selections stayed static. Absent captures, no overflow and delayed image loading were simulated without editing project data. The final resize adjustment passed seven in-memory component scenarios: unchanged dimensions preserve the pass; changed frame width, frame height or image height cancel without replay; hiding/returning the layout does not replay; delayed loading refreshes the baseline; and consumed requests do not start on resize. These were simulated dimensions/animation objects, not real browser resize tests. ESLint without autofix/cache, application and configuration TypeScript with `--noEmit --incremental false`, and `git diff --check` passed during the reported Work implementation and adjustment checks.
- **Owner manual checks:** the owner technically and visually approved LAB, including real tests on the Beelink with animations enabled, then approved the complete H5 implementation visually and functionally after real tests on that machine. This approval includes the final Work resize behavior. It is owner-reported evidence, separate from Codex's browser checks and simulations; no unreported browser matrix or assistive-technology coverage is inferred.

**Accessibility rationale:** [W3C's explanation of WCAG 2.2.2 (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) addresses automatically starting motion lasting more than five seconds alongside other content. LAB limits automatic ring motion to 4.8 seconds and removes continuous box pulsing. Work can retain longer journeys at 45 px/s, but starts them only through explicit visitor activation, rather than page loading, focus, hover or scrolling into view. These changes address H5's identified risk without declaring complete WCAG conformance or accessibility certification. H11's narrative-equivalence work remains pending.

**Pending verification limits:** other browsers, real screen readers and exhaustive accessibility testing remain unverified. Codex did not validate native operating-system motion preferences; its preference tests were simulated. The integrated browser could not connect to the preview for the final resize adjustment, so that adjustment has simulated Codex coverage and subsequent owner approval, not a Codex real-browser resize result. Real zoom remains unverified by Codex.

This H5 documentary closure changes only `PROJECT_STATE.md` and `ROADMAP.md` and awaits owner review. HEAD remains `bf0c4f2` on `main`; the five approved H5 code files and these two documents are unstaged local changes. Code-file hashes are checked to preserve the approved implementation during closure. No builds, installations, staging, commits, pushes or deployment were performed in this closure. H1–H5 and H12 remain complete within their checked scopes; H6–H11 retain their pending states. The historical audit is unchanged, and remote synchronization is not asserted by this local verification.

## Known outstanding items

| Findings | Status |
|---|---|
| H12 verification follow-up | Implemented and validated in both Work selectors, with owner technical and visual approval; other browsers, real zoom and a real screen reader remain unverified. |
| H4 verification follow-up | Implemented and validated in the checked scope, with owner technical and visual approval; other browsers, real zoom and a real screen reader remain unverified. |
| H3 verification follow-up | Implemented and validated in the checked scope; other browsers, real zoom and a real screen reader remain unverified. |
| H2 verification follow-up | Implemented and validated in the checked scope; real screen reader, other browsers and real zoom remain unverified. |
| Independent Contact follow-up | Preexisting clipping at 1024 px with enlarged text, associated with the desktop horizontal translation. Reproduced in baseline commit `70a7828` and still pending; not introduced or corrected by H1. |
| H5 verification follow-up | Implemented and validated within the checked scope, with owner Beelink approval; other browsers, a real screen reader and exhaustive accessibility tests remain unverified. |
| H11 | Accessible equivalent of the orbit narrative; pending, independently of H5 motion changes. |
| H6 / H8 | Verifiable LAB evidence and visual identification of its selectors; pending. |
| H9 | Canonical and social metadata were absent during the audit; sitemap returned 404. |
| H7 | Homepage accessible in the browser and 403 on a direct HTTP request; cause and scope unknown. |
| H10 | Performance opportunities subject to measurement; no Lighthouse or Core Web Vitals measurements. |

Details and priorities are recorded in [ROADMAP.md](ROADMAP.md); do not mark findings resolved until the corresponding changes have been validated.

## Proposed next stage and open verification items

Await owner review of the H5 closure documents before any commit. Any further implementation or Git writes require approval of a bounded scope. H1's original 320 px clipping remains closed; the independent 1024 px enlarged-text issue still needs separate analysis and authorization. H2–H5 and H12 remain complete within their checked scopes, with remaining verification limits recorded above. H6–H11 remain outstanding. PRISMA CRM review and integration retain their existing decisions and priorities in ROADMAP.md; the first-entry LAB default does not authorize adding it.

Still pending: access/indexing verification through Search Console and hosting logs; Core Web Vitals, transfer/caching and performance traces; testing with a real screen reader and complete WCAG conformance; dependency-tree advisories; equivalence between `dist` and production and the deployment procedure. The PRISMA CRM repository has not been audited: its full-stack description and production use were provided by the owner.
