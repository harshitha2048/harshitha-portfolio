import { useRevealList } from '@/hooks/useRevealList';
import {
  Code2,
  BrainCircuit,
  Globe,
  Palette,
  Wrench,
  BookOpen,
  Target,
  Brain,
  Layers,
  Rocket,
  Briefcase,
  Users,
} from 'lucide-react';

const INTERESTS = [
  { icon: Code2, label: 'Programming' },
  { icon: BrainCircuit, label: 'Artificial intelligence' },
  { icon: Globe, label: 'Web development' },
  { icon: Palette, label: 'Creative technology projects' },
  { icon: Wrench, label: 'Building useful applications for students' },
  { icon: BookOpen, label: 'Learning new software tools' },
];

const GOALS = [
  { icon: Target, label: 'Become a strong software developer' },
  { icon: Brain, label: 'Improve problem-solving skills' },
  { icon: Layers, label: 'Learn data structures and algorithms' },
  { icon: Rocket, label: 'Build more real-world projects' },
  { icon: Briefcase, label: 'Explore AI-related career opportunities' },
  { icon: Users, label: 'Contribute to technical clubs and projects' },
];

export default function Goals() {
  const ref = useRevealList<HTMLDivElement>(70);

  return (
    <section id="goals" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            Interests &amp; Future Goals
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Where I&apos;m headed
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-indigo-200/70">
            These are aspirations I&apos;m working toward — not completed
            achievements.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Interests */}
          <div className="glass rounded-3xl border border-white/10 p-6 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-galaxy-blue to-galaxy-violet text-cyan-200">
                <BookOpen className="h-5 w-5" />
              </span>
              My Interests
            </h3>
            <ul className="space-y-3">
              {INTERESTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  data-reveal
                  className="reveal flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors hover:border-galaxy-blue/40 hover:bg-white/[0.06]"
                >
                  <Icon className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm font-medium text-indigo-100/90">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals */}
          <div className="glass rounded-3xl border border-white/10 p-6 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-galaxy-violet to-galaxy-pink text-pink-200">
                <Target className="h-5 w-5" />
              </span>
              Future Goals
            </h3>
            <ul className="space-y-3">
              {GOALS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  data-reveal
                  className="reveal flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors hover:border-galaxy-pink/40 hover:bg-white/[0.06]"
                >
                  <Icon className="h-5 w-5 shrink-0 text-pink-300" />
                  <span className="text-sm font-medium text-indigo-100/90">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
