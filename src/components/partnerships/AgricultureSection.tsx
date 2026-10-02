import PartnershipSection, { CheckList, Note, TagList } from "./PartnershipSection";

const PARTNERSHIP_AREAS = [
  "crop sourcing",
  "seed sourcing",
  "cleaning and sorting",
  "drying",
  "milling",
  "fermentation",
  "primary processing",
  "ingredient preparation",
  "storage",
  "traceability",
  "quality assurance",
];

const PRIORITIES = [
  "consistency",
  "food safety",
  "moisture control",
  "microbiological quality",
  "traceability",
  "processing discipline",
  "documentation",
  "scalability",
];

export default function AgricultureSection() {
  return (
    <PartnershipSection
      eyebrow="Raw Materials & Processing"
      icon="agriculture"
      id="agriculture"
      intro={[
        "Reliable agricultural sourcing and processing are critical to consistent food innovation.",
        "Harvestime is interested in working with farmers, aggregators, processors, cooperatives and agricultural businesses capable of supplying or processing food-grade raw materials to defined specifications.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="Building Better Ingredients Starts with Better Raw Materials"
      title="Agricultural & Processing Partners"
    >
      <div className="flex flex-col gap-space-xl">
        <TagList
          items={PARTNERSHIP_AREAS}
          label="Partnership areas may include"
          tone="accent"
        />

        <CheckList items={PRIORITIES} label="We place particular importance on" />

        <Note icon="target">
          Our objective is to help move agricultural materials from variable commodity inputs
          toward more reliable, standardized ingredients suitable for modern food applications.
        </Note>
      </div>
    </PartnershipSection>
  );
}
