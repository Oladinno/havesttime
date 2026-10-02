import { Fragment, type ReactNode } from "react";
import Icon from "../Icon";

type BrandSectionProps = {
  id: string;
  eyebrow: string;
  icon: string;
  title: string;
  tagline?: string;
  intro?: string[];
  surfaceClass?: string;
  children?: ReactNode;
};

export default function BrandSection({
  id,
  eyebrow,
  icon,
  title,
  tagline,
  intro,
  surfaceClass = "bg-surface",
  children,
}: BrandSectionProps) {
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

type CardItem = {
  title: string;
  description: string;
  icon?: string;
};

export function DevelopmentGrid({
  label,
  items,
  columns = "md:grid-cols-3",
}: {
  label: string;
  items: CardItem[];
  columns?: string;
}) {
  return (
    <div className="flex flex-col gap-space-sm">
      <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-space-md`}>
        {items.map((item, index) => (
          <div
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border-t-4 border-primary-fixed flex flex-col gap-space-xs"
            key={item.title}
          >
            <div className="flex items-center justify-between">
              <span className="font-spec-data text-[11px] font-bold text-primary uppercase tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                className="text-[20px] text-primary-container"
                name={item.icon ?? "check_circle"}
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              {item.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type TagTone = "neutral" | "accent" | "secondary";

const TAG_TONES: Record<TagTone, string> = {
  neutral: "bg-surface-container-highest text-on-surface",
  accent: "bg-primary-fixed text-on-primary-fixed",
  secondary: "bg-secondary-fixed text-on-secondary-fixed",
};

export function TagCloud({
  label,
  items,
  tone = "neutral",
}: {
  label?: string;
  items: string[];
  tone?: TagTone;
}) {
  return (
    <div className="flex flex-col gap-space-sm">
      {label ? (
        <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
          {label}
        </span>
      ) : null}
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

export function Callout({
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
        className={`text-[24px] ${isDark ? "text-tertiary-fixed-dim" : "text-primary"}`}
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

export function Pipeline({ steps }: { steps: string[] }) {
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
