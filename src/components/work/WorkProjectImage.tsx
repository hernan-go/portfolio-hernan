import {
  useCallback,
  useEffect,
  useRef,
} from "react";

type WorkProjectImageProps = {
  src?: string;
  alt?: string;
};

export function WorkProjectImage({
  src,
  alt = "",
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

    animationRef.current?.cancel();

    image.style.transform = "translate3d(0, 0, 0)";
    image.style.opacity = "1";

    const imageHeight = image.offsetHeight;
    const frameHeight = frame.clientHeight;

    const scrollDistance = Math.max(
      0,
      imageHeight - frameHeight,
    );

    if (scrollDistance <= 1) {
      return;
    }

    /*
     * Velocidad vertical expresada en píxeles por segundo.
     * La ajustaremos después de comprobar el funcionamiento.
     */
    const pixelsPerSecond = 45;

    const initialPause = 1000;
    const travelDuration =
      (scrollDistance / pixelsPerSecond) * 1000;
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

    const scrollStart =
      initialPause / totalDuration;

    const scrollEnd =
      (initialPause + travelDuration) /
      totalDuration;

    const finalPauseEnd =
      (
        initialPause +
        travelDuration +
        finalPause
      ) / totalDuration;

    const fadeOutEnd =
      (
        initialPause +
        travelDuration +
        finalPause +
        fadeOutDuration
      ) / totalDuration;

    const resetEnd =
      (
        initialPause +
        travelDuration +
        finalPause +
        fadeOutDuration +
        resetDuration
      ) / totalDuration;

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
  }, [src]);

  useEffect(() => {
    const image = imageRef.current;

    if (!src || !image) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;

    const scheduleAnimation = () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      /*
       * Esperamos dos frames para garantizar que el navegador
       * haya calculado el ancho y la altura finales de la imagen.
       */
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          startAnimation();
        });
      });
    };

    if (
      image.complete &&
      image.naturalHeight > 0
    ) {
      scheduleAnimation();
    } else {
      image.addEventListener(
        "load",
        scheduleAnimation,
      );
    }

    window.addEventListener(
      "resize",
      scheduleAnimation,
    );

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      animationRef.current?.cancel();

      image.removeEventListener(
        "load",
        scheduleAnimation,
      );

      window.removeEventListener(
        "resize",
        scheduleAnimation,
      );
    };
  }, [src, startAnimation]);

  return (
    <div
      ref={frameRef}
      className="relative hidden aspect-[16/10] overflow-hidden bg-neutral-800/55 md:block min-[1880px]:aspect-[5/4]"
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
          className="absolute inset-x-0 top-0 h-auto w-full select-none will-change-transform"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-neutral-500">
          Main project image
        </div>
      )}
    </div>
  );
}
