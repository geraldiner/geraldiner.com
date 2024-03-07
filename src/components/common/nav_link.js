import React from "react";

const NavLink = ({ currentSection, children, handleClick, href }) => {
  const classes =
    `${currentSection}` === href
      ? "main-nav__link main-nav__link__active"
      : "main-nav__link";
  return (
    <li>
      <a onClick={(e) => handleClick(e)} className={classes} href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavLink;
