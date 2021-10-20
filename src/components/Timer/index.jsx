import { useEffect, useState } from "react";

export default function Timer({ setStop }) {
  const [timer, setTimer] = useState(900);
  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  return timer;
}