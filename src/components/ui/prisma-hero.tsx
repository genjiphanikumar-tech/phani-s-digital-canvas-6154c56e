import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center gap-x-3 gap-y-1 ${className}`}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {word}
            {showAsterisk && isLast && (
              <span className="text-[#C9A84C] align-super text-[0.5em] ml-1">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center gap-x-3 gap-y-1 ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${w.className ?? ""}`}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = ["Story", "Work", "Skills", "Portfolio", "Hire"];

const PrismaHero = () => {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0D0D1A] text-[#E1E0CC]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster="https://images.unsplash.com/photo-1492551557933-34265f7af79e?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-stylish-woman-in-the-city-at-night-2633/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/40 via-[#0D0D1A]/60 to-[#0D0D1A]" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-6">
        <a href="#top" className="font-display text-xl tracking-wide text-[#C9A84C]">
          Phani<span className="text-[#E1E0CC]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-wide transition-colors"
              style={{ color: "rgba(225, 224, 204, 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")
              }
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://www.instagram.com/phani_vortexhub"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#C9A84C] border border-[#C9A84C]/40 rounded-full px-4 py-1.5 hover:bg-[#C9A84C]/10 transition"
        >
          @phani_vortexhub
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-[calc(100%-96px)]">
        <WordsPullUpMultiStyle
          segments={[
            { text: "AI Video Creator", className: "text-[#E1E0CC]" },
            { text: "&", className: "text-[#C9A84C] italic font-serif" },
            { text: "Digital Storyteller", className: "text-[#E1E0CC]" },
          ]}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-[#E1E0CC]/70 leading-relaxed"
        >
          Crafting cinematic AI-driven videos, family tributes and celebration
          edits from Tirupati — bound by passion to unlock stories through a
          unique lens.
        </motion.p>

        <motion.a
          href="#hire"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#C9A84C] text-[#0D0D1A] px-7 py-3 text-sm font-semibold hover:scale-105 transition-transform"
        >
          Join the lab
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D0D1A] text-[#C9A84C] group-hover:rotate-45 transition-transform">
            <ArrowRight size={14} />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export { PrismaHero };
