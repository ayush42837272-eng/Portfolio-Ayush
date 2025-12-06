import { create } from "zustand";

export const useContentStore = create(() => ({
    header: {
        logoText: "AJ",
        navLinks: [
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
        ],
        contactButton: "Contact Me",
    },

    hero: {
        heroGreeting: "Hi, I am",
        heroName: "Ayush Jaiswal",
        heroTitle: "Front-end Developer • UI Engineer",
    },

    about: {
        aboutTitle: "Professional Summary",
        aboutDescriptionShort:
            "Senior Software Engineer with 6 years of experience in React.js, JavaScript, and related web development technologies.",
        aboutDescriptionLong: "Senior Software Engineer with 6 years of experience crafting high-performance React.js and Next.js applications, specializing in automation, UI engineering, and scalable frontend systems. I’ve built enterprise solutions for Adobe, PwC, and government platforms, improving workflows by up to 40% and enhancing user engagement through optimized UIs, API-driven architectures, and reusable components. Passionate about delivering clean, maintainable, and impactful digital experiences."

    },

    buttons: {
        readMore: "Read More"
    },

    watermarkWord: "AJ",

  socialLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-jais/",
      icon: "/linkedin.svg"  
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/ayush42837272-eng",
      icon: "/github.svg"    
    },
    {
      id: "leetcode",
      label: "LeetCode",
      href: "https://leetcode.com/u/Ayush622/",
      icon: "/leetcode.svg"  
    },
    {
        id: "download",
        label: "Download Resume",
        href:"https://drive.google.com/file/d/1_LqHu4aS7mRxF8QBNv6mw2_2nbvwFCb-/view?usp=sharing",
        icon:"/download.svg"
    }
  ],
}));
