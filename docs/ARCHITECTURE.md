# Current portfolio architecture

Verified: 2026-10-10. This document describes the current repository; proposed improvements are recorded in [ROADMAP.md](ROADMAP.md). The production audit is a separate record: [AUDIT-2026-10-10.md](AUDIT-2026-10-10.md).

## Stack and configuration

- React and React DOM 19: client-side composition, hooks and `StrictMode` in `src/main.tsx`.
- TypeScript 6: data and prop types; configuration in `tsconfig.json`, `tsconfig.app.json` and `tsconfig.node.json`. During the audit, installed TypeScript 6.0.3 had effective strict checks enabled even though `strict` is not explicitly specified in the configuration.
- Vite 8 and `@vitejs/plugin-react`: development and bundling. `vite.config.ts` registers React and `@tailwindcss/vite`.
- Tailwind CSS 4: responsive utilities and styling; `src/index.css` imports Tailwind and defines the background and global animations.
- `lucide-react`: icons used in Contact.
- ESLint, typescript-eslint, React Hooks and React Refresh plugins: configured in `eslint.config.js`. Prettier is declared as a development dependency; `package.json` has no formatting script.
- `package.json` declares version ranges; `package-lock.json` records dependency resolution. Do not confuse declared ranges with installed or deployed versions.

## Repository map

```text
index.html                    HTML entry point, fonts, title and description
package.json / package-lock.json
vite.config.ts / tsconfig*.json / eslint.config.js
public/
  .htaccess                   ErrorDocument 404 /index.html
  audio/hernan-voice-note.mp3
  favicon.svg / icons.svg / signature-hernan.svg
src/
  main.tsx / App.tsx / index.css
  sections/                   Hero.tsx, Work.tsx, Lab.tsx, Profile.tsx, Contact.tsx
  components/
    Container.tsx / Header.tsx
    work/                     selector, grid, details and animated preview
    lab/                      boxes, panel, media, status and narrative orbit
    profile/ProfileToolchain.tsx
  data/                       profile.ts, workProjects.ts, labProjects.ts,
                              profileToolchain.ts
  pages/NotFound.tsx
  assets/                     portrait, backpack, logos, screenshots and toolchain
docs/                         documentation and images/portfolio-home-hero.png
dist/                         generated local artifact, ignored by Git
node_modules/                 local dependencies, ignored by Git
```

Code paths in this document are relative to the repository root. No backend, global state manager or routing library is declared for the portfolio.

## Entry point and navigation

`src/main.tsx` creates the React root on `#root`, imports the CSS and mounts `App` with `StrictMode`. `src/App.tsx` checks `window.location.pathname`: `/` and `/index.html` display the homepage; any other pathname displays `src/pages/NotFound.tsx`.

The homepage mounts `Header` and a `main` containing Hero → Work → LAB → Profile → Contact. `src/components/Header.tsx` provides links to `#top`, `#work`, `#lab`, `#profile` and `#contact`. Targets are distributed between the root container and section headings/labels. There are no separate case-study routes or URL-based selection persistence.

`src/components/Container.tsx` centralizes maximum width and padding. Smooth scrolling is defined in CSS and disabled for reduced motion.

## Sections, data and interactions

| Section | Main code and data | Current behavior |
|---|---|---|
| Hero | `src/sections/Hero.tsx`, `src/data/profile.ts` | Professional role and name, “Software Built for Real Needs” title, animated letters and portrait. The visual letters have an `sr-only` text alternative. |
| Work | `src/sections/Work.tsx`, `src/data/workProjects.ts` | Eight case studies; local `activeProjectId` state, initially `operations-hub`; selection through buttons with `aria-pressed`. |
| LAB | `src/sections/Lab.tsx`, `src/data/labProjects.ts` | Three projects; local `activeProjectId` state, initially `holistic-practice-saas`; composition selected through `matchMedia` and `isDesktop` state. |
| Profile | `src/sections/Profile.tsx`, `src/components/profile/ProfileToolchain.tsx`, `src/data/profileToolchain.ts` | “The Product Defines the Stack” principle and four tool groups: Interfaces, Data & Integration, Workflow and Platforms. |
| Contact | `src/sections/Contact.tsx` | Contact tree, animated conversation, audio and transcript. It is neither a connected chat nor a submission form. |

### Work

`src/components/work/WorkBackpackSelector.tsx` arranges mobile buttons around a backpack SVG. Their positions and order are explicitly declared. `WorkPreviewGrid.tsx` displays logos and names for tablet/desktop. Both compositions are mounted, and CSS controls their visibility.

`WorkProjectDetails.tsx` presents role, scope, technologies, platforms and context in an `article` and `dl`. The single CTA selects `repositoryUrl ?? liveUrl`, prioritizing the repository when both exist. It does not display two simultaneous actions.

`WorkProjectImage.tsx` supports `scroll` and `contain` modes. Screenshots use `eager` image loading with asynchronous decoding. In scroll mode, it calculates the travel distance and uses the Web Animations API with infinite repetition. It observes visibility, loading, resize events and motion preferences; listeners and animations are cleaned up on unmount. Previews and details use a project-specific `key`.

`src/data/workProjects.ts` contains typed IDs, images, alt text, descriptors, roles, scope, technologies and links. The `prisma` case is the institutional WordPress website, not PRISMA CRM.

### LAB

`LabProjectBoxes.tsx` displays boxes and numbers; additional names and statuses are `sr-only`. `LabProjectPanel.tsx` presents focus, stage, product direction and optional fields. `LabStatusBar.tsx` displays status. `LabStoryOrbit.tsx` renders three text passages along SVG paths and central media.

`LabProjectMedia.tsx` uses an image when `image.src` exists; otherwise it displays a “Preview pending” SVG wireframe. The three current entries have no actual images or repository/prototype links. `repositoryUrl`, `prototypeUrl`, `updatedAt` and `repositoryLabel` are optional. The `prototypeUrl` link is labeled “Prototype”.

Supported statuses are DISCOVERY, PROTOTYPE, IN DEVELOPMENT, MVP, RELEASED and COMPLETED. `visualKey` is required in the data but does not currently determine a preview variant in the reviewed components. `LabProject` has no dedicated technology or responsibility fields.

### Contact

The file contains internal components for tree leaves, the typing indicator, player, phone mockup and contact tree. Email, WhatsApp, location, LinkedIn and GitHub are direct links; they do not send messages from the portfolio.

An `IntersectionObserver` starts a five-message sequence using timers; reduced motion displays the complete conversation. Timers, the observer and the preference listener are cleaned up. Audio mounts with the final message, uses `preload="metadata"` and requires visitor activation. State and events coordinate duration, progress, playback and errors. The transcript is a local overlay that currently declares `role="dialog"` and `aria-modal="true"`, without the focus/Escape handling identified in H2.

## Responsive behavior

There are no custom breakpoints in `vite.config.ts` or the global CSS. Tailwind variants and arbitrary sizes are used:

- `sm` (640 px): typography, grid and panel adjustments; the LAB body may have internal scrolling with a hidden scrollbar.
- `md` (768 px): horizontal Header and Work selector change; section labels switch away from the mobile variant.
- `lg` (1024 px): desktop Hero portrait, Work image/details in columns and Contact columns with an explicit horizontal offset.
- `xl` (1280 px): Work displays eight logo columns; LAB mounts its desktop composition through `matchMedia('(min-width: 1280px)')`.
- `2xl` (1536 px): LAB offset and spacing adjustments.
- 1500 px: Work's vertical decoration appears; 1880 px: Contact's horizontal offset is removed.

Hero uses `svh`, absolute positioning and `vw`/`clamp` sizing. Work and LAB combine reserved dimensions with grids. Contact includes non-wrapping values and clipped containers: H1 documents the issue at 320 px; this documentation does not resolve it.

## Motion and multimedia

- `src/index.css`: fixed grain in `body::before`, message entry, typing dots and rising Hero letters. Reduced motion removes some animations and replaces the Hero animation with a shorter variant rather than a completely static presentation.
- `WorkProjectImage.tsx`: pauses offscreen and resets to a static position for reduced motion.
- `LabStoryOrbit.tsx`: indefinitely repeating SVG `animateTransform`, IDs from `useId`, and pausing based on visibility and motion preferences.
- LAB boxes/status: CSS pulses with `motion-reduce` variants.
- There is no in-page animation pause control; H5 proposes evaluating one.
- WebP portrait and screenshots in `src/assets/`; SVG logos and tools. Public assets provide audio, favicon and signature.
- `index.html` loads Archivo Black and IBM Plex Mono from Google Fonts, with preconnect and `display=swap`; system fonts are also used.

## Verified build and deployment details

`package.json` defines `dev` (`vite`), `build` (`tsc -b && vite build`), `lint` (`eslint .`) and `preview` (`vite preview`). The build may write incremental metadata to `node_modules/.tmp` and produces `dist`; it was not run during the audit or documentation iteration.

`public/.htaccess` declares `ErrorDocument 404 /index.html`; a copy exists in the inspected `dist`. During the audit, the requested nonexistent route returned HTTP 404 with application HTML. The upload procedure, complete server configuration and deployment pipeline were not verified. No version-controlled deployment automation was identified in the inventory.

The production URL is https://hernangobulin.com/. The deployed JS bundle filename differs from the one in local `dist`: do not assume artifact equivalence or infer a historical deployment procedure. Canonical and Open Graph metadata were absent; inconsistent direct HTTP access and indexing remain pending verification.
