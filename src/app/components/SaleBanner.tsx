"use client";

import { useState, useEffect } from "react";
import { X, MessageSquare, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function SaleBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial appearance after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Re-trigger every 1 minute (60,000 ms)
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/5 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0070f3]/20 rounded-full blur-3xl" />
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 p-2.5 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-400 hover:text-red-500 transition-all z-10 border border-transparent hover:border-red-100 dark:hover:border-red-900/30"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#0070f3] mb-6 border border-blue-100 dark:border-blue-800/30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0070f3] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Ownership Opportunity</span>
          </div>

          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-[0.95] mb-4 tracking-tighter">
            SITE FOR <br/>
            <span className="text-[#0070f3]">PURCHASE</span>
          </h2>

          <p className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-8 leading-relaxed uppercase tracking-tight">
            Interested in acquiring Essimu Uganda? <br/>
            Contact the lead developer for full source code and domain rights.
          </p>

          <div className="grid gap-3">
            <a 
              href="https://wa.me/256746838046" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-[#25D366] text-white hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-green-500/20 group"
            >
              <div className="flex items-center gap-3">
                <MessageSquare size={20} fill="currentColor" />
                <span className="text-[11px] font-black uppercase tracking-widest">WhatsApp Direct</span>
              </div>
              <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
              href="mailto:edwardbrin1@gmail.com"
              className="flex items-center justify-between p-5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-95 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span className="text-[11px] font-black uppercase tracking-widest">Official Email</span>
              </div>
              <span className="text-[9px] font-black opacity-60 group-hover:opacity-100 transition-opacity">edwardbrin1@gmail.com</span>
            </a>

            <a 
              href="https://linkedin.com/in/edkaydev"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border-2 border-gray-100 dark:border-white/5 hover:border-[#0070f3] dark:hover:border-[#0070f3] group transition-all"
            >
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group-hover:text-[#0070f3]">
                <Linkedin size={20} />
                <span className="text-[11px] font-black uppercase tracking-widest">LinkedIn Profile</span>
              </div>
              <span className="text-[10px] font-black text-gray-400 group-hover:text-[#0070f3]">@edkaydev</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}