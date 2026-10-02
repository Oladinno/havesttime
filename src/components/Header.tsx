import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { AVATAR_URL, CONTACT_EMAIL, LOGO_URL } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About & Roadmap", href: "#", active: false },
  { label: "Brands & Platforms", href: "#platforms", active: false },
  { label: "Research & Innovation", href: "#", active: false },
  { label: "Partnerships", href: "#collaboration", active: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(20,54,40,0.05)]">
      {/* Top utility strip */}
      <div className="w-full bg-primary-container text-on-primary py-space-xs px-margin">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-spec-data text-spec-data">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block animate-pulse"></span>
            <span className="tracking-wide text-primary-fixed">
              Transforming African Agricultural Resources into Scalable Nutrition
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-lg text-primary-fixed">
            <span className="flex items-center gap-space-xs">
              <Icon name="mail" className="text-[14px] text-tertiary-fixed-dim" />
              Quick Contact:{" "}
              <a
                className="underline decoration-primary-fixed-dim/50 hover:text-on-primary transition-colors"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-space-xs">
              <Icon name="verified" className="text-[14px] text-tertiary-fixed-dim" />
              ISO 22000 & HACCP Certified Labs
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="h-20 w-full px-margin">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Logo lockup */}
          <div className="flex items-center gap-space-md">
            <Image
              alt="HarvestTime Corporate Logo"
              className="h-8 w-auto object-contain"
              height={32}
              src={LOGO_URL}
              width={100}
            />
            <span className="font-headline-sm text-headline-sm text-primary leading-none tracking-tight">
              HarvestTime
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-space-md">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                aria-current={link.active ? "page" : undefined}
                className={
                  link.active
                    ? "transition-colors bg-primary-container text-on-primary font-label-lg text-label-lg px-space-md py-space-xs rounded-full shadow-sm"
                    : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-space-md">
            <Link
              className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg"
              href="#"
            >
              <Icon name="biotech" className="text-[18px] text-on-surface-variant" />
              <span>Technical Specs / Portal</span>
            </Link>
            <Link
              className="px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary hover:bg-primary transition-all font-label-lg text-label-lg shadow-[0_4px_14px_rgba(20,54,40,0.2)] hover:shadow-none"
              href="#collaboration"
            >
              Partner With Us
            </Link>
            <div className="flex items-center pl-space-xs">
              <Image
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed"
                height={32}
                src={AVATAR_URL}
                width={32}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
