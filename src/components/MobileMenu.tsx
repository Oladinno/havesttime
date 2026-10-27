"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { CONTACT_EMAIL } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands & Platforms", href: "/brands-and-platforms" },
  { label: "Research & Innovation", href: "/research-and-innovation" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Drawer visible below lg (phones + tablets); desktop nav takes over at lg */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Mobile navigation"
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-surface-container-low text-on-surface shadow-2xl transform transition-transform duration-200 ease-in-out overflow-y-auto`}
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-container">
          <span className="font-headline-sm text-primary font-bold">Navigation</span>
          <button
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary"
            onClick={() => setOpen(false)}
            type="button"
          >
            <Icon className="text-[22px]" name="close" />
          </button>
        </div>

        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.label}
                className={`rounded-full px-4 py-2.5 font-label-lg text-label-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-primary-container text-on-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="px-5 py-4 border-t border-surface-container mt-auto flex flex-col gap-2">
          <div className="flex items-center gap-2 text-on-surface-variant font-spec-data text-spec-data">
            <Icon className="text-[16px] text-primary" name="mail" />
            <a
              className="underline decoration-primary-fixed-dim/40 hover:text-primary transition-colors break-all"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-spec-data text-spec-data">
            <Icon className="text-[16px] text-primary" name="verified" />
            <span>ISO 22000 &amp; HACCP Certified Labs</span>
          </div>
        </div>
      </nav>

      {/* Hamburger button (phones + tablets, below lg) */}
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="lg:hidden fixed top-12 sm:top-14 right-4 z-30 w-10 h-10 rounded-full bg-primary-container text-on-primary shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? (
          <Icon className="text-[20px]" name="close" />
        ) : (
          <Icon className="text-[20px]" name="menu" />
        )}
      </button>
    </>
  );
}
