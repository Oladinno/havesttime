import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PathwaySection from "@/components/PathwaySection";
import PlatformsSection from "@/components/PlatformsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CollaborationSection from "@/components/CollaborationSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSection />
          <PathwaySection />
          <PlatformsSection />
          <RoadmapSection />
          <CollaborationSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
