import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
