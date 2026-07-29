import type {
  LabProject,
  LabProjectId,
} from "../../data/labProjects";

type LabProjectSelectorProps = {
  projects: LabProject[];
  activeProjectId: LabProjectId;
  onSelect: (projectId: LabProjectId) => void;
};

export function LabProjectSelector({
  projects,
  activeProjectId,
  onSelect,
}: LabProjectSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Select a LAB project"
      className="
        flex
        overflow-x-auto
        border-y
        border-neutral-700
      "
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeProjectId;

        return (
          <button
            key={project.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(project.id)}
            className={`
              relative
              min-w-[10.5rem]
              flex-1
              px-4
              py-4
              text-left
              transition-colors
              duration-300
              focus-visible:z-10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c06a3d]
              ${
                isActive
                  ? "bg-black/30 text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-300"
              }
            `}
          >
            <span className="block font-['IBM_Plex_Mono'] text-[0.54rem] uppercase tracking-[0.16em]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {project.status}
            </span>

            <span className="mt-2 block text-sm font-semibold">
              {project.name}
            </span>

            <span
              aria-hidden="true"
              className={`
                absolute
                inset-x-0
                bottom-0
                h-[2px]
                bg-[#c06a3d]
                transition-opacity
                duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
