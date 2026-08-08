import Header from "@/app/components/Header";
import ProjectsPageContent from "@/app/components/Projects/ProjectsContent";

export const metadata = {
  title: "Projects | Ayush Jaiswal — Full Stack AI Engineer",
  description:
    "Projects by Ayush Jaiswal: Generative AI platforms, AI agents built with Claude API and MCP, and React.js/Next.js enterprise applications serving 500K+ users.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsRoute() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      <div className="pt-10 max-w-7xl mx-auto px-6">
        <ProjectsPageContent />
      </div>
    </main>
  );
}
