import type { LabProject, LabProjectId } from "../../data/labProjects";

type LabProjectBoxesProps = {
  projects: LabProject[];
  activeProjectId: LabProjectId;
  onSelect: (projectId: LabProjectId) => void;
  orientation?: "horizontal" | "vertical";
};

export function LabProjectBoxes({
  projects,
  activeProjectId,
  onSelect,
  orientation = "horizontal",
}: LabProjectBoxesProps) {
  return (
    <div
      role="group"
      aria-label="Discover a LAB project"
      className={
        orientation === "vertical"
          ? "flex flex-col items-center gap-4"
          : "grid grid-cols-3 gap-6"
      }
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeProjectId;

        return (
          <button
            key={project.id}
            type="button"
            aria-label={`Discover ${project.name}`}
            aria-pressed={isActive}
            onClick={() => onSelect(project.id)}
            className="
              group
              flex
              min-w-0
              flex-col
              items-center
              gap-2
              focus-visible:outline-none
            "
          >
            <span
              className={`
                relative
                block
                aspect-[1.18/1]
                ${
                  orientation === "vertical"
                    ? "w-[104px]"
                    : "w-full max-w-[128px]"
                }
              `}
            >
              <span
                aria-hidden="true"
                className={`
                  absolute
                  left-1/2
                  top-[45%]
                  h-14
                  w-16
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#8C82A7]/50
                  blur-2xl
                  transition-all
                  duration-700
                  ${isActive ? "scale-110 opacity-75" : "scale-75 opacity-0"}
                `}
              />

              {isActive ? <OpenBoxIcon /> : <ClosedBoxIcon />}
            </span>

            <span
              className={`
                font-['IBM_Plex_Mono']
                text-[0.58rem]
                font-semibold
                tracking-[0.12em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-neutral-100"
                    : "text-neutral-500 group-hover:text-neutral-300"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="sr-only">
              {project.name} — {project.status}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ClosedBoxIcon() {
  return (
    <svg
      viewBox="0 0 180 150"
      aria-hidden="true"
      className="
        relative
        h-full
        w-full
        overflow-visible
        text-neutral-500
        transition-colors
        duration-300
        group-hover:text-neutral-300
      "
    >
      {/* Closed lid */}
      <polygon
        points="32,48 90,29 148,48 90,68"
        fill="rgba(255,255,255,0.035)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Left face */}
      <polygon
        points="32,48 90,68 90,132 32,111"
        fill="rgba(255,255,255,0.012)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Right face */}
      <polygon
        points="90,68 148,48 148,111 90,132"
        fill="rgba(255,255,255,0.018)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Center seam between both lids */}
      <line
        x1="63"
        y1="58"
        x2="116"
        y2="39"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OpenBoxIcon() {
  return (
    <svg
      viewBox="0 0 180 150"
      aria-hidden="true"
      className="relative h-full w-full overflow-visible"
    >
      {/* interior light */}
      <ellipse
        cx="90"
        cy="75"
        rx="46"
        ry="24"
        fill="rgba(140,130,167,0.28)"
        className="animate-[pulse_3.8s_ease-in-out_infinite]"
      />

      {/* Left body: now extends to the center of the flaps */}
      <polygon
        points="43,64 90,75 90,135 43,119"
        fill="#685F80"
        stroke="#AAA2BD"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Right body */}
      <polygon
        points="90,75 137,64 137,119 90,135"
        fill="#5E5675"
        stroke="#AAA2BD"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Interior */}
      <polygon
        points="43,57 90,42 137,57 90,75"
        fill="#776D91"
        stroke="#B9B1CD"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Rear-left flap */}
      <polygon
        points="43,57 24,31 69,18 90,42"
        fill="#8C82A7"
        stroke="#BBB4CE"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Rear-right flap */}
      <polygon
        points="90,42 111,18 156,31 137,57"
        fill="#82779F"
        stroke="#BBB4CE"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Front-left flap */}
      <polygon
        points="43,57 90,75 68,98 22,81"
        fill="#8C82A7"
        stroke="#BBB4CE"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Front-right flap */}
      <polygon
        points="90,75 137,57 158,81 112,98"
        fill="#82779F"
        stroke="#BBB4CE"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Front edge */}
      <line
        x1="90"
        y1="75"
        x2="90"
        y2="135"
        stroke="#B9B1CD"
        strokeWidth="1.8"
      />
    </svg>
  );
}
