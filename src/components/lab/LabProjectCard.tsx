import type { LabProject } from "../../data/labProjects";
import { LabProjectVisual } from "./LabProjectVisual";

type LabProjectCardProps = {
  project: LabProject;
  isActive: boolean;
  onSelect?: (projectId: LabProject["id"]) => void;
};

export function LabProjectCard({
  project,
  isActive,
  onSelect,
}: LabProjectCardProps) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className={`
        group
        relative
        flex
        h-full
        flex-col
        border
        p-6
        transition-colors
        duration-300
        ${
          isActive
            ? "border-[#c06a3d] bg-neutral-950/40"
            : "border-neutral-700/80 bg-black/10 hover:border-neutral-500"
        }
      `}
    >
      {onSelect && (
        <button
          type="button"
          aria-label={`Select ${project.name}`}
          aria-pressed={isActive}
          onClick={() => onSelect(project.id)}
          className="
            absolute
            inset-0
            z-10
            cursor-pointer
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#c06a3d]
            focus-visible:ring-offset-4
            focus-visible:ring-offset-[#1b1b1b]
          "
        />
      )}

      <div
        aria-hidden="true"
        className={`
          absolute
          inset-x-0
          top-0
          h-[3px]
          bg-[#c06a3d]
          transition-opacity
          duration-300
          ${isActive ? "opacity-100" : "opacity-20"}
        `}
      />

      <div className="pointer-events-none relative z-20 flex h-full flex-col pt-2">
        <header>
          <h3
            id={`${project.id}-title`}
            className={`
              text-2xl
              font-semibold
              transition-colors
              duration-300
              ${
                isActive
                  ? "text-neutral-100"
                  : "text-neutral-300"
              }
            `}
          >
            {project.name}
          </h3>

          <p
            className={`
              mt-3
              text-sm
              leading-6
              transition-colors
              duration-300
              ${
                isActive
                  ? "text-neutral-300"
                  : "text-neutral-400"
              }
            `}
          >
            {project.descriptor}
          </p>
          <div className="mt-6">
            <LabProjectVisual
              visualKey={project.visualKey}
              isActive={isActive}
            />
          </div>
        </header>

        <dl className="mt-8 flex-1 space-y-6">
          <div>
            <dt
              className={`
                font-['IBM_Plex_Mono']
                text-[0.62rem]
                uppercase
                tracking-[0.16em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-[#c06a3d]"
                    : "text-neutral-500"
                }
              `}
            >
              Focus
            </dt>

            <dd className="mt-2 text-sm leading-6 text-neutral-300">
              {project.focus}
            </dd>
          </div>

          <div>
            <dt
              className={`
                font-['IBM_Plex_Mono']
                text-[0.62rem]
                uppercase
                tracking-[0.16em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-[#c06a3d]"
                    : "text-neutral-500"
                }
              `}
            >
              Current stage
            </dt>

            <dd className="mt-2 text-sm leading-6 text-neutral-300">
              {project.currentStage}
            </dd>
          </div>

          <div>
            <dt
              className={`
                font-['IBM_Plex_Mono']
                text-[0.62rem]
                uppercase
                tracking-[0.16em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-[#c06a3d]"
                    : "text-neutral-500"
                }
              `}
            >
              Product direction
            </dt>

            <dd className="mt-2 text-sm leading-6 text-neutral-300">
              {project.productDirection}
            </dd>
          </div>

          <div>
            <dt
              className={`
                font-['IBM_Plex_Mono']
                text-[0.62rem]
                uppercase
                tracking-[0.16em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-[#c06a3d]"
                    : "text-neutral-500"
                }
              `}
            >
              Next milestone
            </dt>

            <dd className="mt-2 text-sm leading-6 text-neutral-300">
              {project.nextMilestone}
            </dd>
          </div>
        </dl>

        <footer
          className={`
            mt-8
            flex
            items-center
            justify-between
            gap-4
            border-t
            pt-4
            transition-colors
            duration-300
            ${
              isActive
                ? "border-[#c06a3d]/50"
                : "border-neutral-700"
            }
          `}
        >
          <span className="font-['IBM_Plex_Mono'] text-[0.62rem] uppercase tracking-[0.16em] text-neutral-500">
            Status
          </span>

          <span
            className={`
              border
              px-3
              py-1.5
              font-['IBM_Plex_Mono']
              text-[0.6rem]
              font-medium
              uppercase
              tracking-[0.14em]
              transition-colors
              duration-300
              ${
                isActive
                  ? "border-[#c06a3d] bg-[#c06a3d] text-neutral-950"
                  : "border-neutral-600 text-neutral-400"
              }
            `}
          >
            {project.status}
          </span>
        </footer>
      </div>
    </article>
  );
}
