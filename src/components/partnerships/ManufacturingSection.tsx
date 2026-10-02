import PartnershipSection, { Note, TagList } from "./PartnershipSection";

const CAPABILITIES = [
  "pilot production",
  "commercial manufacturing",
  "blending",
  "milling",
  "extrusion",
  "baking",
  "packaging",
  "filling",
  "seasoning production",
  "cereal processing",
  "dry-mix production",
  "other food-processing capabilities",
];

export default function ManufacturingSection() {
  return (
    <PartnershipSection
      eyebrow="Scale-Up & Production"
      icon="factory"
      id="manufacturing"
      intro={[
        "Harvestime works with qualified manufacturers and co-manufacturers to translate validated formulations into commercial products.",
        "We are interested in partners with relevant production capabilities, quality systems and willingness to support controlled scale-up.",
      ]}
      surfaceClass="bg-surface"
      tagline="From Validated Formula to Commercial Production"
      title="Manufacturing Partners"
    >
      <div className="flex flex-col gap-space-xl">
        <TagList
          items={CAPABILITIES}
          label="Depending on the project, manufacturing partnerships may include"
          tone="accent"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <Note icon="specification">
            Our preferred approach begins with clearly defined product specifications, quality
            standards, confidentiality expectations and manufacturing requirements.
          </Note>
          <Note icon="verified_user">
            Where proprietary technology or formulations are involved, Harvestime may retain
            ownership or defined commercial rights while manufacturing is carried out by approved
            partners. The objective is to create a scalable model without compromising product
            quality, consistency or intellectual property.
          </Note>
        </div>
      </div>
    </PartnershipSection>
  );
}
