import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandsHero from "@/components/brands/BrandsHero";
import JunablendSection from "@/components/brands/JunablendSection";
import FunctionalSeedsSection from "@/components/brands/FunctionalSeedsSection";
import OgbonoSection from "@/components/brands/OgbonoSection";
import DawadawaSection from "@/components/brands/DawadawaSection";
import OtherIngredientsSection from "@/components/brands/OtherIngredientsSection";
import FlourvantSection from "@/components/brands/FlourvantSection";
import CerevantSection from "@/components/brands/CerevantSection";
import EmergingSection from "@/components/brands/EmergingSection";
import ZuriEggsSection from "@/components/brands/ZuriEggsSection";
import PalmaraSection from "@/components/brands/PalmaraSection";
import ClosingSection from "@/components/brands/ClosingSection";

export const metadata: Metadata = {
  title: "Brands & Platforms",
  description:
    "Harvestime's portfolio of food brands, ingredient systems and nutrition platforms — JUNABLEND™, African Functional Seeds, FLOURVANT™, CEREVANT™ and emerging products.",
};

export default function BrandsAndPlatformsPage() {
  return (
    <>
      <Header activeLabel="Brands & Platforms" />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <BrandsHero />
          <JunablendSection />
          <FunctionalSeedsSection />
          <OgbonoSection />
          <DawadawaSection />
          <OtherIngredientsSection />
          <FlourvantSection />
          <CerevantSection />
          <EmergingSection />
          <ZuriEggsSection />
          <PalmaraSection />
          <ClosingSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
