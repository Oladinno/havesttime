import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { CONTACT_EMAIL, LOGO_URL } from "@/lib/site";

const BRAND_NAME = "HarvestTime";
const PLATFORM_LINKS = [
  { label: "JUNABLEND™ Fibre Platform", href: "/brands-and-platforms#junablend" },
  { label: "African Functional Seeds", href: "/brands-and-platforms#functional-seeds" },
  { label: "Ogbono & Dawadawa Ingredients", href: "/brands-and-platforms#ogbono" },
  { label: "FLOURVANT™ Flour Foods", href: "/brands-and-platforms#flourvant" },
  { label: "CEREVANT™ Cereal Foods", href: "/brands-and-platforms#cerevant" },
];

const NAVIGATION_LINKS = [
  "Corporate Overview",
  "Institutional Roadmap",
  "Nutritional R&D",
  "Global Offtake Agreements",
  "Agronomic Traceability",
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="w-full px-margin pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {/* Company identity */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-lg">
            <div className="flex items-center gap-space-sm">
              <Image
                alt="HarvestTime Logo"
                className="h-8 w-auto object-contain"
                height={32}
                src={LOGO_URL}
                width={100}
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  {BRAND_NAME}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Agro-Industrial Scale
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Pioneering advanced food science, clinical fortification solutions, and traceable
              agrarian supply chains across sub-Saharan Africa. Translating regional crop heritage
              into industrial bio-ingredients.
            </p>
            <div className="flex flex-col gap-space-xs font-spec-data text-spec-data text-on-surface-variant">
              <span className="flex items-center gap-space-xs">
                <Icon name="location_on" className="text-[16px] text-primary" />
                Lagos Headquarters & Regional Processing Hubs
              </span>
              <span className="flex items-center gap-space-xs">
                <Icon name="mail" className="text-[16px] text-primary" />
                {CONTACT_EMAIL}
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
              Enterprise Platforms
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
              Navigation
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {NAVIGATION_LINKS.map((label) => (
                <li key={label}>
                  <Link className="hover:text-primary transition-colors" href="#">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
              Governance & Legal
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-primary transition-colors" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <span className="font-spec-data text-spec-data text-on-surface-variant">
            © 2026 HarvestTime. All rights reserved.
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            Powered by HarvestTime — combining agriculture, food science, nutrition and commercial innovation.
          </p>
          <div className="flex items-center gap-space-md font-spec-data text-spec-data text-on-surface-variant">
            <span className="flex items-center gap-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
              African Agribusiness Integrity Index: AAA
            </span>
            <span>Secured Enterprise Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
