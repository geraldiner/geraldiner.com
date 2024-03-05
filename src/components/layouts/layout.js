import React from "react";
import "./layout.css";

import {
  faSquareGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ATag from "../common/a_tag";
import MainNav from "../main_nav";

const Blurb = () => {
  return (
    <div>
      <h1>
        <a className="geraldine" href="/">
          Geraldine Ragsac
        </a>
      </h1>
      <h2>Fullstack Engineer</h2>
      <p>
        Hello! I’m Geraldine. I’m a Fullstack Engineer, more comfortable on the
        frontend, but can figure out my way around the backend. My fun fact is
        that{" "}
        <ATag
          href="https://toidp.com/search/?s=ragsak&l=ilo"
          target="_blank"
          rel="noreferrer"
        >
          my last name
        </ATag>{" "}
        means “happiness” in Ilocano!
      </p>
      <p>
        <a
          className="button button__honolulu"
          href="/GeraldineRagsac_Resume_2021.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download full resume
        </a>
      </p>
    </div>
  );
};

const SocialNav = () => {
  return (
    <ul id="social-nav" className="nav">
      <li>
        <a
          className="social-nav__link"
          href="https://github.com/geraldiner"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            aria-label="GitHub"
            size="2x"
            icon={faSquareGithub}
          />
        </a>
      </li>
      <li>
        <a
          className="social-nav__link"
          href="https://linkedin.com/in/geraldiner"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon aria-label="LinkedIn" size="2x" icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          className="social-nav__link"
          href="https://twitter.com/geraldinedesu"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            aria-label="Twitter"
            size="2x"
            icon={faSquareTwitter}
          />
        </a>
      </li>
    </ul>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="header">
        <Blurb />
        <MainNav />
        <SocialNav />
      </header>
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
