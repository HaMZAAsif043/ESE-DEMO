"use client";

import { Reveal } from "./motion-effects";

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[var(--ese-dark-bg)] pt-24 text-white relative overflow-hidden mesh-glow-dark">
      <div className="absolute inset-0 futuristic-grid-dark opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] border-b border-white/5 pb-16">
          {/* Left: Contact Info */}
          <Reveal className="space-y-8">
            <div>
              <span className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-sky)]">
                Connect With ESE
              </span>
              <h2 className="mt-3 font-display text-3xl font-black text-white leading-tight sm:text-4xl">
                Ready to Secure Your Next Project?
              </h2>
              <p className="mt-4 text-xs leading-6 text-white/60">
                Contact our engineering team to schedule a facility evaluation, request catalog quotes, or get specialized solution design assistance for your enterprise site in Jordan.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-white/5 p-5">
                <span className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-sky)]">
                  Phone Lines
                </span>
                <p className="mt-2 text-sm font-bold">
                  <a href="tel:0096265167298" className="hover:text-[var(--ese-sky)] transition-colors">
                    +962 6 5167298
                  </a>
                </p>
                <p className="mt-1 text-xs text-white/70">
                  <a href="tel:00962651647294" className="hover:text-[var(--ese-sky)] transition-colors">
                    +962 6 51647294
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/5 p-5">
                <span className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-sky)]">
                  Fax Line
                </span>
                <p className="mt-2 text-sm font-bold text-white/90">+962 6 5167302</p>
                <p className="mt-1 text-xs text-white/70">Office hours: 8 AM - 5 PM</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/5 p-5">
                <span className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-sky)]">
                  Email Support
                </span>
                <p className="mt-2 text-sm font-bold">
                  <a href="mailto:info@esejo.com" className="hover:text-[var(--ese-sky)] transition-colors">
                    info@esejo.com
                  </a>
                </p>
                <p className="mt-1 text-xs text-white/70">Response within 24 hours</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/5 p-5">
                <span className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-sky)]">
                  Mailing & PO Box
                </span>
                <p className="mt-2 text-sm font-bold text-white/90">P.O.Box: 925084</p>
                <p className="mt-1 text-xs text-white/70">Amman, Jordan</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/5 p-5">
              <span className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-sky)]">
                Headquarters Address
              </span>
              <p className="mt-2 text-sm font-bold text-white/90">Queen Rania St., Building 86</p>
              <p className="mt-1 text-xs text-white/70">Amman, Jordan (Opposite Jordan University)</p>
            </div>
          </Reveal>

          {/* Right: Quick Request Form Container */}
          <Reveal className="glass-card-dark rounded-2xl p-8 border border-white/10 relative overflow-hidden" delay={0.1}>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 bg-[var(--ese-sky)]/10 blur-xl" />
            
            <h3 className="font-display text-lg font-black uppercase tracking-widest text-[var(--ese-sky)] mb-5">
              Quick Inquiry
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
                  Full Name / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe / Arab Bank"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[var(--ese-sky)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
                  Contact Phone / Email
                </label>
                <input
                  type="text"
                  placeholder="e.g. +962 7X XXX XXXX"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[var(--ese-sky)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
                  Inquiry Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your security, networking, or POS equipment requirements..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[var(--ese-sky)] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#0163d2] py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ffaa00] hover:text-[#12153e]"
              >
                Send Request
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Footer Bottom Copyright Bar in #282421 */}
      <div className="bg-[#282421] py-8 mt-16 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-left text-white/40">
          <div className="flex flex-col">
            <span className="font-display text-[10px] font-black uppercase tracking-wider text-white/80">
              Electronic Supplies Est.
            </span>
            <span className="text-[9px] font-medium leading-none mt-1">مؤسسة التجهيزات الإلكترونية</span>
          </div>
          <p className="text-[10px]">
            &copy; {new Date().getFullYear()} ESE Jordan. All Rights Reserved. Designed to project scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
