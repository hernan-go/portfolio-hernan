import { Folder, Play } from "lucide-react";

import { Container } from "../components/Container";

type FolderLeafProps = {
  label: string;
  value: string;
  href?: string;
};

function FolderLeaf({ label, value, href }: FolderLeafProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute -left-8 top-1/2 h-px w-[3.75rem] -translate-y-1/2 bg-neutral-700"
      />

      <Folder
        size={19}
        strokeWidth={1.6}
        className="shrink-0 text-[#FFDD1F]"
        aria-hidden="true"
      />

      <p className="min-w-0 font-['IBM_Plex_Mono'] text-[0.76rem] leading-5 text-neutral-400 md:text-[0.82rem]">
        <span className="text-neutral-200 transition-colors group-hover:text-[#FFDD1F]">
          {label}
        </span>

        <span className="mx-2 text-neutral-700">/</span>

        <span className="break-alltransition-colors group-hover:text-neutral-200">
          {value}
        </span>
      </p>
    </>
  );
  const className =
    "group relative flex min-w-0 items-center gap-3 py-3 pl-10";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDD1F]`}
        aria-label={`Open ${label} profile`}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

function PhoneMockup() {
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <div className="relative aspect-[9/19] w-full max-w-[310px] rounded-[3.4rem] border border-neutral-600/80 p-3 lg:aspect-[9/20.5] lg:h-[clamp(606px,calc(70svh+3.5rem),736px)] lg:w-auto lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-3 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl border-x border-b border-neutral-600/80 bg-[#171717]"
        />

        <div className="relative h-full overflow-hidden rounded-[2.7rem] border border-neutral-700/80 bg-neutral-950/20">
          <div className="flex h-full flex-col px-3 pb-7 pt-16">
            <div className="flex flex-1 flex-col gap-6">
              <div className="-ml-2 w-[98%] self-start rounded-md bg-[#FFDD1F]/10 px-2.5 py-3">
                <p className="font-['IBM_Plex_Mono'] text-[clamp(0.58rem,0.68vw,0.68rem)] leading-5 text-[#FFDD1F]">
                  <span className="block whitespace-nowrap">
                    Hi there, I&apos;m Hernán.
                  </span>

                  <span className="block whitespace-nowrap">
                    Thanks for taking a look at my work.
                  </span>
                </p>
              </div>

              <div className="-mr-2 max-w-[84%] self-end rounded-md bg-white/[0.06] px-3 py-3">
                <p className="font-['IBM_Plex_Mono'] text-[clamp(0.56rem,0.62vw,0.64rem)] leading-5 text-neutral-400">
                  Hi Hernán — I&apos;m just looking around.
                </p>
              </div>

              <div className="-ml-2 w-[98%] self-start rounded-md bg-[#FFDD1F]/10 px-2.5 py-3">
                <p className="font-['IBM_Plex_Mono'] text-[clamp(0.58rem,0.68vw,0.68rem)] leading-5 text-[#FFDD1F]">
                  <span className="block whitespace-nowrap">
                    Take your time.
                  </span>

                  <span className="block whitespace-nowrap">
                    I recorded a short voice note too.
                  </span>
                </p>
              </div>

              <div className="-mr-2 max-w-[80%] self-end rounded-md bg-white/[0.06] px-3 py-3">
                <p className="font-['IBM_Plex_Mono'] text-[clamp(0.56rem,0.62vw,0.64rem)] leading-5 text-neutral-400">
                  Sounds good. I&apos;m listening.
                </p>
              </div>

              <div className="-ml-2 flex w-[95%] items-center gap-3 self-start rounded-md bg-[#FFDD1F]/10 px-3 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-950">
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                </span>

                <div className="flex min-w-0 flex-1 items-center justify-between gap-[2px]">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <span
                      key={index}
                      aria-hidden="true"
                      className="block w-px shrink-0 bg-neutral-300/80"
                      style={{
                        height: `${9 + ((index * 7) % 20)}px`,
                      }}
                    />
                  ))}
                </div>

                <span className="font-['IBM_Plex_Mono'] text-[0.58rem] text-neutral-400">
                  0:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactTree() {
  return (
    <div className="w-full max-w-[650px] font-['IBM_Plex_Mono'] lg:justify-self-end">
      <div className="flex items-center gap-3">
        <Folder
          size={29}
          strokeWidth={1.6}
          className="text-[#FFDD1F]"
          aria-hidden="true"
        />

        <span className="text-[1.5rem] lowercase tracking-[-0.04em] text-neutral-300 md:text-[1.8rem]">
          contact
        </span>
      </div>

      <div className="relative ml-[13px] mt-4 pb-2">
        <div className="relative border-l border-neutral-700 py-5 pl-10">
          <span
            aria-hidden="true"
            className="absolute left-0 top-9 h-px w-8 bg-neutral-700"
          />

          <div className="flex items-center gap-3">
            <Folder
              size={25}
              strokeWidth={1.6}
              className="text-[#FFDD1F]"
              aria-hidden="true"
            />

            <h3 className="text-[1.15rem] lowercase text-neutral-300 md:text-[1.35rem]">
              personal
            </h3>
          </div>

          <div className="relative ml-[11px] mt-4 border-l border-neutral-700 pl-8">
            <FolderLeaf
              label="Email"
              value="contact@hernangobulin.com"
            />

            <FolderLeaf
              label="Phone"
              value="+54 9 341 344-6372"
            />

            <FolderLeaf
              label="Location"
              value="Rosario | Santa Fe | Argentina"
            />
          </div>
        </div>

        <div className="relative py-5 pl-10">
          <span
            aria-hidden="true"
            className="absolute -top-6 left-0 h-[3.75rem] w-px bg-neutral-700"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-9 h-px w-8 bg-neutral-700"
          />

          <div className="flex items-center gap-3">
            <Folder
              size={25}
              strokeWidth={1.6}
              className="text-[#FFDD1F]"
              aria-hidden="true"
            />

            <h3 className="text-[1.15rem] lowercase text-neutral-300 md:text-[1.35rem]">
              profiles
            </h3>
          </div>

          <div className="relative ml-[11px] mt-4 border-l border-neutral-700 pl-8">
            <FolderLeaf
              label="LinkedIn"
              value="linkedin.com/in/h-l-g/"
              href="https://www.linkedin.com/in/h-l-g/"
            />

            <FolderLeaf
              label="GitHub"
              value="github.com/hernan-go"
              href="https://github.com/hernan-go"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end pr-4">
        <div className="flex flex-col items-end">
          <span
            aria-hidden="true"
            className="block h-[90px] w-[175px] bg-neutral-500/80"
            style={{
              WebkitMaskImage: "url('/signature-hernan.svg')",
              maskImage: "url('/signature-hernan.svg')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />

          <p className="-mt-2 font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.16em] text-neutral-500">
            Hernán Gobulin
          </p>
        </div>
      </div>
    </div>

  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden py-20 md:py-24"
    >
      <Container>
        <h2 className="font-['IBM_Plex_Mono'] text-[0.8rem] uppercase tracking-[0.22em] text-neutral-400">
          04 / Contact | Let&apos;s build something useful.
        </h2>

        <div className="mx-auto mt-7 grid w-full max-w-[1100px] gap-16 lg:translate-x-32 lg:grid-cols-[310px_minmax(0,1fr)] lg:items-center lg:gap-28 xl:translate-x-38 min-[1880px]:translate-x-0">
          <PhoneMockup />
          <ContactTree />
        </div>
      </Container>
    </section>
  );
}
