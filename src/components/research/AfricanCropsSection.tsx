import Icon from "../Icon";
import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const INVESTIGATIONS = [
  "Nutritional profiling",
  "Fibre characterization",
  "Protein evaluation",
  "Functional-property testing",
  "Milling and particle-size optimization",
  "Hydration behaviour",
  "Thickening",
  "Binding",
  "Emulsification",
  "Texture modification",
  "Sensory evaluation",
  "Processing stability",
  "Shelf-life behaviour",
];

const PATHWAYS = [
  {
    icon: "science",
    title: "Consumer Products",
    description:
      "Finished foods built on ingredients that have been profiled, tested and formulated for everyday use.",
  },
  {
    icon: "inventory_2",
    title: "B2B Ingredients",
    description:
      "Standardized flours, powders and functional systems supplied to manufacturers and bakeries.",
  },
  {
    icon: "layers",
    title: "Food-Technology Platforms",
    description:
      "Broader ingredient and process technologies that can be applied across multiple product categories.",
  },
];

export default function AfricanCropsSection() {
  return (
    <ResearchSection
      eyebrow="African Crops & Ingredients"
      icon="eco"
      id="african-crops"
      intro={[
        "Africa has a rich diversity of crops, seeds, grains, fruits, legumes and traditional ingredients that remain underdeveloped scientifically and commercially.",
        "Harvestime investigates selected ingredients to better understand their nutritional composition, functional properties and potential food applications.",
      ]}
      surfaceClass="bg-surface-container-lowest"
      tagline="Exploring More Value from African Agriculture"
      title="African Crops & Ingredients"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud label="Research may include" items={INVESTIGATIONS} />

        <div className="flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Selected ingredients may then progress into
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            {PATHWAYS.map((pathway) => (
              <div
                className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs"
                key={pathway.title}
              >
                <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                  <Icon className="text-[20px]" name={pathway.icon} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {pathway.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {pathway.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Callout icon="trending_up">
          Our objective is to help move promising African ingredients from traditional use toward
          standardized, scientifically understood and commercially relevant applications.
        </Callout>
      </div>
    </ResearchSection>
  );
}
