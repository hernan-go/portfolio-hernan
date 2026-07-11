import { Container } from "../components/Container";

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <Container>
        <p className="mb-6 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.28em] text-neutral-400">
          01 / Selected Work
        </p>
      </Container>

        <h2 className="-ml-[0.065em] font-['Archivo_Black'] text-[clamp(3rem,12vw,11rem)]  uppercase leading-[0.82] tracking-[-0.05em] text-neutral-800">
          <span className="block">Purpose-</span>
          <span className="block">Built</span>
        </h2>

      <Container>
        <p className="mt-8 max-w-xl font-['IBM_Plex_Mono'] text-sm leading-6 text-neutral-400">
          Interfaces and systems built around real needs.
        </p>
      </Container>
    </section>
  );
}
