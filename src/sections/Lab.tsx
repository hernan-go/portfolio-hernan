import { useState } from "react";

import { Container } from "../components/Container";
import { LabProjectCard } from "../components/lab/LabProjectCard";
import { LabProjectSelector } from "../components/lab/LabProjectSelector";
import {
  labProjects,
  type LabProjectId,
} from "../data/labProjects";

export function Lab() {
  const [activeProjectId, setActiveProjectId] =
    useState<LabProjectId>("holistic-practice-saas");

  const activeProject =
    labProjects.find(
      (project) => project.id === activeProjectId,
    ) ?? labProjects[0];

  return (
    <section className="relative overflow-hidden py-14 md:py-16 xl:py-20">
      <Container>
        <h2 className="sr-only">
          Systems, prototypes and technical explorations
        </h2>

        <p
          id="lab"
          className="scroll-mt-10 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-neutral-200 md:text-[0.74rem]"
        >
          <span className="md:hidden">
            <span className="block">02 / Lab |</span>

            <span className="mt-1 block">
              Systems, prototypes and technical explorations
            </span>
          </span>

          <span className="hidden md:inline">
            02 / Lab | Systems, prototypes and technical explorations
          </span>
        </p>

        {/* Mobile, tablet y pantallas intermedias */}
        <div className="mt-8 xl:hidden">
          <LabProjectSelector
            projects={labProjects}
            activeProjectId={activeProjectId}
            onSelect={setActiveProjectId}
          />

          <div className="mt-5">
            <LabProjectCard
              key={activeProject.id}
              project={activeProject}
              isActive
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="mt-8 hidden gap-6 xl:grid xl:grid-cols-3">
          {labProjects.map((project) => (
            <LabProjectCard
              key={project.id}
              project={project}
              isActive={project.id === activeProjectId}
              onSelect={setActiveProjectId}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
