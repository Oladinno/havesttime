import Icon from "../Icon";
import BrandSection, { Callout, TagCloud } from "./BrandSection";

const CONCEPT_SOURCES = [
  "Consumer nutrition needs",
  "Food-industry problems",
  "African ingredient opportunities",
  "Scientific research",
  "Manufacturing challenges",
  "Changing consumer behaviour",
  "New food technologies",
];

const EVALUATION_FACTORS = [
  "Market demand",
  "Technical feasibility",
  "Manufacturing requirements",
  "Capital intensity",
  "Profit potential",
  "Strategic fit",
  "Ability to create meaningful differentiation",
];

export default function EmergingSection() {
  return (
    <BrandSection
      eyebrow="Innovation Pipeline"
      icon="lightbulb"
      id="emerging"
      intro={[
        "Harvestime maintains an active innovation pipeline. Emerging concepts may come from a wide range of sources, and each one is assessed before it is allowed to progress.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="Building the Next Generation of Harvestime Innovation"
      title="Emerging Products & Platforms"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <TagCloud items={CONCEPT_SOURCES} label="Emerging concepts may come from" />
          <div className="flex flex-col gap-space-sm">
            <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
              We evaluate potential platforms against
            </span>
            <ul className="flex flex-col gap-space-xs">
              {EVALUATION_FACTORS.map((factor) => (
                <li
                  className="flex items-center gap-space-xs bg-surface-container-lowest rounded-lg px-space-md py-space-sm font-label-lg text-label-lg text-on-surface"
                  key={factor}
                >
                  <Icon className="text-[18px] text-primary" name="check_circle" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Callout icon="filter_alt">
          Only selected opportunities advance into formal development. This disciplined approach
          allows Harvestime to explore new ideas while keeping resources focused on the products
          and technologies with the strongest path to practical impact and commercialization.
        </Callout>
      </div>
    </BrandSection>
  );
}
