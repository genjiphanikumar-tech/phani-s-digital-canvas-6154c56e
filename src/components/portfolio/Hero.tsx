import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--gold)_1px,transparent_1px),linear-gradient(90deg,var(--gold)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative max-w-3xl text-center flex flex-col items-center">
        {/* Available badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-4 py-1.5 text-xs font-medium text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success animate-pulse-dot" />
          </span>
          Available for Hire
        </div>

        {/* Avatar */}
        <div
          className="animate-fade-up mt-8 flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-card to-secondary animate-pulse-ring"
          style={{ animationDelay: "120ms" }}
        >
          <span className="font-display text-4xl sm:text-5xl font-bold gradient-gold-text">
            PK
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up mt-8 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          style={{ animationDelay: "240ms" }}
        >
          Phani <span className="gradient-gold-text">Kumar</span>
        </h1>

        {/* Typewriter role */}
        <p
          className="animate-fade-up mt-5 text-lg sm:text-xl text-muted-foreground min-h-[1.75rem]"
          style={{ animationDelay: "360ms" }}
        >
          <Typewriter text="AI Video Creator & Digital Content Creator" speed={45} />
        </p>

        {/* Location */}
        <p
          className="animate-fade-up mt-3 text-sm text-muted-foreground/80 flex items-center gap-2"
          style={{ animationDelay: "480ms" }}
        >
          <svg
            className="h-4 w-4 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Tirupati, Andhra Pradesh, India
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-gold-lg"
          >
            View My Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#hire"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-up mt-16 text-muted-foreground/60 text-xs tracking-[0.3em] uppercase"
          style={{ animationDelay: "780ms" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll</span>
            <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
