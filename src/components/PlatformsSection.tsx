import Icon from "./Icon";
import { CONTACT_EMAIL } from "@/lib/site";

function CardFooter({
  status,
  statusColor,
  ctaLabel,
  subject,
}: {
  status: string;
  statusColor: string;
  ctaLabel: string;
  subject: string;
}) {
  return (
    <div className="pt-space-lg mt-space-md border-t border-surface-container flex items-center justify-between">
      <span className={`font-spec-data text-spec-data ${statusColor}`}>{status}</span>
      <a
        className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1 transition-colors"
        href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
      >
        {ctaLabel} <Icon className="text-[16px]" name="arrow_forward" />
      </a>
    </div>
  );
}

export default function PlatformsSection() {
  return (
    <section className="w-full bg-surface py-24 px-margin" id="platforms">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs text-center items-center">
          <span className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-spec-data text-spec-data uppercase tracking-wider">
            Industrial Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Core Platforms & Bio-Ingredient Brands
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Engineered food matrices designed to integrate seamlessly into everyday diets without
            disrupting taste, texture, or cultural cooking traditions.
          </p>
        </div>

        {/* Interactive grid of platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Platform 1: JUNABLEND */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-md py-space-xs rounded-full bg-primary-fixed text-primary font-spec-data text-spec-data font-semibold">
                  Gut Health Platform
                </span>
                <Icon className="text-primary-container text-[28px]" name="vital_signs" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  JUNABLEND™
                </h3>
                <p className="font-label-lg text-label-lg text-secondary italic">
                  &quot;Better Fibre. Better Days.&quot;
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Targeted prebiotic dietary fibre supplements engineered for glycemic regulation and
                microbiome nourishment. Developed with a Nigeria-first formulation philosophy for
                maximum bioavailability and gut balance.
              </p>
              <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                {[
                  { headline: "Pre-Meal", sub: "Soluble Fibre" },
                  { headline: "Fibre + Protein", sub: "Dual-Action" },
                  { headline: "Microbiome", sub: "Gut Symbiosis" },
                ].map((cell) => (
                  <div
                    className="bg-surface-container p-space-sm rounded-lg text-center"
                    key={cell.headline}
                  >
                    <span className="font-spec-data text-spec-data text-on-surface font-bold block">
                      {cell.headline}
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      {cell.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <CardFooter
              ctaLabel="Request Technical Dossier"
              status="Status: Commercial Deployment"
              statusColor="text-primary"
              subject="JUNABLEND%20Inquiry"
            />
          </div>

          {/* Platform 2: African Functional Seeds */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-spec-data text-spec-data font-semibold">
                  Indigenous Bioactives
                </span>
                <Icon className="text-secondary text-[28px]" name="spa" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  African Functional Seeds
                </h3>
                <p className="font-label-lg text-label-lg text-secondary italic">
                  &quot;From Traditional Ingredients to Modern Food Platforms&quot;
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Industrializing regional seed heritage into precision food ingredients:{" "}
                <strong>Ogbono</strong> (defatted pure powders, Fibre+, Protein+ fractions) and{" "}
                <strong>Dawadawa</strong> (controlled fermentation African locust bean seasoning,
                shelf-stable sprinkles, and broth bases).
              </p>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div className="bg-surface-container p-space-sm rounded-lg">
                  <span className="font-label-lg text-label-lg text-on-surface font-bold block mb-1">
                    Ogbono Hydrocolloids
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Viscosity retention, natural thickeners & soluble seed fibres.
                  </span>
                </div>
                <div className="bg-surface-container p-space-sm rounded-lg">
                  <span className="font-label-lg text-label-lg text-on-surface font-bold block mb-1">
                    Dawadawa Umami
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Fermented umami bioactives, sodium replacement & broth bases.
                  </span>
                </div>
              </div>
            </div>
            <CardFooter
              ctaLabel="Sample Inquiries"
              status="Status: B2B Formulation Ready"
              statusColor="text-secondary"
              subject="Functional%20Seeds%20Inquiry"
            />
          </div>

          {/* Platform 3: FLOURVANT */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-spec-data text-spec-data font-semibold">
                  Bakery Fortification
                </span>
                <Icon className="text-primary-container text-[28px]" name="bakery_dining" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  FLOURVANT™
                </h3>
                <p className="font-label-lg text-label-lg text-secondary italic">
                  &quot;Nutrition Technology for Flour-Based Foods&quot;
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Empowering industrial bakeries, confectioneries, and snack processors. Enhances
                commercial sandwich bread, buns, puff-puff, and cookies with bioavailable fibre and
                plant protein without compromising loaf volume, softness, or mouthfeel.
              </p>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between font-spec-data text-spec-data text-on-surface-variant">
                <span>Applications: Industrial Bread • Pastries • Snacks</span>
                <span className="text-primary font-bold">Neutral Sensory Profile</span>
              </div>
            </div>
            <CardFooter
              ctaLabel="Join Pilot Program"
              status="Commercial Baker Trials Open"
              statusColor="text-primary"
              subject="FLOURVANT%20Pilot"
            />
          </div>

          {/* Platform 4: CEREVANT */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-spec-data text-spec-data font-semibold">
                  Staple Cereal Upgrades
                </span>
                <Icon className="text-secondary text-[28px]" name="grain" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  CEREVANT™
                </h3>
                <p className="font-label-lg text-label-lg text-secondary italic">
                  &quot;Nutrition Technology for Cereal-Based Foods&quot;
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Targeting regional staple porridges and cereal meals: Ogi, pap, tuwo, and kunu.
                Improves the protein density and micronutrient profile of sorghum, millet, and
                maize foods consumed by millions daily.
              </p>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between font-spec-data text-spec-data text-on-surface-variant">
                <span>Substrates: Sorghum • Yellow Maize • Finger Millet</span>
                <span className="text-secondary font-bold">High Micronutrient Yield</span>
              </div>
            </div>
            <CardFooter
              ctaLabel="Explore Cereal Matrices"
              status="Institutional Procurement"
              statusColor="text-primary"
              subject="CEREVANT%20Inquiry"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
