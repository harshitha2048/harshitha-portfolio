import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, Github, Calendar, Sparkles } from 'lucide-react';

const PROJECT_URL = 'https://student-study-planne-iq3u.bolt.host/';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative px-5 py-24 sm:py-28">
      {/* Section glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-galaxy-pink/15 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            Featured Project
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Something I built
          </h2>
        </div>

        <div
          ref={ref}
          className="reveal group relative overflow-hidden rounded-3xl border border-white/10 glass p-7 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-galaxy-pink/40 sm:p-10"
        >
          {/* Glowing border accent */}
          <div className="pointer-events-none absolute -top-px left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-galaxy-pink to-transparent" />
          <div className="pointer-events-none absolute -bottom-px right-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-galaxy-blue to-transparent" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Visual panel */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-galaxy-deepblue via-galaxy-nebula to-galaxy-violet">
                {/* Decorative planner mockup */}
                <div className="absolute inset-0 p-6 opacity-90">
                  <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-galaxy-pink/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-galaxy-blue/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
                      <div className="h-2.5 w-full rounded-full bg-white/10" />
                      <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-white/5 p-2"
                        >
                          <div className="mx-auto mb-1.5 h-6 w-6 rounded-full bg-gradient-to-br from-galaxy-blue to-galaxy-pink" />
                          <div className="mx-auto h-1.5 w-2/3 rounded-full bg-white/15" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating sparkle */}
                <Sparkles className="absolute right-5 top-5 h-6 w-6 text-galaxy-pink/70 animate-pulse-soft" />
              </div>
            </div>

            {/* Info panel */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-galaxy-pink/30 bg-galaxy-pink/10 px-3 py-1 text-xs font-medium text-pink-200">
                <Calendar className="h-3.5 w-3.5" />
                First Project · Bolt AI
              </div>

              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Study Planner
              </h3>

              <p className="mt-4 text-base leading-relaxed text-indigo-100/85">
                &ldquo;A student-friendly study planning website created using
                Bolt AI.&rdquo;
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* View Project — real external link */}
                <a
                  href={PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-galaxy-blue via-galaxy-violet to-galaxy-pink px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-galaxy-violet/40 transition-all hover:scale-[1.03] hover:shadow-galaxy-pink/40 sm:w-auto"
                >
                  View Project
                  <ExternalLink className="h-4.5 w-4.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                {/* View Code — placeholder for future GitHub repo */}
                <button
                  type="button"
                  disabled
                  className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl glass border border-white/10 px-6 py-3.5 text-base font-semibold text-indigo-200/50 sm:w-auto"
                  title="GitHub repository coming soon"
                  aria-disabled="true"
                >
                  <Github className="h-5 w-5" />
                  View Code
                  <span className="text-xs font-normal text-indigo-300/40">(soon)</span>
                </button>
              </div>
              <p className="mt-3 text-xs text-indigo-300/50">
                The View Code button will link to my GitHub repository once it is
                ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
