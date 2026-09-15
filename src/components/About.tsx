import { useReveal } from '@/hooks/useReveal';
import { GraduationCap, Code2, BrainCircuit, Lightbulb } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'BTech CSE Core · SRM IST' },
  { icon: Code2, label: 'Programming & Web Development' },
  { icon: BrainCircuit, label: 'Artificial Intelligence' },
  { icon: Lightbulb, label: 'Building student projects' },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className="reveal glass rounded-3xl border border-white/10 p-7 shadow-2xl shadow-black/40 sm:p-10 md:p-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            About Me
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Getting to know me
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
            I am Harshitha H, a first-year BTech CSE Core student at SRM IST. I am
            interested in programming, artificial intelligence, web development,
            and creating useful applications. I enjoy learning new technologies
            and experimenting with AI tools to turn ideas into projects. I want
            to improve my coding skills and understand how real-world software is
            developed.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors hover:border-galaxy-blue/40 hover:bg-white/[0.06]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-galaxy-blue/30 to-galaxy-pink/30 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-indigo-100/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
