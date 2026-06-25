import React from "react";
import { X, Mail, Github, MapPin, Briefcase, GraduationCap, Code, Globe, User, Printer } from "lucide-react";
import { personalInfo, educationHistory, professionalExperience, skillCategories } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8">
        
        {/* Controls Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-5 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">CV_WARDHANA_2026.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Page */}
        <div className="flex-1 p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto no-scrollbar bg-slate-950">
          {/* Top Document Cover */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-bold">
                Informatics Engineering Student & Web Developer
              </p>
              
              <div className="flex flex-wrap gap-4 pt-1.5 text-xs text-slate-400 font-sans">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  Malang, Indonesia (YOB: 2004)
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-500" />
                  github.com/edrawardhana
                </span>
              </div>
            </div>

            {/* Profile Avatar Frame inside Resume */}
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-900 border border-white/10 self-start md:self-auto">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Dual Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column (8 cols): Experience & Education */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Professional Profile Summary */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  Professional Profile
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  Work Experience
                </h3>

                {professionalExperience.map((exp) => (
                  <div key={exp.id} className="space-y-2 pl-4 border-l border-white/5 relative">
                    <span className="absolute left-0 -ml-[5px] top-1.5 w-2.5 h-2.5 bg-blue-500 rounded-full" />
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <h4 className="font-semibold text-white">{exp.role}</h4>
                        <p className="text-slate-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="font-mono text-slate-400 font-bold">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-xs text-slate-400 leading-relaxed font-sans">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education history */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  Education History
                </h3>

                {educationHistory.map((edu) => (
                  <div key={edu.id} className="space-y-1 pl-4 border-l border-white/5 relative">
                    <span className="absolute left-0 -ml-[5px] top-1.5 w-2.5 h-2.5 bg-purple-500 rounded-full" />
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <h4 className="font-semibold text-white">{edu.institution}</h4>
                        <p className="text-slate-400 font-medium">{edu.degree}</p>
                      </div>
                      <span className="font-mono text-slate-400 font-bold">{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-500 font-sans leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (4 cols): Categorized Technical Skills */}
            <div className="md:col-span-4 space-y-8">
              
              {/* Core Skill Categories */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  Key Skills
                </h3>

                {skillCategories.map((cat) => (
                  <div key={cat.id} className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {cat.name}
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-300 font-sans">{skill.name}</span>
                          <span className="font-mono text-slate-500">{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Languages & Affiliations */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  Languages & Soft Skills
                </h3>
                <div className="text-[11px] space-y-1 text-slate-400 font-sans">
                  <div className="flex justify-between">
                    <span>Indonesian</span>
                    <span className="font-semibold text-white">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="font-semibold text-white">Technical</span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["Problem Solving", "Collaboration", "Diagnostics", "Active Learning"].map((soft) => (
                      <span
                        key={soft}
                        className="bg-slate-900 border border-white/5 rounded px-1.5 py-0.5 text-[10px] text-slate-300 font-mono"
                      >
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
