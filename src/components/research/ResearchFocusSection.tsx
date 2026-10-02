import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const RESEARCH_AREAS = [
  "Dietary fibre",
  "Plant protein",
  "Micronutrient fortification",
  "Ingredient functionality",
  "African crops and seeds",
  "Cereal foods",
  "Fermentation",
  "Gut-health nutrition",
  "Metabolic nutrition",
  "Food texture",
  "Processing performance",
  "Product stability",
  "Food safety",
  "Sensory quality",
  "Formulation optimization",
];

export default function ResearchFocusSection() {
  return (
    <ResearchSection
      eyebrow="Research Focus"
      icon="target"
      id="research-focus"
      intro={[
        "Harvestime focuses on research areas with the potential to create meaningful nutritional, functional or commercial value.",
      ]}
      surfaceClass="bg-surface"
      title="Where We Choose to Investigate"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud label="Our work may include" items={RESEARCH_AREAS} tone="accent" />

        <Callout icon="priority_high">
          We prioritize research that can ultimately contribute to useful food products, ingredient
          systems or manufacturing technologies.
        </Callout>
      </div>
    </ResearchSection>
  );
}
