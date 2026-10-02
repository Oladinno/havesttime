import Link from "next/link";
import Icon from "../Icon";

const QUESTIONS = [
  "What does the ingredient do?",
  "What nutritional problem can it help address?",
  "What food can it improve?",
  "Can it be manufactured reliably?",
  "Will consumers accept it?",
  "Can it create sustainable commercial value?",
];

const STAGES = ["Science", "Application", "Manufacturing", "Market"];

export default function ResearchClosingSection() {
  return (
    <section className="w-full bg-primary-container py-24 px-margin" id="commercial-destination">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-md max-w-3xl">
          <span className="font-spec-data text-spec-data text-tertiary-fixed-dim uppercase tracking-wider">
            Research with a Commercial Destination
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-fixed font-bold">
            Harvestime&rsquo;s research philosophy is practical.
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
            We seek to understand:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {QUESTIONS.map((question, index) => (
            <div
              className="bg-primary-fixed/10 rounded-xl p-space-lg shadow-sm flex items-start gap-space-md"
              key={question}
            >
              <span className="font-spec-data text-spec-data text-tertiary-fixed-dim font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-headline-sm text-headline-sm text-primary-fixed font-bold leading-snug">
                {question}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body-md text-body-md text-on-primary-container leading-relaxed max-w-2xl">
          That is how we connect research with real food innovation.
        </p>

        <ul className="flex flex-wrap items-center gap-space-xs">
          {STAGES.map((stage, index) => (
            <li className="flex items-center gap-space-xs" key={stage}>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg shadow-sm">
                <Icon className="text-[16px] text-primary" name="check_circle" />
                {stage}
              </span>
              {index < STAGES.length - 1 && (
                <Icon className="text-[16px] text-tertiary-fixed-dim" name="arrow_forward" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-space-md">
          <Link
            className="px-space-xl py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-space-xs"
            href="/#collaboration"
          >
            <span>Collaborate on Research</span>
            <Icon className="text-[18px]" name="handshake" />
          </Link>
          <Link
            className="px-space-xl py-3.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg shadow-md hover:bg-surface-container-lowest transition-all flex items-center gap-space-xs"
            href="/brands-and-platforms"
          >
            <span>See Brands &amp; Platforms</span>
            <Icon className="text-[18px]" name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}
