import type { Feature } from "../_data/ese";
import { Reveal, Stagger, StaggerItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type CasesSectionProps = {
  successCases: Feature[];
};

const caseMetrics = [
  { value: "$1M+ Scope", label: "Jordan Election", details: "Surveillance monitoring deployment" },
  { value: "National Scale", label: "Arab Bank", details: "Access control in partnership with Tyco" },
  { value: "Thermal Grid", label: "Aqaba & Wadi Rum", details: "Wireless IP microwave network deployment" },
  { value: "Military Expo", label: "Sofex Exhibition", details: "Sponsored video surveillance installations" }
];

export function CasesSection({ successCases }: CasesSectionProps) {
  return (
    <section id="cases" className="scroll-mt-20 bg-[var(--ese-soft)] py-24 text-[var(--ese-ink)] relative overflow-hidden">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Column: Heading and Highlights */}
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Case Studies"
              title="Securing Critical Infrastructure Across Jordan."
              body="From city-wide thermal monitoring networks to secure election polling stations and enterprise bank integrations, ESE has proven capacity to handle mega projects."
            />

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--ese-line)]">
              {caseMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-white p-4 border border-[var(--ese-line)] shadow-sm">
                  <div className="font-display text-sm font-black text-[var(--ese-blue)]">{metric.value}</div>
                  <div className="mt-1 text-[10px] font-bold text-[var(--ese-ink)] uppercase tracking-wider">{metric.label}</div>
                  <div className="mt-1 text-[10px] text-neutral-500 leading-normal">{metric.details}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Detailed Case Study Cards */}
          <Stagger className="grid gap-5 md:grid-cols-2">
            {successCases.map((item) => (
              <StaggerItem
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[var(--ese-line)] hover:border-[var(--ese-sky)] hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 h-1 w-12 bg-gradient-to-r from-[var(--ese-sky)] to-[var(--ese-blue)]" />
                <div>
                  <h3 className="font-display text-base font-black text-[var(--ese-ink)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-xs leading-6 text-neutral-600">
                    {item.body}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--ese-blue)]">
                  <span>Completed Case Study</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ese-blue)]" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
