import BrandSection, { Callout, DevelopmentGrid, TagCloud } from "./BrandSection";

const DEVELOPMENT_AREAS = [
  {
    icon: "nutrition",
    title: "CEREVANT™ Protein + Fibre",
    description:
      "A nutrition system designed to increase protein and fibre within selected cereal applications.",
  },
  {
    icon: "layers",
    title: "CEREVANT™ NutriBase",
    description: "A broader nutritional enrichment system for cereal-based foods.",
  },
];

const APPLICATIONS = [
  "Ogi",
  "Pap",
  "Porridges",
  "Tuwo",
  "Kunu",
  "Fura",
  "Millet-based foods",
  "Sorghum-based foods",
  "Maize-based foods",
  "Other cereal preparations",
];

export default function CerevantSection() {
  return (
    <BrandSection
      eyebrow="Cereal Nutrition Platform"
      icon="grain"
      id="cerevant"
      intro={[
        "CEREVANT™ is Harvestime's nutrition platform for cereal foods.",
        "It focuses particularly on familiar maize, millet and sorghum foods that form an important part of everyday diets across Africa.",
      ]}
      surfaceClass="bg-surface"
      tagline="Nutrition Technology for Cereal-Based Foods."
      title="CEREVANT™"
    >
      <div className="flex flex-col gap-space-xl">
        <DevelopmentGrid
          columns="md:grid-cols-2"
          items={DEVELOPMENT_AREAS}
          label="Current development areas include"
        />

        <TagCloud items={APPLICATIONS} label="Potential applications include" />

        <Callout icon="restaurant">
          CEREVANT™ is built around a simple principle: improve the nutrition of foods people
          already eat. The platform is intended for manufacturers, processors, foodservice
          businesses and other organizations interested in nutrition-forward cereal products.
        </Callout>
      </div>
    </BrandSection>
  );
}
