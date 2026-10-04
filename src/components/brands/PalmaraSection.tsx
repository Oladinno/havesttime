import Image from "next/image";
import BrandSection, { DevelopmentGrid, TagCloud, Callout } from "./BrandSection";

const HIGHLIGHTS = [
  {
    icon: "water_drop",
    title: "Premium Red Palm Oil",
    description:
      "Extracted from carefully selected oil palm fruits, Palmara delivers a rich, naturally red oil prized for its flavour, colour and nutritional profile.",
  },
  {
    icon: "eco",
    title: "Pure & Natural",
    description:
      "No artificial additives, preservatives or bleaching — just the authentic taste and quality that consumers and food businesses expect from genuine palm oil.",
  },
  {
    icon: "local_florist",
    title: "Rich in Beta-Carotene",
    description:
      "A natural source of beta-carotene and Vitamin E, Palmara Red Palm Oil supports everyday nutrition alongside its culinary versatility.",
  },
];

const APPLICATIONS = [
  "Household Cooking",
  "Food Manufacturing",
  "Soups & Stews",
  "Traditional Recipes",
  "Wholesale & Bulk Supply",
  "Export Markets",
];

export default function PalmaraSection() {
  return (
    <BrandSection
      eyebrow="Premium Agricultural Oil Brand"
      icon="opacity"
      id="palmara"
      intro={[
        "Palmara™ is Harvestime's premium red palm oil brand — pure, rich and natural, sourced directly from the company's agro-industrial operations.",
        "Targeting both consumer and B2B markets, Palmara delivers consistent quality and authentic flavour to households, food processors and export buyers.",
      ]}
      surfaceClass="bg-surface"
      tagline="Pure · Rich · Natural"
      title="Palmara™ Premium Red Palm Oil"
    >
      <div className="flex flex-col gap-space-xl">
        {/* Logo showcase */}
        <div className="flex justify-center">
          <div className="bg-[#f5f0e8] rounded-2xl shadow-md p-space-lg flex items-center justify-center max-w-sm w-full">
            <Image
              alt="Palmara Premium Red Palm Oil — Pure · Rich · Natural"
              className="w-full h-auto object-contain"
              height={300}
              src="/palm.jpeg"
              width={400}
            />
          </div>
        </div>

        <DevelopmentGrid
          items={HIGHLIGHTS}
          label="What defines Palmara quality"
        />

        <TagCloud
          items={APPLICATIONS}
          label="Markets & applications"
          tone="secondary"
        />

        <Callout icon="agriculture">
          Palmara represents Harvestime&apos;s commitment to transforming its
          oil palm agricultural base into a premium consumer brand — bridging
          farm production with direct market value for both local and
          international buyers.
        </Callout>
      </div>
    </BrandSection>
  );
}
