import BrandSection, { Callout, Pipeline } from "./BrandSection";

const PIPELINE_STEPS = [
  "Standardization",
  "Processing",
  "Formulation",
  "Testing",
  "Application Development",
  "Commercialization",
];

export default function FunctionalSeedsSection() {
  return (
    <BrandSection
      eyebrow="African Ingredient Platform"
      icon="spa"
      id="functional-seeds"
      intro={[
        "Africa has a rich portfolio of seeds and indigenous food ingredients that remain underdeveloped in modern food applications.",
        "Harvestime is building a structured platform around selected African seeds and traditional ingredients with the potential to deliver nutritional, functional and commercial value.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="From Traditional Ingredients to Modern Food Platforms"
      title="African Functional Seeds"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Our approach
          </span>
          <Pipeline steps={PIPELINE_STEPS} />
        </div>

        <Callout icon="public">
          The goal is not to remove these ingredients from their cultural roots. It is to make them
          more consistent, versatile, scientifically understood and commercially useful.
        </Callout>
      </div>
    </BrandSection>
  );
}
