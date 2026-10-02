import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipsHero from "@/components/partnerships/PartnershipsHero";
import ResearchSection from "@/components/partnerships/ResearchSection";
import AgricultureSection from "@/components/partnerships/AgricultureSection";
import ManufacturingSection from "@/components/partnerships/ManufacturingSection";
import CommercialSection from "@/components/partnerships/CommercialSection";
import TechnologySection from "@/components/partnerships/TechnologySection";
import WorkWithSection from "@/components/partnerships/WorkWithSection";
import PartnershipsClosing from "@/components/partnerships/PartnershipsClosing";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Harvestime's partnership model — collaboration with researchers, agricultural and processing partners, manufacturers, distributors and technology providers to move food innovation into scalable markets.",
};

export default function PartnershipsPage() {
  return (
    <>
      <Header activeLabel="Partnerships" />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <PartnershipsHero />
          <ResearchSection />
          <AgricultureSection />
          <ManufacturingSection />
          <CommercialSection />
          <TechnologySection />
          <WorkWithSection />
          <PartnershipsClosing />
        </div>
      </main>
      <Footer />
    </>
  );
}
