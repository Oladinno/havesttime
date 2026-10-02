import Icon from "../Icon";

const PLATFORM_CHAIN = [
  "Agriculture",
  "Research",
  "Food Science",
  "Nutrition",
  "Product Development",
  "Manufacturing",
  "Commercialization",
];

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-24 px-margin">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        <div className="flex flex-col gap-space-md max-w-3xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
              About Harvestime
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight font-bold tracking-tight">
            Who We Are
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Harvestime Farms &amp; Agro Industries Ltd is an African food, nutrition and
            agro-industrial company focused on transforming agricultural resources into better
            foods, functional ingredients and commercially scalable nutrition solutions.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We operate at the intersection of agriculture, food science, nutrition, ingredient
            technology and commercialization.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our work begins with crops, seeds, grains, cereals, fruits and traditional food
            systems, but it does not end there. We explore how these resources can be improved,
            standardized, formulated and applied in ways that create greater nutritional and
            commercial value.
          </p>
        </div>

        <div className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Harvestime is building a platform that connects
          </span>
          <ul className="flex flex-wrap items-center gap-space-xs">
            {PLATFORM_CHAIN.map((node, index) => (
              <li className="flex items-center gap-space-xs" key={node}>
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm">
                  <Icon className="text-[16px] text-primary" name="hub" />
                  {node}
                </span>
                {index < PLATFORM_CHAIN.length - 1 && (
                  <Icon className="text-[16px] text-secondary" name="arrow_forward" />
                )}
              </li>
            ))}
          </ul>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
            Our ambition is to help create foods that are not only familiar and enjoyable, but
            also more nutritious, functional, consistent and relevant to modern consumers.
          </p>
        </div>
      </div>
    </section>
  );
}
