import { useCallback, useEffect, useRef } from "react";

type WorkProjectImageProps = {
  src?: string;
  alt?: string;
  mode?: "scroll" | "contain";
};

export function WorkProjectImage({
  src,
  alt = "",
  mode = "scroll",
}: WorkProjectImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const startAnimation = useCallback(() => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (
      !src ||
      mode !== "scroll" ||
      !frame ||
      !image ||
      !image.complete ||
      image.naturalHeight === 0
    ) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        iterations: Infinity,
        easing: "linear",
        fill: "both",
      },
    );
  }, [src, mode]);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (!src || !frame || !image) {
      return;
    }

    if (mode !== "scroll") {
      animationRef.current?.cancel();
      animationRef.current = null;

      image.style.transform = "translate3d(0, 0, 0)";
      image.style.opacity = "1";

      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;
    let isVisible = false;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

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

      if (!isVisible || motionPreference.matches) {
        return;
      }

      // Wait two animation frames for the browser to resolve
      // the final image dimensions.
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          if (!isVisible || motionPreference.matches) {
            return;
          }

          startAnimation();
        });
      });
    };

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        resetImage();
        return;
      }

      if (isVisible) {
        scheduleAnimation();
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (!isVisible) {
          animationRef.current?.pause();
          return;
        }

        if (motionPreference.matches) {
          resetImage();
          return;
        }

        if (animationRef.current) {
          animationRef.current.play();
          return;
        }

        scheduleAnimation();
      },
      {
        threshold: 0.1,
      },
    );

    if (motionPreference.matches) {
      resetImage();
    }

    if (!image.complete || image.naturalHeight === 0) {
      image.addEventListener("load", scheduleAnimation);
    }

    visibilityObserver.observe(frame);

    window.addEventListener("resize", scheduleAnimation);

    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      visibilityObserver.disconnect();

      animationRef.current?.cancel();
      animationRef.current = null;

      image.removeEventListener("load", scheduleAnimation);

      window.removeEventListener("resize", scheduleAnimation);

      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, [src, mode, startAnimation]);

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
