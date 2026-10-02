import Icon from "./Icon";

type PathwayNode = {
  step: string;
  badgeClass: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
};

const NODES: PathwayNode[] = [
  {
    step: "01",
    badgeClass: "bg-primary-container text-primary-fixed",
    icon: "potted_plant",
    iconColor: "text-primary",
    title: "Agriculture",
    description: "Indigenous crops, heirloom seeds, grains & rootstocks sourced regionally.",
  },
  {
    step: "02",
    badgeClass: "bg-surface-container-high text-on-surface",
    icon: "science",
    iconColor: "text-primary",
    title: "Research Lab",
    description: "Biochemical composition, bioactive isolation & extraction protocols.",
  },
  {
    step: "03",
    badgeClass: "bg-surface-container-high text-on-surface",
    icon: "insights",
    iconColor: "text-secondary",
    title: "Profiling",
    description: "Nutritional mapping, satiety, glycaemic indexing & gut health targets.",
  },
  {
    step: "04",
    badgeClass: "bg-surface-container-high text-on-surface",
    icon: "experiment",
    iconColor: "text-primary",
    title: "Formulation",
    description: "Pilot sensory assays, shelf stability matrices & micro-dosing recipes.",
  },
  {
    step: "05",
    badgeClass: "bg-surface-container-high text-on-surface",
    icon: "policy",
    iconColor: "text-primary-container",
    title: "IP & Standards",
    description: "NAFDAC, CODEX compliance, food safety audits & patent protection.",
  },
  {
    step: "06",
    badgeClass: "bg-surface-container-high text-on-surface",
    icon: "factory",
    iconColor: "text-secondary",
    title: "Manufacturing",
    description: "Dry-milling, cold extrusion, hygienic industrial batch blending.",
  },
  {
    step: "07",
    badgeClass: "bg-secondary text-on-secondary",
    icon: "rocket_launch",
    iconColor: "text-secondary",
    title: "Market Scale",
    description: "B2B ingredient supply, retail CPG & commercial distributions.",
  },
];

export default function PathwaySection() {
  return (
    <section className="w-full bg-surface-container-high py-24 px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-space-xs text-primary font-spec-data text-spec-data uppercase tracking-wider">
              <Icon className="text-[16px]" name="account_tree" />
              <span>Rigorous Industrial Methodology</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              The Innovation Pathway:{" "}
              <span className="text-primary-container">From Crop to Commercialization</span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A closed-loop pipeline translating smallholder indigenous agronomy into validated,
            high-value consumer ingredients and clinical formulations.
          </p>
        </div>

        {/* Process diagram ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-space-sm relative">
          {NODES.map((node) => (
            <div
              className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
              key={node.step}
            >
              <div className="flex items-center justify-between mb-space-sm">
                <span
                  className={`font-spec-data text-spec-data px-2 py-0.5 rounded-full ${node.badgeClass}`}
                >
                  {node.step}
                </span>
                <Icon
                  className={`text-[24px] ${node.iconColor} group-hover:scale-110 transition-transform`}
                  name={node.icon}
                />
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-on-surface font-bold mb-1">
                  {node.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
