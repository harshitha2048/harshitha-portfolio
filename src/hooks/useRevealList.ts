import { useEffect, useRef, type RefObject } from 'react';

/**
 * Staggered reveal: observes children with [data-reveal] inside the container
 * and adds 'is-visible' as each enters the viewport, creating a cascade.
 */
export function useRevealList<T extends HTMLElement = HTMLDivElement>(
  stagger = 90
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = items.indexOf(el);
            window.setTimeout(() => el.classList.add('is-visible'), index * stagger);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
