import Icon from "../Icon";
import { CapabilityCard } from "./PartnershipSection";

const HARVESTIME_ROLE = [
  "Product architecture",
  "Innovation direction",
  "Intellectual property",
  "Commercialization",
  "Quality expectations",
];

const PARTNER_ROLE = [
  "Specialist research",
  "Processing",
  "Manufacturing",
  "Testing",
  "Market execution",
];

const SECTION_LINKS = [
  { label: "Research & Scientific Collaboration", href: "#research" },
  { label: "Agricultural & Processing", href: "#agriculture" },
  { label: "Manufacturing Partners", href: "#manufacturing" },
  { label: "Commercial & Distribution", href: "#commercial" },
  { label: "Innovation & Technology", href: "#technology" },
  { label: "Work With Harvestime", href: "#work-with-us" },
];

export default function PartnershipsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-24 px-margin">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        <div className="flex flex-col gap-space-md max-w-3xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
              Partnerships
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight font-bold tracking-tight">
            Built Through <span className="text-secondary">Collaboration</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Harvestime believes meaningful food innovation is built through strong collaboration.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We work with researchers, processors, manufacturers, ingredient companies,
            distributors, commercial organizations and technology partners who can help move ideas
            from research and formulation into real products and scalable markets.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our partnership model is designed around complementary capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <CapabilityCard icon="hub" items={HARVESTIME_ROLE} title="Harvestime focuses on" />
          <CapabilityCard
            icon="handshake"
            items={PARTNER_ROLE}
            title="We work with qualified partners for"
          />
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Explore partnership areas
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
