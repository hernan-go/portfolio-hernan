import { useState } from "react";

import { Container } from "../components/Container";
import { WorkBackpackSelector } from "../components/work/WorkBackpackSelector";
import { WorkPreviewGrid } from "../components/work/WorkPreviewGrid";
import { WorkProjectDetails } from "../components/work/WorkProjectDetails";
import { WorkProjectImage } from "../components/work/WorkProjectImage";
import {
  projects,
  type ProjectId,
} from "../data/workProjects";

export function Work() {
  const [activeProjectId, setActiveProjectId] =
    useState<ProjectId>("claec");

  const activeProject =
    projects.find(
      (project) => project.id === activeProjectId,
    ) ?? projects[0];

  return (
    <section className="relative overflow-hidden py-14 md:py-16 xl:py-20">
      {/* Encabezado general de la sección */}
      <Container>
        <h2 className="sr-only">Selected work</h2>

        <p
          id="work"
          className="scroll-mt-10 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-neutral-200 md:text-[0.74rem]"
        >
          <span className="md:hidden">
            <span className="block">
              01 / Selected Work |
            </span>

            <span className="mt-1 block">
              Interfaces and systems built around real needs
            </span>
          </span>

          <span className="hidden md:inline">
            01 / Selected Work | Interfaces and systems built
            around real needs
          </span>
        </p>
      </Container>

      {/* Composición interna */}
      <div className="mx-auto mt-7 w-full max-w-[1740px] min-[1500px]:grid min-[1500px]:grid-cols-[236px_minmax(0,1fr)]">
        {/* Statement lateral */}
        <div
          aria-hidden="true"
          className="relative hidden overflow-hidden select-none min-[1500px]:block"
        >
          <div className="absolute top-[-0.1rem] bottom-[-1rem] left-[-0.18rem] flex items-end font-['Archivo_Black'] text-[clamp(7rem,8vw,8rem)] uppercase leading-[0.75] tracking-[-0.072em] text-neutral-800/80">
            <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
              Purpose
            </span>

            <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
              Built
            </span>
          </div>
        </div>

        {/* Selector y caso activo */}
        <div className="min-w-0">
          <div className="relative z-10 mx-auto w-full max-w-[1420px] px-6 md:px-8">
            {/* Mobile */}
            <div className="md:hidden">
              <WorkBackpackSelector
                projects={projects}
                activeProjectId={activeProjectId}
                onSelect={setActiveProjectId}
              />

              <div className="mt-7">
                <WorkProjectDetails
                  key={activeProject.id}
                  project={activeProject}
                />
              </div>
            </div>

            {/* Tablet y desktop */}
            <div className="hidden md:block">
              {/* Selector ocupando todo el ancho */}
              <WorkPreviewGrid
                projects={projects}
                activeProjectId={activeProjectId}
                onSelect={setActiveProjectId}
              />

              {/* Imagen e información debajo */}
              <div className="mt-4 grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12 xl:gap-16">
                <WorkProjectImage
                  key={activeProject.id}
                  src={activeProject.mainImage}
                  alt={activeProject.mainImageAlt}
                  mode={activeProject.previewMode}
                />

                <div className="min-w-0">
                  <WorkProjectDetails
                    key={activeProject.id}
                    project={activeProject}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
