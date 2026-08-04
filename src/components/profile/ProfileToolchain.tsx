import { Container } from "../Container";
import {
  profileToolchainCards,
  profileToolchainEyebrow,
} from "../../data/profileToolchain";

import reactIcon from "../../assets/profile/toolchain/react.svg";
import typescriptIcon from "../../assets/profile/toolchain/typescript.svg";
import javascriptIcon from "../../assets/profile/toolchain/javascript.svg";
import tailwindIcon from "../../assets/profile/toolchain/tailwind-css.svg";

import wordpressIcon from "../../assets/profile/toolchain/wordpress.svg";
import woocommerceIcon from "../../assets/profile/toolchain/woocommerce.svg";
import moodleIcon from "../../assets/profile/toolchain/moodle.svg";

import restApiIcon from "../../assets/profile/toolchain/rest-api.svg";
import mysqlIcon from "../../assets/profile/toolchain/mysql.svg";
import jsonIcon from "../../assets/profile/toolchain/json.svg";

import gitIcon from "../../assets/profile/toolchain/git.svg";
import githubIcon from "../../assets/profile/toolchain/github.svg";
import viteIcon from "../../assets/profile/toolchain/vite.svg";
import figmaIcon from "../../assets/profile/toolchain/figma.svg";
import coreldrawIcon from "../../assets/profile/toolchain/coreldraw.svg";
import trelloIcon from "../../assets/profile/toolchain/trello.svg";

import containerFrame from "../../assets/profile/toolchain/container-frame.svg";

const toolchainIcons: Record<string, string> = {
  React: reactIcon,
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  "Tailwind CSS": tailwindIcon,

  WordPress: wordpressIcon,
  WooCommerce: woocommerceIcon,
  Moodle: moodleIcon,

  "REST APIs": restApiIcon,
  MySQL: mysqlIcon,
  JSON: jsonIcon,

  Git: gitIcon,
  GitHub: githubIcon,
  Vite: viteIcon,
  Figma: figmaIcon,
  CorelDRAW: coreldrawIcon,
  Trello: trelloIcon,
};

export default function ProfileToolchain() {
  const [sectionTitle, sectionDescriptor] =
    profileToolchainEyebrow.split(" | ");

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <h2
          id="profile"
          className="scroll-mt-10 mb-6 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-neutral-200 md:mb-7 md:text-[0.74rem]"
        >
          <span className="md:hidden">
            <span className="block">{sectionTitle} |</span>
            <span className="mt-1 block">{sectionDescriptor}</span>
          </span>

          <span className="hidden md:inline">{profileToolchainEyebrow}</span>
        </h2>

        <div
          className="
            mb-7
            grid
            gap-5
            md:mb-8
            lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]
            lg:items-center
            lg:gap-10
          "
        >
          <p
            className="
              max-w-[19ch]
              text-[clamp(2.4rem,4vw,4.2rem)]
              font-black
              uppercase
              leading-[0.86]
              tracking-[-0.025em]
              text-zinc-100
            "
          >
            <span className="block">The product</span>
            <span className="block">defines the stack.</span>
          </p>

          <p
            className="
              max-w-[54ch]
              text-[0.95rem]
              leading-[1.7]
              text-neutral-300
              md:text-[1rem]
              lg:pb-1
            "
          >
            I choose technologies according to the product, its users and the
            conditions in which it needs to operate. The goal is to build
            something useful, maintainable and ready to evolve—not to force
            every problem into the same stack.
          </p>
        </div>

        <div className="relative pb-15 md:pb-52">
          <div className="relative z-10 grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {profileToolchainCards.map((card) => (
              <article key={card.title} className="relative">
                <h3
                  className="
                  mb-3
                  min-h-0
                  text-[1.95rem]
                  font-black
                  uppercase
                  leading-[0.92]
                  tracking-tight
                  text-zinc-100
                  md:mb-0
                  md:min-h-[30px]
                  md:text-[1.3rem]
                "
                >
                  {card.title}
                </h3>

                <div className="relative h-[320px] overflow-hidden px-9 py-14">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#637792]/35"
                    style={{
                      WebkitMaskImage: `url(${containerFrame})`,
                      maskImage: `url(${containerFrame})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 100%",
                    }}
                  />

                  <ul className="relative z-10 ml-8 space-y-2.5 sm:ml-0">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="
                        flex
                        items-center
                        gap-3.5
                        font-mono text-[16px]
                        font-semibold
                        leading-6
                        tracking-[-0.02em]
                        text-zinc-100
                        md:text-[17px]"
                      >
                        <img
                          src={toolchainIcons[item]}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 object-contain opacity-95"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="
                    mx-6.5
                    mt-4
                    h-auto
                    min-h-[80px]
                    bg-[#d6d5d2]/92
                    px-4
                    py-3
                    sm:mx-0
                    sm:h-[80px]
                    sm:min-h-0
                    sm:py-2
                  "
                >
                  <p className="font-mono text-[12.5px] font-medium leading-[1.55] text-zinc-800">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 z-0 w-screen -translate-x-1/2 select-none overflow-hidden whitespace-nowrap text-center text-[17vw] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.05] md:-bottom-[5.2rem] md:text-[clamp(5.5rem,17vw,18rem)]">
            <span className="inline-block md:origin-center md:scale-x-[1.04]">
              TOOLCHAIN
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
