import { useRevealList } from '@/hooks/useRevealList';
import {
  Terminal,
  LayoutGrid,
  Database,
  Rocket,
  Code2,
  Map,
} from 'lucide-react';

type Milestone = {
  icon: typeof Terminal;
  title: string;
  detail: string;
};

const MILESTONES: Milestone[] = [
  {
    icon: Terminal,
    title: 'Started learning Python',
    detail: 'Took my first steps into programming with Python fundamentals.',
  },
  {
    icon: LayoutGrid,
    title: 'Explored Python interface development',
    detail: 'Experimented with building graphical interfaces using Python.',
  },
  {
    icon: Database,
    title: 'Learned SQL basics',
    detail: 'Gained an understanding of databases and writing SQL queries.',
  },
  {
    icon: Rocket,
    title: 'Created my first project — Study Planner',
    detail: 'Built a student-friendly study planning website using Bolt AI.',
  },
  {
    icon: Code2,
    title: 'Started learning C programming',
    detail: 'Currently exploring the fundamentals of the C language.',
  },
  {
    icon: Map,
    title: 'Planning to learn HTML, CSS, JavaScript, Git & GitHub',
    detail:
      'Charting the next steps in my journey toward full-stack web development.',
  },
];

export default function Journey() {
  const ref = useRevealList<HTMLDivElement>(120);

  return (
    <section id="journey" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            Learning Journey
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            How I got here
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-indigo-200/70">
            I&apos;m still learning and developing my skills — here&apos;s the
            path so far.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-galaxy-blue via-galaxy-violet to-galaxy-pink sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="space-y-8">
            {MILESTONES.map((m, i) => {
              const isRight = i % 2 === 1;
              return (
                <li
                  key={m.title}
                  data-reveal
                  className="reveal relative pl-14 sm:pl-0"
                >
                  {/* Node dot */}
                  <span className="absolute left-5 top-1.5 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-galaxy-black ring-2 ring-galaxy-pink sm:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-galaxy-pink" />
                  </span>

                  {/* Card */}
                  <div
                    className={`sm:w-[calc(50%-2rem)] ${
                      isRight
                        ? 'sm:ml-auto sm:pl-0'
                        : 'sm:mr-auto sm:pr-0'
                    }`}
                  >
                    <div className="glass glass-hover rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-2 flex items-center gap-2.5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-galaxy-blue/30 to-galaxy-pink/30 text-cyan-200">
                          <m.icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-base font-semibold text-white">
                          {m.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-indigo-100/75">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
