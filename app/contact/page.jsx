"use client"

import FloatingIcons from "../components/Contact/FloatingIcons"
import ContactForm from "../components/Contact/ContactForm"
import { useContentStore } from "../store/useContentStore"
import './styles.css';

export default function ContactPage() {
  const contactData = useContentStore((s) => s.contact)

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#f7f7f7] dark:from-[#111111] dark:to-[#0b0b0b] py-20 px-4">
      <div className="left absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <FloatingIcons side="left" />
      </div>
      <div className="right absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <FloatingIcons side="right" />
      </div>

      <div className="w-full max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {contactData.heading}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">{contactData.subtext}</p>
          <div className="w-12 h-0.5 bg-black dark:bg-white mx-auto mt-6" />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10">
          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
          >
            <span>✉</span> {contactData.email}
          </a>
          <a
            href={contactData.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
          >
            <span>in</span> {contactData.linkedinLabel}
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
