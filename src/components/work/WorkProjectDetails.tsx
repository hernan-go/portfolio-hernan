import type { Project } from "../../data/workProjects";

type WorkProjectDetailsProps = {
  project: Project;
};

export function WorkProjectDetails({
  project,
}: WorkProjectDetailsProps) {
  return (
    <article
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
              {project.name}
            </h3>
          </div>

          <p className="mt-3 max-w-3xl text-[0.8rem] leading-5 text-neutral-400 min-[1880px]:mt-4 min-[1880px]:text-[0.82rem] min-[1880px]:leading-6">
            {project.descriptor}
          </p>

          <dl className="mt-3 space-y-5 min-[1880px]:mt-8 min-[1880px]:space-y-5">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                Role
              </dt>

              <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                {project.role}
              </dd>
            </div>

            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                Scope
              </dt>

              <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                {project.scope.join(" / ")}
              </dd>
            </div>

            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                Core technologies
              </dt>

              <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                {project.coreTechnologies.join(" / ")}
              </dd>
            </div>

            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                Platform & services
              </dt>

              <dd className="mt-1 text-[0.82rem] leading-3 text-neutral-300">
                {project.platforms.join(" / ")}
              </dd>
            </div>

            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                Context
              </dt>

              <dd className="mt-1 max-w-3xl text-[0.82rem] leading-5 text-neutral-300">
                {project.context}
              </dd>
            </div>
          </dl>

          <div className="mt-5 min-[1880px]:mt-8">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
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
  );
}
