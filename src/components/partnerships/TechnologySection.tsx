import PartnershipSection, { CheckList, Note, TagList } from "./PartnershipSection";

const TECHNOLOGY_AREAS = [
  "ingredient technology",
  "processing technology",
  "fermentation",
  "food preservation",
  "packaging",
  "quality-control systems",
  "analytical technology",
  "digital food systems",
  "traceability",
  "manufacturing equipment",
  "process automation",
  "nutrition science",
  "agricultural technology",
];

const COLLABORATION_TYPES = [
  "Joint development",
  "Technology evaluation",
  "Licensing",
  "Technical integration",
  "Application development",
  "Commercialization partnerships",
  "Market-entry collaboration",
];

export default function TechnologySection() {
  return (
    <PartnershipSection
      eyebrow="Technology & Innovation"
      icon="memory"
      id="technology"
      intro={[
        "Harvestime welcomes collaboration with companies and organizations developing technologies that can improve food quality, nutrition, manufacturing or commercialization.",
        "We are particularly interested in technologies that can be applied to familiar foods, African agricultural resources or scalable nutrition solutions.",
      ]}
      surfaceClass="bg-surface"
      tagline="Building New Food Systems Together"
      title="Innovation & Technology Partners"
    >
      <div className="flex flex-col gap-space-xl">
        <TagList items={TECHNOLOGY_AREAS} label="Relevant areas may include" tone="accent" />

        <CheckList
          columns="md:grid-cols-3"
          items={COLLABORATION_TYPES}
          label="Potential collaborations may include"
        />

        <Note icon="leaderboard">
          Each opportunity is evaluated on strategic fit, technical value, scalability and
          commercial potential.
        </Note>
      </div>
    </PartnershipSection>
  );
}
