import Icon from "../Icon";
import { Pipeline } from "./ResearchSection";

const PIPELINE = [
  "Characterization",
  "Formulation",
  "Validation",
  "Manufacturing",
  "Commercialization",
];

const SECTION_LINKS = [
  { label: "Research Focus", href: "#research-focus" },
  { label: "African Crops & Ingredients", href: "#african-crops" },
  { label: "Nutrition Science", href: "#nutrition-science" },
  { label: "Food Functionality", href: "#food-functionality" },
  { label: "Fermentation", href: "#fermentation" },
  { label: "Product Development", href: "#product-development" },
  { label: "Current Research Areas", href: "#current-research" },
  { label: "Insights / Publications", href: "#insights" },
];

export default function ResearchHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-24 px-margin">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        <div className="flex flex-col gap-space-md max-w-3xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
              Research &amp; Innovation
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight font-bold tracking-tight">
            Research &amp; Innovation
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Harvestime&rsquo;s research and innovation work is focused on one central question:
          </p>

          <div className="bg-surface-container rounded-xl p-space-xl shadow-md flex items-center gap-space-md">
            <span className="font-headline-lg text-headline-lg text-secondary leading-none hidden sm:block">
              &ldquo;
            </span>
            <p className="font-headline-md text-headline-md text-primary font-bold leading-snug">
              How can agriculture, food science and nutrition be combined to create better everyday
              foods?
            </p>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We investigate opportunities across African crops, ingredient functionality, nutrition,
            fermentation, formulation and food processing.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our research is designed with practical application in mind. We are not interested in
            research that stops at observation alone. Where possible, we aim to move promising
            findings toward:
          </p>
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            From finding to market
          </span>
          <Pipeline steps={PIPELINE} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <Icon className="text-[20px]" name="science" />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Evidence Led
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Work guided by composition data, studied intake levels, intended populations and
              practical use conditions.
            </p>
          </div>
          <div className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <Icon className="text-[20px]" name="settings" />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Application Driven
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Findings are pursued only where they can progress into formulations, ingredient
              systems or manufacturing technologies.
            </p>
          </div>
          <div className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <Icon className="text-[20px]" name="storefront" />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Commercially Grounded
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Research is evaluated against manufacturing reality, cost, quality and consumer
              acceptance.
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Explore this page
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
