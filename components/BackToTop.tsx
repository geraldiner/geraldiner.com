import { useEffect, useState } from "react";
import CTAAnchor from "./CTAAnchor";

export default function BackToTop() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const setOpacityOnScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const newOpacity = Math.min(scrollTop / 500, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", setOpacityOnScroll);
    return () => window.removeEventListener("scroll", setOpacityOnScroll);
  }, []);

  if (opacity === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 z-10 w-full transform right-4 flex justify-end md:max-w-2xl md:justify-start md:right-0 md:left-1/2 md:translate-x-1/2">
      <CTAAnchor
        href="#top"
        variant="secondary"
        className="w-fit! drop-shadow-sm!"
        isExternal={false}
        style={{ opacity }}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </CTAAnchor>
    </div>
  );
}
