import Hero from "./components/Hero";
import Highlight from "./components/Highlight"
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills/Skills";

export default function Page() {
  return (
    <main>
      <Hero />
      <Highlight/>
      <About/>
      <Experience/>
      <Skills/>
    </main>
  );
}
