import React from "react";
import EXPERIENCES from "../content/experiences";
import "../styles/experiences.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ATag from "./common/a_tag";

const ExperienceSection = () => {
  const experiencesNodes = EXPERIENCES.map((experience) => {
    return (
      <li key={`experience-${experience.id}`} className="experience-list-item">
        <div className="experience-list-item__left">
          <span className="experience__duration">
            {experience.yearStart} – {experience.yearEnd}
          </span>
        </div>
        <div className="experience-list-item__right">
          <div className="experience__position">
            {experience.positionTitle} –{" "}
            {experience.companySite ? (
              <ATag
                href={experience.companySite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </ATag>
            ) : (
              experience.company
            )}
          </div>
          <ul className="experience__duties">
            {experience.duties.map((duty, index) => {
              return <li key={`duty-${index}`}>{duty}</li>;
            })}
          </ul>
          <ul className="experience__tools">
            {experience.tools.map((tool) => {
              return (
                <li key={`tool-${tool.className}`}>
                  <span
                    className={`experience__tool-color experience__tool-color__${tool.className}`}
                  ></span>
                  <FontAwesomeIcon
                    className={`experience__tool-color experience__tool-color__${tool.className}`}
                    icon={faCircle}
                    size="xs"
                  />
                  <span>{tool.displayText}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  });

  return (
    <section id="experience">
      <h3>Experience</h3>
      <ol id="experience-list">{experiencesNodes}</ol>
    </section>
  );
};

export default ExperienceSection;
