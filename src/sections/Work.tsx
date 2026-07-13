import { useState } from "react";
import { Container } from "../components/Container";

type ProjectId = "claec" | "lumina" | "jardin-reiki";

interface Project {
  id: ProjectId;
  name: string;
  category: string;
  descriptor: string;
  role: string;
  scope: string[];
  coreTechnologies: string[];
  platforms: string[];
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "claec",
    name: "CLAEC",
    category: "Education / LMS / WordPress",
    descriptor: "Educational platform rebuilt as an integrated digital ecosystem.",
    role: "Comms & Tech Director",
    scope: [
      "Website",
      "LMS",
      "Custom Payments",
      "Content Operations",
    ],
    coreTechnologies: [
      "WordPress",
      "Moodle",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Google Workspace",
      "Google Meet",
      "SiteGround",
    ],
    liveUrl: "https://claec.edu.do",
  },
  {
    id: "lumina",
    name: "Lúmina Académica",
    category: "Education / LMS / WordPress",
    descriptor:
      "Learning and commerce platform for holistic education.",
    role: "Founder / WordPress Developer / LMS Administrator",
    scope: [
      "Website",
      "LMS",
      "E-commerce",
      "Content Platform",
    ],
    coreTechnologies: [
      "WordPress",
      "Moodle",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Podcast",
      "Payment Gateways",
      "SiteGround",
    ],
    liveUrl: "https://luminaacademica.com.ar/",
  },
  {
    id: "jardin-reiki",
    name: "Jardín Reiki",
    category: "Wellness / Courses / WordPress",
    descriptor:
      "Course, booking and practice platform for a holistic center.",
    role: "WordPress Developer",
    scope: [
      "Website",
      "Courses",
      "Bookings",
      "E-commerce",
    ],
    coreTechnologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Google Calendar",
      "Dynamic Backgrounds",
      "SiteGround",
    ],
    liveUrl: "https://jardinreiki.com.ar/",
  },
];

export function Work() {
  const [activeProjectId, setActiveProjectId] =
    useState<ProjectId>("claec");

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ??
    projects[0];

  return (
    <section
      id="work"
      className="relative py-32 md:py-40"
    >

      <p className="mb-6 pl-[calc(clamp(2.25rem,6.8vw,6.25rem)+1.3rem)] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.28em] text-neutral-400">
        01 / Selected Work | Interfaces and systems built around real needs.
      </p>


        <h2 className="-ml-[0.065em] font-['Archivo_Black'] text-[clamp(3rem,12vw,11rem)]  uppercase leading-[0.82] tracking-[-0.05em] text-neutral-800">
          <span className="block">Purpose-</span>
          <span className="block">Built</span>
        </h2>

        <Container className="mt-24 md:mt-10">
        <div
          className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12"
          aria-label="Selected case studies"
        >
          {projects.map((project, index) => {
            const isActive = activeProjectId === project.id;

            return (
              <button
                key={project.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveProjectId(project.id)}
                className="group min-w-0 text-left focus:outline-none"
              >
                <div className="mb-4 flex items-baseline justify-between gap-4 font-['IBM_Plex_Mono']">
                  <h3
                    className={`text-sm uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? "text-neutral-100"
                        : "text-neutral-400 group-hover:text-neutral-200"
                    }`}
                  >
                    {project.name}
                  </h3>

                  <span className="text-[0.65rem] tracking-[0.18em] text-neutral-600">
                    0{index + 1}
                  </span>
                </div>

                <div
                  className={`relative aspect-[16/8] overflow-hidden border bg-neutral-800/50 transition-all duration-300 ${
                    isActive
                      ? "border-neutral-200"
                      : "border-neutral-700 group-hover:border-neutral-500"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center font-['IBM_Plex_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">
                    Preview pending
                  </div>
                </div>

                <p
                  className={`mt-4 font-['IBM_Plex_Mono'] text-[0.68rem] leading-5 transition-colors ${
                    isActive
                      ? "text-neutral-300"
                      : "text-neutral-600 group-hover:text-neutral-400"
                  }`}
                >
                  {project.category}
                </p>
              </button>
            );
          })}
        </div>

        <article
          key={activeProject.id}
          className="mt-12 border-y border-neutral-800 py-8 md:mt-12 md:py-10"
        >
          <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800/60">
                <div className="absolute inset-0 flex items-center justify-center font-['IBM_Plex_Mono'] text-[0.7rem] uppercase tracking-[0.22em] text-neutral-500">
                  Main project image
                </div>
              </div>
            </div>

            <div className="font-['IBM_Plex_Mono']">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-3 text-[0.65rem] uppercase tracking-[0.24em] text-neutral-600">
                    Active case
                  </p>

                  <h3 className="font-['Archivo_Black'] text-2xl uppercase leading-none tracking-[-0.03em] text-neutral-100 md:text-3xl">
                    {activeProject.name}
                  </h3>
                </div>

                <span className="text-[0.65rem] tracking-[0.2em] text-neutral-600">
                  {String(
                    projects.findIndex(
                      (project) => project.id === activeProject.id,
                    ) + 1,
                  ).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-3 text-neutral-400">
                {activeProject.descriptor}
              </p>

              <dl className="mt-7 space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Role
                  </dt>

                  <dd className="mt-1 text-sm leading-6 text-neutral-300">
                    {activeProject.role}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Scope
                  </dt>

                  <dd className="mt-1 text-sm leading-6 text-neutral-300">
                    {activeProject.scope.join(" / ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Core technologies
                  </dt>

                  <dd className="mt-1 text-sm leading-6 text-neutral-300">
                    {activeProject.coreTechnologies.join(" / ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Platform & services
                  </dt>

                  <dd className="mt-1 text-sm leading-6 text-neutral-300">
                    {activeProject.platforms.join(" / ")}
                  </dd>
                </div>
              </dl>

              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-3 bg-[#FF707C]/70 px-3 py-1.5 font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-[0.16em] text-neutral-950 transition-colors duration-200 [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_0.75rem,100%_100%,0_100%)] hover:bg-[#FF707C]/95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF707C]"
              >
                Visit live ↗
              </a>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

