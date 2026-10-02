import Icon from "./Icon";

type RoadmapStage = {
  stage: string;
  stageColor: string;
  borderClass: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
};

const STAGES: RoadmapStage[] = [
  {
    stage: "STAGE 01",
    stageColor: "text-primary",
    borderClass: "border-primary",
    icon: "check_circle",
    iconColor: "text-primary",
    title: "Platform R&D",
    description:
      "Core bio-active extraction IP, proof-of-concept testing, and clinical baseline establishment.",
  },
  {
    stage: "STAGE 02",
    stageColor: "text-primary",
    borderClass: "border-primary",
    icon: "pending",
    iconColor: "text-secondary",
    title: "Commercial Apps",
    description:
      "Application testing across bread, cereals, snacks, and ready-mix dietary formulations.",
  },
  {
    stage: "STAGE 03",
    stageColor: "text-secondary",
    borderClass: "border-secondary",
    icon: "schedule",
    iconColor: "text-on-surface-variant",
    title: "Pilot Markets",
    description:
      "Targeted regional launch of JUNABLEND™ and FLOURVANT™ with premier manufacturing partners.",
  },
  {
    stage: "STAGE 04",
    stageColor: "text-on-surface-variant",
    borderClass: "border-surface-container-highest",
    icon: "sync_alt",
    iconColor: "text-on-surface-variant",
    title: "Partner Scale",
    description:
      "Co-packing agreements, multinational ingredient licensing, and widespread FMCG distribution.",
  },
  {
    stage: "STAGE 05",
    stageColor: "text-on-surface-variant",
    borderClass: "border-surface-container-highest",
    icon: "eco",
    iconColor: "text-on-surface-variant",
    title: "Food Ecosystem",
    description:
      "Pan-African decentralized processing hubs setting global benchmarks for functional ingredients.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="w-full bg-surface-container py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs">
          <span className="font-spec-data text-spec-data text-on-surface-variant uppercase tracking-wider">
            Multi-Year Trajectory
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Strategic Industrial Roadmap
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Our five-phase blueprint building long-term sovereignty in African nutritional
            processing and bio-ingredient manufacturing.
          </p>
        </div>

        {/* Visual stage progression rail */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
          {STAGES.map((stage) => (
            <div
              className={`bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border-t-4 ${stage.borderClass}`}
              key={stage.stage}
            >
              <div className="flex items-center justify-between">
                <span className={`font-spec-data text-[11px] font-bold ${stage.stageColor}`}>
                  {stage.stage}
                </span>
                <Icon className={`text-[18px] ${stage.iconColor}`} name={stage.icon} />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {stage.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
