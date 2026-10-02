import Image from "next/image";
import Icon from "./Icon";
import { HERO_IMAGE_URL } from "@/lib/site";

const STATUS_INDICATORS = [
  { icon: "verified", color: "text-secondary", label: "Empirical Bio-Fortification" },
  { icon: "biotech", color: "text-primary-container", label: "HACCP & ISO 22000 Benchmarked" },
  { icon: "public", color: "text-tertiary-container", label: "Sub-Saharan Provenance" },
];

const METRICS = [
  {
    value: "7",
    valueColor: "text-primary",
    label: "Core Platforms & Brands",
    sub: "Validated IP Architecture",
  },
  {
    value: "9",
    valueColor: "text-secondary",
    label: "Operating Principles",
    sub: "Scientific & Ethical Rigor",
  },
  {
    value: "100%",
    valueColor: "text-primary",
    label: "African Grounded",
    sub: "Indigenous Crop Provenance",
  },
  {
    value: "End-to-End",
    valueColor: "text-tertiary-container",
    label: "Research-to-Market",
    sub: "Fully Scalable Pipeline",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-24 px-margin">
      {/* Subtle ambient glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          {/* Science badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            <span className="font-spec-data text-spec-data text-primary-fixed uppercase tracking-wider">
              African Agro-Industrial & Food Science Innovation
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight font-bold tracking-tight">
            Transforming Agricultural Resources into{" "}
            <span className="text-secondary">Science-Led Nutrition</span>
          </h1>

          {/* Subhead */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            HarvestTime operates at the intersection of agriculture, food science, nutrition,
            ingredient technology and commercialization. Making familiar foods work harder for
            human nutrition.
          </p>

          {/* CTA action buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <a
              className="px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all flex items-center gap-space-xs"
              href="#platforms"
            >
              <span>Explore Our Platforms</span>
              <Icon className="text-[18px]" name="arrow_downward" />
            </a>
            <a
              className="px-space-xl py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-on-secondary-fixed transition-all flex items-center gap-space-xs"
              href="/partnerships"
            >
              <span>Partner With Us</span>
              <Icon className="text-[18px]" name="handshake" />
            </a>
          </div>

          {/* Live scientific status indicators */}
          <div className="flex flex-wrap items-center gap-space-lg pt-space-md text-on-surface-variant font-spec-data text-spec-data">
            {STATUS_INDICATORS.map((item) => (
              <div className="flex items-center gap-space-xs" key={item.label}>
                <Icon className={`text-[16px] ${item.color}`} name={item.icon} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column visual graphic */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container rounded-xl p-space-md shadow-xl overflow-hidden">
            <Image
              alt="Food science laboratory setting in an agro-industrial processing plant showing high precision nutrient formulation of golden grains, composite flours, and natural bioactive extracts in calibrated glass beakers with deep green vegetation background."
              className="w-full h-80 object-cover rounded-lg"
              height={320}
              src={HERO_IMAGE_URL}
              width={640}
            />
            {/* Overlaid scientific monospace card */}
            <div className="absolute bottom-6 left-6 right-6 p-space-md bg-surface-container-lowest/95 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-spec-data text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Formula Integrity Index
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  99.84% Traceable
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed">
                <Icon className="text-[24px]" name="mobile_rotate_lock" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key impact metrics banner */}
      <div className="max-w-7xl mx-auto mt-16 pt-space-lg bg-surface-container-low rounded-xl p-space-lg shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {METRICS.map((metric) => (
            <div className="flex flex-col items-center" key={metric.label}>
              <span className={`font-headline-xl text-headline-xl font-bold ${metric.valueColor}`}>
                {metric.value}
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                {metric.label}
              </span>
              <span className="font-spec-data text-spec-data text-on-surface-variant">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
