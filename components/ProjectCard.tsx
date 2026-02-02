import Card, { DROP_SHADOW_DIRECTION } from "./Card";
import CTAAnchor from "./CTAAnchor";
import ProjectTags from "./ProjectTags";

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const {
    projectName,
    projectDescription,
    liveSiteLink,
    sourceCodeLink,
    technologies,
  } = project;
  return (
    <Card dropShadowDirection={DROP_SHADOW_DIRECTION.BOTTOM}>
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8">
        {liveSiteLink && (
          <CTAAnchor href={liveSiteLink} variant="primary">
            See Live Site
          </CTAAnchor>
        )}
        {sourceCodeLink && (
          <CTAAnchor href={sourceCodeLink} variant="secondary">
            Read How It's Made
          </CTAAnchor>
        )}
      </div>
      {technologies && technologies.length > 0 && (
        <ProjectTags technologies={technologies} />
      )}
    </Card>
  );
}
