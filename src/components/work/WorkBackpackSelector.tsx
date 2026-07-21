import backpackImage from "../../assets/work-backpack.svg";

import type {
  Project,
  ProjectId,
} from "../../data/workProjects";

type WorkBackpackSelectorProps = {
  projects: Project[];
  activeProjectId: ProjectId;
  onSelect: (projectId: ProjectId) => void;
};

type ProjectPosition = {
  id: ProjectId;
  className: string;
  align: "left" | "right" | "center";
};

const projectPositions: ProjectPosition[] = [
  {
    id: "lumina",
    className: "left-0 top-0",
    align: "left",
  },
  {
    id: "zepelin",
    className: "right-0 top-0",
    align: "right",
  },
  {
    id: "claec",
    className: "left-0 top-[38%]",
    align: "left",
  },
  {
    id: "prisma",
    className: "right-0 top-[38%]",
    align: "right",
  },
  {
    id: "jardin-reiki",
    className: "bottom-[15%] left-0",
    align: "left",
  },
  {
    id: "tau-raee",
    className: "bottom-[15%] right-0",
    align: "right",
  },
  {
    id: "femrecicla",
    className: "bottom-0 left-1/2 -translate-x-1/2",
    align: "center",
  },
];

export function WorkBackpackSelector({
  projects,
  activeProjectId,
  onSelect,
}: WorkBackpackSelectorProps) {
  return (
    <div
      className="relative mt-8 h-[21rem] w-full"
      aria-label="Selected case studies"
    >
      {/* Líneas conectoras */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-[5%_0_4%] h-[91%] w-full text-neutral-400/80"
      >
        <polyline
          points="29,7 37,7 44,23"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="71,7 63,7 56,23"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="15,47 27,49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="85,47 73,49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="29,93 37,93 44,76"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="71,93 63,93 56,76"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          points="50,77 50,94"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Mochila */}
      <img
        src={backpackImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          w-[43%]
          max-w-[185px]
          -translate-x-1/2
          select-none
          opacity-75
        "
      />

      {/* Proyectos */}
      {projectPositions.map((position) => {
        const project = projects.find(
          (item) => item.id === position.id,
        );

        if (!project) {
          return null;
        }

        const isActive = activeProjectId === project.id;

        return (
          <button
            key={project.id}
            type="button"
            aria-pressed={isActive}
            aria-label={`Show ${project.name} case study`}
            onClick={() => onSelect(project.id)}
            className={`
              group
              absolute
              z-10
              flex
              min-h-11
              max-w-[46%]
              flex-col
              justify-center
              font-['IBM_Plex_Mono']
              focus:outline-none
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#FF707C]
              ${position.className}
              ${
                position.align === "right"
                  ? "items-end text-right"
                  : position.align === "center"
                    ? "items-center text-center"
                    : "items-start text-left"
              }
            `}
          >
            <span
              className={`
                whitespace-nowrap
                text-[0.62rem]
                uppercase
                leading-4
                tracking-[0.07em]
                transition-colors
                duration-200
                sm:text-[0.68rem]
                ${
                  isActive
                    ? "text-neutral-100"
                    : "text-neutral-400 group-hover:text-neutral-200"
                }
              `}
            >
              {project.name}
            </span>

            <span
              aria-hidden="true"
              className={`
                mt-1
                block
                h-0.5
                w-[68%]
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-[#FF707C] opacity-100"
                    : "bg-transparent opacity-0"
                }
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
