import { create } from "zustand";

export const useContentStore = create(() => ({
  header: {
    logoText: "AJ",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contactButton: "Contact Me",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "/projects" },
    ],
  },

  hero: {
    heroGreeting: "Hi, I am",
    heroName: "Ayush Jaiswal - Full Stack AI Engineer",
    heroTitle: "React.js • Generative AI • Adobe Workfront Fusion",
    seoDescription: "Ayush Jaiswal is a Full Stack AI Engineer with 6+ years of experience in React.js, Node.js, MongoDB, Express, Adobe Workfront Fusion, and AI-driven application development.",
    openToWork: "Open to opportunities",
  },

  highlight: {
    aboutTitle: "Professional Summary",
    aboutDescriptionShort:
      "Full Stack AI Engineer with 6+ years of experience in React.js, Node.js, Adobe Workfront Fusion, and AI-driven application development.",
    aboutDescriptionLong:
      "Full Stack AI Engineer with 6+ years of experience building scalable React.js and Next.js enterprise applications, Generative AI platforms, and agentic workflow automation. Expertise in Adobe Firefly API, Photoshop API, Claude API, and MCP. Proven track record of reducing content production cycles by 40%, accelerating release cycles by 30%, and maintaining 95% client satisfaction with zero escalations.",
  },

  buttons: {
    readMore: "Read More",
    readLess: "Read Less",
  },

  contact: {
    heading: "Get In Touch",
    subtext: "Have an opportunity or just want to say hi? My inbox is open.",
    email: "ayush42837272@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinHref: "https://www.linkedin.com/in/ayush-jais/",
    formTitle: "Portfolio Contact",
    errorMessage: "Failed to send message. Please email directly at ayush42837272@gmail.com",
    successMessage: "Message Sent Successfully!",
    submitLabel: "SUBMIT",
    sendingLabel: "SENDING...",
  },

  footer: {
    backToTop: "BACK TO TOP",
    copyright: "Ayush Jaiswal — All Rights Reserved.",
  },

  watermarkWord: "AJ",

  socialLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-jais/",
      icon: "/social/linkedin.svg",
    },
    {
      id: "leetcode",
      label: "LeetCode",
      href: "https://leetcode.com/u/Ayush622/",
      icon: "/social/leetcode.svg",
    },
    {
      id: "download",
      label: "Resume",
      href: "https://drive.google.com/drive/folders/1ZaudOS-4Gtb2zmYHY3wEMMal0GS8o6I7?usp=drive_link",
      icon: "/social/download.svg",
    },
    {
      id: "mail",
      label: "Email",
      href: "mailto:ayush42837272@gmail.com",
      icon: "/social/email.svg",
    },
  ],

  about: {
    title: "ABOUT ME",
    subtitle:
      "Passionate about crafting modern, user-friendly web experiences.",
    sections: [
      {
        id: 1,
        heading: "UI / UX Engineering",
        description:
          "I craft intuitive, user-focused interfaces with clean layouts, accessibility standards, and modern design principles.",
        icons: "/about/UI.png",
      },
      {
        id: 2,
        heading: "Frontend Development",
        description:
          "I build high-performance, scalable web applications using React.js, JavaScript, and modern frontend tooling.",
        icons: "/about/coding.png",
      },
      {
        id: 3,
        heading: "System Enhancement & Optimization",
        description:
          "I optimize existing systems through performance tuning, reusable architecture, and engineering best practices.",
        icons: "/about/development.png",
      },
    ],
  },
  skills: {
    usingNow: [
      { id: 1, label: "HTML5", icon: "/skills/HTML5.svg" },
      { id: 2, label: "CSS3", icon: "/skills/CSS3.svg" },
      { id: 3, label: "Sass", icon: "/skills/Sass.svg" },
      { id: 4, label: "JavaScript", icon: "/skills/JavaScript.svg" },
      { id: 5, label: "React", icon: "/skills/React.svg" },
      { id: 6, label: "Redux", icon: "/skills/Redux.svg" },
      { id: 7, label: "Git", icon: "/skills/Git.svg" },
      { id: 8, label: "Tailwind CSS", icon: "/skills/Tailwind CSS.svg" },
      { id: 22, label: "Workfront Fusion", icon: "/skills/workfront.png" },
      { id: 23, label: "Photoshop API", icon: "/skills/photoshop.jpg" },
      { id: 24, label: "Firefly API", icon: "/skills/firefly.webp" },
      { id: 25, label: "Illustrator API", icon: "/skills/illustrator.webp" },
      { id: 26, label: "Framer Motion", icon: "/skills/framer.jpeg" },
      { id: 27, label: "GraphQL", icon: "/skills/graphql.png" },
      { id: 28, label: "Express.js", icon: "/skills/express.jpeg" },
      { id: 9, label: "Node.js", icon: "/skills/Node.js.svg" },
      { id: 11, label: "MongoDB", icon: "/skills/MongoDB.svg" },
      { id: 13, label: "TypeScript", icon: "/skills/TypeScript.svg" },
    ],

    generativeAI: [
      { id: 30, label: "Claude API", icon: "/skills/claude.webp" },
      { id: 31, label: "OpenAI API", icon: "/skills/openai.png" },
      { id: 32, label: "MCP", icon: "/skills/mcp.jpg" },
    ],

    learning: [
      { id: 10, label: "AWS", icon: "/skills/aws.svg" },
      { id: 12, label: "MySQL", icon: "/skills/MySQL.svg" },
    ],

    otherSkills: [
      { id: 14, label: "Next.js", icon: "/skills/next.svg" },
      { id: 15, label: "ESLint", icon: "/skills/ESLint.svg" },
      { id: 16, label: "Webpack", icon: "/skills/Webpack.svg" },
      { id: 17, label: "Vite", icon: "/skills/Vite.svg" },
      {
        id: 18,
        label: "VS Code",
        icon: "/skills/Visual Studio Code (VS Code).svg",
      },
      { id: 19, label: "Babel", icon: "/skills/Babel.svg" },
      { id: 20, label: "Jest", icon: "/skills/Jest.svg" },
      { id: 21, label: "AngularJS", icon: "/skills/AngularJS.svg" },
    ],
    rotationSkills:[
      { id: 1, label: "React", icon: "/skills/React.svg" },
      { id: 2, label: "Next.js", icon: "/skills/next.svg" },
      { id: 3, label: "Node.js", icon: "/skills/Node.js.svg" },
      { id: 4, label: "TypeScript", icon: "/skills/TypeScript.svg" },
      { id: 5, label: "Workfront Fusion", icon: "/skills/workfront.png" },
      { id: 6, label: "Firefly API", icon: "/skills/firefly.webp" },
    ]
  },
  experience: [
    {
      id: 1,
      company: "PricewaterhouseCoopers (PwC India)",
      highlightLogo: "/Projects/Adobe/logo.png",
      role: "Forward Deployed Engineer",
      duration: "Jun 2025 – Present",
      points: [
        "Designed and deployed a production-grade Generative AI platform integrating Adobe Firefly, Photoshop API, Illustrator API & Workfront Fusion — reducing content production cycles by 40%.",
        "Orchestrated multi-step API workflows in Workfront Fusion cutting asset management overhead by 35% and release cycles by 30%.",
        "Built React.js real-time dashboards for pipeline monitoring and AI-driven asset approval, increasing team throughput by 25%.",
      ],
      logo: "/companies/pwc.jpg",
    },
    {
      id: 2,
      company: "Unthinkable Solutions",
      badge: "Full-time · 5.8 years",
      role: "Senior Associate Software Engineer",
      duration: "Oct 2019 – Jun 2025",
      points: [
        "Architected full-stack React.js & Next.js enterprise apps serving 500K+ users — boosted user engagement by 30% and achieved WCAG 2.1 compliance.",
        "Won KUDOS Award for pioneering Redux-Saga multi-stage auto-save architecture for iBase-T, eliminating data loss across complex enterprise workflows.",
        "Delivered 150+ digital service integrations on the UMANG government platform, supporting millions of citizens across 60+ government services per quarter.",
        "Accelerated delivery velocity by 15% through CI/CD optimization; mentored 5+ junior engineers lifting code quality by 25%.",
      ],
      logo: "/companies/unthinkable.jpeg",
    },
  ],

  projects: [
    {
      id: 1,
      name: "Adobe Automation",
      description:
        "Designed and deployed a production-grade Generative AI platform at PwC (Adobe Client) integrating Firefly API, Photoshop API, Illustrator API, and Workfront Fusion. Reduced content production cycles by 40%, cut asset management overhead by 35%, and increased team throughput by 25% through AI-driven workflow automation.",
      tech: [
        "React.js",
        "JavaScript",
        "Workfront Fusion",
        "Custom Models",
        "Firefly API",
        "Photoshop API",
      ],
      mainImage: "/Projects/Adobe/main.png",
      logo: "/Projects/Adobe/logo.png",
      images: [
        { id: 1, url: "/Projects/Adobe/1.png" },
        { id: 2, url: "/Projects/Adobe/2.png" },
        { id: 3, url: "/Projects/Adobe/3.png" },
        { id: 4, url: "/Projects/Adobe/4.png" },
        { id: 5, url: "/Projects/Adobe/5.png" },
        { id: 6, url: "/Projects/Adobe/6.png" },
        { id: 7, url: "/Projects/Adobe/7.png" },
      ],
      github: "",
      liveLink: "",
    },

    {
      id: 2,
      name: "RedBull Mobile - Oman",
      description:
        "Developed a mobile-first KYC verification system with barcode scanning, image uploads, live GPS capture, and real-time backend validation. Engineered secure flows for field agents enabling faster onboarding and significantly reducing manual verification errors across Oman's telecom network.",
      tech: [
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "HTML/CSS",
        "REST APIs",
        "Tailwind CSS",
        "Internationalization",
        "Webpack",
      ],
      mainImage: "/Projects/RedBull/main.png",
      logo: "/Projects/RedBull/logo.png",
      images: [
        { id: 1, url: "/Projects/RedBull/1.png" },
        { id: 2, url: "/Projects/RedBull/2.png" },
        { id: 3, url: "/Projects/RedBull/3.png" },
        { id: 5, url: "/Projects/RedBull/5.png" },
      ],
      liveLink: "https://www.redbullmobile.om/en",
    },
    {
      id: 3,
      name: "Bharat Mandapam",
      description:
        "Designed a hall booking and event workflow system with modules for approvals, officer assignments, event categorization, dynamic tables, and reporting. Built reusable AngularJS components used across multiple government event modules, reducing UI development time and standardizing layouts across the platform.",
      tech: ["AngularJS", "JavaScript", "HTML/CSS", "REST APIs", "Bootstrap"],
      mainImage: "/Projects/BharatMandapam/main.png",
      logo: "/Projects/BharatMandapam/logo.jpeg",
      images: [
        { id: 1, url: "/Projects/BharatMandapam/1.png" },
        { id: 2, url: "/Projects/BharatMandapam/2.png" },
        { id: 3, url: "/Projects/BharatMandapam/3.png" },
        { id: 4, url: "/Projects/BharatMandapam/4.png" },
        { id: 5, url: "/Projects/BharatMandapam/5.png" },
      ],
      liveLink: "https://booking.indiatradefair.com/",
    },
    {
      id: 4,
      name: "iBaseT B2B Portal",
      description:
        "Built enterprise B2B dashboard components including dynamic charts, analytics widgets, and multi-step forms. Revamped legacy UI to modern React.js standards — improving rendering performance and cutting UI bug reports through a reusable component architecture adopted across the product.",
      tech: [
        "React.js",
        "JavaScript",
        "Chart.js",
        "HTML/CSS",
        "REST APIs",
        "Redux",
        "Grommet",
        "Middleware Saga",
        "Webpack",
        "Lerna",
      ],
      mainImage: "/Projects/iBaseT/main.png",
      logo: "/Projects/iBaseT/logo.jpg",
      images: [
        { id: 1, url: "/Projects/iBaseT/1.jpg" },
        { id: 2, url: "/Projects/iBaseT/2.jpg" },
        { id: 3, url: "/Projects/iBaseT/3.jpg" },
        { id: 4, url: "/Projects/iBaseT/4.jpg" },
        { id: 5, url: "/Projects/iBaseT/5.jpg" },
        { id: 6, url: "/Projects/iBaseT/6.jpg" },
        { id: 7, url: "/Projects/iBaseT/7.jpg" },
        { id: 8, url: "/Projects/iBaseT/8.jpg" },
        { id: 9, url: "/Projects/iBaseT/9.jpg" },
      ],
    },
    {
      id: 5,
      name: "Umang",
      description:
        "Contributed to India’s national government super-app serving 1,900+ government services to millions of citizens. Implemented new service modules, improved UI flows, and enhanced responsive design — directly impacting usability for a platform used across the entire country.",
      tech: [
        "React.js",
        "JavaScript",
        "HTML/CSS",
        "REST APIs",
        "Bootstrap",
        "Redux",
      ],
      mainImage: "/Projects/Umang/main.png",
      logo: "/Projects/Umang/logo.jpg",
      images: [
        { id: 1, url: "/Projects/Umang/1.png" },
        { id: 2, url: "/Projects/Umang/2.png" },
        { id: 3, url: "/Projects/Umang/3.png" },
        { id: 4, url: "/Projects/Umang/4.png" },
        { id: 5, url: "/Projects/Umang/5.png" },
        { id: 6, url: "/Projects/Umang/6.png" },
      ],
      liveLink: "https://web.umang.gov.in/landing/",
    },
    {
      id: 6,
      name: "Portfolio Website",
      description:
        "Built a responsive portfolio website using Next.js, showcasing projects and skills. Implemented dark mode support and optimized performance for fast loading.",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        
      ],
      mainImage: "/Projects/Portfolio/logo.png",
      logo: "/Projects/Portfolio/logo.png",
      images: [
        { id: 1, url: "/Projects/Portfolio/1.png" },
        { id: 2, url: "/Projects/Portfolio/2.png" },
        { id: 3, url: "/Projects/Portfolio/3.png" },
        { id: 4, url: "/Projects/Portfolio/4.png" },
        { id: 5, url: "/Projects/Portfolio/5.png" },
        { 
          id: 6, url: "/Projects/Portfolio/6.png"
        }

      ],
      liveLink: "https://ayushjaiswal.vercel.app/",
      github:"https://github.com/ayush42837272-eng/Portfolio-Ayush"
    },
  ],
}));
