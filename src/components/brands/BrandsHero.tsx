import Icon from "../Icon";

const PILLARS = [
  {
    icon: "shopping_bag",
    title: "Consumer Products",
    description:
      "Branded nutrition formats designed for everyday household use, built around accessibility, convenience and taste.",
  },
  {
    icon: "factory",
    title: "B2B Ingredient Technologies",
    description:
      "Premix systems and standardized ingredients for bakeries, manufacturers, foodservice operators and prepared-food companies.",
  },
  {
    icon: "eco",
    title: "African Ingredient Development",
    description:
      "A structured path from indigenous seeds and traditional ingredients to consistent, scientifically understood food platforms.",
  },
];

const SECTION_LINKS = [
  { label: "JUNABLEND™", href: "#junablend" },
  { label: "African Functional Seeds", href: "#functional-seeds" },
  { label: "Ogbono", href: "#ogbono" },
  { label: "Dawadawa", href: "#dawadawa" },
  { label: "FLOURVANT™", href: "#flourvant" },
  { label: "CEREVANT™", href: "#cerevant" },
  { label: "Emerging Platforms", href: "#emerging" },
];

export default function BrandsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-24 px-margin">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        <div className="flex flex-col gap-space-md max-w-3xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
              Brands &amp; Products
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight font-bold tracking-tight">
            Food Brands, Ingredient Systems &amp;{" "}
            <span className="text-secondary">Nutrition Platforms</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Harvestime develops a portfolio of food brands, ingredient systems and nutrition
            platforms designed around practical consumer and industry needs.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our portfolio combines consumer products, B2B ingredient technologies and African
            ingredient development. Each platform is built around a defined problem, a clear
            nutritional or functional opportunity, and a pathway toward scalable commercialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILLARS.map((pillar) => (
            <div
              className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs"
              key={pillar.title}
            >
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                <Icon className="text-[20px]" name={pillar.icon} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {pillar.title}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Explore the portfolio
          </span>
          <ul className="flex flex-wrap gap-space-xs">
            {SECTION_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-primary-container hover:text-on-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                  <Icon className="text-[16px]" name="arrow_downward" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
