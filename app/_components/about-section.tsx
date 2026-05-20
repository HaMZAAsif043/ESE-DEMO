import Image from "next/image";
import type { Feature } from "../_data/ese";
import { ParallaxFrame, Reveal, Stagger, StaggerItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type AboutSectionProps = {
  values: Feature[];
};

const clientSectors = [
  "Hospitality",
  "Banking & Finance",
  "Education Sector",
  "Public & Government",
  "Fast Food Chains",
  "Multinationals",
  "Industrial Complexes",
  "Residential & Luxury",
];

export function AboutSection({ values }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-20 bg-[var(--ese-soft)] py-24 relative overflow-hidden mesh-glow-light">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column: Visual Assets & Metadata */}
          <Reveal className="space-y-6">
            <ParallaxFrame className="min-h-[420px] rounded-2xl border border-[var(--ese-line)] bg-white shadow-[0_20px_50px_rgba(7,14,23,0.06)] relative overflow-hidden group">
              <Image
                src="/distributor.png"
                alt="ESE Authorized Distributor and Brand Partners"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </ParallaxFrame>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[var(--ese-dark-bg)] p-6 text-white border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-white/5 rounded-full -mr-6 -mt-6" />
                <span className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-sky)]">
                  Headquarters
                </span>
                <p className="mt-2 text-xl font-extrabold font-display">Amman, Jordan</p>
                <p className="mt-1 text-xs text-white/75">Queen Rania St., Building 86</p>
              </div>
              <div className="rounded-xl bg-white p-6 border border-[var(--ese-line)] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-[var(--ese-blue)]/5 rounded-full -mr-6 -mt-6" />
                <span className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-blue)]">
                  Logistics Coverage
                </span>
                <p className="mt-2 text-xl font-extrabold font-display text-[var(--ese-ink)]">Nationwide Supply</p>
                <p className="mt-1 text-xs text-[var(--ese-muted)]">9+ Smart Warehouses</p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Text Information */}
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Corporate Profile"
              title="A Market-Leading Security Distributor & Solution Provider."
              body="Backed by over four decades of experience, Electronic Supplies Est. (ESE) supports small, medium, and mega enterprises with customized security hardware and total design implementation. We serve client sectors ranging from high-security banking institutions to luxury commercial spaces."
            />

            {/* Target Client Sectors */}
            <div className="mt-8">
              <h4 className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-ink)] mb-4">
                Sectors We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {clientSectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full bg-white border border-[var(--ese-line)] px-4 py-2 text-xs font-bold text-[var(--ese-ink)] shadow-sm hover:border-[var(--ese-sky)] transition-colors duration-300"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision, Mission, Values Slider/Cards */}
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map((item) => (
                <StaggerItem 
                  key={item.title} 
                  className="glass-card rounded-xl p-6 border border-[var(--ese-line)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-base font-extrabold text-[var(--ese-blue)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ese-blue)]" />
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-xs leading-6 text-[var(--ese-muted)]">{item.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
