import Image from "next/image";
import BrandSection, { DevelopmentGrid, TagCloud, Callout } from "./BrandSection";

const HIGHLIGHTS = [
  {
    icon: "egg",
    title: "Free-Range & Farm-Fresh",
    description:
      "Eggs sourced from hens raised in spacious, well-managed environments — producing naturally nutritious, high-quality eggs every day.",
  },
  {
    icon: "verified",
    title: "Stringent Quality Control",
    description:
      "Every batch is inspected for freshness, shell integrity and nutritional quality before reaching consumers and trade partners.",
  },
  {
    icon: "local_shipping",
    title: "Reliable Supply Chain",
    description:
      "Cold-chain logistics and structured distribution ensure consistent availability across retail, wholesale and institutional channels.",
  },
];

const APPLICATIONS = [
  "Retail & Supermarkets",
  "Hotels & Restaurants",
  "Bakeries & Pastry Kitchens",
  "Institutional Catering",
  "Wholesale Distribution",
  "Food Manufacturing",
];

export default function ZuriEggsSection() {
  return (
    <BrandSection
      eyebrow="Consumer Poultry Brand"
      icon="egg_alt"
      id="zurieggs"
      intro={[
        "ZuriEggs™ is Harvestime's premium egg brand — delivering beautifully fresh, naturally nutritious eggs from responsibly managed poultry operations.",
        "Built on a commitment to quality at every stage, ZuriEggs serves consumers, food businesses and institutional buyers who demand consistent freshness and reliable supply.",
      ]}
      surfaceClass="bg-surface-container-lowest"
      tagline="Beautifully Fresh. Naturally Nutritious."
      title="ZuriEggs™ Fresh Eggs"
    >
      <div className="flex flex-col gap-space-xl">
        {/* Logo showcase */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-md p-space-lg flex items-center justify-center max-w-sm w-full">
            <Image
              alt="ZuriEggs Fresh Eggs — Beautifully Fresh. Naturally Nutritious."
              className="w-full h-auto object-contain"
              height={300}
              src="/zuriegg.jpeg"
              width={400}
            />
          </div>
        </div>

        <DevelopmentGrid
          items={HIGHLIGHTS}
          label="What makes ZuriEggs different"
        />

        <TagCloud
          items={APPLICATIONS}
          label="Markets & channels served"
          tone="accent"
        />

        <Callout icon="storefront">
          ZuriEggs is positioned as a premium fresh egg brand serving Nigeria&apos;s
          growing demand for reliable, high-quality poultry products — from
          household consumers to large-scale food businesses.
        </Callout>
      </div>
    </BrandSection>
  );
}
