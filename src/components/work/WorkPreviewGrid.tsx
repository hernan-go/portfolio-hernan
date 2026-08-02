import type { Project, ProjectId } from "../../data/workProjects";

type WorkPreviewGridProps = {
  projects: Project[];
  activeProjectId: ProjectId;
  onSelect: (projectId: ProjectId) => void;
};

export function WorkPreviewGrid({
  projects,
  activeProjectId,
  onSelect,
}: WorkPreviewGridProps) {
  return (
    <div
      className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 xl:grid-cols-8 xl:gap-x-5 xl:gap-y-0"
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
            onClick={() => onSelect(project.id)}
            className="group min-w-0 text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF707C]"
          >
            <div className="1.5 min-h-7 font-['IBM_Plex_Mono']">
              <h3
                className={`text-[0.50rem] uppercase leading-[1.5] tracking-[0.07em] transition-colors duration-200 xl:text-[0.62rem] ${
                  isActive
                    ? "text-neutral-100"
                    : "text-neutral-500 group-hover:text-neutral-200"
                }`}
              >
                {project.name}
              </h3>
            </div>

            <div
              className={`relative aspect-[10/5.6] overflow-hidden border bg-neutral-800/45 transition-all duration-300 ${
                isActive
                  ? "border-neutral-300"
                  : "border-neutral-800 group-hover:border-neutral-500"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className={`pointer-events-none h-full w-full select-none object-contain px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "scale-100 opacity-90"
                      : "scale-[0.97] opacity-45 group-hover:scale-100 group-hover:opacity-75"
                  }`}
                />
              </div>
            </div>

            <span
              aria-hidden="true"
              className={`mx-auto mt-2 block h-0.5 w-[42%] transition-all duration-300 ${
                isActive
                  ? "bg-[#FF707C] opacity-100"
                  : "bg-transparent opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
