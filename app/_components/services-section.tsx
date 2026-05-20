import type { Feature } from "../_data/ese";
import { Reveal, Stagger, StaggerItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type ServicesSectionProps = {
  services: Feature[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Core Competencies"
              title="The Operational Framework Behind ESE."
              body="Moving beyond a simple product catalog, ESE delivers end-to-end security operations. We power supply lines, run custom project layouts, and support live field operations across the nation."
            />
          </Reveal>
          
          <Stagger className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <StaggerItem
                key={service.title}
                className="glass-card rounded-2xl p-7 border border-[var(--ese-line)] glow-border-hover transition-all duration-300 relative group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ese-soft)] font-display text-sm font-extrabold text-[var(--ese-blue)] border border-[var(--ese-line)] transition-all duration-300 group-hover:bg-[var(--ese-blue)] group-hover:text-white group-hover:border-transparent">
                  0{index + 1}
                </div>
                <h3 className="mt-6 font-display text-lg font-extrabold text-[var(--ese-ink)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-xs leading-6 text-[var(--ese-muted)]">
                  {service.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
