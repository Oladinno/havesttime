import BrandSection, { DevelopmentGrid } from "./BrandSection";

const DEVELOPMENT_PATHWAYS = [
  {
    icon: "task",
    title: "OGBONO PURE",
    description: "Standardized ogbono designed around consistency, quality and ease of use.",
  },
  {
    icon: "nutrition",
    title: "OGBONO FIBRE+",
    description:
      "An enhanced ogbono concept designed to deliver a stronger fibre proposition while maintaining the familiar food experience.",
  },
  {
    icon: "fitness_center",
    title: "OGBONO PROTEIN+",
    description:
      "A nutrition-forward ogbono concept exploring improved protein delivery alongside the seed's traditional functionality.",
  },
  {
    icon: "factory",
    title: "OGBONO Ingredients",
    description:
      "Ingredient formats intended for food manufacturers, prepared-food companies, foodservice businesses and other B2B applications.",
  },
];

export default function OgbonoSection() {
  return (
    <BrandSection
      eyebrow="Seed Platform · Ogbono"
      icon="grain"
      id="ogbono"
      intro={[
        "Ogbono is widely known for its traditional use in soups, but HarvestTime sees opportunities beyond the conventional format.",
        "We are developing applications that can serve household consumers, foodservice operators and food manufacturers.",
      ]}
      surfaceClass="bg-surface"
      tagline="A Familiar Seed with Broader Potential"
      title="Ogbono"
    >
      <DevelopmentGrid
        columns="md:grid-cols-2"
        items={DEVELOPMENT_PATHWAYS}
        label="Current development pathways include"
      />

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
        HarvestTime&apos;s broader objective is to explore ogbono not only as a traditional soup
        ingredient, but as an African functional food ingredient with wider commercial potential.
      </p>
    </BrandSection>
  );
}
