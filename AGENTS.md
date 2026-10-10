# Portfolio Hernán — working instructions

Hernán Gobulin's professional portfolio for hiring teams and clients. Repository: `hernan-go/portfolio-hernan`; production: https://hernangobulin.com/. Preserve the completed experience, its editorial aesthetic and interactions. Do not redesign it or introduce dependencies based on technology preferences.

## Context and documentation

Client-side React + TypeScript + Vite + Tailwind CSS application. `src/App.tsx` composes Hero, Work, LAB, Profile and Contact; `src/data/` separates content from presentation. This repository does not contain a portfolio backend.

Read this file at the start of a task and select only the relevant documentation:

- [Current state](docs/PROJECT_STATE.md): verified status, outstanding items and next step.
- [Architecture](docs/ARCHITECTURE.md): code map, state, assets and execution.
- [Decisions](docs/DECISIONS.md): identity and owner constraints.
- [Roadmap](docs/ROADMAP.md): proposals, dependencies and acceptance criteria.
- [Historical audit](docs/AUDIT-2026-10-10.md): H1–H11 evidence and testing limitations.
- [README](README.md): project introduction and available commands.

Documentation provides context, not ongoing permission. A high-priority finding or a planned iteration does not authorize implementation.

## Language policy

- Keep repository code, the README and public documentation in English.
- Working conversations and explanations addressed to the owner may remain in Spanish.
- Do not translate component names, technical identifiers or interface content without authorization.

## Iteration workflow

1. **Analysis and planning:** verify the directory, remote, branch and working tree using read-only operations; understand the request; consult relevant documents and check them against the code. Define affected files, behavior, validation and risks before implementation.
2. **Authorization:** implement only the requested or approved scope. If the request already authorizes that work, do not ask again. Request approval when authorization is missing or scope must expand. Do not change unrelated files or revert the owner's work.
3. **Implementation:** preserve existing functionality, identity and responsibilities. Avoid refactoring without a verifiable benefit. Distinguish facts, hypotheses and future decisions.
4. **Validation:** choose checks proportionate to the change and consistent with its permissions; do not report measurements or results that were not obtained.
5. **Closure:** report changes, checks, limitations and risks. Update relevant documentation within the authorized scope; if documentation writes are not authorized, identify the required update. Preserve the dated audit as a historical record without presenting recommendations as existing functionality.

## Validation and controlled operations

- Markdown: review consistency, paths, links and changed files; run `git diff --check` and read-only Git status checks. New files do not appear in the normal diff: inspect them as well.
- React/TypeScript: when permitted by the scope, run ESLint without autofix or caching and TypeScript without emitting files or incremental compilation; verify affected interactions.
- UI/CSS/assets: check relevant sizes, keyboard navigation, focus, contrast and reduced motion according to the change. Measure performance before optimizing.
- Build: `npm run build` writes `dist` and may generate compilation metadata in `node_modules`; do not run it during read-only or documentation-only phases. The presence of a script does not authorize its execution.
- Do not install, update or remove dependencies outside the approved scope.
- Creating/switching branches, changing Git configuration, staging, committing, merging, resetting, pushing or deploying requires explicit owner authorization for the corresponding operation. Keep Git operations and deployment under the owner's control; read-only Git queries are part of normal verification.
- Do not claim remote synchronization without checking it; distinguish the local `origin/main` reference from the current state on GitHub.
