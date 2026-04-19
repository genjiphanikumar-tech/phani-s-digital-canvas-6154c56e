export function Footer() {
  return (
    <footer className="px-6 pt-12 pb-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="text-center md:text-left">
          <div className="font-display text-lg">
            Phani <span className="text-gold">Kumar</span>
          </div>
          <p className="text-muted-foreground text-xs mt-1">
            AI Video Creator — crafting cinematic stories
          </p>
        </div>

        <a
          href="https://www.instagram.com/phani_vortexhub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.62.07 4.81s0 3.56-.07 4.81c-.15 3.22-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-3.27-.15-4.77-1.7-4.92-4.92C2.17 15.56 2.16 15.19 2.16 12s0-3.56.07-4.81C2.38 3.97 3.89 2.42 7.15 2.27 8.4 2.21 8.77 2.2 12 2.2Zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.93a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46Zm5.34-7.07a.98.98 0 1 1-1.96 0 .98.98 0 0 1 1.96 0Z" />
          </svg>
          @phani_vortexhub
        </a>

        <p className="text-muted-foreground text-xs">© 2026 Phani Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
