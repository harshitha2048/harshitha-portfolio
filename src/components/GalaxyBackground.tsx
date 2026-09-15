import { useMemo } from 'react';

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

const STAR_COUNT = 120;

function makeStars(count: number, seed: number): Star[] {
  // simple seeded pseudo-random for stable star layout
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  return Array.from({ length: count }, (_, i) => {
    const size = rand() * 2.2 + 0.6;
    return {
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size,
      delay: rand() * 5,
      duration: rand() * 4 + 3,
      opacity: rand() * 0.6 + 0.3,
    };
  });
}

export default function GalaxyBackground() {
  const stars = useMemo(() => makeStars(STAR_COUNT, 42), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-galaxy-black"
    >
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#0e0a3e_0%,transparent_55%),radial-gradient(ellipse_at_85%_85%,#2a0b4e_0%,transparent_50%),radial-gradient(ellipse_at_50%_50%,#06051a_0%,#02030a_100%)]" />

      {/* Nebula clouds */}
      <div className="absolute top-[5%] left-[10%] h-[380px] w-[380px] rounded-full bg-galaxy-violet/30 blur-[110px] animate-pulse-glow" />
      <div className="absolute top-[40%] right-[8%] h-[320px] w-[320px] rounded-full bg-galaxy-pink/22 blur-[120px] animate-pulse-glow [animation-delay:1.2s]" />
      <div className="absolute bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-galaxy-blue/22 blur-[120px] animate-pulse-glow [animation-delay:2.4s]" />
      <div className="absolute top-[70%] left-[60%] h-[260px] w-[260px] rounded-full bg-cyan-500/12 blur-[100px] animate-pulse-glow [animation-delay:0.6s]" />

      {/* Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: '0 0 6px rgba(255,255,255,0.8)',
          }}
        />
      ))}

      {/* Slow drifting star streaks (visual depth, not heavy) */}
      <div className="absolute inset-x-0 top-0 h-full opacity-40">
        <div className="absolute top-[20%] left-0 h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent animate-drift-x" />
        <div className="absolute top-[55%] left-0 h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-200 to-transparent animate-drift-x-rev" />
        <div className="absolute top-[80%] left-0 h-[1px] w-20 bg-gradient-to-r from-transparent via-pink-200 to-transparent animate-drift-x [animation-duration:22s]" />
      </div>

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(130,130,220,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(130,130,220,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
