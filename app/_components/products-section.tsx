"use client";

import { useState } from "react";
import Image from "next/image";
import type { Category, Feature } from "../_data/ese";
import { HoverLift, Reveal, Stagger, StaggerItem, SpotlightCard } from "./motion-effects";
import { SectionHeading } from "./section-heading";
import { motion, AnimatePresence } from "motion/react";

type ProductsSectionProps = {
  categories: Category[];
  profileSolutions: Feature[];
};

export function ProductsSection({ categories, profileSolutions }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const activeIndex = categories.findIndex((c) => c.id === activeTab);

  return (
    <>
      {/* Category Explorer Hub (Cards Overview) */}
      <section id="products" className="scroll-mt-20 bg-[var(--ese-soft)] py-24 text-[var(--ese-ink)] relative overflow-hidden border-b border-[var(--ese-line)]">
        <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Product Divisions"
                title="Comprehensive Security & Hardware Solutions."
                body="Browse our specialized departments. Click any division card to explore its components in the interactive specification panel below."
              />
            </Reveal>

            {/* Futuristic Navigator */}
            <nav aria-label="Product Category Navigator" className="w-full">
              <Stagger className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <StaggerItem key={category.id}>
                    <button
                      onClick={() => {
                        setActiveTab(category.id);
                        document.getElementById("specifications-explorer")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full block rounded-xl border border-[var(--ese-line)] bg-white px-4 py-3 text-center font-display text-[10px] font-black uppercase tracking-wider text-[var(--ese-ink)]/80 transition-all duration-300 hover:border-[#0163d2] hover:bg-[#0163d2] hover:text-white hover:shadow-sm"
                    >
                      {category.name}
                    </button>
                  </StaggerItem>
                ))}
              </Stagger>
            </nav>
          </div>

          {/* Overview Grid Cards */}
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <StaggerItem key={category.id}>
                <HoverLift className="h-full">
                  <button
                    onClick={() => {
                      setActiveTab(category.id);
                      document.getElementById("specifications-explorer")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group text-left block w-full overflow-hidden rounded-2xl border border-[var(--ese-line)] bg-white text-[var(--ese-ink)] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#0163d2] h-full flex flex-col justify-between"
                  >
                    <div className="relative h-44 w-full bg-[var(--ese-soft)] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 bg-white relative flex-grow flex flex-col justify-between">
                      <div className="absolute top-0 left-5 -mt-3 rounded-full bg-[#0163d2] px-2.5 py-0.5 font-display text-[8px] font-black uppercase tracking-wider text-white">
                        {category.eyebrow}
                      </div>
                      <div className="mt-2">
                        <h3 className="font-display text-sm font-black tracking-tight group-hover:text-[#0163d2] transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="mt-2 text-[11px] leading-5 text-[var(--ese-muted)] line-clamp-3">
                          {category.summary}
                        </p>
                      </div>
                      <div className="mt-4 text-[9px] font-bold text-[#0163d2] uppercase tracking-wider flex items-center gap-1">
                        Explore Specifications &rarr;
                      </div>
                    </div>
                  </button>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Interactive Products Specification Explorer Panel */}
      <section id="specifications-explorer" className="scroll-mt-24 bg-white py-24 relative overflow-hidden border-b border-[var(--ese-line)]">
        <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-display text-xs font-black uppercase tracking-widest text-[#0163d2]">
              Interactive Explorer
            </span>
            <h2 className="mt-3 font-display text-3xl font-black text-[var(--ese-ink)] tracking-tight">
              Systems Specifications Dashboard
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[var(--ese-muted)]">
              Interact with the categories below to inspect custom design standards, integrated manufacturer systems, and direct download links for our product groups.
            </p>
          </Reveal>

          {/* Interactive B2B Dashboard Container */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 bg-[var(--ese-soft)]/40 border border-[var(--ese-line)] rounded-3xl p-5 lg:p-8 shadow-sm">
            {/* Tabs List */}
            <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-[var(--ese-line)] pr-0 lg:pr-6">
              {categories.map((category, idx) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-display whitespace-nowrap lg:whitespace-normal group ${
                      isActive 
                        ? "text-[#0163d2] font-black" 
                        : "text-[var(--ese-ink)]/70 hover:text-[var(--ese-ink)] hover:bg-white/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-product-tab"
                        className="absolute inset-0 bg-white border-l-4 border-[#0163d2] rounded-xl shadow-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-wider text-[#0163d2]/80">
                      0{idx + 1}
                    </span>
                    <span className="relative z-10 text-xs font-bold leading-tight">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Panels Content */}
            <div className="min-h-[460px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 gap-8 items-stretch"
                >
                  {/* Left Column: Visual frame */}
                  <div className="relative h-60 md:h-full min-h-[260px] rounded-2xl overflow-hidden border border-[var(--ese-line)] shadow-sm group">
                    <Image
                      src={activeCategory.image}
                      alt={activeCategory.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ese-ink)]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#ffaa00]">
                        Division 0{activeIndex + 1}
                      </span>
                      <h4 className="font-display text-sm font-black mt-0.5">{activeCategory.name}</h4>
                    </div>
                  </div>

                  {/* Right Column: Spec Texts and Subgroups */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#0163d2]">
                        {activeCategory.eyebrow} Specs
                      </span>
                      <h3 className="mt-1 font-display text-xl font-black text-[var(--ese-ink)] leading-snug">
                        {activeCategory.name}
                      </h3>
                      <p className="mt-3.5 text-xs leading-6 text-neutral-600">
                        {activeCategory.summary}
                      </p>

                      <div className="mt-6 pt-5 border-t border-[var(--ese-line)]">
                        <h4 className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-ink)] mb-3">
                          Systems & Hardware Groups
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeCategory.groups.map((group) => (
                            <span
                              key={group}
                              className="rounded-lg bg-white border border-[var(--ese-line)] px-2.5 py-1 text-[9px] font-semibold text-[var(--ese-ink)] shadow-sm"
                            >
                              {group}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-[var(--ese-line)] flex items-center justify-between gap-4">
                      <div className="text-[10px] text-neutral-500 font-medium">
                        Need engineering drawings?
                      </div>
                      <a
                        href={activeCategory.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#0163d2] bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#0163d2] transition-all duration-300 hover:bg-[#0163d2] hover:text-white hover:shadow-sm"
                      >
                        Open Catalog &rarr;
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Secondary Specialized Services banner */}
          <div className="mt-20 border-t border-[var(--ese-line)] pt-16">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="font-display text-2xl font-black text-[var(--ese-ink)]">
                Other Specialized Systems
              </h3>
              <p className="mt-3 text-sm text-[var(--ese-muted)]">
                In addition to our primary categories, ESE manufactures, partners, and integrates custom Point of Sale systems and Queue Management hardware.
              </p>
            </Reveal>

            <Stagger className="grid gap-5 md:grid-cols-2">
              {profileSolutions.map((solution) => (
                <StaggerItem key={solution.title}>
                  <SpotlightCard className="rounded-2xl bg-white border border-[var(--ese-line)] p-8 relative overflow-hidden shadow-sm hover:shadow-md">
                    <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-[#ffaa00] rounded-full m-5" />
                    <h4 className="font-display text-base font-black text-[var(--ese-ink)]">
                      {solution.title}
                    </h4>
                    <p className="mt-3 text-xs leading-6 text-neutral-600">
                      {solution.body}
                    </p>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
