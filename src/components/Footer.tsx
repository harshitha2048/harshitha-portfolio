import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-2xl border border-white/10 px-6 py-8 text-center">
          <div className="mb-4 flex justify-center">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-galaxy-blue via-galaxy-violet to-galaxy-pink text-white shadow-lg shadow-galaxy-violet/40">
              <Sparkles className="h-5 w-5" />
            </span>
          </div>
          <p className="font-display text-base font-medium text-white">
            Created by Harshitha H.
          </p>
          <p className="mt-2 text-xs text-indigo-300/50">
            First-year BTech CSE Core · SRM IST
          </p>
        </div>
      </div>
    </footer>
  );
}
