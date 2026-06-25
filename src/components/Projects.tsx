import React, { useState } from "react";
import { featuredProjects } from "../data";
import { ProjectItem } from "../types";
import { 
  Network, Code2, ExternalLink, Github, FileText, ChevronRight, X, Eye, 
  ZoomIn, Plus, Trash2, CheckCircle2, ListFilter, Server, Compass, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [activeModal, setActiveModal] = useState<"mip" | "topology" | null>(null);
  
  // States for MIP activity logs simulator
  const [activityLogs, setActivityLogs] = useState([
    { id: 1, date: "2026-06-24", activity: "Installed backup firmware on secondary network switches.", duration: "4 hours", status: "Approved" },
    { id: 2, date: "2026-06-23", activity: "Configured local IP ranges and subnet boundaries for Malang Creative Center 4th Floor.", duration: "6 hours", status: "Approved" },
    { id: 3, date: "2026-06-22", activity: "Troubleshot printer connectivity issues on local department subnets.", duration: "3 hours", status: "Completed" },
  ]);
  const [newLogText, setNewLogText] = useState("");
  const [newLogDuration, setNewLogDuration] = useState("3 hours");

  const addActivityLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogText.trim()) return;
    const today = new Date().toISOString().split("T")[0];
    const newLog = {
      id: Date.now(),
      date: today,
      activity: newLogText,
      duration: newLogDuration,
      status: "Pending"
    };
    setActivityLogs([newLog, ...activityLogs]);
    setNewLogText("");
  };

  const deleteActivityLog = (id: number) => {
    setActivityLogs(activityLogs.filter(log => log.id !== id));
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/40 relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            <Network className="w-3.5 h-3.5" />
            Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Projects Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const isMIP = project.id === "project-1";
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-300"
              >
                {/* Visual Header / Mockup Representation */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 border-b border-white/5">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md border border-white/10 text-blue-400 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info and Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold block">
                        Core Capabilities
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-1.5 text-xs text-slate-300 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold block">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                    {isMIP ? (
                      <>
                        <button
                          onClick={() => setActiveModal("mip")}
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          {project.primaryLinkText}
                        </button>
                        <a
                          href={project.secondaryLinkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/5 hover:border-white/10 flex items-center gap-1.5 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          {project.secondaryLinkText}
                        </a>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setActiveModal("topology")}
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-purple-500/10 hover:shadow-purple-500/20"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          {project.primaryLinkText}
                        </button>
                        <button
                          onClick={() => setActiveModal("topology")}
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/5 hover:border-white/10 flex items-center gap-1.5 transition-all"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                          {project.secondaryLinkText}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================= */}
      {/* MODAL 1: MIP Activity Simulator                         */}
      {/* ======================================================= */}
      <AnimatePresence>
        {activeModal === "mip" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-slate-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5 bg-slate-900">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white leading-tight">
                      MIP Activity Management System
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">
                      Laravel 10.x Simulated Dashboard Environment
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Simulated Panel */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                {/* Intro banner */}
                <div className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-4 flex gap-3.5 items-start">
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-300 font-sans leading-relaxed">
                    This interactive component simulates the **MIP Activity Dashboard** that Edra completed during his technical internship. You can register daily activity logs below, track the current reporting logs list, and view statuses.
                  </p>
                </div>

                {/* Stat badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">Total Logs Filed</span>
                    <span className="text-2xl font-display font-extrabold text-white">{activityLogs.length} Entries</span>
                  </div>
                  <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">Internship Progress</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: "85%" }} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-200">85%</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">Current Status</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold font-mono bg-emerald-500/10 px-2.5 py-0.5 rounded-full mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ACTIVE
                    </span>
                  </div>
                </div>

                {/* Form to submit new log */}
                <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                    <Plus className="w-4 h-4 text-blue-400" />
                    File Daily Activity Log
                  </h4>

                  <form onSubmit={addActivityLog} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-8 space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Activity Description</label>
                        <input
                          type="text"
                          value={newLogText}
                          onChange={(e) => setNewLogText(e.target.value)}
                          placeholder="e.g. Completed documentation of local building subnets inside report v1.0"
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="md:col-span-4 space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Time Allocated</label>
                        <select
                          value={newLogDuration}
                          onChange={(e) => setNewLogDuration(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
                        >
                          <option value="1 hour">1 hour</option>
                          <option value="2 hours">2 hours</option>
                          <option value="3 hours">3 hours</option>
                          <option value="4 hours">4 hours</option>
                          <option value="6 hours">6 hours</option>
                          <option value="8 hours">8 hours</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/10 flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Database
                    </button>
                  </form>
                </div>

                {/* List table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Logged Activities Database ({activityLogs.length})
                  </h4>

                  <div className="border border-white/5 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs text-slate-300 font-sans border-collapse">
                      <thead>
                        <tr className="bg-slate-900 border-b border-white/5 text-slate-400 font-mono text-[10px] uppercase">
                          <th className="p-3">Date Filed</th>
                          <th className="p-3">Activity Description</th>
                          <th className="p-3">Allocated Time</th>
                          <th className="p-3">Audit State</th>
                          <th className="p-3 text-right">Delete</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {activityLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="p-3 font-mono text-slate-400 whitespace-nowrap">{log.date}</td>
                            <td className="p-3 font-medium text-white">{log.activity}</td>
                            <td className="p-3 font-mono text-slate-400">{log.duration}</td>
                            <td className="p-3">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider ${
                                  log.status === "Approved"
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                    : log.status === "Completed"
                                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                }`}
                              >
                                {log.status}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => deleteActivityLog(log.id)}
                                className="p-1.5 text-slate-500 hover:text-red-400 rounded-md hover:bg-red-500/5 transition-all"
                                title="Remove Log"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bottom Info bar */}
              <div className="bg-slate-900 p-4 border-t border-white/10 text-[10px] font-mono text-slate-400 flex justify-between items-center">
                <span>Database: MySQL (Localhost-Simulated)</span>
                <span>Active User: Admin (Edra Angga Wardhana)</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================= */}
      {/* MODAL 2: MCC Network Topology & PDF Report Viewer       */}
      {/* ======================================================= */}
      <AnimatePresence>
        {activeModal === "topology" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-slate-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5 bg-slate-900">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white leading-tight">
                      Technical PDF Report: MCC Network Topology Planning
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">
                      Cisco Packet Tracer Architecture Documentation (2026)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Content Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar bg-slate-900/10">
                {/* PDF Page 1 Cover / Metadata */}
                <div className="bg-slate-950 border border-white/5 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                  {/* Subtle PDF Page Number Badge */}
                  <div className="absolute top-4 right-4 bg-white/5 text-[9px] font-mono px-2 py-1 rounded text-slate-500 uppercase tracking-wider">
                    Doc Page 1 of 2
                  </div>

                  <div className="border-b border-white/5 pb-6 space-y-2">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
                      OFFICIAL PROJECT REPORT
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                      Malang Creative Center Building Network Infrastructure Design
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mt-2">
                      <div>Author: **Edra Angga Wardhana**</div>
                      <div>Supervised By: **MCC IT Operations Team**</div>
                      <div>Date: **April 2026**</div>
                    </div>
                  </div>

                  {/* Document abstract */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                      1. Executive Abstract
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      This paper presents the comprehensive structural and logical blueprint of the unified network topology designed for the Malang Creative Center (MCC) building. The network implements a robust multi-tier hierarchy containing Core routers, Aggregation switches, Access layers, secure wireless subnets, and isolated server zones. All network boundaries have been mapped inside Cisco Packet Tracer, demonstrating full network ping accessibility, solid redundancy protocols, and structured IP Address division.
                    </p>
                  </div>

                  {/* Schematic section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                        2. Topology Schematic (Packet Tracer Capture)
                      </h4>
                      <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                        <ZoomIn className="w-3.5 h-3.5" /> Hover to inspect nodes
                      </span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 group">
                      <img
                        src="/src/assets/images/mcc_network_topology_1782359924369.jpg"
                        alt="Network Topology Diagram"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 backdrop-blur-sm p-3 text-[10px] font-mono text-slate-400 text-center border-t border-white/5">
                        Figure 2.1: Dynamic sub-switches mapping, VLAN isolation, and core multi-layer gateways.
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Page 2 IP Addressing Scheme */}
                <div className="bg-slate-950 border border-white/5 rounded-2xl p-8 space-y-6 relative">
                  <div className="absolute top-4 right-4 bg-white/5 text-[9px] font-mono px-2 py-1 rounded text-slate-500 uppercase tracking-wider">
                    Doc Page 2 of 2
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                      3. Subnet Allocation Scheme (IPv4 Class C)
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      To prevent broadcast storms and improve routing optimization, the local space was partitioned using Variable Length Subnet Masking (VLSM). Let's reference the verified subnets list:
                    </p>
                  </div>

                  {/* Subnet Table */}
                  <div className="border border-white/5 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-[11px] text-slate-300 font-sans border-collapse">
                      <thead>
                        <tr className="bg-slate-900 border-b border-white/5 text-slate-400 font-mono text-[9px] uppercase">
                          <th className="p-2.5">Subnet Name</th>
                          <th className="p-2.5">VLAN ID</th>
                          <th className="p-2.5">Subnet Address</th>
                          <th className="p-2.5">Usable Host Range</th>
                          <th className="p-2.5">Default Gateway</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-2.5 font-bold">Management Zone</td>
                          <td className="p-2.5 font-mono text-blue-400">VLAN 10</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.10.0/24</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.10.1 - 10.254</td>
                          <td className="p-2.5 font-mono">192.168.10.254</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-2.5 font-bold">Creative Studios</td>
                          <td className="p-2.5 font-mono text-blue-400">VLAN 20</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.20.0/24</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.20.1 - 20.254</td>
                          <td className="p-2.5 font-mono">192.168.20.254</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-2.5 font-bold">MCC Server Farm</td>
                          <td className="p-2.5 font-mono text-blue-400">VLAN 30</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.30.0/27</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.30.1 - 30.30</td>
                          <td className="p-2.5 font-mono">192.168.30.30</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01]">
                          <td className="p-2.5 font-bold">Guest Public Wi-Fi</td>
                          <td className="p-2.5 font-mono text-blue-400">VLAN 40</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.40.0/22</td>
                          <td className="p-2.5 font-mono text-slate-400">192.168.40.1 - 43.254</td>
                          <td className="p-2.5 font-mono">192.168.40.254</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Core Switch specs */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                      4. Core Networking Devices Specified
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] font-mono text-blue-400 font-bold block uppercase">Core Router Gateway</span>
                        <p className="text-xs text-white font-semibold">Cisco ISR 4331/K9</p>
                        <p className="text-[10px] text-slate-500 font-mono">Running OSPF dynamic routing with active redundancy loops.</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] font-mono text-purple-400 font-bold block uppercase">Switch Interconnectivity</span>
                        <p className="text-xs text-white font-semibold">Cisco Catalyst 3650-24TS</p>
                        <p className="text-[10px] text-slate-500 font-mono">Layer 3 Multi-layer Switch coordinating Inter-VLAN trunk boundaries.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom PDF Print bar */}
              <div className="bg-slate-900 p-4 border-t border-white/10 text-[10px] font-mono text-slate-400 flex justify-between items-center">
                <span>PDF Format: Standard A4 Corporate Spec</span>
                <span>Security Level: Public Release (De-classified)</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
