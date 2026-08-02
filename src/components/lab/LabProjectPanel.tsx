import type { LabProject } from "../../data/labProjects";
import { LabProjectMedia } from "./LabProjectMedia";
import { LabStatusBar } from "./LabStatusBar";

type LabProjectPanelProps = {
  project: LabProject;
  isActive: boolean;
};

export function LabProjectPanel({ project, isActive }: LabProjectPanelProps) {
  return (
    <article
      aria-labelledby={`${project.id}-panel-title`}
      className="
        relative
        flex
        h-[37rem]
        flex-col
        overflow-hidden
        border
        border-white/15
        bg-[#1A1A1A]
        text-neutral-100
        shadow-[24px_28px_34px_-14px_rgba(0,0,0,1),25px_25px_20px_-12px_rgba(0,0,0,1)]
      "
    >
      {/* Subtle highlight along the top edge */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-[5px]
          bg-gradient-to-b
          from-[#e3e0d7]/20
          via-[#d7d4cb]/30
          to-transparent
        "
      />

      <div className="p-5 pb-0">
        <LabProjectMedia image={project.image} projectName={project.name} />
      </div>

      <div className="flex-1 px-5 pt-5 pb-12">
        <header>
          <h3
            id={`${project.id}-panel-title`}
            className="
              text-[clamp(1.65rem,2vw,1.85rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.035em]
              text-neutral-100
            "
          >
            {project.name}
          </h3>
        </header>

        <dl className="mt-5 space-y-3.5">
          <ProjectField label="Focus" value={project.focus} />

          <ProjectField label="Current stage" value={project.currentStage} />

          <ProjectField
            label="Product direction"
            value={project.productDirection}
          />

          <ProjectField label="Next milestone" value={project.nextMilestone} />
        </dl>

        {(project.updatedAt ||
          project.repositoryUrl ||
          project.prototypeUrl) && (
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              border-t
              border-white/15
              pt-3
            "
          >
            {project.updatedAt && (
              <p className="font-['IBM_Plex_Mono'] text-[0.58rem] uppercase tracking-[0.14em] text-neutral-300">
                Updated: {project.updatedAt}
              </p>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  font-['IBM_Plex_Mono']
                  text-[0.52rem]
                  uppercase
                  tracking-[0.14em]
                  text-neutral-100
                  underline
                  decoration-white/35
                  underline-offset-4
                  transition-colors
                  hover:text-white
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                {project.repositoryLabel ?? "Repository"}
              </a>
            )}

            {project.prototypeUrl && (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  font-['IBM_Plex_Mono']
                  text-[0.58rem]
                  uppercase
                  tracking-[0.14em]
                  text-neutral-100
                  underline
                  decoration-white/35
                  underline-offset-4
                  transition-colors
                  hover:text-white
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Prototype
              </a>
            )}
          </div>
        )}
      </div>

      <LabStatusBar status={project.status} isActive={isActive} />
    </article>
  );
}

type ProjectFieldProps = {
  label: string;
  value: string;
};

function ProjectField({ label, value }: ProjectFieldProps) {
  return (
    <div>
      <dt
        className="
          font-['IBM_Plex_Mono']
          text-[0.58rem]
          uppercase
          tracking-[0.16em]
          text-neutral-300
        "
      >
        {label}
      </dt>

      <dd className="mt-1 text-[0.72rem] leading-[1.45] text-neutral-100">
        {value}
      </dd>
    </div>
  );
}
