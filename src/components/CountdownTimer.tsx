"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string
  label?: string;
  className?: string;
}

export function CountdownTimer({ targetDate, label, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className={className}>
      {label && (
        <p className="text-sm font-bold uppercase tracking-widest text-accent-green mb-4">
          {label}
        </p>
      )}
      <div className="flex gap-3">
        {timeBlocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl glass-strong border border-border-default flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-text-muted">
                {block.label}
              </span>
            </div>
            {i < timeBlocks.length - 1 && (
              <span className="text-2xl text-accent-green font-bold mt-[-1rem]">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
