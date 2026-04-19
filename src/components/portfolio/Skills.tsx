import { useState } from "react";
import { useInView, useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./Expertise";

const skills = [
  { name: "AI Video Generation", value: 92 },
  { name: "AI Prompting", value: 93 },
  { name: "Video Editing", value: 95 },
  { name: "Motion Graphics", value: 90 },
  { name: "AI Avatar Creation", value: 85 },
  { name: "Cinematic Styling", value: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Craft"
          subtitle="Years of refining the pixels and the prompts"
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value, delay }: { name: string; value: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  const ref = useInView<HTMLDivElement>(() => {
    setTimeout(() => {
      setWidth(value);
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.round(value * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  });

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-display font-semibold text-gold tabular-nums">{count}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-soft to-gold transition-[width] duration-[1400ms] ease-out shadow-gold"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export { useReveal };
