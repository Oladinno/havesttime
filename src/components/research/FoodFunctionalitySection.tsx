import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const FUNCTIONAL_PROPERTIES = [
  "Texture",
  "Viscosity",
  "Moisture retention",
  "Softness",
  "Structure",
  "Binding",
  "Emulsification",
  "Gel formation",
  "Mouthfeel",
  "Dough performance",
  "Product stability",
  "Shelf life",
  "Processing tolerance",
];

export default function FoodFunctionalitySection() {
  return (
    <ResearchSection
      eyebrow="Food Functionality"
      icon="psychiatry"
      id="food-functionality"
      intro={[
        "Nutrition is only one part of food innovation.",
        "Ingredients also affect how a food behaves during processing, cooking, storage and consumption.",
        "This is particularly important when adding fibre, protein or unfamiliar ingredients to existing food systems. An ingredient may offer strong nutritional value but still require careful formulation to avoid negatively affecting taste, texture or manufacturing performance.",
      ]}
      surfaceClass="bg-surface-container-lowest"
      tagline="Understanding What Ingredients Do Inside Food"
      title="Food Functionality"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud label="Harvestime studies functional properties that may influence" items={FUNCTIONAL_PROPERTIES} />

        <Callout icon="handyman">
          Our goal is to create solutions where nutrition and food performance work together.
        </Callout>
      </div>
    </ResearchSection>
  );
}
