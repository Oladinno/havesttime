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
      "No token additions or 'fairy dusting'. Every inclusion rate is clinically calculated to deliver verifiable physiological impact.",
  },
  {
    icon: "science",
    circleClass: "bg-primary-fixed text-primary",
    title: "Science Before Claims",
    description:
      "Laboratory metrics, stability trials, and bio-assays always precede commercial marketing rhetoric.",
  },
  {
    icon: "restaurant",
    circleClass: "bg-primary-fixed text-primary",
    title: "Taste Still Matters",
    description:
      "If people do not love eating it, the nutrition remains in the pantry. Palatability and texture are foundational design criteria.",
  },
  {
    icon: "hub",
    circleClass: "bg-primary-fixed text-primary",
    title: "Familiar Foods Are Powerful",
    description:
      "Rather than attempting to shift deeply ingrained African culinary habits, we upgrade existing staples from the inside out.",
  },
  {
    icon: "psychiatry",
    circleClass: "bg-primary-fixed text-primary",
    title: "African Ingredients Deserve R&D",
    description:
      "Locust beans, ogbono seeds, and indigenous millets hold world-class functional qualities that warrant deep scientific innovation.",
  },
  {
    icon: "public",
    circleClass: "bg-secondary-fixed text-on-secondary-fixed",
    title: "Africa First. Globally Relevant.",
    description:
      "Formulating first to solve regional micronutrient deficiencies while adhering to export-grade global standards.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
            Corporate Philosophy
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
            Our Operating Principles
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container">
            Scientific integrity is our non-negotiable anchor. We align agro-industrial
            manufacturing with clinical nutritional accountability.
          </p>
        </div>

        {/* Grid of 6 main operating principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {PRINCIPLES.map((principle) => (
            <div
              className="bg-primary/40 p-space-lg rounded-xl shadow-inner flex flex-col gap-space-xs"
              key={principle.title}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-space-xs ${principle.circleClass}`}
              >
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
