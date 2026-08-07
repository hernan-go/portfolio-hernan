import { useEffect, useState } from "react";

import { Container } from "../components/Container";
import { LabProjectBoxes } from "../components/lab/LabProjectBoxes";
import { LabProjectPanel } from "../components/lab/LabProjectPanel";
import { LabStoryOrbit } from "../components/lab/LabStoryOrbit";
import { labProjects, type LabProjectId } from "../data/labProjects";

export function Lab() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 1280px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const [activeProjectId, setActiveProjectId] = useState<LabProjectId>(
    "holistic-practice-saas",
  );

  const activeProject =
    labProjects.find((project) => project.id === activeProjectId) ??
    labProjects[0];

  return (
    <section
      className="
     relative
      overflow-x-clip
      overflow-y-visible
      py-14
      md:py-16
      xl:min-h-[100svh]
      xl:py-10
    "
    >
      <Container>
        <h2 className="sr-only">
          Systems, prototypes and technical explorations
        </h2>

        <p
          id="lab"
          className="
            scroll-mt-10
            font-['IBM_Plex_Mono']
            text-[0.68rem]
            uppercase
            tracking-[0.18em]
            text-neutral-200
            md:text-[0.74rem]
          "
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
      </Container>

      {/* New mobile and tablet composition */}
      {!isDesktop && (
        <Container>
          <div className="mt-8">
            <LabProjectBoxes
              projects={labProjects}
              activeProjectId={activeProjectId}
              onSelect={setActiveProjectId}
            />

            <div className="mt-8">
              <LabProjectPanel project={activeProject} isActive />
            </div>

            <div className="mt-8">
              <LabStoryOrbit
                key={activeProject.id}
                project={activeProject}
                compact
              />
            </div>
          </div>
        </Container>
      )}

      {/* Desktop composition */}
      {isDesktop && (
        <div
          className="
          relative
          mx-auto
          mt-6
          hidden
          h-[calc(100svh-9rem)]
          min-h-[640px]
          w-full
          max-w-[1500px]
          overflow-visible
          grid-cols-[minmax(0,1fr)_180px_340px]
          items-center
          gap-9
          px-8
          xl:grid
          xl:-translate-x-6
          2xl:-translate-x-10
          2xl:gap-10
        "
        >
          {/* Narrative orbit */}
          <div className="relative flex min-w-0 -translate-y-14 items-center justify-center">
            <LabStoryOrbit key={activeProject.id} project={activeProject} />
          </div>

          {/* Vertical project selector */}
          <div className="relative flex h-full min-w-0 items-center justify-center">
            <span
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              left-[30%]
              top-1/2
              -z-10
              -translate-x-1/2
              -translate-y-[calc(50%+3rem)]
              rotate-180
              select-none
              whitespace-nowrap
              font-['Archivo_Black']
              text-[clamp(4.2rem,5.6vw,6.3rem)]
              uppercase
              leading-[0.74]
              tracking-[-0.065em]
              text-white/[0.045]
              [writing-mode:vertical-rl]
            "
            >
              Select project
            </span>

            <div className="relative z-10 translate-x-15 -translate-y-35">
              <LabProjectBoxes
                projects={labProjects}
                activeProjectId={activeProjectId}
                onSelect={setActiveProjectId}
                orientation="vertical"
              />
            </div>
          </div>

          {/* Project panel */}
          <div className="flex h-full min-w-0 -translate-y-[5.5rem] items-center">
            <LabProjectPanel project={activeProject} isActive />
          </div>
        </div>
      )}
    </section>
  );
}
