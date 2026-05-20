"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ESE_MEDIA, type Stat } from "../_data/ese";
import { Reveal } from "./motion-effects";

type HeroProps = {
  stats: Stat[];
};

const slides = [
  {
    image: `${ESE_MEDIA}/imageslider/home-v4/03.jpg`,
    eyebrow: "Authorized B2B Partner Since 1981",
    title: "Futuristic Security Systems",
    highlight: "Distributed at Scale",
    description: "Electronic Supplies Est. (ESE) is Jordan's premier provider of electronic security, automation, networking, and walkthrough screening infrastructure. We bridge global manufacturers with local system integrators."
  },
  {
    image: `${ESE_MEDIA}/imageslider/home-v4/01.jpg`,
    eyebrow: "Critical Infrastructure Surveillance",
    title: "Thermal & HD CCTV Grid",
    highlight: "National Scale Deployments",
    description: "From city-wide monitoring projects to secure border control, ESE distributes state-of-the-art camera systems, thermal analytics, and wireless IP network backbones."
  },
  {
    image: `${ESE_MEDIA}/imageslider/home-v4/02.jpg`,
    eyebrow: "Entry Automation & Screening",
    title: "Access Control & Barriers",
    highlight: "Intelligent Operations",
    description: "Protecting key facilities in Amman with walkthrough metal detectors, heavy-duty sliding barriers, smart card readers, and rolling shutter automation systems."
  }
];

export function Hero({ stats }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  
  // Track scroll progress of the entire hero scroll space
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for scroll-zoom effect
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0.4, 1], [0.35, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const statsScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const statsY = useTransform(scrollYProgress, [0, 0.8], [0, -40]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[120vh] bg-[var(--ese-dark-bg)]">
      {/* Sticky Hero frame */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Background Image Slider with Zoom and Blur */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: bgOpacity }}
        >
          <motion.div 
            className="relative w-full h-full"
            style={{ scale: bgScale }}
          >
            {slides.map((slide, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: idx === 0 ? 1 : 0 }}
                animate={{ opacity: idx === current ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover filter brightness-50"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ese-dark-bg)]/90 via-[var(--ese-dark-bg)]/75 to-[var(--ese-dark-bg)]" />
          <div className="absolute inset-0 futuristic-grid-dark opacity-20" />
          
          {/* Abstract futuristic glowing elements */}
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--ese-blue)]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--ese-sky)]/10 blur-[120px]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Column: Heading and info */}
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <div className="min-h-[380px] sm:min-h-[320px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--ese-sky)]/30 bg-[var(--ese-sky)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--ese-sky)]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ese-sky)]" />
                      {slides[current].eyebrow}
                    </span>

                    <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
                      {slides[current].title} <br />
                      <span className="bg-gradient-to-r from-[var(--ese-sky)] to-[#38bdf8] bg-clip-text text-transparent">
                        {slides[current].highlight}
                      </span>
                    </h1>

                    <p className="mt-6 max-w-xl font-sans text-xs sm:text-sm leading-7 text-white/80">
                      {slides[current].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Bar & Slider Control Dots */}
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === current ? "w-8 bg-[var(--ese-sky)]" : "w-1.5 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="#products"
                    className="rounded-full bg-[#0163d2] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#12153e] hover:shadow-[0_0_20px_rgba(1,99,210,0.4)]"
                  >
                    Explore Products
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#12153e]"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Featured Stats highlight */}
            <motion.div style={{ scale: statsScale, y: statsY, opacity: statsOpacity }} className="lg:block">
              <Reveal delay={0.5} y={40}>
                <div className="glass-card-dark rounded-2xl p-8 border border-white/15 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[var(--ese-sky)]/10 blur-2xl transition-all duration-500 group-hover:bg-[var(--ese-sky)]/20" />
                  
                  <h3 className="font-display text-sm font-black uppercase tracking-widest text-[var(--ese-sky)] mb-6">
                    Market Leadership In Numbers
                  </h3>

                  <div className="space-y-6">
                    {stats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                        <div className="font-display text-3xl font-extrabold text-[var(--ese-sky)]/90 min-w-[90px]">
                          {stat.value}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">{stat.label}</h4>
                          <p className="mt-1 text-[11px] text-white/70">{stat.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
