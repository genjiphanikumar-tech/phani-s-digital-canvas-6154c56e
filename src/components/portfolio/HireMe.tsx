import { useReveal } from "@/hooks/use-reveal";

export function HireMe() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="hire" className="px-6 py-24">
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card to-secondary p-10 sm:p-16 text-center shadow-gold"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-4 py-1.5 text-xs font-medium text-success">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
            Available Now
          </span>

          <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold">
            Open for <span className="gradient-gold-text">Freelance & Full-Time</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Paid Daily Preferred</p>

          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Have a project, a tribute, or a celebration that deserves cinematic AI craft? Let's
            build something memorable together.
          </p>

          <a
            href="https://www.instagram.com/phani_vortexhub"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-gold-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.62.07 4.81s0 3.56-.07 4.81c-.15 3.22-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-3.27-.15-4.77-1.7-4.92-4.92C2.17 15.56 2.16 15.19 2.16 12s0-3.56.07-4.81C2.38 3.97 3.89 2.42 7.15 2.27 8.4 2.21 8.77 2.2 12 2.2Zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.93a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46Zm5.34-7.07a.98.98 0 1 1-1.96 0 .98.98 0 0 1 1.96 0Z" />
            </svg>
            Message on Instagram
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
