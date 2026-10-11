import { useEffect, useId, useRef, type RefObject } from "react";

import orbitCenter from "../../assets/lab/orbit_center.svg";
import type { LabProject } from "../../data/labProjects";

type LabStoryOrbitProps = {
  project: LabProject;
  history: RefObject<Map<LabProject["id"], number>>;
};

export function LabStoryOrbit({
  project,
  history,
}: LabStoryOrbitProps) {
  const uniqueId = useId().replace(/:/g, "");
  const story = project.storyRings;

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
    let hasStarted = false;
    const visited = history.current;
    const animations = [
      outerAnimationRef.current,
      middleAnimationRef.current,
      innerAnimationRef.current,
    ];
    const angles = [8, -9, 11];
    const duration = 4.8;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const showStaticPosition = (elapsed: number) => {
      animations.forEach((animation, index) => {
        animation?.parentElement?.setAttribute(
          "transform",
          `rotate(${angles[index] * (elapsed / duration)} 350 350)`,
        );
      });
    };

    const previous = visited.get(project.id);
    if (previous !== undefined) {
      showStaticPosition(previous);
      return;
    }

    svg.pauseAnimations();
    svg.setCurrentTime(0);

    const freezeForReducedMotion = () => {
      cancelAnimationFrame(frameId);
      const elapsed = hasStarted
        ? Math.min(duration, svg.getCurrentTime())
        : 0;
      svg.pauseAnimations();
      animations.forEach((animation) => {
        animation?.setAttribute("fill", "remove");
        if (hasStarted) animation?.endElement();
      });
      showStaticPosition(elapsed);
      visited.set(project.id, elapsed);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted || visited.has(project.id)) {
          return;
        }
        if (motionPreference.matches) {
          freezeForReducedMotion();
          return;
        }
        frameId = requestAnimationFrame(() => {
          if (visited.has(project.id)) return;
          if (motionPreference.matches) {
            freezeForReducedMotion();
            return;
          }
          // Reserve the single run before starting SMIL. A remount restores
          // the final pose instead of replaying the introduction.
          visited.set(project.id, duration);
          svg.setCurrentTime(0);
          animations.forEach((animation) => animation?.beginElement());
          svg.unpauseAnimations();
          hasStarted = true;
        });
      },
      { threshold: 0.1 },
    );

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) freezeForReducedMotion();
    };

    if (motionPreference.matches) freezeForReducedMotion();
    visibilityObserver.observe(orbit);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      svg.pauseAnimations();
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, [project.id, history]);

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
            to="8 350 350"
            dur="4.8s"
            repeatCount="1"
            fill="freeze"
          />

          <text className="fill-neutral-300 font-['IBM_Plex_Mono'] text-[19px] uppercase tracking-[0.12em]">
            <textPath href={`#${outerPathId}`} startOffset="0%">
              {story.outer}
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
            to="-9 350 350"
            dur="4.8s"
            repeatCount="1"
            fill="freeze"
          />

          <text className="fill-neutral-400 font-['IBM_Plex_Mono'] text-[17px] uppercase tracking-[0.11em]">
            <textPath href={`#${middlePathId}`} startOffset="35%">
              {story.middle}
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
            to="11 350 350"
            dur="4.8s"
            repeatCount="1"
            fill="freeze"
          />

          <text className="fill-[#9C9C9C] font-['IBM_Plex_Mono'] text-[15px] uppercase tracking-[0.1em]">
            <textPath href={`#${innerPathId}`} startOffset="5%">
              {story.inner}
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
        <img
          src={orbitCenter}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
