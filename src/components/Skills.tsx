import { useRevealList } from '@/hooks/useRevealList';
import {
  Terminal,
  LayoutGrid,
  Database,
  Code2,
  Bot,
  MessageSquare,
  Globe,
  GitBranch,
} from 'lucide-react';

type SkillStatus = 'learned' | 'learning' | 'exploring' | 'next';

type Skill = {
  name: string;
  icon: typeof Terminal;
  status: SkillStatus;
};

const STATUS_META: Record<
  SkillStatus,
  { label: string; classes: string; dot: string }
> = {
  learned: {
    label: 'Learned',
    classes: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
    dot: 'bg-emerald-400',
  },
  learning: {
    label: 'Currently learning',
    classes: 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
    dot: 'bg-cyan-400',
  },
  exploring: {
    label: 'Exploring',
    classes: 'text-violet-300 border-violet-400/30 bg-violet-400/10',
    dot: 'bg-violet-400',
  },
  next: {
    label: 'Next to learn',
    classes: 'text-amber-300 border-amber-400/30 bg-amber-400/10',
    dot: 'bg-amber-400',
  },
};

const SKILLS: Skill[] = [
  { name: 'Python', icon: Terminal, status: 'learned' },
  { name: 'Python Interface Development', icon: LayoutGrid, status: 'learned' },
  { name: 'SQL', icon: Database, status: 'learned' },
  { name: 'C Programming', icon: Code2, status: 'learning' },
  { name: 'Bolt AI', icon: Bot, status: 'exploring' },
  { name: 'ChatGPT', icon: MessageSquare, status: 'exploring' },
  { name: 'HTML, CSS & JavaScript', icon: Globe, status: 'next' },
  { name: 'Git & GitHub', icon: GitBranch, status: 'next' },
];

export default function Skills() {
  const ref = useRevealList<HTMLDivElement>(80);

  return (
    <section id="skills" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            What I&apos;m working with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-indigo-200/70">
            A snapshot of technologies I&apos;ve learned, am currently learning,
            and plan to explore next.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SKILLS.map(({ name, icon: Icon, status }) => {
            const meta = STATUS_META[status];
            return (
              <div
                key={name}
                data-reveal
                className="reveal glass glass-hover group rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-galaxy-blue/25 to-galaxy-pink/25 text-cyan-200 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${meta.classes}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${meta.dot} animate-pulse-soft`} />
                    {meta.label}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
