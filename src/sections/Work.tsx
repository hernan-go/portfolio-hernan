import { useState } from "react";

type ProjectId =
  | "claec"
  | "lumina"
  | "jardin-reiki"
  | "zepelin"
  | "prisma"
  | "circular-economy";

type Project = {
  id: ProjectId;
  name: string;
  descriptor: string;
  role: string;
  scope: string[];
  coreTechnologies: string[];
  platforms: string[];
  context: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: "claec",
    name: "CLAEC",
    descriptor:
      "Educational platform rebuilt as an integrated digital ecosystem.",
    role: "Comms & Tech Director",
    scope: ["Website", "LMS", "Custom Payments", "Content Operations"],
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
    context:
      "Rebuilt a fragmented educational presence into a unified platform combining course discovery, payments, academic content and Moodle-based learning operations.",
    liveUrl: "https://claec.edu.do",
  },
  {
    id: "lumina",
    name: "Lúmina Académica",
    descriptor:
      "Independent learning and commerce platform for synchronous and asynchronous education.",
    role: "Founder / Web Developer / LMS Administrator",
    scope: ["Website", "LMS", "E-commerce", "Content Platform"],
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
    context:
      "Turned the operational knowledge developed at CLAEC into an independently managed platform combining course sales, content delivery and ongoing LMS administration.",
    liveUrl: "https://luminaacademica.com.ar/",
  },
  {
    id: "jardin-reiki",
    name: "Jardín Reiki",
    descriptor:
      "Course, booking and commerce platform with a custom interactive frontend.",
    role: "Frontend & WordPress Developer",
    scope: ["Website", "Courses", "Bookings", "E-commerce"],
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
    context:
      "Built a cohesive course, booking and commerce platform with custom frontend behavior, calendar integration and a visual system tailored to the center's identity.",
    liveUrl: "https://jardinreiki.com.ar/",
  },
  {
    id: "zepelin",
    name: "Zepelin Multimedia",
    descriptor:
      "Commercial website and training ecosystem for freelance digital services.",
    role: "Founder / Web Developer",
    scope: ["Service Website", "Lead Generation", "Training", "LMS"],
    coreTechnologies: ["WordPress", "Moodle", "PHP", "JavaScript", "CSS"],
    platforms: ["Service Plans", "Lead Capture", "Moodle", "SiteGround"],
    context:
      "Structured a commercial site around service plans, lead generation and training, supported by a self-managed Moodle environment for foundational digital education.",
    liveUrl: "https://zepelinmultimedia.com.ar/",
  },
  {
    id: "prisma",
    name: "Prisma Comunidad",
    descriptor:
      "Focused one-page platform for community programs, participants and institutions.",
    role: "Co-founder / Web Developer",
    scope: ["Landing Page", "Program Information", "Schedules", "Contact"],
    coreTechnologies: ["WordPress", "Divi 5", "JavaScript", "CSS"],
    platforms: [
      "Responsive Layout",
      "Contact Flows",
      "Content Structure",
      "Production Deployment",
    ],
    context:
      "Delivered a focused one-page platform for participants and institutions, organizing activities, schedules and contact paths while adopting Divi 5 in a live project.",
      liveUrl: "https://prismacomunidad.com.ar/",
  },
  {
    id: "circular-economy",
    name: "Circular Economy Sites",
    descriptor:
      "Two responsive institutional websites implemented from client-approved Figma designs.",
    role: "Web Developer / Figma Implementation",
    scope: ["FemRecicla", "TAU RAEE", "Responsive UI", "Client Delivery"],
    coreTechnologies: ["WordPress", "HTML", "JavaScript", "CSS"],
    platforms: [
      "Figma",
      "Responsive QA",
      "Contact Flows",
      "Production Deployment",
    ],
    context:
      "Implemented two responsive institutional sites from Figma for circular-economy organizations, prioritizing visual fidelity, clear service communication and fast client delivery.",
      liveUrl: "https://tau.coop.ar/",
  },
];

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

      <div
        id="work"
        className="relative z-10 mx-auto w-full max-w-[1400px] px-7 md:px-8"
      >
        <h2 className="sr-only">Selected work</h2>

        <p className="font-['IBM_Plex_Mono'] text-[0.8rem] uppercase tracking-[0.28em] text-neutral-400">
          01 / Selected Work | Interfaces and systems built around real needs.
        </p>

        <div
          className="mt-7 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0 min-[1880px]:mt-10"
          aria-label="Selected case studies"
        >
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;

            return (
              <button
                key={project.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`Show ${project.name} case study`}
                onClick={() => setActiveProjectId(project.id)}
                className="group min-w-0 text-left focus:outline-none"
              >
                <div className="mb-2 min-h-7 font-['IBM_Plex_Mono'] min-[1880px]:mb-3 min-[1880px]:min-h-9">
                  <h3
                    className={`text-[0.76rem] uppercase leading-[2] min-[1880px]:text-[0.8rem] min-[1880px]:leading-[2.5] tracking-[0.09em] transition-colors duration-200 ${
                      isActive
                        ? "text-neutral-100"
                        : "text-neutral-500 group-hover:text-neutral-200"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>

                <div
                  className={`relative aspect-[10/5.6] overflow-hidden min-[1880px]:aspect-[10/6.5] border bg-neutral-800/45 transition-all duration-300 ${
                    isActive
                      ? "border-neutral-300"
                      : "border-neutral-800 group-hover:border-neutral-500"
                  }`}
                >

                  <div className="absolute inset-0 flex items-center justify-center px-3 text-center font-['IBM_Plex_Mono'] text-[0.58rem] uppercase tracking-[0.16em] text-neutral-600">
                    Preview pending
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={`mx-auto mt-2 block h-0.5 min-[1880px]:mt-3 w-[42%] transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF707C] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />

              </button>
            );
          })}
        </div>

        <article
          key={activeProject.id}
          aria-live="polite"
          className="mt-8 pb-0 min-[1880px]:mt-12 min-[1880px]:pb-4"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-10 min-[1880px]:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800/55 min-[1880px]:aspect-[5/4]">
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-neutral-500">
                Main project image
              </div>
            </div>

            <div className="font-['IBM_Plex_Mono']">
              <div>
                <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                  Active case
                </p>

                <h3 className="font-['Archivo_Black'] text-[clamp(1.65rem,2.2vw,2.3rem)] uppercase leading-none tracking-[-0.035em] text-neutral-100 min-[1880px]:text-[clamp(1.85rem,2.5vw,2.55rem)]">
                  {activeProject.name}
                </h3>
              </div>

              <p className="mt-3 max-w-3xl text-[0.8rem] leading-5 text-neutral-400 min-[1880px]:mt-4 min-[1880px]:text-[0.82rem] min-[1880px]:leading-6">
                {activeProject.descriptor}
              </p>

              <dl className="mt-3 space-y-5 min-[1880px]:mt-8 min-[1880px]:space-y-5">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Role
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                    {activeProject.role}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Scope
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                    {activeProject.scope.join(" / ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Core technologies
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                    {activeProject.coreTechnologies.join(" / ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Platform & services
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                    {activeProject.platforms.join(" / ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Context
                  </dt>
                  <dd className="mt-1 max-w-3xl text-[0.82rem] leading-5 text-neutral-300">
                    {activeProject.context}
                  </dd>
                </div>
              </dl>
              <div className="mt-5 min-[1880px]:mt-8">
                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#FF707C]/70 px-3 py-1.5 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.16em] text-neutral-950 transition-colors duration-200 [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_0.75rem,100%_100%,0_100%)] hover:bg-[#FF707C]/95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF707C]"
                  >
                    Visit live ↗
                  </a>
                  ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-3 bg-[#FF707C]/25 px-3 py-1.5 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_0.75rem,100%_100%,0_100%)]">
                    Live link pending
                  </span>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
