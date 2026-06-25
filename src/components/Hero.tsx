import React, { useState, useEffect } from "react";
import { ArrowUpRight, Github, Mail, Copy, Check, Download, ExternalLink, Calendar, MapPin, Sparkles, BookOpen, Code2, Network } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";

export default function Hero({ onOpenCv }: { onOpenCv: () => void }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Custom typing loop
  useEffect(() => {
    const texts = personalInfo.typingTexts;
    let timer: NodeJS.Timeout;

    const fullText = texts[currentTextIndex];
    const speed = isDeleting ? 30 : 75;

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        if (typedText.length + 1 === fullText.length) {
          // Pause at end
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
      }
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "12s" }} />
        {/* Fine grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main textual intro (Column 1-7) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            Open to Internships & Freelance Work
          </div>

          <div className="space-y-2">
            <span className="font-mono text-sm tracking-widest text-slate-400 block">
              HELLO WORLD, I AM
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
              EDRA ANGGA <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                WARDHANA
              </span>
            </h1>
          </div>

          {/* Typing Container */}
          <div className="flex items-center gap-2 h-8 font-mono text-lg md:text-xl text-slate-300">
            <span className="text-blue-500 font-bold">&gt;</span>
            <span className="text-white font-semibold">{typedText}</span>
            <span className="w-2 h-5 bg-blue-500 animate-pulse" />
          </div>

          {/* Intro description */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl font-sans leading-relaxed">
            {personalInfo.intro}
          </p>

          {/* Subtitle list as small micro-badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Informatics Engineering Student", "Web Developer", "IT Support", "Network Enthusiast"].map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-slate-900/60 border border-white/5 rounded-md px-3 py-1 text-slate-400 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
            >
              View My Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={onOpenCv}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Connect & Social Handles */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/5 max-w-xl">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Quick Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <div className="relative flex items-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              {/* Copy Email Button */}
              <button
                onClick={copyEmailToClipboard}
                className="px-3 h-10 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/10 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-all"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Floating Developer card visual placeholder (Column 8-12) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Ambient Back Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />

            {/* Glassmorphism Card Frame */}
            <div className="absolute inset-0 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md p-4 flex flex-col justify-between shadow-2xl overflow-hidden group">
              {/* Top Bar with dot indicators */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                  edra_profile.tsx
                </span>
              </div>

              {/* Avatar Image Block with frame bounds */}
              <div className="flex-1 my-4 relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/5">
                <img
                  src={personalInfo.avatarUrl}
                  alt="Edra Angga Wardhana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech specifications layout overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-lg p-2.5 text-[10px] font-mono text-slate-300">
                  <div className="flex justify-between text-blue-400 font-semibold mb-0.5">
                    <span>SYSINFO</span>
                    <span>ACTIVE</span>
                  </div>
                  <div>LOC: Balikpapan / Malang</div>
                  <div>UNI: Univ. Muhammadiyah Malang</div>
                  <div>YOB: March 23, 2004</div>
                </div>
              </div>

              {/* Bottom tag line */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>SYSTEM VERSION 2.0.26</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Online
                </span>
              </div>
            </div>

            {/* Floating micro-badges */}
            <div className="absolute -top-4 -left-4 glass-card px-3.5 py-2 rounded-xl border border-blue-500/30 text-xs font-mono text-blue-400 shadow-lg flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Laravel Expert</span>
            </div>

            <div className="absolute -bottom-2 -right-4 glass-card px-3.5 py-2 rounded-xl border border-purple-500/30 text-xs font-mono text-purple-400 shadow-lg flex items-center gap-2">
              <Network className="w-3.5 h-3.5" />
              <span>Cisco Networker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
