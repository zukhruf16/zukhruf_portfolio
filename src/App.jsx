import { lazy, Suspense } from "react";
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import Footer from "@/components/portfolio/footer";

const About = lazy(() => import("@/components/portfolio/about"));
const Skills = lazy(() => import("@/components/portfolio/skills"));
const Education = lazy(() => import("@/components/portfolio/education"));
const Experience = lazy(() => import("@/components/portfolio/experience"));
const Projects = lazy(() => import("@/components/portfolio/projects"));
const Recognition = lazy(() => import("@/components/portfolio/recognition"));
const Contact = lazy(() => import("@/components/portfolio/contact"));

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
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Recognition />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
