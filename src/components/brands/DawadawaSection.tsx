import BrandSection, { Callout, TagCloud } from "./BrandSection";

const DEVELOPMENT_AREAS = [
  "Seasoning powders",
  "Sprinkle formats",
  "Broth bases",
  "Foodservice ingredients",
  "Standardized fermented locust bean ingredients",
  "Savory bases for food manufacturers",
];

const B2B_APPLICATIONS = [
  "Soups",
  "Sauces",
  "Noodles",
  "Snacks",
  "Seasoning blends",
  "Ready meals",
  "Foodservice products",
];

export default function DawadawaSection() {
  return (
    <BrandSection
      eyebrow="Fermented Ingredient Platform"
      icon="biotech"
      id="dawadawa"
      intro={[
        "Dawadawa, or fermented African locust bean, is one of West Africa's established fermented food ingredients.",
        "Its strong cultural relevance and distinctive savory character create opportunities for both traditional and modern food applications. Harvestime is exploring how dawadawa can be developed into more standardized, convenient and versatile formats.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="Traditional Fermentation. Modern Applications."
      title="Dawadawa"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <TagCloud items={DEVELOPMENT_AREAS} label="Development areas include" />
          <TagCloud
            items={B2B_APPLICATIONS}
            label="Potential B2B applications include"
            tone="secondary"
          />
        </div>

        <Callout icon="restaurant">
          Our aim is to preserve the ingredient&apos;s identity while improving consistency, food
          safety, convenience and manufacturing suitability.
        </Callout>
      </div>
    </BrandSection>
  );
}
