import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const FERMENTATION_AREAS = [
  "Indigenous fermentation",
  "Microbial consistency",
  "Food safety",
  "Flavor development",
  "Processing control",
  "Shelf stability",
  "Fermentation-derived functionality",
  "Ingredient standardization",
  "Microbiome-related applications",
];

export default function FermentationSection() {
  return (
    <ResearchSection
      eyebrow="Fermentation"
      icon="biotech"
      id="fermentation"
      intro={[
        "Fermentation has been part of African food culture for generations.",
        "Harvestime is interested in understanding how traditional fermentation systems can be studied, standardized and adapted for modern food applications while respecting their cultural origins.",
        "Dawadawa and other traditional fermented foods represent examples of the type of systems we may investigate.",
      ]}
      surfaceClass="bg-surface"
      tagline="Traditional Knowledge Meets Modern Food Science"
      title="Fermentation"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud label="Research areas may include" items={FERMENTATION_AREAS} tone="accent" />

        <Callout icon="auto_awesome">
          The long-term opportunity is to combine traditional food knowledge with modern
          microbiology, processing and quality-control systems.
        </Callout>
      </div>
    </ResearchSection>
  );
}
