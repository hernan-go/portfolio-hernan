import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { Folder, Pause, Play } from "lucide-react";

import { Container } from "../components/Container";

const CONVERSATION_DELAYS = [2500, 6500, 10700, 15950, 20400] as const;

const TYPING_LEAD_MS = 700;
const AUDIO_PATH = "/audio/hernan-voice-note.mp3";

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

        <span className="break-all transition-colors group-hover:text-neutral-200">
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


type PhoneMockupProps = {
  visibleMessages: number;
  typingMessage: number | null;
};



type MessageSender = "hernan" | "visitor";

type TypingIndicatorProps = {
  sender: MessageSender;
};

function TypingIndicator({ sender }: TypingIndicatorProps) {
  const isHernan = sender === "hernan";

  return (
    <div
      className={`contact-message-enter flex w-fit items-center gap-1 rounded-md px-3 py-3 ${
        isHernan
          ? "-ml-2 self-start bg-[#FFDD1F]/10"
          : "-mr-2 self-end bg-white/[0.06]"
      }`}
    >
      <span className="sr-only">
        {isHernan ? "Hernán is typing" : "Visitor is typing"}
      </span>

      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`contact-typing-dot block size-1.5 rounded-full ${
            isHernan ? "bg-[#FFDD1F]" : "bg-neutral-400"
          }`}
          style={{
            animationDelay: `${index * 140}ms`,
          }}
        />
      ))}
    </div>
  );
}

function formatAudioTime(seconds: number) {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function VoiceMessage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !isReady || hasError) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (audio.ended) {
      audio.currentTime = 0;
      setCurrentTime(0);
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextTime = Number(event.target.value);

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const displayedTime =
    isReady && currentTime === 0 ? duration : currentTime;

  return (
    <div className="contact-message-enter -ml-2 flex w-[95%] items-center gap-3 self-start rounded-md bg-[#FFDD1F]/10 px-3 py-3">
      <audio
        ref={audioRef}
        src={AUDIO_PATH}
        preload="metadata"
        onLoadedMetadata={() => {
          const audio = audioRef.current;

          if (!audio) {
            return;
          }

          setDuration(
            Number.isFinite(audio.duration) ? audio.duration : 0,
          );
          setIsReady(true);
          setHasError(false);
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current?.currentTime ?? 0);
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onEnded={() => {
          setIsPlaying(false);
        }}
        onError={() => {
          setHasError(true);
          setIsReady(false);
          setIsPlaying(false);
        }}
      />

      <button
        type="button"
        onClick={togglePlayback}
        disabled={!isReady || hasError}
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-950 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDD1F] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={
          hasError
            ? "Voice message unavailable"
            : isPlaying
              ? "Pause Hernán's voice message"
              : "Play Hernán's voice message"
        }
      >
        {isPlaying ? (
          <Pause size={16} fill="currentColor" aria-hidden="true" />
        ) : (
          <Play size={16} fill="currentColor" aria-hidden="true" />
        )}
      </button>

      <input
        type="range"
        min="0"
        max={duration || 0}
        step="0.01"
        value={currentTime}
        onChange={handleSeek}
        disabled={!isReady || hasError}
        className="h-1 min-w-0 flex-1 cursor-pointer accent-[#FFDD1F] disabled:cursor-not-allowed"
        aria-label="Voice message progress"
        aria-valuetext={`${formatAudioTime(currentTime)} of ${formatAudioTime(
          duration,
        )}`}
      />

      <span className="shrink-0 font-['IBM_Plex_Mono'] text-[0.55rem] text-neutral-400">
        {hasError ? "--:--" : formatAudioTime(displayedTime)}
      </span>
    </div>
  );
}


function PhoneMockup({
  visibleMessages,
  typingMessage,
}: PhoneMockupProps) {
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <div className="relative aspect-[9/19] w-full max-w-[310px] rounded-[3.4rem] border border-neutral-600/80 p-3 lg:aspect-auto lg:h-[clamp(606px,calc(70svh+3.5rem),736px)] lg:w-[310px] lg:max-w-[310px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-3 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl border-x border-b border-neutral-600/80 bg-[#171717]"
        />

        <div className="relative h-full overflow-hidden rounded-[2.7rem] border border-neutral-700/80 bg-neutral-950/20">
          <div className="flex h-full flex-col px-3 pb-7 pt-16">
            <div
              className="flex flex-1 flex-col gap-6"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Introductory conversation with Hernán"
            >

              {typingMessage === 0 && <TypingIndicator sender="hernan" />}
              {visibleMessages >= 1 && (
                <div className="contact-message-enter -ml-2 w-[98%] self-start rounded-md bg-[#FFDD1F]/10 px-2.5 py-3">
                  <p className="font-['IBM_Plex_Mono'] text-[clamp(0.58rem,0.68vw,0.68rem)] leading-5 text-[#FFDD1F]">
                    <span className="block whitespace-nowrap">
                      Hi there, I&apos;m Hernán.
                    </span>

                    <span className="block whitespace-nowrap">
                      Thanks for taking a look at my work.
                    </span>
                  </p>
                </div>
              )}

              {typingMessage === 1 && <TypingIndicator sender="visitor" />}
              {visibleMessages >= 2 && (
                <div className="contact-message-enter -mr-2 max-w-[84%] self-end rounded-md bg-white/[0.06] px-3 py-3">
                  <p className="font-['IBM_Plex_Mono'] text-[clamp(0.56rem,0.62vw,0.64rem)] leading-5 text-neutral-400">
                    Hi Hernán — I&apos;m just looking around.
                  </p>
                </div>
              )}

              {typingMessage === 2 && <TypingIndicator sender="hernan" />}
              {visibleMessages >= 3 && (
                <div className="contact-message-enter -ml-2 w-[98%] self-start rounded-md bg-[#FFDD1F]/10 px-2.5 py-3">
                  <p className="font-['IBM_Plex_Mono'] text-[clamp(0.58rem,0.68vw,0.68rem)] leading-5 text-[#FFDD1F]">
                    <span className="block whitespace-nowrap">
                      Take your time.
                    </span>

                    <span className="block whitespace-nowrap">
                      I recorded a short voice note too.
                    </span>
                  </p>
                </div>
              )}

              {typingMessage === 3 && <TypingIndicator sender="visitor" />}
              {visibleMessages >= 4 && (
                <div className="contact-message-enter -mr-2 max-w-[80%] self-end rounded-md bg-white/[0.06] px-3 py-3">
                  <p className="font-['IBM_Plex_Mono'] text-[clamp(0.56rem,0.62vw,0.64rem)] leading-5 text-neutral-400">
                    Sounds good. I&apos;m listening.
                  </p>
                </div>
              )}

              {typingMessage === 4 && <TypingIndicator sender="hernan" />}
              {visibleMessages >= 5 && <VoiceMessage />}
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
  const phoneTriggerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typingMessage, setTypingMessage] = useState<number | null>(
    null,
  );

 useEffect(() => {
  const phoneTrigger = phoneTriggerRef.current;

  if (!phoneTrigger) {
    return;
  }

  const timers: number[] = [];

  const startConversation = () => {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;

    CONVERSATION_DELAYS.forEach((delay, index) => {
      const typingDelay = Math.max(0, delay - TYPING_LEAD_MS);

      const typingTimer = window.setTimeout(() => {
        setTypingMessage(index);
      }, typingDelay);

      const messageTimer = window.setTimeout(() => {
        setTypingMessage((currentTypingMessage) =>
          currentTypingMessage === index
            ? null
            : currentTypingMessage,
        );

        setVisibleMessages(index + 1);
      }, delay);

      timers.push(typingTimer, messageTimer);
    });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      startConversation();
      observer.disconnect();
    },
    {
      threshold: 0.55,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  observer.observe(phoneTrigger);

  return () => {
    observer.disconnect();

    timers.forEach((timer) => {
      window.clearTimeout(timer);
    });
  };
}, []);

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
          <div ref={phoneTriggerRef}>
            <PhoneMockup
            visibleMessages={visibleMessages}
            typingMessage={typingMessage}
          />
          </div>

          <ContactTree />
        </div>
      </Container>
    </section>
  );
}
