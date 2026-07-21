import type {
  Project,
  ProjectId,
} from "../../data/workProjects";

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
      className="mt-7 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 xl:gap-y-0 min-[1880px]:mt-10"
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
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className={`pointer-events-none h-full w-full select-none object-contain px-7 py-5 transition-all duration-300 ${
                    isActive
                      ? "scale-100 opacity-90"
                      : "scale-[0.97] opacity-45 group-hover:scale-100 group-hover:opacity-75"
                  }`}
                />
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
  );
}
