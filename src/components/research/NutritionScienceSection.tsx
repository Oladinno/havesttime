import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const NUTRITION_AREAS = [
  "Fibre intake",
  "Protein intake",
  "Micronutrient adequacy",
  "Satiety",
  "Digestive health",
  "Microbiome support",
  "Metabolic health",
  "Meal quality",
  "Healthier dietary patterns",
];

export default function NutritionScienceSection() {
  return (
    <ResearchSection
      eyebrow="Nutrition Science"
      icon="nutrition"
      id="nutrition-science"
      intro={[
        "Harvestime uses nutrition science to guide product and ingredient development.",
        "We are especially interested in nutrition improvements that can be incorporated into foods people already consume regularly.",
        "Where appropriate, product development is informed by available scientific evidence, ingredient composition, studied intake levels, intended population and practical use conditions.",
      ]}
      surfaceClass="bg-surface"
      tagline="Designing Foods Around Meaningful Nutritional Functions"
      title="Nutrition Science"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud label="Our work may explore how foods can support areas such as" items={NUTRITION_AREAS} tone="accent" />

        <Callout icon="verified">
          We believe nutrition claims should follow evidence and appropriate testing rather than
          marketing language alone.
        </Callout>
      </div>
    </ResearchSection>
  );
}
