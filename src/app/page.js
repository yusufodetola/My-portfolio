import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B1A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* <CaseStudy /> */}
    </main>
  );
}
