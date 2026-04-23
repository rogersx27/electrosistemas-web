import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold || 0.2, // Default: 20% visible
      rootMargin: options.rootMargin || '0px'
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        // Once triggered, stop observing (one-time animation)
        if (options.once !== false) {
          observer.disconnect();
        }
      } else if (!options.once) {
        setInView(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return { ref, inView };
}
