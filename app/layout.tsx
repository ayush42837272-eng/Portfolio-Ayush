import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "Ayush Jaiswal | Full Stack AI Engineer | React, Next.js & MCP",
  description:
    "Ayush Jaiswal is a Full Stack AI Engineer with 6+ years of experience building React.js, Next.js, and Node.js applications, AI agents, and Generative AI platforms using Claude API, OpenAI API, and MCP (Model Context Protocol).",
  keywords: [
    "Ayush Jaiswal",
    "Ayush Jaiswal Full Stack AI Engineer",
    "Ayush Jaiswal AI Engineer",
    "Ayush Jaiswal AI Agent Developer",
    "Ayush Jaiswal MCP Developer",
    "Ayush Jaiswal Generative AI Engineer",
    "Ayush Jaiswal Frontend Developer",
    "Ayush Jaiswal React Developer",
    "Ayush Jaiswal Next.js Developer",
    "Ayush Jaiswal Node.js Developer",
    "Ayush Jaiswal Portfolio",
    "Full Stack AI Engineer",
    "AI Agent Developer",
    "MCP Developer",
    "Model Context Protocol Engineer",
    "Generative AI Engineer",
    "Claude API Developer",
    "Agentic Workflow Engineer",
  ],
  authors: [{ name: "Ayush Jaiswal" }],
  creator: "Ayush Jaiswal",
  metadataBase: new URL("https://ayushjaiswal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ayush Jaiswal | Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer with 6+ years of experience building React.js, Next.js, and Node.js applications, AI agents, and Generative AI platforms using Claude API, OpenAI API, and MCP.",
    url: "https://ayushjaiswal.vercel.app",
    siteName: "Ayush Jaiswal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Jaiswal - Full Stack AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Jaiswal | Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer with 6+ years of experience in React.js, Next.js, AI agents, and Generative AI platforms using Claude API, OpenAI API, and MCP.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white dark:bg-black transition-colors">

        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayush Jaiswal",
              url: "https://ayushjaiswal.vercel.app",
              image: "https://ayushjaiswal.vercel.app/og-image.png",
              email: "mailto:ayush42837272@gmail.com",
              jobTitle: "Full Stack AI Engineer",
              description:
                "Full Stack AI Engineer with 6+ years of experience building React.js, Next.js, and Node.js applications, AI agents, and Generative AI platforms using Claude API, OpenAI API, and MCP.",
              worksFor: {
                "@type": "Organization",
                name: "PricewaterhouseCoopers (PwC India)",
              },
              sameAs: [
                "https://www.linkedin.com/in/ayush-jais/",
                "https://github.com/ayush42837272-eng",
                "https://leetcode.com/u/Ayush622/",
              ],
              knowsAbout: [
                "Full Stack AI Engineering",
                "AI Agents",
                "Agentic Workflow Automation",
                "MCP (Model Context Protocol)",
                "Generative AI",
                "Claude API",
                "OpenAI API",
                "LLM Integration",
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "UI Engineering",
                "Web Development",
                "Scalable Web Applications",
                "Performance Optimization",
                "Responsive Design",
                "Next.js SEO",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ayush Jaiswal Portfolio",
              url: "https://ayushjaiswal.vercel.app",
              description:
                "Official portfolio website of Ayush Jaiswal, Full Stack AI Engineer specializing in React.js, Next.js, AI agents, and Generative AI platforms built with MCP, Claude API, and OpenAI API.",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Ayush Jaiswal",
              },
            }),
          }}
        />

        <Header />
        <ScrollProgressBar />
        <div className="pt-20">{children}</div>
        <Footer />
        <Analytics />

      </body>
    </html>
  );
}
