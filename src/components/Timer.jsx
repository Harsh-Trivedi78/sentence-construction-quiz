import React, { useEffect, useState } from "react";

const Timer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }


    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]); 

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full">
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="#e5e7eb"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="#4f46e5"
          strokeWidth="5"
          fill="none"
          strokeDasharray="220"
          strokeDashoffset={220 - (220 * percentage) / 100}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
        {timeLeft}s
      </div>
    </div>
  );
};

export default Timer;
