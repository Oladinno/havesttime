import BrandSection, { Callout, DevelopmentGrid, TagCloud } from "./BrandSection";

const DEVELOPMENT_AREAS = [
  {
    icon: "nutrition",
    title: "FLOURVANT™ Fibre",
    description: "A premix system designed to increase fibre in flour-based foods.",
  },
  {
    icon: "fitness_center",
    title: "FLOURVANT™ Protein + Fibre",
    description:
      "A combined protein-and-fibre system for applications where both nutrition attributes are desirable.",
  },
  {
    icon: "layers",
    title: "FLOURVANT™ NutriBase",
    description:
      "A broader nutrition premix platform designed to support more complete nutritional upgrading.",
  },
];

const APPLICATIONS = [
  "Bread",
  "Buns",
  "Doughnuts",
  "Puff-puff",
  "Biscuits",
  "Cookies",
  "Crackers",
  "Pastries",
  "Pancakes",
  "Wraps",
  "Snack products",
  "Other flour-based foods",
];

export default function FlourvantSection() {
  return (
    <BrandSection
      eyebrow="B2B Nutrition Platform"
      icon="bakery_dining"
      id="flourvant"
      intro={[
        "FLOURVANT™ is HarvestTime's B2B nutrition and ingredient platform for flour-based foods.",
        "It is designed to help bakeries, food manufacturers and other food businesses improve the nutritional profile of familiar products while protecting the characteristics consumers expect.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="Nutrition Technology for Flour-Based Foods."
      title="FLOURVANT™"
    >
      <div className="flex flex-col gap-space-xl">
        <DevelopmentGrid items={DEVELOPMENT_AREAS} label="Current development areas include" />

        <TagCloud items={APPLICATIONS} label="Potential applications include" tone="accent" />

        <Callout icon="verified">
          The technical objective is to improve nutrition while protecting important product
          attributes such as taste, softness, texture, rise, colour, shelf life and production
          performance.
        </Callout>
      </div>
    </BrandSection>
  );
}
