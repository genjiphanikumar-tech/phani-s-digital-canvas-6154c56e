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
      {/* 3D animated background */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Rotating perspective grid */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "rotateX(65deg)",
            transformOrigin: "center",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
          animate={{ backgroundPositionY: ["0px", "60px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating 3D orbs */}
        <motion.div
          className="absolute left-[15%] top-[25%] h-72 w-72 rounded-full bg-[#C9A84C]/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 0.85, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[40%] bottom-[10%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating 3D rings */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]/25"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [60, 60], rotateY: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]/15"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [70, 70], rotateY: [360, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]/10"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [55, 55], rotateY: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

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
