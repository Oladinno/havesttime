import PartnershipSection, { Flow, Note, TagList } from "./PartnershipSection";

const CHANNELS = [
  "modern retail",
  "traditional retail",
  "foodservice",
  "hospitality",
  "bakeries",
  "food manufacturers",
  "institutional markets",
  "e-commerce",
  "wholesale distribution",
  "diaspora markets",
  "export markets",
];

const STRUCTURES = [
  "Direct distribution",
  "Distributor partnerships",
  "B2B supply",
  "Market-specific structures",
];

export default function CommercialSection() {
  return (
    <PartnershipSection
      eyebrow="Market Access"
      icon="storefront"
      id="commercial"
      intro={[
        "A strong product only creates value when it reaches the right customers efficiently.",
        "Harvestime is interested in working with distributors, wholesalers, retailers, foodservice businesses, institutional buyers, importers, exporters and commercial partners capable of supporting market access.",
      ]}
      surfaceClass="bg-surface-container"
      tagline="Taking Better Food to the Market"
      title="Commercial & Distribution Partners"
    >
      <div className="flex flex-col gap-space-xl">
        <TagList items={CHANNELS} label="Potential channels include" tone="accent" />

        <Note icon="handshake">
          We are especially interested in commercial partners who understand their market,
          maintain strong customer relationships and can help establish reliable routes to market.
        </Note>

        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Commercial structures depend on the product and market
          </span>
          <Flow steps={STRUCTURES} />
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
            Harvestime may work through direct distribution, distributor partnerships, B2B supply
            arrangements or other commercial structures depending on the product and market.
          </p>
        </div>
      </div>
    </PartnershipSection>
  );
}
