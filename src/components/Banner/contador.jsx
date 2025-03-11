'use client'
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(600); 

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <p className="text-sm mb-4 ">
      <b className="bg-[#000000aa] px-2 py-1 rounded-md border-4 border-green-500 text-green-500">{formatTime(timeLeft)}</b> para aproveitar 50% de desconto na primeira compra!
    </p>
  );
};

export default Countdown;