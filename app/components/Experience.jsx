"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";

export default function Experience() {
  const experience = useContentStore((s) => s.experience);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gradient-to-b from-[#ffffff] to-[#f7f7f7] dark:from-[#111111] dark:to-[#0b0b0b]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-semibold mb-16 dark:text-white"
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 md:gap-10 pl-12 md:pl-20"
              >
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black shadow-md" />

                <div className="flex-1 bg-white dark:bg-[#161616] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex-shrink-0 bg-white flex items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-black dark:text-white leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {item.highlightLogo && (
                    <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-gray-50 dark:bg-[#1e1e1e] rounded-lg border border-gray-100 dark:border-gray-700 w-fit">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Client</span>
                      <Image
                        src={item.highlightLogo}
                        alt="Adobe"
                        width={56}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-black dark:bg-white flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
