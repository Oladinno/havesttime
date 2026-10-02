import Icon from "../Icon";

const NARRATIVE = [
  {
    title: "Our Mission",
    paragraphs: [
      "To develop accessible, science-led foods, ingredients and nutrition technologies that improve everyday diets while creating greater value from African agriculture.",
      "We aim to translate promising crops, food traditions and scientific ideas into practical products and ingredient systems that can be manufactured, distributed and used at scale.",
    ],
  },
  {
    title: "Our Vision",
    paragraphs: [
      "To become a leading African food and nutrition innovation company, recognized for transforming familiar foods and agricultural resources into better nutrition for everyday life.",
      "We envision a future in which African agriculture contributes not only raw materials, but also high-value ingredients, proprietary food technologies, modern consumer products and globally relevant food innovations.",
    ],
  },
  {
    title: "Our Purpose",
    paragraphs: [
      "We believe better nutrition should not require people to abandon the foods they already know and enjoy.",
      "Our purpose is to make familiar foods work harder for human nutrition.",
      "That means improving the nutritional and functional value of everyday foods while respecting taste, culture, affordability and convenience.",
      "Whether through more fibre, better protein, improved micronutrient density, fermentation, ingredient functionality or better food formulation, Harvestime focuses on practical improvements that can fit naturally into everyday eating.",
    ],
  },
];

export default function AboutStorySection() {
  return (
    <section className="w-full bg-surface py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
            <Icon name="auto_stories" />
            <span>Our Story</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Mission, Vision &amp; Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {NARRATIVE.map((block) => (
            <div
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm h-full"
              key={block.title}
            >
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                <Icon className="text-[20px]" name="flag" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {block.title}
              </h3>
              {block.paragraphs.map((paragraph) => (
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
