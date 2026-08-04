import type { LabProject } from "../../data/labProjects";

type LabStatusBarProps = {
  status: LabProject["status"];
  isActive: boolean;
};

export function LabStatusBar({ status, isActive }: LabStatusBarProps) {
  return (
    <footer
      className="
        relative
        h-[2.35rem]
        shrink-0
        overflow-hidden
      "
    >
      {/* Lower shadow of the angled status piece */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-y-0
          right-0
          w-[80%]
          translate-x-[-0.35rem]
          translate-y-[0.4rem]
          bg-black/50
          blur-[5px]
          [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]
        "
      />

      {/* Main status piece */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          flex
          w-[75%]
          items-center
          bg-[linear-gradient(90deg,rgba(22,22,22,0.96)_0%,rgba(63,58,76,0.96)_42%,#685F80_68%,#8C82A7_100%)]
          pl-12
          pr-12
          [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]
        "
      >
        <p
          aria-live="polite"
          className="
            whitespace-nowrap
            font-['IBM_Plex_Mono']
            text-[0.70rem]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-neutral-100
          "
        >
          Status: <span className="text-[#D0C9DE]">{status}</span>
        </p>

        <span
          key={status}
          aria-hidden="true"
          className={`
            absolute
            right-5
            top-1/2
            size-2.5
            -translate-y-1/2
            rounded-full
            border
            transition-all
            duration-1000
            ${
              isActive
                ? `
                  animate-[pulse_2.2s_ease-in-out_1]
                  motion-reduce:animate-none
                  border-[#E4DFF0]
                  bg-[#D6CFE6]
                  opacity-100
                  shadow-[0_0_6px_rgba(214,207,230,1),0_0_16px_rgba(140,130,167,0.95)]
                `
                : `
                  border-neutral-700
                  bg-neutral-800
                  opacity-40
                  shadow-none
                `
            }
          `}
        />

        <span className="sr-only">
          {isActive ? "Selected project" : "Project not selected"}
        </span>
      </div>
    </footer>
  );
}
