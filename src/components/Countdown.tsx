import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [display, setDisplay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [finalValues, setFinalValues] = useState(calculateTimeLeft());
  const [animated, setAnimated] = useState(false);

  // Animate count-up only once at load
  useEffect(() => {
    if (animated) return; // prevent re-run
    Object.entries(finalValues).forEach(([key, value]) => {
      let start = 0;
      const end = value as number;
      if (end === 0) return;

      const step = Math.max(1, Math.floor(end / 50));
      const interval = setInterval(() => {
        start += step;
        setDisplay((prev: any) => ({
          ...prev,
          [key]: start >= end ? end : start,
        }));
        if (start >= end) clearInterval(interval);
      }, 20);
    });
    setAnimated(true);
  }, [finalValues, animated]);

  // Normal countdown ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      const newValues = calculateTimeLeft();
      setFinalValues(newValues);
      setDisplay(newValues); // keep seconds live
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center mt-16 text-center">
      {Object.entries(display).map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center bg-white backdrop-blur-md px-4 py-2 rounded-xl shadow-lg"
        >
          <span className="text-3xl font-bold text-purple transition-all duration-300">
            {String(value).padStart(2, "0")}
          </span>
          <span className="uppercase text-xs text-pink">{label}</span>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center bg-white backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
        <span className="text-lg text-pink ">LEFT</span>
      </div>
    </div>
  );
};

export default Countdown;
