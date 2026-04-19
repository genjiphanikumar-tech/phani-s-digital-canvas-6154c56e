import { CountUp } from "./CountUp";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: 1490, label: "Followers" },
  { value: 39, label: "Posts" },
  { value: 10, suffix: "+", label: "AI Tools" },
  { value: 5, label: "Work Samples" },
];

export function Stats() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="px-6 py-20">
      <div
        ref={ref}
        className="reveal mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 sm:p-12 shadow-card"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="font-display text-4xl sm:text-5xl font-bold gradient-gold-text">
                <CountUp end={s.value} suffix={s.suffix ?? ""} />
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
