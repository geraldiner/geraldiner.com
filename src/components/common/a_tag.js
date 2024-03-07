import React, { useEffect, useState } from "react";

const COLORS = [
  "watermelon",
  "mango",
  "sunshine",
  "avocado",
  "honolulu",
  "dusk",
];
const START_TIME = 10000;

const ATag = ({ children, href, target, rel }) => {
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  useEffect(() => {
    if (!timeLeft) {
      setTimeLeft(START_TIME);
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 3000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

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
    e.target.classList.remove(classes[1]);
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
