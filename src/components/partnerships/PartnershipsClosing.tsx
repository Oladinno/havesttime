import Link from "next/link";
import Icon from "../Icon";
import { PARTNERSHIP_EMAIL } from "@/lib/site";

const PRINCIPLES = [
  "Better ingredients.",
  "Better technology.",
  "Better food.",
  "Built together.",
];

export default function PartnershipsClosing() {
  return (
    <section className="w-full bg-primary-container py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md items-start">
        <span className="font-spec-data text-spec-data text-tertiary-fixed-dim uppercase tracking-wider">
          Built Through Collaboration
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary-fixed font-bold max-w-3xl">
          Harvestime&apos;s goal is not to build every capability internally.
        </h2>
        <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
          Our model is to combine the right science, agricultural resources, technology,
          manufacturing capability and commercial partnerships around carefully selected
          opportunities.
        </p>

        <ul className="flex flex-wrap gap-space-xs pt-space-sm">
          {PRINCIPLES.map((item) => (
            <li
              className="px-space-md py-space-xs rounded-full bg-primary-fixed/15 text-primary-fixed font-spec-data text-spec-data uppercase tracking-wider"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
          <a
            className="px-space-xl py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-space-xs"
            href={`mailto:${PARTNERSHIP_EMAIL}?subject=Partnership%20Discussion%20with%20Harvestime`}
          >
            <span>Discuss a Partnership</span>
            <Icon className="text-[18px]" name="handshake" />
          </a>
          <Link
            className="px-space-xl py-3.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg shadow-md hover:bg-surface-container-lowest transition-all flex items-center gap-space-xs"
            href="/research-and-innovation"
          >
            <span>Explore Research &amp; Innovation</span>
            <Icon className="text-[18px]" name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}
