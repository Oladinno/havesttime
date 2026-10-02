import Icon from "../Icon";
import { PARTNERSHIP_EMAIL } from "@/lib/site";
import PartnershipSection, { CapabilityCard, Note } from "./PartnershipSection";

const FIT_PROFILES = [
  "a food scientist or researcher",
  "a university or laboratory",
  "an agricultural producer",
  "an ingredient processor",
  "a food manufacturer",
  "a co-manufacturer",
  "an ingredient company",
  "a distributor",
  "a foodservice operator",
  "a retailer",
  "an importer or exporter",
  "a technology provider",
  "a strategic or commercial partner",
];

const CONTACT_DETAILS = [
  "your organization or professional background",
  "your area of expertise or capability",
  "your location",
  "the type of collaboration you are proposing",
  "the products, technologies or services involved",
  "relevant production or technical capabilities",
  "any supporting documentation",
];

export default function WorkWithSection() {
  return (
    <PartnershipSection
      eyebrow="Work With Harvestime"
      icon="handshake"
      id="work-with-us"
      intro={[
        "We welcome relevant conversations with organizations and individuals who can contribute to our food, nutrition and agro-industrial development work.",
      ]}
      surfaceClass="bg-surface-container-high"
      tagline="Have a Capability, Ingredient or Opportunity That Fits Our Work?"
      title="Work With Harvestime"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          <CapabilityCard
            icon="groups"
            items={FIT_PROFILES}
            title="You may be a good fit if you are"
          />
          <CapabilityCard
            icon="description"
            items={CONTACT_DETAILS}
            columns="md:grid-cols-1"
            title="When contacting Harvestime, it is helpful to include"
          />
        </div>

        <Note icon="policy">
          We review partnerships based on strategic relevance, technical quality, commercial
          potential and fit with Harvestime&apos;s current priorities.
        </Note>

        <div className="bg-primary-container rounded-2xl p-space-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-spec-data text-spec-data text-tertiary-fixed-dim uppercase tracking-wider">
              Partnership inquiries
            </span>
            <a
              className="font-headline-md text-headline-md text-primary-fixed hover:text-tertiary-fixed-dim transition-colors"
              href={`mailto:${PARTNERSHIP_EMAIL}`}
            >
              {PARTNERSHIP_EMAIL}
            </a>
            <p className="font-body-sm text-body-sm text-on-primary-container max-w-xl leading-relaxed">
              Tell us about your organization, capability and the collaboration you have in mind.
              Relevant conversations are reviewed by the Harvestime partnership desk.
            </p>
          </div>
          <a
            className="shrink-0 px-space-xl py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-space-xs"
            href={`mailto:${PARTNERSHIP_EMAIL}?subject=Partnership%20Discussion%20with%20Harvestime`}
          >
            <span>Discuss a Partnership</span>
            <Icon className="text-[18px]" name="handshake" />
          </a>
        </div>
      </div>
    </PartnershipSection>
  );
}
