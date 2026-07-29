import { Container } from "../components/Container";

const secondaryNavigation = [
  { label: "Work", href: "/#work" },
  { label: "Lab", href: "/#lab" },
  { label: "Profile", href: "/#profile" },
  { label: "Contact", href: "/#contact" },
] as const;

export function NotFound() {
  return (
    <main
      id="top"
      className="
        min-h-[100svh]
        overflow-hidden
        py-10
        sm:py-12
        lg:py-16
      "
      aria-labelledby="not-found-title"
    >
      <Container className="flex min-h-[calc(100svh-5rem)] flex-col">
        {/* Información editorial */}
        <div className="max-w-[20rem] font-['IBM_Plex_Mono'] uppercase">
          <p className="text-[0.65rem] tracking-[0.16em] text-neutral-400 sm:text-[0.72rem]">
            404 / Route not found
          </p>

          <h1
            id="not-found-title"
            className="
              mt-8
              text-[0.72rem]
              font-normal
              leading-[1.35]
              tracking-[0.12em]
              text-neutral-300
              sm:mt-10
              sm:text-[0.8rem]
            "
          >
            <span className="block">This path doesn&apos;t lead</span>
            <span className="block">to a built system.</span>
          </h1>
        </div>

        {/* Código de error */}
        <div
          aria-hidden="true"
          className="
            flex
            flex-1
            items-center
            justify-center
            py-12
            sm:py-16
            lg:py-8
          "
        >
          <p
            className="
              whitespace-nowrap
              font-['IBM_Plex_Mono']
              font-bold
              text-[clamp(6.25rem,29vw,12rem)]
              uppercase
              leading-none
              text-neutral-600/80
              md:text-[clamp(8rem,18vw,15rem)]
            "
          >
            (404)
          </p>
        </div>

        {/* Salidas de navegación */}
        <div
          className="
            flex
            flex-col
            items-center
            pb-2
            text-center
            font-['IBM_Plex_Mono']
            uppercase
            sm:pb-4
          "
        >
          <p
            className="
              text-[0.66rem]
              tracking-[0.12em]
              text-neutral-400
              sm:text-[0.74rem]
              sm:tracking-[0.16em]
            "
          >
            Return to a valid entry point.
          </p>

          <a
            href="/"
            className="
              mt-6
              inline-flex
              min-h-11
              items-center
              justify-center
              text-[0.72rem]
              font-semibold
              tracking-[0.1em]
              text-neutral-100
              transition-opacity
              duration-300
              hover:opacity-70
              focus:outline-none
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-neutral-100
              sm:text-[0.8rem]
            "
          >
            [Return to Index]
          </a>

          <nav
            aria-label="404 page navigation"
            className="mt-5"
          >
            <ul
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-3
                sm:gap-x-8
              "
            >
              {secondaryNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      inline-flex
                      min-h-11
                      items-center
                      text-[0.64rem]
                      tracking-[0.1em]
                      text-neutral-400
                      transition-colors
                      duration-300
                      hover:text-neutral-100
                      focus:outline-none
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-neutral-100
                      sm:text-[0.72rem]
                    "
                  >
                    [{item.label}]
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </main>
  );
}
