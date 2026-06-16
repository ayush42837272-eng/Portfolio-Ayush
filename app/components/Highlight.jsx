"use client";

import { useState } from "react";
import { useContentStore } from "../store/useContentStore";

export default function AboutHighlight() {
  const aboutHighlightData = useContentStore((s) => s.highlight);
  const [showLong, setShowLong] = useState(false);

  return (
    <section className="relative w-full bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          <div className="md:w-[60%]">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-[#111] dark:text-white">
              {aboutHighlightData.aboutTitle}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-snug text-[#444] dark:text-[#ccc] transition-all duration-300">
              {showLong
                ? aboutHighlightData.aboutDescriptionLong
                : aboutHighlightData.aboutDescriptionShort}
            </p>

            <button
              onClick={() => setShowLong(!showLong)}
              className="mt-5 py-1.5 px-4 tracking-widest border-t border-b transition
                         text-[#111] border-[#111]
                         dark:text-white dark:border-white
                         hover:opacity-70"
            >
              {showLong ? "READ LESS" : "READ MORE"}
            </button>
          </div>

          <div className="hidden md:flex md:w-[30%] justify-end">
            <div
              onClick={() => setShowLong(false)}
              className="
                cursor-pointer transition
                text-black dark:text-white
                opacity-[0.12] dark:opacity-[0.35]
                hover:opacity-60
                w-[220px] h-[220px]
              "
            >
              <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none">
                <rect
                  x="50" y="50" width="200" height="200"
                  stroke="currentColor" strokeWidth="20" rx="40"
                />
                <text
                  x="80" y="185"
                  fontSize="110" fontWeight="700"
                  fill="currentColor"
                >
                  AJ
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            text-black dark:text-white
            opacity-[0.06] dark:opacity-[0.12]
            w-[200px] h-[200px]
          "
        >
          <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none">
            <rect
              x="50" y="50" width="200" height="200"
              stroke="currentColor" strokeWidth="20" rx="40"
            />
            <text
              x="80" y="185"
              fontSize="110" fontWeight="700"
              fill="currentColor"
            >
              AJ
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
