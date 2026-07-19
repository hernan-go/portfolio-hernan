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

const accentBar = "rgba(99, 119, 146, 0.72)";
const cardPanel = "rgba(99, 119, 146, 0.1)";
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
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <p
        id="profile"
        className="scroll-mt-10 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400 md:mb-7 md:text-xs">
          {profileToolchainEyebrow}
        </p>

        <div className="relative pb-15 md:pb-52">
          <div className="relative z-10 grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {profileToolchainCards.map((card) => (
              <article key={card.title} className="relative">
                <h3 className="mb-0 min-h-[64px] text-[1.95rem] font-black uppercase leading-[0.92] tracking-tight text-zinc-100 md:min-h-[30px] md:text-[1.3rem]">
                  {card.title}
                </h3>

                <div
                  className="mb-3 h-4 w-full"
                  style={{ backgroundColor: accentBar }}
                />

                <div
                  className="h-[256px] border border-white/[0.03] px-5 py-3"
                  style={{ backgroundColor: cardPanel }}
                >
                  <ul className="space-y-[14px]">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-mono text-[15px] leading-6 tracking-[-0.02em] text-zinc-200 md:text-[16px]"
                      >
                        <img
                          src={toolchainIcons[item]}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 object-contain opacity-90"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 h-[80px] bg-[#d6d5d2]/92 px-4 py-2">
                  <p className="font-mono text-[12.5px] font-medium leading-[1.55] text-zinc-800">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 z-0 w-screen -translate-x-1/2 select-none overflow-hidden whitespace-nowrap text-center text-[17vw] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.08] md:-bottom-8 md:text-[clamp(5.5rem,17vw,18rem)]">
            <span className="inline-block md:origin-center md:scale-x-[1.04]">
              TOOLCHAIN
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
