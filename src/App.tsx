import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white relative antialiased">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero onOpenCv={() => setIsCvOpen(true)} />

      {/* About Me Section with Statistics */}
      <About />

      {/* Academic Milestone Timeline */}
      <Education />

      {/* Professional Internship Experience */}
      <Experience />

      {/* Featured Projects with Interactive Simulator Panels */}
      <Projects />

      {/* Categorized Visual Skills Matrix */}
      <Skills />

      {/* Contact Form with Simulated Outbox Channels */}
      <Contact />

      {/* Footer Region */}
      <Footer />

      {/* High-fidelity PDF/Resume modal viewer */}
      <ResumeModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
