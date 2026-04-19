import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    title: "AI Tool Videos",
    desc: "Concept-driven AI generated videos that showcase tools, products and ideas with cinematic flair.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="m17 9 4-2v10l-4-2" />
      </svg>
    ),
  },
  {
    title: "Late Family Tributes",
    desc: "Heartfelt memorial videos that honor loved ones with cinematic photo restoration and emotion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
  {
    title: "Celebration Videos",
    desc: "Vibrant celebration edits for colleges, weddings and milestones — energetic, modern, share-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M2 22 16 8" />
        <path d="m6 8 4-4 4 4-4 4Z" />
        <path d="M14 14h6v6" />
      </svg>
    ),
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Expertise"
          subtitle="Three areas where craft meets emotion"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={it.title} {...it} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
  delay,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6 h-px w-12 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal text-center">
      <span className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
        {title.split(" ").map((w, i) => (
          <span key={i} className={i % 2 === 1 ? "gradient-gold-text" : ""}>
            {w}{" "}
          </span>
        ))}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
