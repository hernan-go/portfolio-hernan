import { useState } from "react";
import { Container } from "../components/Container";

import {
  projects,
  type ProjectId,
} from "../data/workProjects";
import { WorkPreviewGrid } from "../components/work/WorkPreviewGrid";
import { WorkBackpackSelector } from "../components/work/WorkBackpackSelector";
import { WorkProjectDetails } from "../components/work/WorkProjectDetails";



export function Work() {
  const [activeProjectId, setActiveProjectId] =
    useState<ProjectId>("claec");

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];


  return (
    <section
      className="relative overflow-hidden py-14 md:py-16 min-[1880px]:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[17rem] overflow-hidden select-none min-[1880px]:block"
      >
      <div className="absolute inset-y-22 left-[-0.2rem] flex items-end font-['Archivo_Black'] text-[clamp(7.5rem,9vw,10.5rem)] uppercase leading-[0.76] tracking-[-0.065em] text-neutral-800/80">
      <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
            Purpose-
          </span>

          <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
            Built
          </span>
        </div>
      </div>

      <Container className="relative z-10">
        <h2 className="sr-only">Selected work</h2>

        <p
          id="work"
          className="scroll-mt-10 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-neutral-200 md:text-[0.74rem]"
        >
          <span className="md:hidden">
            01 / Selected Work
          </span>

          <span className="hidden md:inline">
            01 / Selected Work | Interfaces and systems built around real needs
          </span>
        </p>
      </Container>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-7 md:px-8">
        <div className="md:hidden">
          <WorkBackpackSelector
            projects={projects}
            activeProjectId={activeProjectId}
            onSelect={setActiveProjectId}
          />
        </div>

        <div className="hidden md:block">
          <WorkPreviewGrid
            projects={projects}
            activeProjectId={activeProjectId}
            onSelect={setActiveProjectId}
          />
        </div>

        <WorkProjectDetails
          key={activeProject.id}
          project={activeProject}
        />
      </div>
    </section>
  );
}
