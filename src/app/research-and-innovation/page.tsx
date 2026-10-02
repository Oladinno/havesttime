import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearchHero from "@/components/research/ResearchHero";
import ResearchFocusSection from "@/components/research/ResearchFocusSection";
import AfricanCropsSection from "@/components/research/AfricanCropsSection";
import NutritionScienceSection from "@/components/research/NutritionScienceSection";
import FoodFunctionalitySection from "@/components/research/FoodFunctionalitySection";
import FermentationSection from "@/components/research/FermentationSection";
import ProductDevelopmentSection from "@/components/research/ProductDevelopmentSection";
import CurrentResearchSection from "@/components/research/CurrentResearchSection";
import InsightsSection from "@/components/research/InsightsSection";
import ResearchClosingSection from "@/components/research/ResearchClosingSection";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    "Harvestime's research and innovation work — combining agriculture, food science and nutrition to create better everyday foods, from characterization and formulation to manufacturing and commercialization.",
};

export default function ResearchAndInnovationPage() {
  return (
    <>
      <Header activeLabel="Research & Innovation" />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <ResearchHero />
          <ResearchFocusSection />
          <AfricanCropsSection />
          <NutritionScienceSection />
          <FoodFunctionalitySection />
          <FermentationSection />
          <ProductDevelopmentSection />
          <CurrentResearchSection />
          <InsightsSection />
          <ResearchClosingSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
