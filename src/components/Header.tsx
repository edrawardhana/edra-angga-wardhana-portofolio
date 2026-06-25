import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Terminal, Network, Briefcase, Mail, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const sections = ["hero", "about", "education", "experience", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero", icon: Terminal, section: "hero" },
    { label: "About", href: "#about", icon: Code2, section: "about" },
    { label: "Education", href: "#education", icon: BookOpen, section: "education" },
    { label: "Experience", href: "#experience", icon: Briefcase, section: "experience" },
    { label: "Projects", href: "#projects", icon: Network, section: "projects" },
    { label: "Skills", href: "#skills", icon: Terminal, section: "skills" },
    { label: "Contact", href: "#contact", icon: Mail, section: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/75 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-white text-base tracking-tight leading-none">
              Edra Angga
            </span>
            <span className="font-mono text-[10px] text-blue-400 mt-1 uppercase tracking-widest font-medium">
              Informatics Student
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-white/5 rounded-full p-1.5 backdrop-blur-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-full -z-10 shadow-lg shadow-blue-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
          >
            Let's Chat
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.section;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border-l-2 border-blue-500"
                        : "text-slate-400 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-2 text-center py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Hire Edra
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
