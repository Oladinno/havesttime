import ResearchSection, { Callout, ResearchGrid } from "./ResearchSection";

const DEVELOPMENT_STEPS = [
  {
    icon: "search",
    title: "Identify a need",
    description: "Identify a consumer or industry need worth solving.",
  },
  {
    icon: "grain",
    title: "Select ingredients",
    description: "Select appropriate ingredients for the target function.",
  },
  {
    icon: "formula",
    title: "Develop formulations",
    description: "Build formulations around nutrition, taste and cost targets.",
  },
  {
    icon: "architecture",
    title: "Create prototypes",
    description: "Produce prototypes for internal assessment.",
  },
  {
    icon: "sentiment_satisfied",
    title: "Sensory evaluation",
    description: "Test taste, texture and overall consumer experience.",
  },
  {
    icon: "monitor_heart",
    title: "Nutritional assessment",
    description: "Assess composition against intended nutritional function.",
  },
  {
    icon: "precision_manufacturing",
    title: "Processing trials",
    description: "Run trials to confirm behaviour on processing equipment.",
  },
  {
    icon: "hourglass_bottom",
    title: "Shelf-life testing",
    description: "Measure stability across intended storage conditions.",
  },
  {
    icon: "inventory",
    title: "Packaging evaluation",
    description: "Evaluate packaging for protection, use and presentation.",
  },
  {
    icon: "factory",
    title: "Pilot production",
    description: "Scale the concept through pilot-scale production.",
  },
  {
    icon: "settings",
    title: "Manufacturing adaptation",
    description: "Adapt the process for reliable full-scale manufacture.",
  },
  {
    icon: "storefront",
    title: "Market validation",
    description: "Confirm demand, acceptance and commercial viability.",
  },
];

export default function ProductDevelopmentSection() {
  return (
    <ResearchSection
      eyebrow="Product Development"
      icon="lightbulb"
      id="product-development"
      intro={[
        "Research becomes most valuable when it can be translated into practical applications.",
        "Harvestime connects scientific investigation directly to product development.",
        "Throughout development, we consider both scientific performance and commercial reality. A promising concept must eventually work across nutrition, taste, cost, manufacturing, quality and consumer acceptance.",
      ]}
      surfaceClass="bg-surface-container-lowest"
      tagline="Turning Research into Foods People Can Use"
      title="Product Development"
    >
      <div className="flex flex-col gap-space-xl">
        <ResearchGrid columns="md:grid-cols-4" items={DEVELOPMENT_STEPS} label="The process may include" />

        <Callout icon="checklist">
          A research finding only becomes valuable when it survives formulation, manufacturing,
          quality and consumer testing.
        </Callout>
      </div>
    </ResearchSection>
  );
}
