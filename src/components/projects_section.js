import React from "react";
import { PROJECTS, PROJECT_IDS } from "../content/projects";
import "../styles/projects.css";
import SecretSantaAppCover from "../images/secret-santa-app-cover.png";
import MinToWinCover from "../images/min-to-win-cover.png";

const PROJECT_TO_IMAGE_MAP = {
  [PROJECT_IDS.SECRET_SANTA_APP]: SecretSantaAppCover,
  [PROJECT_IDS.MIN_TO_WIN]: MinToWinCover,
};

const ProjectsSection = () => {
  const projectsNodes = PROJECTS.map((project) => {
    const image = PROJECT_TO_IMAGE_MAP[project.id];
    return (
      <li key={`project-${project.id}`} className="project-list-item">
        {image && (
          <img
            className="project__thumbnail"
            src={image}
            alt={`${project.name} thumbnail`}
          />
        )}
        <h4 className="h4roject__name">{project.name}</h4>
        <p className="project__description">{project.description}</p>
        <div className="project__links">
          <a
            className="button project__link"
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            className="button button__secondary project__link"
            href={project.sourceLink}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </div>
      </li>
    );
  });

  return (
    <section id="projects">
      <h3>Projects</h3>
      <ol id="project-list">{projectsNodes}</ol>
    </section>
  );
};

export default ProjectsSection;
