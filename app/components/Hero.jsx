"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";
import { useEffect, useState } from "react";

export default function Hero() {
  const heroData = useContentStore((s) => s.hero);
  const socialLinks = useContentStore((s) => s.socialLinks);
  const skills = useContentStore((s) => s.skills.rotationSkills);
  const visibleSkills = skills.slice(0, 6);

  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const RADIUS_DESKTOP = 120;
  const RADIUS_MOBILE = 80;

  useEffect(() => {
    if (!hovered) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [hovered, controls]);

  return (
    <section
      className="
        relative
        py-20 md:py-0
        md:h-[60vh]
        flex items-center
        overflow-hidden
      "
    >
      <div
        className="hidden md:block absolute inset-0 -z-20
        bg-gradient-to-br
        from-[#f2f2f2] to-[#e0e0e0]
        dark:from-[#0f0f0f] dark:to-[#141414]"
      />

      <div
        className="hidden md:block absolute top-0 right-0 h-full w-[80%] -z-10"
        style={{
          transformOrigin: "top left",
          transform: "translateX(30%) skewX(-12deg)",
        }}
      >
        <div className="absolute inset-0 bg-black dark:bg-white" />
      </div>

      <div className="md:hidden absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[200px] h-[200px]"
        >
          {visibleSkills.map((skill, index) => {
            const angle = (360 / visibleSkills.length) * index;

            return (
              <div
                key={skill.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translate(${RADIUS_MOBILE}px)
                  `,
                }}
              >
                <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center">
        <div className="flex flex-col items-start md:pl-20 lg:pl-24">
          <p
            className="text-base text-gray-700 dark:text-gray-300 mb-2"
            aria-label="Introduction greeting"
          >
            {heroData.heroGreeting}
          </p>

          <h1
            itemProp="name"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white"
          >
            {heroData.heroName} – Senior Frontend Developer
          </h1>

          <h2
            itemProp="jobTitle"
            className="text-base text-gray-600 dark:text-gray-400 mt-3 max-w-md"
          >
            {heroData.heroTitle}
          </h2>
          <p className="sr-only">{heroData.seoDescription}</p>

          <div className="flex gap-4 mt-6">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 flex items-center justify-center
                  bg-white dark:bg-[#f7f7f7]
                  border border-gray-300 dark:border-gray-700
                  rounded-xl shadow-md
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <Image
                  src={item.icon}
                  width={22}
                  height={22}
                  alt={item.label}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-[340px] h-[340px]">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-black shadow-xl flex items-center justify-center">
                <Image
                  src="/about/computer.svg"
                  alt="Computer"
                  width={56}
                  height={56}
                  className="dark:invert"
                />
              </div>
            </div>

            <motion.div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              animate={controls}
              className="absolute inset-0"
            >
              {visibleSkills.map((skill, index) => {
                const angle = (360 / visibleSkills.length) * index;

                return (
                  <div
                    key={skill.id}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        rotate(${angle}deg)
                        translate(${RADIUS_DESKTOP}px)
                      `,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        w-14 h-14 flex items-center justify-center rounded-lg
                        bg-white dark:bg-[#f7f7f7]
                        shadow-sm dark:shadow-md
                        p-2
                      "
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        width={38}
                        height={38}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
