import { createFileRoute } from "@tanstack/react-router";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { HeroScrub } from "@/components/ui/hero-scrub";
import { Stats } from "@/components/portfolio/Stats";
import { Expertise } from "@/components/portfolio/Expertise";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { HireMe } from "@/components/portfolio/HireMe";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Phani Kumar — AI Video Creator & Digital Content Creator" },
      {
        name: "description",
        content:
          "Portfolio of Phani Kumar, AI Video Creator from Tirupati specializing in AI-generated videos, family tributes, and celebration edits.",
      },
      { property: "og:title", content: "Phani Kumar — AI Video Creator" },
      {
        property: "og:description",
        content:
          "Cinematic AI videos, tributes and celebration edits. Available for freelance & full-time.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <PrismaHero />
      <HeroScrub
        frameCount={120}
        frameUrl={(i) =>
          `https://images.unsplash.com/photo-1492551557933-34265f7af79e?auto=format&fit=crop&w=1600&q=70&frame=${i}`
        }
        titleTop="Phani"
        titleBottom="Kumar"
        bgClassName="bg-[#0D0D1A]"
        accentHex="#C9A84C"
      />
      <Stats />
      <Expertise />
      <Skills />
      <Portfolio />
      <HireMe />
      <Footer />
    </main>
  );
}
