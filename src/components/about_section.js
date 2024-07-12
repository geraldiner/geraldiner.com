import React from "react";
import ATag from "./common/a_tag";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <p>
        In the past, I’ve been a science teacher at the high school I graduated
        from (working with my previous teachers!), a graphic designer on a{" "}
        <ATag
          href="https://store.steampowered.com/app/1551480/The_Girl_Who_Sees/"
          target="_blank"
          rel="noopener noreferrer"
        >
          video game
        </ATag>{" "}
        based on Filipino history and culture, and a web developer for a{" "}
        <ATag
          href="https://shepherdresearchlab.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          research group
        </ATag>{" "}
        at the only National Cancer Institute-designated center in Hawai'i and
        the Pacific.
      </p>
      <p>
        Currently, I’m a Fullstack Engineer at NomNomNow, Inc converting
        JavaScript to TypeScript in the React frontend. On the side, I also
        mentor web developers who are just starting their learning journey. I’m
        grateful to strike a balance between my two passions of technology and
        teaching.
      </p>
      <p>
        In{" "}
        <ATag
          href="https://instagram.com/geraldinedesu"
          target="_blank"
          rel="noopener noreferrer"
        >
          my free time
        </ATag>
        , I enjoy crocheting, tending to plants (house plants and gardening!),
        and playing video games.
      </p>
    </section>
  );
};

export default AboutSection;
