import type { LabProject } from "../../data/labProjects";

type LabProjectMediaProps = {
  image: LabProject["image"];
  projectName: string;
  variant?: "panel" | "orbit";
};

export function LabProjectMedia({
  image,
  projectName,
  variant = "panel",
}: LabProjectMediaProps) {
  const aspectClassName =
    variant === "orbit" ? "aspect-[16/9]" : "aspect-[32/13]";

  if (image?.src) {
    return (
      <figure
        className={`
          relative
          w-full
          overflow-hidden
          ${aspectClassName}
        `}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain"
        />

        {image.label && (
          <figcaption className="sr-only">{image.label}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Temporary wireframe preview for ${projectName}`}
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#e5e2da]
        text-neutral-950
        ${aspectClassName}
      `}
    >
      <svg viewBox="0 0 640 400" aria-hidden="true" className="h-full w-full">
        <rect
          x="48"
          y="42"
          width="544"
          height="316"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <line
          x1="48"
          y1="92"
          x2="592"
          y2="92"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle cx="74" cy="67" r="5" fill="currentColor" />
        <circle cx="94" cy="67" r="5" fill="currentColor" />
        <circle cx="114" cy="67" r="5" fill="currentColor" />

        <rect
          x="78"
          y="126"
          width="182"
          height="174"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="294"
          y="126"
          width="244"
          height="58"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <line
          x1="294"
          y1="216"
          x2="538"
          y2="216"
          stroke="currentColor"
          strokeWidth="2"
        />

        <line
          x1="294"
          y1="246"
          x2="500"
          y2="246"
          stroke="currentColor"
          strokeWidth="2"
        />

        <line
          x1="294"
          y1="276"
          x2="522"
          y2="276"
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="294"
          y="310"
          width="112"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <span
        className="
          absolute
          right-4
          bottom-3
          font-['IBM_Plex_Mono']
          text-[0.5rem]
          uppercase
          tracking-[0.16em]
        "
      >
        Preview pending
      </span>
    </div>
  );
}
