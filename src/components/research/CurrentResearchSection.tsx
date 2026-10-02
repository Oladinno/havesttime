import ResearchSection, { ResearchGrid } from "./ResearchSection";

const CURRENT_AREAS = [
  {
    icon: "psychiatry",
    title: "Functional Fibre Systems",
    description:
      "Investigating fibre ingredients and combinations that can improve everyday foods while preserving desirable taste and texture.",
  },
  {
    icon: "nutrition",
    title: "Protein + Fibre Food Systems",
    description:
      "Exploring how protein and fibre can be combined in familiar foods without compromising product quality or consumer experience.",
  },
  {
    icon: "grain",
    title: "African Functional Seeds",
    description:
      "Investigating seeds such as ogbono and other indigenous ingredients for nutritional, functional and commercial applications.",
  },
  {
    icon: "biotech",
    title: "Indigenous Fermentation",
    description:
      "Exploring the standardization and modernization of fermented African ingredients, including dawadawa.",
  },
  {
    icon: "bakery_dining",
    title: "Flour-Based Nutrition",
    description:
      "Developing approaches for improving the nutritional value of breads, bakery products and other flour-based foods.",
  },
  {
    icon: "breakfast_dining",
    title: "Cereal-Based Nutrition",
    description:
      "Exploring nutrition technologies for maize, millet, sorghum and related cereal foods.",
  },
  {
    icon: "add_chart",
    title: "Micronutrient Fortification",
    description:
      "Investigating practical ways to improve the micronutrient content of commonly consumed foods.",
  },
  {
    icon: "favorite",
    title: "Gut Health & Microbiome Nutrition",
    description:
      "Exploring food ingredients, fibres and fermentation systems with potential relevance to digestive and microbiome-related nutrition.",
  },
  {
    icon: "layers",
    title: "African Ingredient Functionality",
    description:
      "Identifying crops and ingredients that may have valuable properties beyond basic nutrition, including texture, binding, thickening and other food-system functions.",
  },
];

export default function CurrentResearchSection() {
  return (
    <ResearchSection
      eyebrow="Current Research Areas"
      icon="lab_research"
      id="current-research"
      intro={[
        "Harvestime maintains an evolving portfolio of research and development priorities. These research areas will continue to evolve as evidence, technical feasibility and commercial priorities develop.",
      ]}
      surfaceClass="bg-surface"
      title="Current Research Areas"
    >
      <ResearchGrid columns="md:grid-cols-3" items={CURRENT_AREAS} label="Current areas of interest include" />
    </ResearchSection>
  );
}
