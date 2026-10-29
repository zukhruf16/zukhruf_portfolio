import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Skills from "@/components/portfolio/skills";
import Education from "@/components/portfolio/education";
import Experience from "@/components/portfolio/experience";
import Projects from "@/components/portfolio/projects";
import Recognition from "@/components/portfolio/recognition";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_55%)]" />
      </div>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}