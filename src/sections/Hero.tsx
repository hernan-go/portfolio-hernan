import heroImage from "../assets/hero-hernan.webp";

import { Container } from "../components/Container";
import { profile } from "../data/profile";

type AnimatedLineProps = {
  text: string;
  className: string;
  startDelay: number;
};

function AnimatedLine({
  text,
  className,
  startDelay,
}: AnimatedLineProps) {
  return (
    <span
      className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className}`}
    >
      <span className="sr-only">{text}</span>

      <span
        aria-hidden="true"
        className="block whitespace-nowrap"
      >
        {Array.from(text).map((character, index) => (
          <span
            key={`${character}-${index}`}
            className="hero-letter-rise inline-block"
            style={{
              animationDelay: `${startDelay + index * 32}ms`,
            }}
          >
            {character === " " ? "\u00A0" : character}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="index"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-32"
    >
      {/* Metadata superior */}
      <Container>
        <p className="absolute top-[19%] z-30 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-neutral-500 md:text-[0.74rem]">
          00 / Hero | {profile.role}
        </p>
      </Container>

      {/* Statement principal fuera del Container */}
      <div className="absolute left-0 top-[26%] z-20 w-max">
        <h1 className="font-['Archivo_Black'] text-[clamp(4.5rem,9.8vw,9.2rem)] uppercase leading-[0.78] tracking-[-0.02em]">
          <AnimatedLine
            text="Software"
            startDelay={250}
            className="text-[#555555]"
          />

          <AnimatedLine
            text="Built for"
            startDelay={620}
            className="text-[#8A8A8A]"
          />

          <AnimatedLine
            text="Real needs"
            startDelay={990}
            className="text-[#D2CEC4]"
          />
      </h1>

        {/* Identificación alineada debajo del extremo derecho de NEEDS */}
        <div className="mt-7 flex justify-end pr-[0.4vw] font-['IBM_Plex_Mono']">
          <div className="text-left">
            <p className="text-[0.76rem] font-semibold text-neutral-200 md:text-[0.82rem]">
              {profile.name}
            </p>

            <p className="mt-3 whitespace-nowrap text-[0.66rem] text-neutral-500 md:text-[0.72rem]">
              {profile.stack.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* Fotografía desktop/notebook */}
      <div className="pointer-events-none absolute right-[7%] top-[23.5%] z-10 hidden w-[clamp(350px,25vw,450px)] lg:block">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="
            h-auto
            w-full
            select-none
            object-contain
            grayscale
            mix-blend-lighten
            opacity-[0.45]
          "
        />
      </div>

      {/* Fotografía mobile */}
      <div className="absolute bottom-[5%] right-[-12%] z-10 w-[65%] max-w-[310px] lg:hidden">
        <img
          src={heroImage}
          alt="Portrait of Hernán Gobulin"
          className="
            h-auto
            w-full
            select-none
            object-contain
            grayscale
            mix-blend-lighten
            opacity-[0.45]
          "
        />
      </div>
    </section>
  );
}
