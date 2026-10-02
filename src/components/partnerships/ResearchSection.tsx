import PartnershipSection, { CheckList, Note, TagList } from "./PartnershipSection";

const EXPERTISE = [
  "food science",
  "nutrition",
  "ingredient functionality",
  "dietary fibre",
  "plant protein",
  "fortification",
  "bakery science",
  "cereal science",
  "fermentation",
  "microbiology",
  "sensory science",
  "shelf-life evaluation",
  "process engineering",
  "food safety",
  "analytical testing",
];

const PROJECT_TYPES = [
  "Formulation development",
  "Prototype testing",
  "Ingredient characterization",
  "Process optimization",
  "Technical validation",
  "Application research",
];

export default function ResearchSection() {
  return (
    <PartnershipSection
      eyebrow="Science & Research"
      icon="science"
      id="research"
      intro={[
        "Harvestime collaborates with scientists, researchers, universities, laboratories and technical specialists across food, nutrition and agricultural science.",
        "Our research collaborations are intended to solve clearly defined technical or commercial problems.",
      ]}
      surfaceClass="bg-surface"
      tagline="Turning Scientific Insight into Practical Food Applications"
      title="Research & Scientific Collaboration"
    >
      <div className="flex flex-col gap-space-xl">
        <TagList
          items={EXPERTISE}
          label="We are particularly interested in expertise relating to"
          tone="accent"
        />

        <CheckList items={PROJECT_TYPES} label="Where appropriate, projects may include" />

        <Note icon="handshake">
          Harvestime may also work under confidentiality and intellectual-property agreements
          where proprietary technologies, formulations or commercial concepts are involved.
        </Note>
      </div>
    </PartnershipSection>
  );
}
