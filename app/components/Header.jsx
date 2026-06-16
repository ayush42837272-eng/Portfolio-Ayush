"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/usetheme";
import { useContentStore } from "../store/useContentStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const headerData = useContentStore((s) => s.header);

  const handleNavClick = (href) => {
    setOpen(false);
    window.location.assign(href);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 shadow-md bg-black text-white dark:bg-white dark:text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide no-underline text-white dark:text-black">
            {headerData.logoText}
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {headerData.navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => window.location.assign(link.href)}
                className="text-white dark:text-black hover:opacity-70 transition"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full transition bg-white text-black dark:bg-black dark:text-white"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-full transition bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
            >
              {headerData.contactButton}
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col justify-center gap-[6px]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[3px] w-7 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-[3px] w-7 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[3px] w-7 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} bg-black text-white dark:bg-white dark:text-black`}
      >
        <div className="px-6 py-5 border-b border-gray-700 dark:border-gray-300 flex justify-between items-center">
          <span className="text-lg font-semibold">Menu</span>
          <button className="text-xl" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <nav className="flex flex-col gap-1 px-4 mt-4">
          {headerData.navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left w-full px-4 py-3 rounded-xl text-base text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 transition"
            >
              {link.label}
            </button>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl text-base text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 transition"
          >
            {headerData.contactButton}
          </Link>

          <div className="mt-4 px-4">
            <button
              onClick={() => { setTheme(theme === "light" ? "dark" : "light"); setOpen(false); }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white text-black dark:bg-black dark:text-white transition"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />} Toggle Theme
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
