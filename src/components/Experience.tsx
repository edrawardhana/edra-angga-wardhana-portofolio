import React from "react";
import { professionalExperience } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            Vocation
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Experience List layout */}
        <div className="space-y-8">
          {professionalExperience.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Highlight background light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.02] via-transparent to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Watermark identifier */}
              <span className="absolute -bottom-10 -right-4 font-display font-black text-8xl text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none">
                INTERN
              </span>

              {/* Top Row: Title, Company & Meta data */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    Technical Internship
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-300 font-sans">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                      <Building className="w-4 h-4 text-slate-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      Malang, Indonesia
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900 border border-white/5 px-3.5 py-2 rounded-xl h-fit self-start md:self-auto">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Body: Responsibilities checklist */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Core Responsibilities & Deliverables:
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-slate-900/40 border border-white/5 p-4 rounded-xl hover:bg-slate-900/80 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed font-sans font-medium">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick Stats or Achievement note */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Successfully completed 5-month tenure</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <span>Verified by Malang Creative Center IT Department</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
