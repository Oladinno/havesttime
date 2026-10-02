import Link from "next/link";
import Icon from "../Icon";

const PORTFOLIO = [
  "JUNABLEND™",
  "African Functional Seeds",
  "FLOURVANT™",
  "CEREVANT™",
  "Future Platforms",
];

export default function ClosingSection() {
  return (
    <section className="w-full bg-primary-container py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md items-start">
        <span className="font-spec-data text-spec-data text-tertiary-fixed-dim uppercase tracking-wider">
          One Portfolio. Multiple Paths to Better Food.
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary-fixed font-bold max-w-3xl">
          Use science, agriculture and food technology to make everyday food more nutritious,
          functional and commercially valuable.
        </h2>
        <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
          Across JUNABLEND™, African Functional Seeds, FLOURVANT™, CEREVANT™ and future platforms,
          our direction remains consistent.
        </p>

        <ul className="flex flex-wrap gap-space-xs pt-space-sm">
          {PORTFOLIO.map((item) => (
            <li
              className="px-space-md py-space-xs rounded-full bg-primary-fixed/15 text-primary-fixed font-spec-data text-spec-data uppercase tracking-wider"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
          <Link
            className="px-space-xl py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-space-xs"
            href="/partnerships"
          >
            <span>Partner With Us</span>
            <Icon className="text-[18px]" name="handshake" />
          </Link>
          <Link
            className="px-space-xl py-3.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg shadow-md hover:bg-surface-container-lowest transition-all flex items-center gap-space-xs"
            href="/"
          >
            <span>Back to Homepage</span>
            <Icon className="text-[18px]" name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}
