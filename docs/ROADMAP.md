# Proposed roadmap

Updated: 2026-10-10. Source: [complete audit](AUDIT-2026-10-10.md). Current state: [PROJECT_STATE.md](PROJECT_STATE.md).

**This roadmap does not authorize implementation, hosting changes, Git operations or deployment.** The owner must approve the scope of each intervention. All findings remain outstanding; priorities express impact, not permission.

P0: critical; P1: important; P2: optional. No P0 issues were identified within the audited scope. H7 is P1 for verification: a Googlebot block has not been demonstrated. H10 is P2 subject to measurement.

## Iteration 1 — Accessibility and responsive behavior

Prerequisite: Iteration 0 review and authorization of specific files/changes. Preserve the identity recorded in [DECISIONS.md](DECISIONS.md).

| ID / priority | Proposed scope and original evidence | Acceptance criteria |
|---|---|---|
| H1 / P1 | Contact at 320 px: long values and clipping; `src/sections/Contact.tsx:32,684`. | Complete email/profile values, usable controls and reflow without information loss; check narrow screens and text enlargement while preserving the tree. |
| H2 / P1 | Transcript: modality, focus and Escape; `src/sections/Contact.tsx:355`. | First choose a modal or non-modal panel. If modal: initial focus, containment, Escape and focus restoration; if non-modal: coherent semantics and navigation. Validate keyboard operation and closing. |
| H3 / P1 | Focus clipped by the CTA shape; `src/components/work/WorkProjectDetails.tsx:105`. | Perceptible keyboard focus indicator without losing the link's visual shape. |
| H4 / P1 | Contrast of unselected names; `src/components/work/WorkPreviewGrid.tsx:33`. | Normal informational text has at least 4.5:1 contrast, accounting for backgrounds and transparency; distinguish decorations. Review visual hierarchy and relevant sizes. |
| H11 / P2 | SVG narrative alternative; `src/components/lab/LabStoryOrbit.tsx:155`. | All three passages have an accessible equivalent without redundant announcements; verify with a real screen reader. |
| H5 / P1 | Continuous motion in Work and the orbit; `src/components/work/WorkProjectImage.tsx:132`, `src/components/lab/LabStoryOrbit.tsx:202`. | **Evaluate first** the pause mechanism and applicability of WCAG 2.2.2. Present a proposal and obtain separate authorization before implementation. If approved, validate keyboard control, pause/resume and reduced motion without removing existing animations. |

Separate functional corrections from brightness or layout adjustments so that they can be reviewed in bounded changes. Proposed validation: lint/TypeScript without emitting files when appropriate, responsive review, focus/keyboard checks and visual comparison. A build may only run if the phase permits it.

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
