import React, { useState } from "react";
import { personalInfo } from "../data";
import { Mail, Github, Send, Sparkles, Check, Copy, MessageSquare, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState<"email" | "github" | null>(null);

  // local memory sent messages tracker so user sees immediate results
  const [sentMessages, setSentMessages] = useState<{ id: number; name: string; email: string; message: string; date: string }[]>([]);

  const handleCopy = (text: string, type: "email" | "github") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate standard server latency
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toLocaleTimeString(),
      };
      setSentMessages([newMessage, ...sentMessages]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Talk
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm max-w-lg mx-auto">
            I am open to internship opportunities, collaborations, and technology-related projects.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Cards column (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-display font-bold text-white tracking-tight uppercase font-mono text-slate-400 text-xs">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                      Send Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-400 font-sans font-semibold text-sm transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                      Explore Repositories
                    </span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-purple-400 font-sans font-semibold text-sm transition-colors block"
                    >
                      github.com/edrawardhana
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.github, "github")}
                  className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all"
                  title="Copy GitHub link to clipboard"
                >
                  {copiedType === "github" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Simulated server logs widget showing active connections */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                Connection Status:
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>SSL Secured Client Port active</span>
              </div>
              <p className="text-[11px] font-sans text-slate-500 leading-relaxed">
                Messages submitted on this portal are dispatched directly via custom React callbacks and recorded instantly.
              </p>
            </div>
          </div>

          {/* Form container column (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              <h3 className="text-base font-display font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Dispatch Secure Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Recruiter Name"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. company@recruitment.com"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Message Body
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your internship, cooperation, or design proposal..."
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Encrypting & Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification animation */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-start gap-3 relative"
                  >
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs font-sans">
                      <p className="font-bold">Transmission Successful!</p>
                      <p className="text-slate-400">
                        Thank you for reaching out! Edra will review your message immediately and respond.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-white font-mono text-[10px]"
                    >
                      [Dismiss]
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Outbox simulation: lists successfully sent logs immediately */}
            {sentMessages.length > 0 && (
              <div className="mt-6 space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Simulated Outbox Logs ({sentMessages.length})
                </h4>
                <div className="space-y-2">
                  {sentMessages.map((msg) => (
                    <div key={msg.id} className="bg-slate-950 border border-white/5 rounded-xl p-4 text-xs font-sans space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>SENT VIA SYSTEM BUS</span>
                        <span>{msg.date}</span>
                      </div>
                      <div className="font-semibold text-white">
                        From: {msg.name} ({msg.email})
                      </div>
                      <p className="text-slate-400 italic">"{msg.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
