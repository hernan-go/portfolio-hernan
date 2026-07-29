import type { LabVisualKey } from "../../data/labProjects";

type LabProjectVisualProps = {
  visualKey: LabVisualKey;
  isActive: boolean;
};

const visualDescriptions: Record<LabVisualKey, string> = {
  "argentina-data-map":
    "Conceptual data structure connecting Argentina's productive sectors with regional and economic indicators.",
  "holistic-consultation-flow":
    "Conceptual workflow connecting clients, therapeutic sessions, Bach flower selection and consultation history.",
  "fastwork-marketplace-flow":
    "Conceptual marketplace architecture connecting clients, service providers, the application layer and its database.",
};

export function LabProjectVisual({
  visualKey,
  isActive,
}: LabProjectVisualProps) {
  const accentText = isActive
    ? "text-[#c06a3d]"
    : "text-neutral-500";

  const accentBorder = isActive
    ? "border-[#c06a3d]/70"
    : "border-neutral-700";

  const accentBackground = isActive
    ? "bg-[#c06a3d]"
    : "bg-neutral-600";

  const frameClassName = `
    relative
    h-44
    overflow-hidden
    border
    bg-black/20
    ${accentBorder}
  `;

  if (visualKey === "argentina-data-map") {
    return (
      <div
        role="img"
        aria-label={visualDescriptions[visualKey]}
        className={frameClassName}
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-30
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
            [background-size:2rem_2rem]
          "
        />

        <div className="absolute top-4 left-4">
          <p
            className={`
              font-['IBM_Plex_Mono']
              text-[0.56rem]
              uppercase
              tracking-[0.16em]
              ${accentText}
            `}
          >
            Productive sectors
          </p>
        </div>

        <div className="absolute top-[38%] left-[12%]">
          <VisualNode
            label="Energy"
            isActive={isActive}
          />
        </div>

        <div className="absolute top-[24%] left-[42%]">
          <VisualNode
            label="Mining"
            isActive={isActive}
          />
        </div>

        <div className="absolute top-[50%] right-[10%]">
          <VisualNode
            label="Agriculture"
            isActive={isActive}
          />
        </div>

        <div className="absolute bottom-[12%] left-[38%]">
          <VisualNode
            label="Exports"
            isActive={isActive}
          />
        </div>

        <div
          aria-hidden="true"
          className={`
            absolute
            top-[49%]
            left-[24%]
            h-px
            w-[22%]
            origin-left
            -rotate-12
            ${accentBackground}
            opacity-60
          `}
        />

        <div
          aria-hidden="true"
          className={`
            absolute
            top-[40%]
            left-[54%]
            h-px
            w-[24%]
            origin-left
            rotate-12
            ${accentBackground}
            opacity-60
          `}
        />

        <div
          aria-hidden="true"
          className={`
            absolute
            top-[62%]
            left-[49%]
            h-px
            w-[23%]
            origin-left
            rotate-[-18deg]
            ${accentBackground}
            opacity-60
          `}
        />
      </div>
    );
  }

  if (visualKey === "holistic-consultation-flow") {
    const steps = [
      "Client",
      "Session",
      "Flower set",
      "History",
    ];

    return (
      <div
        role="img"
        aria-label={visualDescriptions[visualKey]}
        className={frameClassName}
      >
        <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
          <p
            className={`
              font-['IBM_Plex_Mono']
              text-[0.56rem]
              uppercase
              tracking-[0.16em]
              ${accentText}
            `}
          >
            Consultation flow
          </p>

          <span className="font-['IBM_Plex_Mono'] text-[0.52rem] uppercase tracking-[0.14em] text-neutral-600">
            01—04
          </span>
        </div>

        <div className="absolute inset-x-4 top-[43%] grid grid-cols-4 items-center gap-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative min-w-0"
            >
              <div
                className={`
                  flex
                  h-12
                  items-center
                  justify-center
                  border
                  px-2
                  text-center
                  font-['IBM_Plex_Mono']
                  text-[0.52rem]
                  uppercase
                  tracking-[0.1em]
                  ${
                    isActive && index === 1
                      ? "border-[#c06a3d] bg-[#c06a3d]/10 text-neutral-100"
                      : "border-neutral-700 text-neutral-500"
                  }
                `}
              >
                {step}
              </div>

              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    top-1/2
                    -right-2
                    z-10
                    h-px
                    w-2
                    ${accentBackground}
                    opacity-70
                  `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between border-t border-neutral-800 pt-3">
          <span className="font-['IBM_Plex_Mono'] text-[0.5rem] uppercase tracking-[0.13em] text-neutral-600">
            Shared client record
          </span>

          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${accentBackground}
            `}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={visualDescriptions[visualKey]}
      className={frameClassName}
    >
      <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
        <p
          className={`
            font-['IBM_Plex_Mono']
            text-[0.56rem]
            uppercase
            tracking-[0.16em]
            ${accentText}
          `}
        >
          Marketplace system
        </p>

        <span className="font-['IBM_Plex_Mono'] text-[0.52rem] uppercase tracking-[0.14em] text-neutral-600">
          Full stack
        </span>
      </div>

      <div className="absolute inset-x-5 top-[37%] grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="border border-neutral-700 px-3 py-3 text-center font-['IBM_Plex_Mono'] text-[0.54rem] uppercase tracking-[0.12em] text-neutral-500">
          Client
        </div>

        <div
          aria-hidden="true"
          className="flex items-center gap-1"
        >
          <span
            className={`
              h-px
              w-4
              ${accentBackground}
              opacity-70
            `}
          />

          <span className={accentText}>↔</span>

          <span
            className={`
              h-px
              w-4
              ${accentBackground}
              opacity-70
            `}
          />
        </div>

        <div className="border border-neutral-700 px-3 py-3 text-center font-['IBM_Plex_Mono'] text-[0.54rem] uppercase tracking-[0.12em] text-neutral-500">
          Provider
        </div>
      </div>

      <div className="absolute right-5 bottom-4 left-5 grid grid-cols-3 border border-neutral-800">
        {["React", "API", "MySQL"].map((layer, index) => (
          <div
            key={layer}
            className={`
              px-2
              py-2
              text-center
              font-['IBM_Plex_Mono']
              text-[0.48rem]
              uppercase
              tracking-[0.12em]
              text-neutral-600
              ${index < 2 ? "border-r border-neutral-800" : ""}
            `}
          >
            {layer}
          </div>
        ))}
      </div>
    </div>
  );
}

type VisualNodeProps = {
  label: string;
  isActive: boolean;
};

function VisualNode({
  label,
  isActive,
}: VisualNodeProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={`
          h-2
          w-2
          rounded-full
          ${
            isActive
              ? "bg-[#c06a3d]"
              : "bg-neutral-600"
          }
        `}
      />

      <span className="font-['IBM_Plex_Mono'] text-[0.5rem] uppercase tracking-[0.12em] text-neutral-500">
        {label}
      </span>
    </div>
  );
}
