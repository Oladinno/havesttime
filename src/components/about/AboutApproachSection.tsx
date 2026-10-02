import Icon from "../Icon";

const PATHWAY = [
  "Research",
  "Nutrition Need",
  "Food Application",
  "Formulation",
  "Testing",
  "Intellectual Property",
  "Regulatory & Quality",
  "Manufacturing",
  "Commercialization",
];

export default function AboutApproachSection() {
  return (
    <section className="w-full bg-surface-container-high py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
            <Icon name="account_tree" />
            <span>Research to Market</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Our Approach
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Harvestime follows a research-to-market approach. We begin by identifying a
            meaningful food, nutrition or ingredient opportunity. We then evaluate the science,
            consumer need, technical feasibility, manufacturing requirements and commercial
            potential.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Our development pathway typically follows
          </span>
          <ol className="flex flex-wrap items-center gap-space-xs">
            {PATHWAY.map((step, index) => (
              <li className="flex items-center gap-space-xs" key={step}>
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg shadow-sm">
                  <span className="font-spec-data text-[11px] font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {index < PATHWAY.length - 1 && (
                  <Icon className="text-[16px] text-secondary" name="arrow_forward" />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <Icon className="text-[20px]" name="handshake" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              Deliberately Partnership-Led
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Rather than attempting to own every laboratory, factory or distribution channel,
              Harvestime works with qualified scientists, processors, manufacturers, laboratories
              and commercial partners where appropriate.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              This allows us to remain focused on innovation, product architecture, intellectual
              property, quality standards and commercialization.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <Icon className="text-[20px]" name="target" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              What We Optimize For
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-space-xs">
                <Icon className="text-[18px] text-secondary mt-1" name="check_circle" />
                Foods that stay familiar, enjoyable and culturally relevant.
              </li>
              <li className="flex items-start gap-space-xs">
                <Icon className="text-[18px] text-secondary mt-1" name="check_circle" />
                Nutrition that is measurable, functional and evidence-led.
              </li>
              <li className="flex items-start gap-space-xs">
                <Icon className="text-[18px] text-secondary mt-1" name="check_circle" />
                Consistency, affordability and convenience for modern consumers.
              </li>
              <li className="flex items-start gap-space-xs">
                <Icon className="text-[18px] text-secondary mt-1" name="check_circle" />
                Commercial systems that can be manufactured and distributed at scale.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
