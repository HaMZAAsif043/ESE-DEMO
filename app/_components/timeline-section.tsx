import type { TimelineItem } from "../_data/ese";
import { Reveal, Stagger, StaggerListItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type TimelineSectionProps = {
  timeline: TimelineItem[];
};

export function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section id="timeline" className="scroll-mt-20 bg-[var(--ese-soft)] py-24 relative overflow-hidden mesh-glow-light">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            eyebrow="Milestones & Journey"
            title="A Beautiful Distribution Journey Since 1981."
            body="From our humble antenna distribution beginnings in Amman to secure national elections and city-wide thermal grids, ESE has expanded its technical partnerships over four decades."
          />
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-[var(--ese-line)] md:left-1/2 md:-ml-0.5" />

          <Stagger className="space-y-8" tag="ul">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <StaggerListItem
                  key={`${item.year}-${item.event}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node dot */}
                  <div className="absolute left-4 top-4 h-3.5 w-3.5 -translate-x-1.5 rounded-full bg-[var(--ese-blue)] border-4 border-white shadow-[0_0_10px_rgba(0,86,159,0.4)] z-10 md:left-1/2 md:-ml-1.5" />

                  {/* Year Tag Column */}
                  <div className="pl-12 md:pl-0 md:w-1/2 flex md:justify-end md:px-8">
                    <span className={`inline-block rounded-full bg-[var(--ese-blue)] px-4.5 py-1 text-xs font-black tracking-widest text-white font-display shadow-sm ${
                      isEven ? "md:order-1" : ""
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Content Card Column */}
                  <div className="pl-12 mt-2 md:mt-0 md:pl-0 md:w-1/2 md:px-8">
                    <div className="glass-card rounded-xl p-5 border border-[var(--ese-line)] shadow-sm hover:border-[var(--ese-sky)] hover:shadow-md transition-all duration-300">
                      <p className="text-xs font-semibold leading-relaxed text-[var(--ese-ink)]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </StaggerListItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
