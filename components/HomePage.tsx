"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import ExperienceCard from "./ExperienceCard";
import FactCard from "./FactCard";
import HeaderSection from "./HeaderSection";
import ProjectCard from "./ProjectCard";

export default function HomePage({ data }: any) {
  const pageData = useTina({
    data: data.data,
    query: data.query,
    variables: data.variables,
  });

  const blocks = pageData.data.page.blocks;

  return (
    <>
      {blocks?.map((block: any, blockIndex: number) => {
        switch (block.__typename) {
          case "PageBlocksHeaderBlock":
            return <HeaderSection key={blockIndex} block={block} />;
          case "PageBlocksAboutBlock":
            return (
              <section key={blockIndex} id="about">
                <h2>{block.sectionTitle}</h2>
                <div>
                  <TinaMarkdown content={block.body} />
                </div>
              </section>
            );
          case "PageBlocksExperienceBlock":
            return (
              <section key={blockIndex} id="experience">
                <h2>{block.sectionTitle}</h2>
                {block.experiences?.map((exp: any, experienceIndex: number) => {
                  return (
                    <ExperienceCard
                      key={experienceIndex}
                      index={experienceIndex}
                      exp={exp}
                    />
                  );
                })}
              </section>
            );
          case "PageBlocksProjectBlock":
            return (
              <section key={blockIndex} id="projects">
                <h2>{block.sectionTitle}</h2>
                {block.projects?.map((project: any, projectIndex: number) => {
                  return (
                    <ProjectCard
                      key={projectIndex}
                      project={project}
                      index={projectIndex}
                    />
                  );
                })}
              </section>
            );
          case "PageBlocksMoreAboutBlock":
            return (
              <section key={blockIndex}>
                <h2>{block.sectionTitle}</h2>
                <p>How did you do? 😀</p>
                {block.facts?.map((fact: any, factIndex: number) => (
                  <FactCard key={factIndex} item={fact} />
                ))}
              </section>
            );
          case "PageBlocksPhotoGridBlock":
            return (
              <section key={blockIndex}>
                <h2>{block.sectionTitle}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {block.photos?.map((photo: any, photoIndex: number) => (
                    <div key={photoIndex} title={photo.altText}>
                      <img
                        className="rounded-lg"
                        src={photo.photo}
                        alt={photo.altText}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
