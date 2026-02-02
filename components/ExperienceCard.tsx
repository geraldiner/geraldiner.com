import { TinaMarkdown } from "tinacms/dist/rich-text";
import Card, { CARD_COLORS, DROP_SHADOW_DIRECTION } from "./Card";

export default function ExperienceCard({ exp, index }: any) {
  const { role, employer, featuredProject, dateRange, duration, description } =
    exp;
  return (
    <Card
      color={CARD_COLORS[index % CARD_COLORS.length]}
      dropShadowDirection={DROP_SHADOW_DIRECTION.LEFT}
    >
      <h3 className="mb-0!">{role}</h3>
      <p className="mb-0!">
        {employer?.link ? (
          <a href={employer.link} target="_blank" rel="noopener noreferrer">
            {employer.company}
          </a>
        ) : (
          employer?.company
        )}
        {featuredProject?.projectName && (
          <>
            {" "}
            &middot;{" "}
            {featuredProject.projectLink ? (
              <a
                href={featuredProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {featuredProject.projectName}
              </a>
            ) : (
              featuredProject.projectName
            )}
          </>
        )}
      </p>
      <p>
        {dateRange} &middot; {duration}
      </p>
      <TinaMarkdown content={description} />
    </Card>
  );
}
