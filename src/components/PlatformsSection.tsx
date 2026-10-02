import Icon from "./Icon";

const PORTFOLIO = [
  {
    icon: "nutrition",
    iconClass: "bg-primary-fixed text-primary",
    badge: "Fibre Nutrition",
    title: "JUNABLEND™",
    tagline: "Better Fibre. Better Days.",
    description:
      "A fibre-focused platform built around one question: what do you want your fibre to do? Pre-meal fibre, fibre + protein and microbiome gut health formats.",
    href: "/brands-and-platforms#junablend",
  },
  {
    icon: "spa",
    iconClass: "bg-secondary-fixed text-on-secondary-fixed",
    badge: "African Ingredients",
    title: "African Functional Seeds",
    tagline: "From Traditional Ingredients to Modern Food Platforms",
    description:
      "Ogbono and dawadawa developed through standardization, processing, formulation and testing into consistent, versatile and commercially useful ingredients.",
    href: "/brands-and-platforms#functional-seeds",
  },
  {
    icon: "bakery_dining",
    iconClass: "bg-surface-container-high text-on-surface",
    badge: "Flour-Based Foods",
    title: "FLOURVANT™",
    tagline: "Nutrition Technology for Flour-Based Foods.",
    description:
      "Premix systems that raise fibre and protein in bread, buns, puff-puff, biscuits, pastries and other flour foods without losing taste, texture or rise.",
    href: "/brands-and-platforms#flourvant",
  },
  {
    icon: "grain",
    iconClass: "bg-surface-container-high text-on-surface",
    badge: "Cereal-Based Foods",
    title: "CEREVANT™",
    tagline: "Nutrition Technology for Cereal-Based Foods.",
    description:
      "Protein, fibre and NutriBase systems for ogi, pap, tuwo, kunu and other everyday maize, millet and sorghum foods across Africa.",
    href: "/brands-and-platforms#cerevant",
  },
  {
    icon: "lightbulb",
    iconClass: "bg-primary-fixed text-primary",
    badge: "Innovation Pipeline",
    title: "Emerging Products & Platforms",
    tagline: "Building the Next Generation of HarvestTime Innovation",
    description:
      "A disciplined pipeline assessed on market demand, technical feasibility, capital intensity, strategic fit and commercial opportunity.",
    href: "/brands-and-platforms#emerging",
  },
];

export default function PlatformsSection() {
  return (
    <section className="w-full bg-surface py-24 px-margin" id="platforms">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs text-center items-center">
          <span className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-spec-data text-spec-data uppercase tracking-wider">
            Brands &amp; Products
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            One Portfolio. Multiple Paths to Better Food.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Consumer products, B2B ingredient technologies and African ingredient development —
            each platform built around a defined problem, a clear nutritional opportunity and a
            pathway to scalable commercialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {PORTFOLIO.map((item) => (
            <a
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
              href={item.href}
              key={item.title}
            >
              <div className="flex items-center justify-between">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
                  {item.badge}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconClass}`}>
                  <Icon className="text-[20px]" name={item.icon} />
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {item.title}
                </h3>
                <p className="font-label-lg text-label-lg text-secondary italic">{item.tagline}</p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed flex-1">
                {item.description}
              </p>
              <span className="font-label-lg text-label-lg text-primary flex items-center gap-1 pt-space-xs border-t border-surface-container">
                View platform <Icon className="text-[16px]" name="arrow_forward" />
              </span>
            </a>
          ))}

          <div className="bg-primary-container rounded-xl p-space-lg shadow-md flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                <Icon className="text-[20px]" name="menu_book" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-fixed font-bold">
                The Full Brands &amp; Platforms Breakdown
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                Development areas, applications, ingredient pathways and pipeline criteria for
                every HarvestTime platform — including ogbono, dawadawa and other indigenous
                ingredient development.
              </p>
            </div>
            <a
              className="w-full py-3 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg shadow-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-space-xs"
              href="/brands-and-platforms"
            >
              <span>Explore All Brands &amp; Platforms</span>
              <Icon className="text-[18px]" name="arrow_forward" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
