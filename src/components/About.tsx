import React from "react";
import { stats, personalInfo } from "../data";
import { User, Award, BookCopy, ShieldAlert, Cpu, Heart, Code2, Network } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  // Let's pair each stat card with a specific diagnostic icon
  const getIconForStatIndex = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-blue-400" />;
      case 1:
        return <BookCopy className="w-5 h-5 text-purple-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Network className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            <User className="w-3.5 h-3.5" />
            Discover
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text block (6 columns) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-100 tracking-tight">
              Informatics Engineering Student at Universitas Muhammadiyah Malang
            </h3>
            <p className="text-slate-400 leading-relaxed font-sans text-base">
              {personalInfo.bio.split("\n\n").map((para, i) => (
                <span key={i} className="block mb-4">
                  {para}
                </span>
              ))}
            </p>

            {/* Micro badges for focus interests */}
            <div className="pt-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-3">
                Core Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Application Engineering",
                  "IT Diagnostics & Hardware Support",
                  "Network Topology Planning",
                  "Cisco Routed Infrastructures",
                  "Problem Identification & Resolution"
                ].map((interest) => (
                  <span
                    key={interest}
                    className="text-xs bg-slate-900 border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 font-sans font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics / Stats grid block (6 columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between h-44 relative group overflow-hidden"
              >
                {/* Background faint mesh */}
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/[0.01] rounded-full group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    {getIconForStatIndex(i)}
                  </div>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                    METRIC_0{i + 1}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <div className="font-display font-extrabold text-3xl text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-sans font-semibold text-sm text-slate-200">
                    {stat.label}
                  </div>
                  <div className="font-sans text-xs text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick quote block spanning full columns in mobile, placed elegantly */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-purple-950/40 border border-blue-500/15 flex items-start gap-4">
              <div className="w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="space-y-1">
                <p className="text-slate-300 text-xs italic font-sans leading-relaxed">
                  "Solving network complexities and refining code implementations is not just academic study, but a pursuit of digital craftsmanship that builds reliable services."
                </p>
                <span className="text-[10px] font-mono text-blue-400 block tracking-wider uppercase font-medium">
                  - Edra Angga Wardhana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
