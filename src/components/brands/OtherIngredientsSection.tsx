import BrandSection, { Callout, TagCloud } from "./BrandSection";

const AREAS_OF_INTEREST = [
  "Fibre enrichment",
  "Protein enrichment",
  "Natural thickening",
  "Binding",
  "Emulsification",
  "Texture modification",
  "Fermentation",
  "Nutrient delivery",
  "Flavour development",
  "Food preservation",
  "Functional ingredient applications",
];

export default function OtherIngredientsSection() {
  return (
    <BrandSection
      eyebrow="Ingredient Pipeline"
      icon="travel_explore"
      id="other-ingredients"
      intro={[
        "Harvestime continues to investigate other African crops, seeds, fruits, grains, legumes and fermented foods that may offer meaningful nutritional or functional value.",
      ]}
      surfaceClass="bg-surface"
      title="Other Indigenous Ingredient Development"
    >
      <div className="flex flex-col gap-space-xl">
        <TagCloud
          items={AREAS_OF_INTEREST}
          label="Areas of interest may include ingredients with potential for"
          tone="accent"
        />

        <Callout icon="filter_alt">
          Selected ingredients move forward only when they show credible potential across science,
          consumer relevance, manufacturing feasibility and commercial opportunity. This allows
          Harvestime to build a disciplined pipeline rather than developing products simply
          because an ingredient is novel.
        </Callout>
      </div>
    </BrandSection>
  );
}
