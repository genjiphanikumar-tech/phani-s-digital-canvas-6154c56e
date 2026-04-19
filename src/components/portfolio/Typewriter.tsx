import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 60,
  startDelay = 400,
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      const step = () => {
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) {
          timer = setTimeout(step, speed);
        } else {
          setDone(true);
        }
      };
      step();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {out}
      <span
        className={`inline-block w-[2px] h-[1em] align-middle bg-gold ml-1 ${done ? "animate-blink" : ""}`}
      />
    </span>
  );
}
