import React from "react";

const COLORS = [
  "watermelon",
  "mango",
  "sunshine",
  "avocado",
  "honolulu",
  "dusk",
];

const ATag = ({ children, href, target, rel }) => {
  const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  };

  const handleHover = (e) => {
    const classes = Array.from(e.target.classList);
    classes.forEach((className) => {
      e.target.classList.remove(className);
    });
    e.target.classList.add(["color-black", "underline-color-black"]);
  };

  const handleLeaveHover = (e) => {
    const classes = Array.from(e.target.classList);
    console.log(classes);
    e.target.classList.remove(classes[1]);
    const color = getRandomColor();
    e.target.classList.add(`underline-color-${color}`);
  };

  return (
    <a
      onMouseOver={(e) => handleHover(e)}
      onMouseLeave={(e) => handleLeaveHover(e)}
      onFocus={(e) => handleHover(e)}
      onBlur={(e) => handleLeaveHover(e)}
      className={`underline-color-${getRandomColor()}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default ATag;
