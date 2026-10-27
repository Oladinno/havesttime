import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import BackToHome from "@/components/BackToHome";
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
      <MobileMenu />
      <main className="w-full pt-[100px] sm:pt-[116px] bg-background min-h-screen">
        <BackToHome />
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
