import React from "react";
import { educationHistory } from "../data";
import { BookOpen, Calendar, GraduationCap, ArrowRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/60 relative overflow-hidden border-y border-white/5">
      {/* Background ambient gradient */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-purple-400 uppercase tracking-widest font-semibold bg-purple-500/10 px-3.5 py-1.5 rounded-full">
            <GraduationCap className="w-3.5 h-3.5" />
            Milestones
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12 pb-4">
          {educationHistory.map((item, index) => {
            const isLatest = index === 0;
            return (
              <div key={item.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[11px] top-1.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isLatest
                        ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-2 border-white scale-110"
                        : "bg-slate-800 border-2 border-slate-700 group-hover:bg-purple-500 group-hover:border-white group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Left Side Period Label (Visible on md+ desktop width) */}
                <div className="hidden md:block absolute right-[100%] mr-12 top-1.5 text-right w-24">
                  <span className="font-mono text-sm font-semibold text-slate-400 tracking-wider group-hover:text-white transition-colors">
                    {item.period}
                  </span>
                  {isLatest && (
                    <span className="block font-mono text-[9px] text-blue-400 uppercase tracking-widest font-bold mt-1">
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Main Card */}
                <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden">
                  {/* Subtle index watermark */}
                  <span className="absolute -bottom-6 -right-6 font-display font-black text-7xl text-white/[0.01] pointer-events-none uppercase">
                    EDU_0{index + 1}
                  </span>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-display font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {item.institution}
                      </h3>
                      <p className="text-sm text-slate-300 font-sans font-medium flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                        {item.degree}
                      </p>
                    </div>

                    {/* Period Badge for mobile layout */}
                    <div className="md:hidden flex items-center gap-1.5 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-white/5 px-2.5 py-1 rounded-md">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description / Details */}
                  {item.details && (
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {item.details}
                    </p>
                  )}

                  {/* Dynamic checklist / curriculum focus highlights */}
                  <div className="mt-4 flex flex-wrap gap-2 items-center text-xs">
                    <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mr-1">
                      Focus areas:
                    </span>
                    {index === 0 ? (
                      <>
                        <span className="text-blue-400 font-mono bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">Algorithms</span>
                        <span className="text-purple-400 font-mono bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">Software Design</span>
                        <span className="text-emerald-400 font-mono bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Web Frameworks</span>
                      </>
                    ) : (
                      <>
                        <span className="text-slate-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">Network Cabling</span>
                        <span className="text-slate-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">OS Troubleshooting</span>
                        <span className="text-slate-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">Hardware Assembly</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
