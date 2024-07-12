import React, { useState } from "react";
import NavLink from "./common/nav_link";

const isBrowser = typeof window !== "undefined";

const MainNav = () => {
  const [currentSection, setCurrentSection] = useState(
    (isBrowser && window.location.hash) || "#about"
  );

  const handleClick = (e) => {
    if (e.target.hash !== currentSection) {
      setCurrentSection(e.target.hash);
    }
  };

  return (
    <nav id="main-nav" className="nav">
      <ul>
        <NavLink
          currentSection={currentSection}
          handleClick={handleClick}
          href="#about"
        >
          About
        </NavLink>
        <NavLink
          currentSection={currentSection}
          handleClick={handleClick}
          href="#experience"
        >
          Experience
        </NavLink>
        <NavLink
          currentSection={currentSection}
          handleClick={handleClick}
          href="#projects"
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default MainNav;
