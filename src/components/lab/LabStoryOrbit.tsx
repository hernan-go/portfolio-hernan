import { useEffect, useId, useRef } from "react";

import type { LabProject } from "../../data/labProjects";
import { LabProjectMedia } from "./LabProjectMedia";

type LabStoryOrbitProps = {
  project: LabProject;
  compact?: boolean;
};

const fallbackStory = {
  outer: "A QUESTION WORTH EXPLORING • A NEED OBSERVED IN A REAL CONTEXT • ",
  middle: "FROM AN INITIAL IDEA TO A POSSIBLE DIGITAL SYSTEM • ",
  inner: "UNDERSTAND • ORGANIZE • CONNECT • BUILD • ",
};

export function LabStoryOrbit({
  project,
  compact = false,
}: LabStoryOrbitProps) {
  const uniqueId = useId().replace(/:/g, "");
  const story = project.storyRings ?? fallbackStory;

  const durations = compact
    ? ["260s", "230s", "190s"]
    : ["800s", "750s", "600s"];

  const titleId = `${uniqueId}-orbit-title`;
  const outerPathId = `${uniqueId}-outer-path`;
  const middlePathId = `${uniqueId}-middle-path`;
  const innerPathId = `${uniqueId}-inner-path`;

  const outerAnimationRef = useRef<SVGAnimateTransformElement>(null);

  const middleAnimationRef = useRef<SVGAnimateTransformElement>(null);

  const innerAnimationRef = useRef<SVGAnimateTransformElement>(null);

  const orbitRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    const svg = svgRef.current;

    if (!orbit || !svg) {
      return;
    }

    let frameId = 0;
    let isVisible = false;
    let hasStarted = false;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const startAnimations = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        outerAnimationRef.current?.beginElement();
        middleAnimationRef.current?.beginElement();
        innerAnimationRef.current?.beginElement();

        svg.unpauseAnimations();
        hasStarted = true;
      });
    };

    const stopAnimations = () => {
      cancelAnimationFrame(frameId);

      svg.pauseAnimations();

      outerAnimationRef.current?.endElement();
      middleAnimationRef.current?.endElement();
      innerAnimationRef.current?.endElement();

      hasStarted = false;
    };

    const pauseAnimations = () => {
      cancelAnimationFrame(frameId);
      svg.pauseAnimations();
    };

    const resumeAnimations = () => {
      if (motionPreference.matches) {
        stopAnimations();
        return;
      }

      if (hasStarted) {
        svg.unpauseAnimations();
        return;
      }

      startAnimations();
    };

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        stopAnimations();
        return;
      }

      if (isVisible) {
        startAnimations();
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (!isVisible) {
          pauseAnimations();
          return;
        }

        resumeAnimations();
      },
      {
        threshold: 0.1,
      },
    );

    visibilityObserver.observe(orbit);

    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(frameId);

      visibilityObserver.disconnect();

      svg.pauseAnimations();

      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, [project.id]);

  return (
    <div
      ref={orbitRef}
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[560px]
      "
    >
      <svg
        ref={svgRef}
        viewBox="0 0 700 700"
        role="img"
        aria-labelledby={titleId}
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <title id={titleId}>Narrative context for {project.name}</title>

        <defs>
          <path
            id={outerPathId}
            d="
              M 350,350
              m -302,0
              a 302,302 0 1,1 604,0
              a 302,302 0 1,1 -604,0
            "
          />

          <path
            id={middlePathId}
            d="
              M 350,350
              m -262,0
              a 262,262 0 1,1 524,0
              a 262,262 0 1,1 -524,0
            "
          />

          <path
            id={innerPathId}
            d="
              M 350,350
              m -202,0
              a 202,202 0 1,1 404,0
              a 202,202 0 1,1 -404,0
            "
          />
        </defs>

        <g>
          <animateTransform
            ref={outerAnimationRef}
            begin="indefinite"
            attributeName="transform"
            type="rotate"
            from="0 350 350"
            to="360 350 350"
            dur={durations[0]}
            repeatCount="indefinite"
          />

          <text className="fill-neutral-300 font-['IBM_Plex_Mono'] text-[19px] uppercase tracking-[0.12em]">
            <textPath href={`#${outerPathId}`} startOffset="2%">
              {repeatText(story.outer, 4)}
            </textPath>
          </text>
        </g>

        <g>
          <animateTransform
            ref={middleAnimationRef}
            begin="indefinite"
            attributeName="transform"
            type="rotate"
            from="0 350 350"
            to="-360 350 350"
            dur={durations[1]}
            repeatCount="indefinite"
          />

          <text className="fill-neutral-400 font-['IBM_Plex_Mono'] text-[17px] uppercase tracking-[0.11em]">
            <textPath href={`#${middlePathId}`} startOffset="8%">
              {repeatText(story.middle, 4)}
            </textPath>
          </text>
        </g>

        <g>
          <animateTransform
            ref={innerAnimationRef}
            begin="indefinite"
            attributeName="transform"
            type="rotate"
            from="0 350 350"
            to="360 350 350"
            dur={durations[2]}
            repeatCount="indefinite"
          />

          <text className="fill-neutral-500 font-['IBM_Plex_Mono'] text-[15px] uppercase tracking-[0.1em]">
            <textPath href={`#${innerPathId}`} startOffset="4%">
              {repeatText(story.inner, 4)}
            </textPath>
          </text>
        </g>
      </svg>

      <div
        className="
          absolute
          top-1/2
          left-1/2
          z-10
          w-[42%]
          max-w-[19rem]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            overflow-hidden
            border
            border-white/10
            bg-[#e5e2da]
            p-1
            shadow-[0_20px_45px_rgba(0,0,0,0.3)]
          "
        >
          <LabProjectMedia
            image={project.image}
            projectName={project.name}
            variant="orbit"
          />
        </div>
      </div>
    </div>
  );
}

function repeatText(text: string, repetitions: number) {
  const normalizedText = text.trim();

  return Array.from({ length: repetitions }, () => `${normalizedText} • `).join(
    "",
  );
}
