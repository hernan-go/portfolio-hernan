# Decisions and identity

Updated: 2026-10-10. Sources: current code, README, audit and explicit owner instructions. Undocumented historical motivations are not attributed.

## Verified implementation

| Current decision or characteristic | Evidence |
|---|---|
| Client-side React/TypeScript application with Vite and Tailwind; composition by sections | `package.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx` |
| Content separated from components for Work, LAB and Profile | `src/data/workProjects.ts`, `src/data/labProjects.ts`, `src/data/profileToolchain.ts` |
| “Software Built for Real Needs” narrative | `src/sections/Hero.tsx` |
| “The Product Defines the Stack” principle | `src/components/profile/ProfileToolchain.tsx`, `README.md` |
| Editorial aesthetic with a monochromatic base, contrasting typography and color accents | `src/index.css`, `index.html`, section components; the palette is not exclusively gray |
| Metaphors: Work backpack, LAB boxes and orbit, toolchain and Contact tree | `src/components/work/WorkBackpackSelector.tsx`, `src/components/lab/LabProjectBoxes.tsx`, `src/components/lab/LabStoryOrbit.tsx`, `src/components/profile/ProfileToolchain.tsx`, `src/sections/Contact.tsx` |
| Animated interactions and reduced-motion preferences | `src/index.css`, `src/components/work/WorkProjectImage.tsx`, `src/components/lab/LabStoryOrbit.tsx`, `src/sections/Contact.tsx` |
| Prisma in Work is the institutional WordPress website | `prisma` entry in `src/data/workProjects.ts` |

This evidence establishes what exists, not why each detail was originally selected.

## Explicit owner instructions and preferences

- Preserve the editorial and monochromatic aesthetic, typography, narrative and deliberate animations. The portfolio is complete; arbitrary redesign or modernization is not an objective.
- Retain “Software Built for Real Needs” and “The Product Defines the Stack” as identity principles.
- Respect Work and LAB interactions and metaphors. Accessibility corrections should preserve that experience.
- Avoid refactoring that changes code structure without a verifiable benefit. Do not introduce frameworks, libraries or dependencies based solely on technology preferences.
- Prioritize actual technical evidence over marketing claims, invented metrics or unsupported seniority claims. Distinguish facts, hypotheses and professional opinions.
- Keep the institutional Prisma website and the future PRISMA CRM application distinct; the latter has not been integrated or audited in this repository.
- Work in bounded iterations, analyze before implementing and keep Git operations and deployment subject to explicit owner authorization.

## Proposals not yet adopted

Findings H1–H11 are recommendations and outstanding items, not implementation decisions. A modal versus non-modal panel, a pause control, visible LAB labels, optimizations, extension of the LAB model or a different default project require evaluation and authorization under [ROADMAP.md](ROADMAP.md).

Preserving identity does not require preserving a verified defect: a bounded correction can improve accessibility without a redesign. This principle does not approve any specific solution.

## Recording new decisions

Update this document when an authorized iteration adopts a decision affecting architecture, identity or working rules. Record the date, scope, evidence and whether the source is verified implementation or an owner instruction. Document material risks; do not infer history or present proposals as implemented. Operational status belongs in PROJECT_STATE and outstanding items in ROADMAP.
