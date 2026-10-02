import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutApproachSection from "@/components/about/AboutApproachSection";
import AboutPrinciplesSection from "@/components/about/AboutPrinciplesSection";
import AboutRoadmapSection from "@/components/about/AboutRoadmapSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are — Harvestime Farms & Agro Industries Ltd is an African food, nutrition and agro-industrial company. Our mission, vision, purpose, operating principles and roadmap.",
};

export default function AboutPage() {
  return (
    <>
      <Header activeLabel="About" />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <AboutHero />
          <AboutStorySection />
          <AboutApproachSection />
          <AboutPrinciplesSection />
          <AboutRoadmapSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
