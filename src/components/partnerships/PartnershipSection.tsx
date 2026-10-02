import { Fragment, type ReactNode } from "react";
import Icon from "../Icon";

type PartnershipSectionProps = {
  id: string;
  eyebrow: string;
  icon: string;
  title: string;
  tagline?: string;
  intro?: string[];
  surfaceClass?: string;
  children?: ReactNode;
};

export default function PartnershipSection({
  id,
  eyebrow,
  icon,
  title,
  tagline,
  intro,
  surfaceClass = "bg-surface",
  children,
}: PartnershipSectionProps) {
  return (
    <section className={`w-full py-24 px-margin ${surfaceClass}`} id={id}>
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
            <Icon className="text-[16px]" name={icon} />
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">{title}</h2>
          {tagline ? (
            <p className="font-label-lg text-label-lg text-secondary italic">{tagline}</p>
          ) : null}
          {intro && intro.length > 0 ? (
            <div className="flex flex-col gap-space-sm pt-space-xs">
              {intro.map((paragraph) => (
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  key={paragraph.slice(0, 48)}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

type TagTone = "neutral" | "accent" | "secondary";

const TAG_TONES: Record<TagTone, string> = {
  neutral: "bg-surface-container-lowest text-on-surface shadow-sm",
  accent: "bg-primary-fixed text-on-primary-fixed",
  secondary: "bg-secondary-fixed text-on-secondary-fixed",
};

export function TagList({
  label,
  items,
  tone = "neutral",
}: {
  label: string;
  items: string[];
  tone?: TagTone;
}) {
  return (
    <div className="flex flex-col gap-space-sm">
      <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
      <ul className="flex flex-wrap gap-space-xs">
        {items.map((item) => (
          <li
            className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg ${TAG_TONES[tone]}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CheckList({
  label,
  items,
  columns = "md:grid-cols-2",
  icon = "check_circle",
}: {
  label?: string;
  items: string[];
  columns?: string;
  icon?: string;
}) {
  return (
    <div className="flex flex-col gap-space-sm">
      {label ? (
        <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
          {label}
        </span>
      ) : null}
      <ul className={`grid grid-cols-1 ${columns} gap-x-space-lg gap-space-xs`}>
        {items.map((item) => (
          <li
            className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed"
            key={item}
          >
            <Icon className={`text-[18px] text-secondary mt-1 shrink-0`} name={icon} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Note({
  children,
  icon = "format_quote",
  tone = "light",
}: {
  children: ReactNode;
  icon?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`rounded-xl p-space-lg shadow-sm flex items-start gap-space-md ${
        isDark ? "bg-primary-container" : "bg-surface-container-lowest"
      }`}
    >
      <Icon
        className={`text-[24px] shrink-0 ${isDark ? "text-tertiary-fixed-dim" : "text-primary"}`}
        name={icon}
      />
      <div
        className={`font-body-md text-body-md leading-relaxed ${
          isDark ? "text-primary-fixed" : "text-on-surface"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function CapabilityCard({
  title,
  icon,
  items,
  columns = "md:grid-cols-2",
}: {
  title: string;
  icon: string;
  items: string[];
  columns?: string;
}) {
  return (
    <div className="bg-surface-container rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm h-full">
      <div className="flex items-center gap-space-sm">
        <span className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0">
          <Icon className="text-[20px]" name={icon} />
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{title}</h3>
      </div>
      <ul className={`grid grid-cols-1 ${columns} gap-x-space-md gap-space-xs`}>
        {items.map((item) => (
          <li
            className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed"
            key={item}
          >
            <Icon className="text-[18px] text-secondary mt-1 shrink-0" name="check_circle" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-space-sm">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <span className="px-space-md py-space-xs rounded-full bg-primary-container text-primary-fixed font-spec-data text-spec-data uppercase tracking-wider">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <Icon className="text-[16px] text-primary" name="arrow_forward" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
