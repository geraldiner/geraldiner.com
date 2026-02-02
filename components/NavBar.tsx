"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import config from "../content/config/config.json";
import CTAAnchor from "./CTAAnchor";
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeItem = config.nav.find((item) => item.isIndex);
  const ctaItem = config.nav.find((item) => item.isCTA);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="w-full max-w-full fixed top-0 z-50 backdrop-blur border-b border-black/5 dark:border-white/5">
      <div className="w-full md:max-w-4xl mx-auto flex justify-between items-center gap-4 px-4 py-3">
        {homeItem && (
          <a
            key={homeItem.link}
            href={homeItem.link}
            className="font-bold no-underline!"
            onClick={() => setMobileMenuOpen(false)}
          >
            {homeItem.label}
          </a>
        )}
        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          {config.nav.map((item) => {
            if (!item.isIndex && !item.isCTA) {
              return (
                <a key={item.link} href={item.link} className="no-underline!">
                  {item.label}
                </a>
              );
            }
          })}
        </div>
        {ctaItem && (
          <CTAAnchor
            href={ctaItem.link}
            variant="primary"
            className="hidden sm:block w-fit!"
          >
            {ctaItem.label}
          </CTAAnchor>
        )}
        {/* Mobile Menu */}
        <div className="sm:hidden flex gap-6 items-center">
          {ctaItem && (
            <CTAAnchor
              href={ctaItem.link}
              variant="primary"
              className="w-fit!"
              onClick={() => setMobileMenuOpen(false)}
            >
              {ctaItem.label}
            </CTAAnchor>
          )}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "fixed w-full min-h-screen right-0 top-0 bottom-0 bg-off-white/95 z-10 border-t border-t-beige",
          "transform transition-all duration-300 ease-in-out top-16",
          mobileMenuOpen ? "transform-none" : "translate-x-full",
        )}
      >
        {config.nav.map((item) => {
          if (!item.isIndex && !item.isCTA) {
            return (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block no-underline! px-5 py-6 border-b border-beige"
              >
                {item.label}
              </a>
            );
          }
        })}
      </div>
    </nav>
  );
}
