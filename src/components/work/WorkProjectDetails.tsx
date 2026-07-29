import type { ReactNode } from "react";

import type { Project } from "../../data/workProjects";

type WorkProjectDetailsProps = {
  project: Project;
};

type DetailRowProps = {
  label: string;
  children: ReactNode;
};

function DetailRow({
  label,
  children,
}: DetailRowProps) {
  return (
    <div className="flex flex-col gap-0.3">
      <dt
        className="
          inline-flex
          w-fit
          shrink-0
          bg-[#d6d5d2]
          px-2
          py-0.5
          pr-4
          text-[0.68rem]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-neutral-900
          [clip-path:polygon(0_0,calc(100%-0.55rem)_0,100%_50%,calc(100%-0.55rem)_100%,0_100%)]
        "
      >
        {label}
      </dt>

      <dd className="min-w-0 text-[0.82rem] leading-[1.45] text-neutral-300">
        {children}
      </dd>
    </div>
  );
}

export function WorkProjectDetails({
  project,
}: WorkProjectDetailsProps) {
  const actionUrl =
    project.repositoryUrl ?? project.liveUrl;

  const actionLabel = project.repositoryUrl
    ? "View repository ↗"
    : "Visit Live ↗";

  return (
    <article
      aria-live="polite"
      className="font-['IBM_Plex_Mono']"
    >
      <div>
        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
          Active case
        </p>

        <h3 className="font-['Archivo_Black'] text-[clamp(1.48rem,2vw,2.1rem)] uppercase leading-none tracking-[-0.035em] text-neutral-100">
          {project.name}
        </h3>
      </div>

      <p className="mt-2.5 max-w-3xl text-[0.8rem] leading-5 text-neutral-400">
        {project.descriptor}
      </p>

      <dl className="mt-3 space-y-5 xl:mt-4 xl:space-y-3.5">
        <DetailRow label="Role">
          {project.role}
        </DetailRow>

        <DetailRow label="Scope">
          {project.scope.join(", ")}
        </DetailRow>

        <DetailRow label="Core technologies">
          {project.coreTechnologies.join(", ")}
        </DetailRow>

        <DetailRow label="Platform & services">
          {project.platforms.join(", ")}
        </DetailRow>

        <DetailRow label="Context">
          <span className="block max-w-3xl">
            {project.context}
          </span>
        </DetailRow>
      </dl>

      <div className="mt-4">
        {actionUrl ? (
          <a
            href={actionUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              bg-[#FF707C]/80
              px-3
              py-1.5
              pr-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-neutral-950
              transition-colors
              duration-200
              [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_50%,calc(100%-0.75rem)_100%,0_100%)]
              hover:bg-[#FF707C]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#FF707C]
            "
          >
            {actionLabel}
          </a>
        ) : (
          <span
            className="
              inline-flex
              cursor-not-allowed
              items-center
              bg-[#FF707C]/25
              px-3
              py-1.5
              pr-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-neutral-500
              [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_50%,calc(100%-0.75rem)_100%,0_100%)]
            "
          >
            Link pending
          </span>
        )}
      </div>
    </article>
  );
}
