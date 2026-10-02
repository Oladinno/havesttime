import Icon from "../Icon";
import ResearchSection, { Callout, TagCloud } from "./ResearchSection";

const FUTURE_CONTENT = [
  "Research summaries",
  "Technical notes",
  "Ingredient reviews",
  "Food-industry analysis",
  "Nutrition insights",
  "African crop profiles",
  "Fermentation research",
  "Product-development learnings",
  "Technical white papers",
  "Collaborative research",
  "Conference contributions",
];

export default function InsightsSection() {
  return (
    <ResearchSection
      eyebrow="Insights / Publications"
      icon="auto_stories"
      id="insights"
      intro={[
        "Harvestime plans to develop an Insights & Publications section as our research portfolio expands.",
        "The objective will be to contribute useful knowledge to discussions around African food science, nutrition, ingredient technology and food-system innovation.",
      ]}
      surfaceClass="bg-surface-container-lowest"
      tagline="Sharing What We Learn"
      title="Insights / Publications"
    >
      <div className="flex flex-col gap-space-xl">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed w-fit font-spec-data text-spec-data uppercase tracking-wider">
          <Icon className="text-[16px]" name="construction" />
          <span>Section in development</span>
        </div>

        <TagCloud label="Future content may include" items={FUTURE_CONTENT} tone="secondary" />

        <Callout icon="lock">
          Where research involves confidential formulations, proprietary technology or protected
          intellectual property, only appropriate non-confidential information will be published.
        </Callout>
      </div>
    </ResearchSection>
  );
}
