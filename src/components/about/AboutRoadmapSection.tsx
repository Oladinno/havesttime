import Icon from "../Icon";

type Stage = {
  number: string;
  title: string;
  description: string;
};

const STAGES: Stage[] = [
  {
    number: "01",
    title: "Build the Innovation Platforms",
    description:
      "Develop and validate our core food, nutrition and ingredient technologies across areas such as fibre, protein, fortification, crop functionality and fermentation.",
  },
  {
    number: "02",
    title: "Develop Focused Commercial Applications",
    description:
      "Apply those technologies to carefully selected food categories where nutritional need, consumer demand, technical feasibility and commercial opportunity align.",
  },
  {
    number: "03",
    title: "Validate Through Pilot Markets",
    description:
      "Work with manufacturers, food businesses and consumers to test products under real commercial conditions.",
  },
  {
    number: "04",
    title: "Scale Through Partnerships",
    description:
      "Expand successful technologies through manufacturing partnerships, licensing, ingredient supply, distribution and strategic collaborations.",
  },
  {
    number: "05",
    title: "Build a Broader Nutrition-First Food Portfolio",
    description:
      "Our long-term direction is to build an ecosystem in which a substantial share of the foods and ingredient systems connected to Harvestime deliver meaningful nutritional value alongside taste, familiarity, affordability and convenience.",
  },
];

export default function AboutRoadmapSection() {
  return (
    <section className="w-full bg-surface-container py-24 px-margin" id="roadmap">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
            <Icon name="route" />
            <span>Built in Stages</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Our Roadmap
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Harvestime is being built in stages — from validated innovation platforms to a broad
            nutrition-first food portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {STAGES.map((stage) => (
            <div
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border-t-4 border-primary h-full"
              key={stage.number}
            >
              <div className="flex items-center justify-between">
                <span className="font-spec-data text-[11px] font-bold text-primary uppercase tracking-wider">
                  STAGE {stage.number}
                </span>
                <Icon className="text-[18px] text-primary" name="check_circle" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {stage.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-primary uppercase tracking-wider">
            Our ambition is clear
          </span>
          <p className="font-headline-md text-headline-md text-on-surface font-bold leading-snug max-w-4xl">
            To help build a stronger African food system in which agriculture, nutrition and food
            technology create more value together.
          </p>
        </div>
      </div>
    </section>
  );
}
