import { useCallback, useEffect, useRef, type RefObject } from "react";

type WorkProjectImageProps = {
  src?: string;
  alt?: string;
  mode?: "scroll" | "contain";
  selectionSequence: number;
  playbackRequestRef: RefObject<{ sequence: number; consumed: boolean }>;
  layout: "mobile" | "desktop";
};

export function WorkProjectImage({
  src,
  alt = "",
  mode = "scroll",
  selectionSequence,
  playbackRequestRef,
  layout,
}: WorkProjectImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const startAnimation = useCallback(() => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (
      !src ||
      !frame ||
      !image ||
      !image.complete ||
      image.naturalHeight === 0
    ) {
      return;
    }

    const request = playbackRequestRef.current;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (
      request.sequence !== selectionSequence ||
      request.consumed ||
      isDesktop !== (layout === "desktop") ||
      frame.clientWidth === 0
    ) {
      return;
    }
    playbackRequestRef.current = { ...request, consumed: true };

    if (
      mode !== "scroll" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      animationRef.current?.cancel();

      image.style.transform = "translate3d(0, 0, 0)";
      image.style.opacity = "1";

      return;
    }

    animationRef.current?.cancel();

    image.style.transform = "translate3d(0, 0, 0)";
    image.style.opacity = "1";

    const imageHeight = image.offsetHeight;
    const frameHeight = frame.clientHeight;

    const scrollDistance = Math.max(0, imageHeight - frameHeight);

    if (scrollDistance <= 1) {
      return;
    }

    const pixelsPerSecond = 45;

    const initialPause = 1000;
    const travelDuration = (scrollDistance / pixelsPerSecond) * 1000;
    const finalPause = 1000;
    const fadeOutDuration = 350;
    const resetDuration = 50;
    const fadeInDuration = 350;

    const totalDuration =
      initialPause +
      travelDuration +
      finalPause +
      fadeOutDuration +
      resetDuration +
      fadeInDuration;

    const scrollStart = initialPause / totalDuration;

    const scrollEnd = (initialPause + travelDuration) / totalDuration;

    const finalPauseEnd =
      (initialPause + travelDuration + finalPause) / totalDuration;

    const fadeOutEnd =
      (initialPause + travelDuration + finalPause + fadeOutDuration) /
      totalDuration;

    const resetEnd =
      (initialPause +
        travelDuration +
        finalPause +
        fadeOutDuration +
        resetDuration) /
      totalDuration;

    animationRef.current = image.animate(
      [
        {
          transform: "translate3d(0, 0, 0)",
          opacity: 1,
          offset: 0,
        },
        {
          transform: "translate3d(0, 0, 0)",
          opacity: 1,
          offset: scrollStart,
        },
        {
          transform: `translate3d(0, -${scrollDistance}px, 0)`,
          opacity: 1,
          offset: scrollEnd,
        },
        {
          transform: `translate3d(0, -${scrollDistance}px, 0)`,
          opacity: 1,
          offset: finalPauseEnd,
        },
        {
          transform: `translate3d(0, -${scrollDistance}px, 0)`,
          opacity: 0,
          offset: fadeOutEnd,
        },
        {
          transform: "translate3d(0, 0, 0)",
          opacity: 0,
          offset: resetEnd,
        },
        {
          transform: "translate3d(0, 0, 0)",
          opacity: 1,
          offset: 1,
        },
      ],
      {
        duration: totalDuration,
        iterations: 1,
        easing: "linear",
        fill: "both",
      },
    );
    const animation = animationRef.current;
    animation.onfinish = () => {
      if (animationRef.current === animation) {
        animation.cancel();
        animationRef.current = null;
      }
    };
  }, [src, mode, selectionSequence, playbackRequestRef, layout]);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (!src || !frame || !image) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const readDimensions = () => ({
      frameWidth: frame.clientWidth,
      frameHeight: frame.clientHeight,
      imageHeight: image.offsetHeight,
    });
    let dimensions = readDimensions();

    const resetImage = () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      animationRef.current?.cancel();
      animationRef.current = null;
      image.style.transform = "translate3d(0, 0, 0)";
      image.style.opacity = "1";
    };

    const scheduleAnimation = () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      if (
        playbackRequestRef.current.sequence !== selectionSequence ||
        playbackRequestRef.current.consumed
      ) {
        return;
      }
      // Resolve final image dimensions before consuming this selection.
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          dimensions = readDimensions();
          startAnimation();
        });
      });
    };

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        playbackRequestRef.current = {
          ...playbackRequestRef.current,
          consumed: true,
        };
        resetImage();
      }
    };

    const handleResize = () => {
      const nextDimensions = readDimensions();
      if (
        nextDimensions.frameWidth === dimensions.frameWidth &&
        nextDimensions.frameHeight === dimensions.frameHeight &&
        nextDimensions.imageHeight === dimensions.imageHeight
      ) {
        return;
      }
      dimensions = nextDimensions;
      // A changed frame ends the current pass; it never starts a second one.
      resetImage();
      scheduleAnimation();
    };

    scheduleAnimation();
    image.addEventListener("load", scheduleAnimation);
    window.addEventListener("resize", handleResize);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      resetImage();
      image.removeEventListener("load", scheduleAnimation);
      window.removeEventListener("resize", handleResize);
      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, [src, selectionSequence, playbackRequestRef, startAnimation]);
  return (
    <div
      ref={frameRef}
      className="
      relative
      h-[clamp(250px,72vw,340px)]
      overflow-hidden
      bg-neutral-800/55
      md:h-[clamp(450px,56svh,600px)]
      "
    >
      {src ? (
        <img
          key={src}
          ref={imageRef}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          draggable={false}
          className={
            mode === "contain"
              ? "absolute inset-0 h-full w-full select-none object-contain p-3"
              : "absolute inset-x-0 top-0 h-auto w-full select-none will-change-transform"
          }
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-neutral-500">
          Main project image
        </div>
      )}
    </div>
  );
}
