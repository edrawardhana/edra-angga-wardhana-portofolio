import React, { useState } from "react";
import { skillCategories } from "../data";
import { Terminal, Code2, Network, Cpu, Database, Settings } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getIconForCategory = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "backend":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "networking":
        return <Network className="w-5 h-5 text-purple-400" />;
      case "tools":
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      default:
        return <Settings className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredCategories = selectedCategory === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow backdrops */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            <Cpu className="w-3.5 h-3.5" />
            Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4.5 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/15"
                : "bg-slate-900 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-850"
            }`}
          >
            All Fields
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/15"
                  : "bg-slate-900 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-850"
              }`}
            >
              {getIconForCategory(cat.id)}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Category Title Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    {getIconForCategory(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold block mt-0.5">
                      Classified Stack
                    </span>
                  </div>
                </div>

                {/* Subskills layout list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium font-sans">
                        <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>
                      
                      {/* Sub-bar container */}
                      <div className="h-2 bg-slate-950 rounded-full overflow-hidden p-[1px] border border-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative terminal footer */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[9px] font-mono text-slate-500 flex justify-between uppercase">
                <span>SYSTEM CORE ACCESS OK</span>
                <span>LEVEL: PROFICIENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
