import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [display, setDisplay] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [finalValues, setFinalValues] = useState(calculateTimeLeft());
  const [animated, setAnimated] = useState(false);

  // One-time count-up animation on mount
  useEffect(() => {
    if (animated) return;
    Object.entries(finalValues).forEach(([key, value]) => {
      let start = 0;
      const end = value as number;
      if (end === 0) return;

      const step = Math.max(1, Math.floor(end / 50));
      const interval = setInterval(() => {
        start += step;
        setDisplay((prev) => ({
          ...prev,
          [key]: start >= end ? end : start,
        }));
        if (start >= end) clearInterval(interval);
      }, 20);
    });
    setAnimated(true);
  }, [finalValues, animated]);

  // Live ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      const newValues = calculateTimeLeft();
      setFinalValues(newValues);
      setDisplay(newValues);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: display.days },
    { label: "Hours", value: display.hours },
    { label: "Minutes", value: display.minutes },
    { label: "Seconds", value: display.seconds },
  ];

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-3 md:gap-4">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center rounded-lg border border-gold/25 bg-charcoal/60 px-3 py-2.5 backdrop-blur-sm sm:px-5 sm:py-3"
        >
          <span className="font-display text-2xl font-bold leading-none text-gradient-gold tabular-nums sm:text-3xl md:text-4xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1.5 font-sans text-[9px] uppercase tracking-[0.2em] text-ivory/60 sm:text-[10px] md:text-xs">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
