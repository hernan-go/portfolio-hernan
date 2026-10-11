# Proposed roadmap

Updated: 2026-10-10. Source: [complete audit](AUDIT-2026-10-10.md). Current state: [PROJECT_STATE.md](PROJECT_STATE.md).

**This roadmap does not authorize implementation, hosting changes, Git operations or deployment.** The owner must approve the scope of each intervention. H1 is implemented and validated for its original 320 px clipping problem, with owner approval. H2–H5 and H12 are implemented and validated within their checked scopes, with owner approval and remaining verification limits below. H6–H11 remain outstanding and have not been implemented. H12 is an independent P1 finding confirmed during H4 verification, outside the historical H1–H11 audit. Priorities express impact, not permission.

P0: critical; P1: important; P2: optional. No P0 issues were identified within the audited scope. H7 is P1 for verification: a Googlebot block has not been demonstrated. H10 is P2 subject to measurement.

## Iteration 1 — Accessibility and responsive behavior

Prerequisite: Iteration 0 review and authorization of specific files/changes. Preserve the identity recorded in [DECISIONS.md](DECISIONS.md).

| ID / priority | Proposed scope and original evidence | Acceptance criteria |
|---|---|---|
| H1 / P1 — implemented and validated | Original Contact clipping at 320 px; corrected in `src/sections/Contact.tsx` with an explicit mobile grid column, minimum-width handling and wrapping of long values while keeping labels and separators together. | Original 320 px problem validated in the local browser and confirmed by the owner's visual review: complete links/values, correct wrapping and preserved tree aesthetic. Enlarged-text limitations are recorded separately below. |
| H2 / P1 — implemented and validated within the checked scope | Transcript accessibility corrected in `PhoneMockup`, within `src/sections/Contact.tsx`: titled non-modal region, expansion/control relationship, coordinated focus and local `inert`. | Initial title focus, normal Tab/Shift+Tab navigation, keyboard scrolling, Close/Escape dismissal and trigger focus restoration checked. Audio continuity and responsive behavior checked; real screen reader, other browsers and real zoom remain unverified. |
| H3 / P1 — implemented and validated within the checked scope | Work CTA focus clipping corrected in `src/components/work/WorkProjectDetails.tsx`: original polygon, background, padding and transition moved to one internal span; link semantics and focus remain on the anchor. | Complete exterior rectangular `focus-visible` outline checked through keyboard navigation and screenshots at 320, 390, 768, 1024 and 1440 px. Original dimensions, normal/hover appearance and destinations preserved; other browsers, real zoom and a real screen reader remain unverified. |
| H4 / P1 — implemented and validated within the checked scope | Unselected names in `src/components/work/WorkPreviewGrid.tsx` now use `text-[#B8B8B8]` instead of `text-neutral-500`, retaining hover and adding `group-focus-visible:text-neutral-200`. | Contrast calculations, sampled textured backgrounds, responsive/keyboard checks and visual comparison completed; owner approved the hierarchy between selected and unselected projects. Sizes, logos, layout, backgrounds and animations preserved. Verification methods and limits are recorded below. |
| H12 / P1 — implemented and validated within the checked scope | Invisible keyboard outline corrected by adding `focus-visible:outline-solid` in `WorkPreviewGrid.tsx` and `WorkBackpackSelector.tsx`. Original cause: `focus:outline-none` set the style to `none`, which `focus-visible:outline-2` did not restore. | All eight projects checked with Tab/Shift+Tab and Enter/Space at 320, 390, 768, 1024 and 1440 px. Computed solid pink outlines and complete contours confirmed; geometry, selection, hover and H4 contrast preserved. Owner approved mobile captures. Other browsers, real zoom and a real screen reader remain unverified. |
| H11 / P2 | SVG narrative alternative; `src/components/lab/LabStoryOrbit.tsx:155`. | All three passages have an accessible equivalent without redundant announcements; verify with a real screen reader. |
| H5 / P1 — implemented and validated within the checked scope | Finite LAB ring introduction, static selected-box light, first-entry LAB selection and interaction-triggered single Work capture passes. Five approved code files are listed in the H5 closure below. | Owner approved the complete implementation after real Beelink tests. Codex browser checks, preference/edge-case simulations, final resize simulations and static checks are distinguished below. H6–H11 remain pending; this closure does not certify complete WCAG conformance. |

Separate functional corrections from brightness or layout adjustments so that they can be reviewed in bounded changes. Proposed validation: lint/TypeScript without emitting files when appropriate, responsive review, focus/keyboard checks and visual comparison. A build may only run if the phase permits it.

### H1 closure — Iteration 1

The owner approved implementation in `src/sections/Contact.tsx` and subsequently approved the result after a visual review at 320 px. The change preserves font sizes, icons, connectors, colors, contact text, link destinations and functionality.

Completed checks: ESLint without autofix or caching; application and configuration TypeScript without emission or incremental compilation; local browser measurements and screenshot review at 320, 390, 768, 1024 and 1440 px against HEAD; long-value and 200% contact-row text simulations at those widths; multiline icon/connector alignment; keyboard navigation and visible focus at 320 px; and `git diff --check`. All static checks passed. At 320 px, internal width decreased from 336 to 305 px, matching the usable width; original text geometry at the other four widths was unchanged. Preview and test variants were held in memory without generating build artifacts. See [PROJECT_STATE.md](PROJECT_STATE.md) for commands and verification limits.

**Independent pending follow-up:** Contact still clips at 1024 px with enlarged text because of the preexisting desktop horizontal translation. This was reproduced in HEAD; H1 neither introduced nor corrected it. It needs separate analysis and authorization and does not reopen the validated original 320 px issue. The 200% check was a targeted text simulation; manual testing with real browser zoom and other browsers remains pending.

H1 remains complete within Iteration 1; its implementation and documentation are incorporated in commit `fb064c8`. Subsequent H2–H5 and H12 closures are recorded below. H6–H11 retain their outstanding states; H12 is an independent finding completed within its checked scope.

### H2 closure — Iteration 1

The owner authorized transcript changes only in `PhoneMockup`, within `src/sections/Contact.tsx`, then technically reviewed and approved the implementation. H2 is implemented and validated within the checked scope. Dialog/modal semantics were replaced by a region identified through its title. The trigger uses `aria-expanded` and `aria-controls` only while its panel exists. Focus moves to the title on opening and returns to the trigger after local `inert` is removed on closing. Close and Escape inside the panel dismiss it; normal Tab/Shift+Tab navigation can leave it. Only the covered phone conversation is inert, and the text area supports keyboard scrolling.

Completed checks: click/Enter/Space opening; initial focus; forward/backward navigation and exclusion of covered controls; Escape inside/outside the panel; Close; focus restoration; repeated cycles; valid ARIA control references; End/Home scrolling to the bottom/top using a temporary enlarged-text fixture at 320 px; screenshot review and measurements at 320, 390, 768, 1024 and 1440 px; and operation in the development application with React StrictMode enabled. Audio playback continued across opening/closing without pause or reset, with advancing time and one mounted audio element. ESLint without autofix/cache, application and configuration TypeScript without emission/incremental compilation, and `git diff --check` passed. See [PROJECT_STATE.md](PROJECT_STATE.md) for commands and details.

No substantial visual changes were made: phone/panel geometry, typography, colors, spacing, transcript content, buttons and animations were preserved. The title and scrollable area gained focus indicators; browser focus can scroll to reveal its target. H1 and the audio implementation remain unchanged.

**Pending verification limits:** no real screen reader was available, and other browsers and real zoom were not tested. Enlarged text was simulated in memory; these checks do not certify complete accessibility conformance.

H2 implementation and documentation are incorporated in commit `ebf1573`. H1 and H2 remain complete within their checked scopes, with the pending verification limits above.

### H3 closure — Iteration 1

The owner authorized the active CTA correction only in `src/components/work/WorkProjectDetails.tsx`, then reviewed and approved the implementation. H3 is implemented and validated within the checked scope. The original `clip-path` coordinates, background, padding and 200 ms color transition now belong to a single internal `<span>`. The `<a>` retains its semantics, `href`, `target`, `rel`, one focus stop and the existing `focus-visible` outline; the span adds no interactive role, `tabIndex` or `aria-hidden`. `group` and `group-hover` preserve hover behavior. The exterior rectangular focus outline is fully visible without clipping in the checked layouts.

Completed checks: Tab/Shift+Tab navigation and a single focus stop; real `:focus-visible` activation; Enter activation and preserved destinations for "View repository" and "Visit Live"; before/after CTA measurements at 320, 390, 768, 1024 and 1440 px; screenshots of the full outline at those widths and clipping-ancestor inspection; and normal/hover visual comparison. "View repository" retained its 188.625 × 28 px dimensions at all five widths, with unchanged typography, polygon and responsive composition. GitHub redirected the repository destination to sign-in. "Link pending" was unchanged in the diff but was not exercised at runtime.

ESLint without autofix/cache, application and configuration TypeScript without emission/incremental compilation, and `git diff --check` passed during implementation. Documentary closure checks document consistency, `git diff --check` and Git status; it does not rerun the functional or static implementation tests. See [PROJECT_STATE.md](PROJECT_STATE.md) for commands and details.

**Pending verification limits:** tests used the integrated browser; other browsers, real browser zoom and a real screen reader were not tested. These checks do not certify complete accessibility conformance.

H3 implementation and documentation are incorporated in commit `e3585fb`. H1–H3 remain complete within their checked scopes, with the pending verification limits above.

### H4 closure and H12 registration — Iteration 1

The owner authorized only the unselected label color adjustment in `src/components/work/WorkPreviewGrid.tsx`, then technically and visually approved the implementation and the hierarchy between selected and unselected projects. H4 is implemented and validated within the checked scope. `text-neutral-500` was replaced by `text-[#B8B8B8]`; `group-hover:text-neutral-200` was retained and `group-focus-visible:text-neutral-200` added. Selected names remain `neutral-100`, with the pink selection underline. Typography, sizes, distribution, logos, backgrounds, animations and the global grain texture were preserved; the separate mobile selector was unchanged.

Completed checks: before/after screenshots and matching geometry/font measurements at 320, 390, 640, 767, 768, 1024, 1279, 1280, 1440 and 1500 px; normal/hover/selected/focus hierarchy; Tab focus without simultaneous hover; Shift+Tab return; and Enter/Space selection. ESLint without autofix/cache, application and configuration TypeScript without emission/incremental compilation, and `git diff --check` passed. Documentary closure checks document consistency, `git diff --check` and Git status without rerunning the implementation tests.

Contrast results are distinguished by method: the CSS color-pair calculation is **8.68:1** against `#1b1b1b`, versus **3.64:1** previously. Real text-free JPEG background samples near labels at six tablet/desktop widths contained gray values **27–57** on the 0–255 scale. A conservative calculation using those samples and possible grain attenuation of text gives approximately **5.25:1**. A separate extreme simulation of white grain at 25% over both text and the lightest gradient endpoint gives **4.61:1**; it does not claim that actual grain reaches that extreme. See [PROJECT_STATE.md](PROJECT_STATE.md) for methods and commands.

**Pending verification limits:** JPEG sampling is approximate and does not cover every rendered pixel; modeled ratios are not direct measurements of glyph contrast. Other browsers, real zoom and a real screen reader were not tested. These checks do not certify complete accessibility conformance.

**H12 registration during H4:** the invisible keyboard focus outline reproduced before and after H4. Generated CSS confirmed that `focus:outline-none` set the outline style and `--tw-outline-style` to `none`, while `focus-visible:outline-2` reused that variable and only supplied the width. H12 was registered as an independent P1 finding, pending a separately authorized intervention. H4 did not correct it; the subsequent H12 closure is recorded below. The historical H1–H11 audit was not modified.

H4 implementation and documentation are incorporated in commit `3f409e8`. H1–H4 remain complete within their checked scopes; subsequent H12 and H5 closures are recorded below. H6–H11 retain their outstanding states.

### H12 closure — Iteration 1

The owner authorized the correction in both `src/components/work/WorkPreviewGrid.tsx` and `src/components/work/WorkBackpackSelector.tsx`, then reviewed mobile selector captures and approved the result technically and visually. H12 is implemented and validated within the checked scope.

Both selectors now add `focus-visible:outline-solid` alongside the existing outline utilities. The keyboard outline is solid pink `#FF707C`, 2 px wide, with a 4 px offset. `focus:outline-none` is retained, preserving click-focus behavior and the browser's existing `:focus-visible` heuristic. No geometry, dimensions, colors, logos, animations or selection interactions were changed; H4 contrast remains intact.

Completed checks: all eight projects with Tab, Shift+Tab, Enter and Space at 320, 390, 768, 1024 and 1440 px; actual `:focus-visible` and computed outline style/color/width/offset; screenshot review of all 40 complete outlines, including mobile buttons near backpack connectors and edges; matching before/after button geometry against `3f409e8`; and selected, inactive, hover and focus states without observed regressions. ESLint without autofix/cache, application and configuration TypeScript without emission/incremental compilation, and `git diff --check` passed. See [PROJECT_STATE.md](PROJECT_STATE.md) for commands and details.

**Pending verification limits:** tests used the integrated browser. Other browsers, real browser zoom and a real screen reader were not tested. These results do not certify complete accessibility conformance.

H12 implementation and documentation are incorporated in `bf0c4f2`. Its documentary closure checked consistency, `git diff --check` and Git status without rerunning implementation tests. No builds, installations, staging, commits, pushes or deployment were performed during the H12 implementation or documentary closure interventions themselves.

### H5 closure — Iteration 1

H5 is **implemented and validated within the checked scope**, with owner technical, visual and functional approval after real Beelink tests. The authorized implementation affects `src/sections/Lab.tsx`, `src/components/lab/LabStoryOrbit.tsx`, `src/components/lab/LabProjectBoxes.tsx`, `src/sections/Work.tsx` and `src/components/work/WorkProjectImage.tsx`.

LAB's additional functional correction initializes selection with `labProjects[0].id`, so a future first-position PRISMA CRM entry will be selected without changing this logic. No project data, order or entry was changed. The three narrative rings run once per project per visit for 4.8 seconds, moving +8°, −9° and +11° in their original directions, then remain static. Shared playback history prevents repeats after reselection, scroll or responsive composition changes. Selected-box violet lighting is static and follows selection; the infinite pulse is removed. Reduced motion keeps the orbit static. Narrative content, typography, colors and central composition are preserved.

Work starts with a static capture at the top. Each explicit selection from the grid or backpack can initiate one complete pass at 45 px/s, preserving pauses, opacity effects and return to the top, followed by a static capture. Another explicit selection, including the same project, can request another pass. There are no automatic repeats or additional controls. Shared request consumption coordinates mobile/desktop playback; switching projects cancels the old pass. Resize with unchanged frame width/height and rendered image height does not interrupt playback; changed geometry cancels the pass and returns it to the top without replay. Reduced motion, contain mode, absent images and no overflow remain static. Loading, scroll and visibility changes do not create playback requests.

Verification sources are distinct:

- **Codex integrated-browser checks:** eight Work projects at 320, 390, 768, 1024 and 1440 px; Tab/Shift+Tab and Enter/Space, selection, focus, responsive presentation and React StrictMode without observed duplicate playback. Initial static state, explicit reselection, project changes, scroll and responsive transitions were checked. Zepelin's full 427 px journey at 45 px/s, return and no repetition after more than two cycle durations were observed; full cycles were not awaited for every other project. These checks preceded the final resize refinement.
- **Codex simulations/automated checks:** motion preferences were explicitly fixed in memory, with all 40 `reduce` selections static; missing-image, no-overflow and delayed-load fixtures were also simulated. Seven final resize scenarios verified unchanged-dimension continuity, cancellation for changed width/frame height/image height, no replay after hiding/returning, refreshed dimensions after delayed loading and no playback for consumed requests. These used simulated dimensions and animation objects. ESLint without autofix/cache, both TypeScript configurations without emission/incremental compilation and `git diff --check` passed during the reported Work implementation/adjustment checks.
- **Owner manual validation:** LAB was technically and visually approved after real Beelink tests with animations enabled. The owner subsequently approved the complete H5 implementation visually and functionally on that machine, including the final Work resize behavior. This is owner-reported validation, not Codex browser or assistive-technology evidence.

For [WCAG 2.2.2 (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), LAB's automatic ring motion is below five seconds and continuous box pulsing is eliminated. Work journeys may exceed five seconds but require explicit visitor activation rather than automatic startup or indirect focus/hover/scroll triggers. This addresses the identified continuous-motion risk without asserting complete WCAG conformance or certification. H11's accessible narrative equivalent remains pending.

**Pending verification limits:** other browsers, a real screen reader and exhaustive accessibility tests remain unverified. Codex used simulated motion preferences rather than validating native system settings; real zoom was not checked. The integrated browser could not connect to the final resize preview, so that refinement has simulated Codex coverage and subsequent owner approval, not a Codex real-browser resize check. Detailed evidence is recorded in [PROJECT_STATE.md](PROJECT_STATE.md).

H1–H5 and H12 remain complete within their checked scopes; H6–H11 retain their pending states and priorities. PRISMA CRM integration remains in Iteration 3 with its existing review, evidence and authorization prerequisites. The first-entry LAB default does not authorize integration or change project data. The historical audit remains unchanged.

This documentary closure modifies only `PROJECT_STATE.md` and `ROADMAP.md`; the five approved code files are preserved. The seven files remain unstaged on `main`, HEAD `bf0c4f2`, awaiting owner review before any Git write. Closure checks document consistency, code-file integrity, `git diff --check` and Git status without rerunning implementation tests. No builds, installations, staging, commits, pushes or deployment were performed in this closure; local checks do not assert remote synchronization.

## Iteration 2 — SEO and verification

| ID / priority | Proposed scope and dependency | Acceptance criteria |
|---|---|---|
| H9 / P2 | Canonical, Open Graph and metadata; `index.html:14`. Confirm the preferred URL and image before changing them. A single-URL sitemap is optional. | Correct metadata in deployed HTML, accessible image and URL; check social previews after an explicitly authorized deployment. Do not treat sitemap absence as preventing indexing. |
| H7 / P1 for verification | Investigate 403 and indexing through Search Console and hosting logs/rules. | Document the cause/scope or remaining uncertainty. **Do not change hosting before diagnosis and specific authorization.** Do not claim a Googlebot block based on the direct request. |
| H10 / P2 subject to measurement | Measure initial loading, project changes, images, fonts and rendering; `src/sections/Work.tsx:64`, `src/components/work/WorkProjectImage.tsx:285`. | Record tools, conditions and actual results. Propose optimizations only if a benefit is demonstrated; implementation requires subsequent authorization and a before/after comparison. |

H7 can be investigated once the owner authorizes/provides access to the necessary resources; it does not technically depend on UI corrections, and a confirmed access issue should not be postponed merely to follow this document's order. Distinguish local artifacts from production. Do not invent Lighthouse scores, LCP, CLS, INP or indexing results.

## Iteration 3 — PRISMA CRM integration

Prerequisites: specific authorization, CRM project review and available verifiable material. Its production use and React/TypeScript/Node.js/Express/MySQL stack are owner-provided information that has not yet been audited for this portfolio.

| Scope / priority | Dependency | Acceptance criteria |
|---|---|---|
| PRISMA CRM / future integration without an audit ID | Review the repository and define content, links and a screenshot suitable for publication. | Dedicated LAB entry, identity distinct from institutional Prisma, explicit production status, verifiable responsibility and stack. No identifiable personal/financial data in screenshots. |
| H8 / P2 | Fourth selector; `src/components/lab/LabProjectBoxes.tsx:104`; current three-column grid and explicit desktop layout. | All four projects can be identified and selected on mobile/tablet/desktop; preserve the boxes. Evaluate visible labels without assuming that a fourth project breaks the layout. |
| H6 / P1 | LAB technical evidence; `src/data/labProjects.ts:48`, `src/components/lab/LabProjectMedia.tsx:42`. | Authentic screenshots/artifacts and links where available, with accurate statuses. Distinguish repository, demo and production application. Discovery projects are not presented as implemented. |

Evaluate a small extension of `LabProject` for responsibility, technologies and production access. The current “Prototype” label does not describe a production CRM. Do not confuse it with Work's `prisma`; do not select a new default entry without reviewing the editorial objective. H6 can be addressed per case without requiring every project to be completed in a single intervention.

## Closure and maintenance

Each iteration must record what was authorized, implemented and validated, together with limitations and risks. Update this roadmap and PROJECT_STATE within the authorized documentation scope. Preserve IDs H1–H12 and the historical H1–H11 report; H12 is recorded separately as a later finding. Planning a finding does not change its status to resolved.

Original estimates and risks are recorded in the audit. They do not imply a committed schedule. Do not commit, push or deploy automatically upon completing an iteration.
