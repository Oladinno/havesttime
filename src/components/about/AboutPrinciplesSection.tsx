import Icon from "../Icon";

type Principle = {
  icon: string;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: "nutrition",
    title: "Nutrition Must Be Meaningful",
    description:
      "We prioritize products and technologies that can deliver practical nutritional value rather than relying on superficial health positioning.",
  },
  {
    icon: "science",
    title: "Science Before Claims",
    description:
      "Our nutrition and functionality claims should be supported by appropriate formulation, evidence and testing.",
  },
  {
    icon: "restaurant",
    title: "Taste Still Matters",
    description:
      "A healthier product will not succeed if people do not enjoy eating it. Nutrition must work alongside taste, texture, aroma and overall food experience.",
  },
  {
    icon: "hub",
    title: "Familiar Foods Are Powerful Platforms",
    description:
      "We believe many nutrition improvements can be delivered through foods that consumers already understand and use regularly.",
  },
  {
    icon: "psychiatry",
    title: "Design for the Real World",
    description:
      "Products must work beyond the laboratory. We consider manufacturing conditions, ingredient availability, cost, shelf life, distribution and consumer behaviour from an early stage.",
  },
  {
    icon: "public",
    title: "African Ingredients Deserve More Innovation",
    description:
      "Many African crops, seeds, fruits and traditional foods remain underdeveloped from a scientific and commercial perspective. We seek to uncover more of their potential.",
  },
  {
    icon: "policy",
    title: "Protect What We Create",
    description:
      "Intellectual property, proprietary know-how, formulations and technology systems are important parts of how Harvestime creates long-term value.",
  },
  {
    icon: "handshake",
    title: "Partnership Enables Scale",
    description:
      "We collaborate where specialist expertise, manufacturing capability or market access can accelerate the path from innovation to commercial reality.",
  },
  {
    icon: "public",
    title: "Africa First. Globally Relevant.",
    description:
      "Our work is strongly grounded in African food systems, ingredients and consumer needs, while developing technologies with the potential to serve broader international markets.",
  },
];

export default function AboutPrinciplesSection() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
            How We Operate
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
            Our Operating Principles
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container">
            Nine commitments that shape how every product, claim and partnership is built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {PRINCIPLES.map((principle) => (
            <div
              className="bg-primary/40 p-space-lg rounded-xl shadow-inner flex flex-col gap-space-xs h-full"
              key={principle.title}
            >
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center mb-space-xs">
                <Icon className="text-[20px]" name={principle.icon} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                {principle.title}
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
