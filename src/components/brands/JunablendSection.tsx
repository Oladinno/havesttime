import BrandSection, { Callout, DevelopmentGrid } from "./BrandSection";

const DEVELOPMENT_AREAS = [
  {
    icon: "schedule",
    title: "Pre-Meal Fibre",
    description:
      "A convenient fibre format designed for use before meals as part of an everyday nutrition routine.",
  },
  {
    icon: "fitness_center",
    title: "Fibre + Protein",
    description:
      "A combined fibre-and-protein system designed to support fuller, more balanced everyday nutrition.",
  },
  {
    icon: "psychiatry",
    title: "Microbiome Gut Health",
    description:
      "A fibre system focused on ingredients that support fermentation and microbiome-related gut function.",
  },
];

export default function JunablendSection() {
  return (
    <BrandSection
      eyebrow="Fibre Nutrition Platform"
      icon="nutrition"
      id="junablend"
      intro={[
        "JUNABLEND™ is Harvestime's fibre-focused nutrition platform. It is built around a more practical question.",
        "Rather than treating fibre as a single-purpose ingredient, JUNABLEND™ is being developed around different nutritional functions, use occasions and consumer needs.",
      ]}
      surfaceClass="bg-surface"
      tagline="Better Fibre. Better Days."
      title="JUNABLEND™"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="bg-primary-container rounded-xl p-space-xl shadow-md flex items-center gap-space-md">
          <span className="font-headline-lg text-headline-lg text-tertiary-fixed-dim leading-none hidden sm:block">
            &ldquo;
          </span>
          <p className="font-headline-md text-headline-md text-primary-fixed font-bold leading-snug">
            What do you want your fibre to do?
          </p>
        </div>

        <DevelopmentGrid items={DEVELOPMENT_AREAS} label="Development areas include" />

        <Callout icon="public">
          JUNABLEND™ is being developed with a Nigeria-first approach, with emphasis on
          accessibility, convenience, taste and practical daily use.
        </Callout>
      </div>
    </BrandSection>
  );
}
