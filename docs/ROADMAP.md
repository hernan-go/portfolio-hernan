# Proposed roadmap

Updated: 2026-10-10. Source: [complete audit](AUDIT-2026-10-10.md). Current state: [PROJECT_STATE.md](PROJECT_STATE.md).

**This roadmap does not authorize implementation, hosting changes, Git operations or deployment.** The owner must approve the scope of each intervention. H1 is implemented and validated for its original 320 px clipping problem, with owner approval. H2 and H3 are implemented and validated within their checked scopes, with owner approval and remaining verification limits below. H4–H11 remain outstanding and have not been implemented; priorities express impact, not permission.

P0: critical; P1: important; P2: optional. No P0 issues were identified within the audited scope. H7 is P1 for verification: a Googlebot block has not been demonstrated. H10 is P2 subject to measurement.

## Iteration 1 — Accessibility and responsive behavior

Prerequisite: Iteration 0 review and authorization of specific files/changes. Preserve the identity recorded in [DECISIONS.md](DECISIONS.md).

| ID / priority | Proposed scope and original evidence | Acceptance criteria |
|---|---|---|
| H1 / P1 — implemented and validated | Original Contact clipping at 320 px; corrected in `src/sections/Contact.tsx` with an explicit mobile grid column, minimum-width handling and wrapping of long values while keeping labels and separators together. | Original 320 px problem validated in the local browser and confirmed by the owner's visual review: complete links/values, correct wrapping and preserved tree aesthetic. Enlarged-text limitations are recorded separately below. |
| H2 / P1 — implemented and validated within the checked scope | Transcript accessibility corrected in `PhoneMockup`, within `src/sections/Contact.tsx`: titled non-modal region, expansion/control relationship, coordinated focus and local `inert`. | Initial title focus, normal Tab/Shift+Tab navigation, keyboard scrolling, Close/Escape dismissal and trigger focus restoration checked. Audio continuity and responsive behavior checked; real screen reader, other browsers and real zoom remain unverified. |
| H3 / P1 — implemented and validated within the checked scope | Work CTA focus clipping corrected in `src/components/work/WorkProjectDetails.tsx`: original polygon, background, padding and transition moved to one internal span; link semantics and focus remain on the anchor. | Complete exterior rectangular `focus-visible` outline checked through keyboard navigation and screenshots at 320, 390, 768, 1024 and 1440 px. Original dimensions, normal/hover appearance and destinations preserved; other browsers, real zoom and a real screen reader remain unverified. |
| H4 / P1 | Contrast of unselected names; `src/components/work/WorkPreviewGrid.tsx:33`. | Normal informational text has at least 4.5:1 contrast, accounting for backgrounds and transparency; distinguish decorations. Review visual hierarchy and relevant sizes. |
| H11 / P2 | SVG narrative alternative; `src/components/lab/LabStoryOrbit.tsx:155`. | All three passages have an accessible equivalent without redundant announcements; verify with a real screen reader. |
| H5 / P1 | Continuous motion in Work and the orbit; `src/components/work/WorkProjectImage.tsx:132`, `src/components/lab/LabStoryOrbit.tsx:202`. | **Evaluate first** the pause mechanism and applicability of WCAG 2.2.2. Present a proposal and obtain separate authorization before implementation. If approved, validate keyboard control, pause/resume and reduced motion without removing existing animations. |

Separate functional corrections from brightness or layout adjustments so that they can be reviewed in bounded changes. Proposed validation: lint/TypeScript without emitting files when appropriate, responsive review, focus/keyboard checks and visual comparison. A build may only run if the phase permits it.

### H1 closure — Iteration 1

The owner approved implementation in `src/sections/Contact.tsx` and subsequently approved the result after a visual review at 320 px. The change preserves font sizes, icons, connectors, colors, contact text, link destinations and functionality.

Completed checks: ESLint without autofix or caching; application and configuration TypeScript without emission or incremental compilation; local browser measurements and screenshot review at 320, 390, 768, 1024 and 1440 px against HEAD; long-value and 200% contact-row text simulations at those widths; multiline icon/connector alignment; keyboard navigation and visible focus at 320 px; and `git diff --check`. All static checks passed. At 320 px, internal width decreased from 336 to 305 px, matching the usable width; original text geometry at the other four widths was unchanged. Preview and test variants were held in memory without generating build artifacts. See [PROJECT_STATE.md](PROJECT_STATE.md) for commands and verification limits.

**Independent pending follow-up:** Contact still clips at 1024 px with enlarged text because of the preexisting desktop horizontal translation. This was reproduced in HEAD; H1 neither introduced nor corrected it. It needs separate analysis and authorization and does not reopen the validated original 320 px issue. The 200% check was a targeted text simulation; manual testing with real browser zoom and other browsers remains pending.

H1 remains complete within Iteration 1; its implementation and documentation are incorporated in commit `fb064c8`. Subsequent H2 and H3 closures are recorded below. H4–H11 retain their outstanding states and have not been implemented.

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

This documentary closure changes only `PROJECT_STATE.md` and `ROADMAP.md`, preserves the approved H3 code and historical audit, and awaits owner review. H3 implementation and closure documents remain unstaged local changes on `main`, with `ebf1573` as HEAD. No staging, commits, pushes or deployment were performed. H1 and H2 remain complete; H4–H11 retain their current outstanding states. Further implementation and Git writes require separate authorization.

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

Each iteration must record what was authorized, implemented and validated, together with limitations and risks. Update this roadmap and PROJECT_STATE within the authorized documentation scope. Preserve IDs H1–H11 and the historical report; planning a finding does not change its status to resolved.

Original estimates and risks are recorded in the audit. They do not imply a committed schedule. Do not commit, push or deploy automatically upon completing an iteration.
