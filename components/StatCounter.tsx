"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(end: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, start]);

  return count;
}

export default function StatCounter({ value, suffix = "", label, duration = 2000 }: StatCounterProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const count = useCountUp(value, duration, inView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
}