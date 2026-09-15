import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-24 pb-16"
    >
      {/* Decorative orbit ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(680px,85vw)] w-[min(680px,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-spin-slow"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,0.6)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(520px,65vw)] w-[min(520px,65vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] animate-spin-slow [animation-direction:reverse]"
      >
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-galaxy-pink shadow-[0_0_12px_4px_rgba(255,79,163,0.6)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200 animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-galaxy-pink" />
          SRM IST · BTech CSE Core
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl font-bold leading-tight text-white text-glow-white animate-fade-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards] sm:text-6xl md:text-7xl"
        >
          Harshitha <span className="text-glow-pink text-galaxy-pink">H</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 text-lg font-medium text-indigo-100/90 animate-fade-up [animation-delay:0.25s] opacity-0 [animation-fill-mode:forwards] sm:text-xl"
        >
          First-year BTech CSE Core Student at SRM IST
        </p>

        {/* Tagline */}
        <p
          className="mx-auto mt-4 max-w-xl text-base italic text-indigo-200/70 animate-fade-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards] sm:text-lg"
        >
          &ldquo;Exploring the universe of code and AI technology.&rdquo;
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-up [animation-delay:0.55s] opacity-0 [animation-fill-mode:forwards] sm:flex-row"
        >
          <a
            href="#skills"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-galaxy-blue via-galaxy-violet to-galaxy-pink px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-galaxy-violet/40 transition-all hover:scale-[1.03] hover:shadow-galaxy-pink/40 sm:w-auto"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            Explore My Skills
          </a>
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl glass glass-hover px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.03] sm:w-auto"
          >
            View My Project
            <span className="text-galaxy-pink transition-transform group-hover:translate-y-0.5">&darr;</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <span className="h-2 w-1 rounded-full bg-white/70 animate-pulse-soft" />
          </span>
        </div>
      </div>
    </section>
  );
}
