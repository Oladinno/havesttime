import Icon from "./Icon";

type Principle = {
  icon: string;
  circleClass: string;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: "nutrition",
    circleClass: "bg-primary-fixed text-primary",
    title: "Nutrition Must Be Meaningful",
    description:
      "We prioritize products and technologies that can deliver practical nutritional value rather than relying on superficial health positioning.",
  },
  {
    icon: "science",
    circleClass: "bg-primary-fixed text-primary",
    title: "Science Before Claims",
    description:
      "Our nutrition and functionality claims should be supported by appropriate formulation, evidence and testing.",
  },
  {
    icon: "restaurant",
    circleClass: "bg-primary-fixed text-primary",
    title: "Taste Still Matters",
    description:
      "A healthier product will not succeed if people do not enjoy eating it. Nutrition must work alongside taste, texture, aroma and overall food experience.",
  },
  {
    icon: "hub",
    circleClass: "bg-primary-fixed text-primary",
    title: "Familiar Foods Are Powerful Platforms",
    description:
      "We believe many nutrition improvements can be delivered through foods that consumers already understand and use regularly.",
  },
  {
    icon: "psychiatry",
    circleClass: "bg-primary-fixed text-primary",
    title: "Design for the Real World",
    description:
      "Products must work beyond the laboratory. We consider manufacturing conditions, ingredient availability, cost, shelf life, distribution and consumer behaviour from an early stage.",
  },
  {
    icon: "public",
    circleClass: "bg-primary-fixed text-primary",
    title: "African Ingredients Deserve More Innovation",
    description:
      "Many African crops, seeds, fruits and traditional foods remain underdeveloped from a scientific and commercial perspective. We seek to uncover more of their potential.",
  },
  {
    icon: "policy",
    circleClass: "bg-primary-fixed text-primary",
    title: "Protect What We Create",
    description:
      "Intellectual property, proprietary know-how, formulations and technology systems are important parts of how we create long-term value.",
  },
  {
    icon: "handshake",
    circleClass: "bg-primary-fixed text-primary",
    title: "Partnership Enables Scale",
    description:
      "We collaborate where specialist expertise, manufacturing capability or market access can accelerate the path from innovation to commercial reality.",
  },
];

type RoadmapStage = {
  number: string;
  title: string;
  description: string;
};

const ROADMAP: RoadmapStage[] = [
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
      "Our long-term direction is to build an ecosystem in which a substantial share of the foods and ingredient systems connected to us deliver meaningful nutritional value alongside taste, familiarity, affordability and convenience.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-surface py-24 px-margin" id="about">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
              <Icon name="account_tree" />
              <span>Who We Are</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Our Story
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              HarvestTime is an African food, nutrition and agro-industrial company focused on
              transforming agricultural resources into better foods, functional ingredients and
              commercially scalable nutrition solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left column: narrative */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Our Mission
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To develop accessible, science-led foods, ingredients and nutrition technologies
                that improve everyday diets while creating greater value from African agriculture.
                We aim to translate promising crops, food traditions and scientific ideas into
                practical products and ingredient systems that can be manufactured, distributed and
                used at scale.
              </p>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Our Vision
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To become a leading African food and nutrition innovation company, recognized for
                transforming familiar foods and agricultural resources into better nutrition for
                everyday life. We envision a future in which African agriculture contributes not
                only raw materials, but also high-value ingredients, proprietary food technologies,
                modern consumer products and globally relevant food innovations.
              </p>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Our Purpose
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We believe better nutrition should not require people to abandon the foods they
                already know and enjoy. Our purpose is to make familiar foods work harder for
                human nutrition: improving the nutritional and functional value of everyday foods
                while respecting taste, culture, affordability and convenience.
              </p>
            </div>
          </div>

          {/* Right column: principles + roadmap */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Our Operating Principles
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Eight commitments that shape how every product and partnership is built.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-space-xs ${principle.circleClass}`}
                  >
                    <Icon className="text-[20px]" name={principle.icon} />
                  </div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                    {principle.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-space-xs mt-space-md">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Our Roadmap
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                HarvestTime is being built in stages, from innovation platforms to a broad
                nutrition-first food portfolio.
              </p>
              <div className="grid grid-cols-1 gap-space-sm">
                {ROADMAP.map((stage) => (
                  <div
                    key={stage.number}
                    className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-spec-data text-[11px] font-bold text-primary uppercase tracking-wider">
                        STAGE {stage.number}
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        check_circle
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {stage.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
