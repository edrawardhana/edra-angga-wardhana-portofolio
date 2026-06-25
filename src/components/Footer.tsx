import React from "react";
import { personalInfo } from "../data";
import { Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left copyright block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-display font-semibold text-white text-sm">
            © 2026 {personalInfo.name}
          </span>
          <span className="text-xs text-slate-500 font-sans">
            Designed and Developed by {personalInfo.name}
          </span>
        </div>

        {/* Center quick links */}
        <div className="flex items-center gap-6 text-xs text-slate-400 font-sans">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>

        {/* Right social & back to top handles */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/5 transition-all text-xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/5 transition-all text-xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/20 hover:bg-blue-600 hover:text-white text-blue-400 flex items-center justify-center transition-all cursor-pointer"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" style={{ animationDuration: "3s" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
