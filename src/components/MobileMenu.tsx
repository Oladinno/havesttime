"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands & Platforms", href: "/brands-and-platforms" },
  { label: "Research & Innovation", href: "/research-and-innovation" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Mobile utility strip toggle (for very small screens) */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-50 bg-primary-container/95 backdrop-blur-md text-on-primary px-4 py-2 text-[11px] font-spec-data tracking-wide flex items-center justify-between">
        <span className="flex items-center gap-1.5 w-full truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim inline-block animate-pulse" />
          <span className="truncate text-primary-fixed-dim">
            Transforming African Agricultural Resources into Scalable Nutrition
          </span>
        </span>
        <button
          aria-expanded={contactOpen}
          aria-label="Quick contact"
          className="ml-auto p-1.5 rounded-full hover:bg-primary/30 -mr-2 -mt-2 text-tertiary-fixed-dim hover:text-primary-fixed"
          onClick={() => setContactOpen((v) => !v)}
          type="button"
        >
          <Icon className="text-[16px]" name="mail" />
        </button>
      </div>

      {/* Contact popover on tiny phones */}
      {contactOpen && (
        <div
          className="absolute right-4 top-12 w-72 bg-surface-container-low text-on-surface-variant font-spec-data text-spec-data rounded-xl shadow-lg p-4 z-50 border border-surface-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="font-bold text-primary text-[12px] uppercase tracking-wider">
              Quick Contact
            </span>
            <button
              aria-label="Close contact"
              className="p-1 rounded hover:bg-surface-container text-surface-variant"
              onClick={() => setContactOpen(false)}
              type="button"
            >
              <Icon className="text-[16px]" name="close" />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-primary-fixed-dim">
              <Icon className="text-[14px]" name="mail" />
              <a className="underline decoration-primary-fixed-dim/40 hover:text-primary transition-colors" href="mailto:info@harvestimefarms.com">
                info@harvestimefarms.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-on-surface-variant">
              <Icon className="text-[14px]" name="verified" />
              ISO 22000 & HACCP Certified Labs
            </li>
          </ul>
        </div>
      )}

      {/* Overlay and drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Mobile navigation"
        className={`sm:hidden fixed inset-y-0 right-0 z-50 w-72 bg-surface-container-low text-on-surface shadow-2xl transform transition-transform duration-200 ease-in-out overflow-y-auto`}
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
            const isActive = link.href === "/" ? false : false;
            return (
              <Link
                key={link.label}
                className={`rounded-full px-4 py-2.5 font-label-lg text-label-lg transition-colors ${
                  isActive
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

        <div className="px-5 py-4 border-t border-surface-container mt-auto">
          <div className="flex items-center gap-2 text-on-surface-variant font-spec-data text-spec-data">
            <Icon className="text-[16px] text-primary" name="verified" />
            <span>ISO 22000 &amp; HACCP Certified Labs</span>
          </div>
        </div>
      </nav>

      {/* Hamburger button (appears only on small screens) */}
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="sm:hidden fixed top-18 right-4 z-30 w-10 h-10 rounded-full bg-primary-container text-on-primary shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center"
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
