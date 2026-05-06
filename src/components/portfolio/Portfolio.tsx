import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./Expertise";

const works = [
  {
    n: "01",
    title: "Instagram Portfolio",
    desc: "Full feed of AI videos, reels and creative experiments.",
    href: "https://www.instagram.com/phani_vortexhub",
    tag: "Profile",
  },
  {
    n: "02",
    title: "AI Reel — Featured Work",
    desc: "Signature reel showcasing AI-driven storytelling and motion.",
    href: "https://www.instagram.com/reel/DTc0uwQjwal/",
    tag: "Reel",
  },
  {
    n: "03",
    title: "College Celebration AI Video",
    desc: "Vibrant celebration edit produced for a college milestone event.",
    href: "https://drive.google.com/file/d/1QoJvfpmhp_544tTGtCdUUyWDZvu-Af88/view",
    tag: "Celebration",
  },
  {
    n: "04",
    title: "Late Family Tribute — Video 1",
    desc: "A cinematic tribute honoring a loved one with restored memories.",
    href: "https://drive.google.com/file/d/1OMYNgjzLxeRlJQ5p7tev15_xFYfRPGHa/view",
    tag: "Tribute",
  },
  {
    n: "05",
    title: "Late Family Tribute — Video 2",
    desc: "Emotional remembrance piece blending photos, motion and music.",
    href: "https://drive.google.com/file/d/1sAcsaakTY71o1J8m-9BNa5lIJsSqtHRK/view",
    tag: "Tribute",
  },
  {
    n: "06",
    title: "Travels Video Edit",
    desc: "Cinematic travel edit capturing landscapes, motion and atmosphere.",
    href: "https://drive.google.com/file/d/1sH6FhyQCUTG6k1gff7bHJ0_q5d8O0u8u/view",
    tag: "Travel",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Portfolio"
          subtitle="Click any card to open the full piece"
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <WorkCard key={w.n} {...w} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  n,
  title,
  desc,
  href,
  tag,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  href: string;
  tag: string;
  delay: number;
}) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative block overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-7 transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <span className="font-display text-3xl font-bold text-gold/40 transition-colors group-hover:text-gold">
          {n}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-2.5 py-1">
          {tag}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
        <span>Open</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">↗</span>
      </div>
    </a>
  );
}
