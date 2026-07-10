import { Container } from "../components/Container";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="min-h-screen px-6 py-10">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-400">
          {profile.role}
        </p>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-neutral-100 md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          {profile.stack.join(" · ")}
        </p>
      </Container>
    </section>
  );
}
