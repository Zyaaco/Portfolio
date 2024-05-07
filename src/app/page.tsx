import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/contact/ContactMe";
import WorkExperience from "@/components/experience/Experience";

export default function Home() {
  return (
    <main
      className="text-white h-[92svh] snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#AEC3B0]/80 scroll-smooth"
    >
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-end">
        <ContactMe />
      </section>
    </main>
  );
}
