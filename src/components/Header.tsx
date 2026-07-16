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
      <Container
        className="
          flex
          flex-col
          items-stretch
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-0
        "
      >
        <a
          href="#top"
          aria-label="Go to homepage"
          className="
            self-start
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-neutral-100/90
            transition-colors
            duration-300
            hover:text-neutral-100
            md:text-sm
          "
        >
          HERNÁN.
        </a>

        <nav
          aria-label="Primary navigation"
          className="w-full md:w-auto"
        >
          <ul
            className="
              flex
              w-full
              items-center
              justify-between
              md:w-auto
              md:justify-start
              md:gap-7
              lg:gap-9
            "
          >
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    whitespace-nowrap
                    text-[0.55rem]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-neutral-400/80
                    transition-colors
                    duration-300
                    hover:text-neutral-100
                    sm:text-[0.64rem]
                    sm:tracking-[0.18em]
                    md:text-[0.68rem]
                    md:tracking-[0.22em]
                  "
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
