import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ayush Jaiswal — Full Stack AI Engineer",
  description:
    "Get in touch with Ayush Jaiswal, Full Stack AI Engineer specializing in React.js, Next.js, AI agents, and Generative AI integrations using Claude API and MCP.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
