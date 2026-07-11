import { Container } from "./Container";

const navigation = [
  { label: "Index", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header () {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-7 md:py-8">
      <Container className="flex items-center justify-between">
        <a
        href="#top"
        aria-label="Go to homepage"
        className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-100/90 transition-colors duration-300 hover:text-neutral-100 md:text-sm"
        >
          HG.
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-3 sm:gap-5 md:gap-7 lg:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-neutral-400/80 transition-colors duration-300 hover:text-neutral-100 sm:text-[0.64rem] md:text-[0.68rem] md:tracking-[0.22em]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
