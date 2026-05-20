import Image from "next/image";
import { ESE_MEDIA, type Feature } from "../_data/ese";
import { ParallaxFrame, Reveal, Stagger, StaggerItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type OperationsSectionProps = {
  strengths: Feature[];
};

const whyUsItems = [
  {
    title: "Worldwide Quality Guarantee",
    body: "We source globally from verified manufacturers, using mill audits and continuous performance evaluations to guarantee equipment quality.",
  },
  {
    title: "End-to-End Technical Advice",
    body: "We add value at every stage, accessing remote project sites in Jordan, providing engineering proposals, and ensuring on-spec delivery.",
  },
  {
    title: "Infrastructure & Logistics Fleet",
    body: "We invest directly in advanced storage facilities, stock segregation systems, and our own delivery fleet to process orders rapidly.",
  },
  {
    title: "Market Competitiveness",
    body: "By developing direct trade routes and specialized product divisions, we optimize costs and strengthen connections for local buyers.",
  },
];

export function OperationsSection({ strengths }: OperationsSectionProps) {
  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-24 text-[var(--ese-ink)] relative overflow-hidden">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Strengths & Why Us list */}
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose ESE"
              title="Built for Complex B2B Projects, Not Brochure Promises."
              body="We combine global scale, decades-long manufacturer relationships, and deep engineering knowledge to solve procurement challenges."
            />

            <div className="mt-10 space-y-8">
              <div>
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-blue)] mb-5">
                  Core Strategic Strengths
                </h4>
                <Stagger className="grid gap-4 sm:grid-cols-2">
                  {strengths.map((strength) => (
                    <StaggerItem 
                      key={strength.title} 
                      className="rounded-xl border border-[var(--ese-line)] bg-[var(--ese-soft)]/50 p-5 transition-all duration-300 hover:bg-[var(--ese-soft)] hover:shadow-sm"
                    >
                      <h5 className="font-display text-sm font-extrabold text-[var(--ese-ink)]">{strength.title}</h5>
                      <p className="mt-2.5 text-[11px] leading-5 text-neutral-600">{strength.body}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <div className="border-t border-[var(--ese-line)] pt-8">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-[var(--ese-blue)] mb-5">
                  Our Commitment to Delivery
                </h4>
                <Stagger className="grid gap-4 sm:grid-cols-2">
                  {whyUsItems.map((item) => (
                    <StaggerItem 
                      key={item.title} 
                      className="rounded-xl border border-[var(--ese-line)] bg-[var(--ese-soft)]/50 p-5 transition-all duration-300 hover:bg-[var(--ese-soft)] hover:shadow-sm"
                    >
                      <h5 className="font-display text-sm font-extrabold text-[var(--ese-ink)]">{item.title}</h5>
                      <p className="mt-2.5 text-[11px] leading-5 text-neutral-600">{item.body}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Visual Showcase & Warehouse details */}
          <Reveal className="space-y-6 lg:sticky lg:top-24" delay={0.1}>
            <ParallaxFrame className="min-h-[380px] rounded-2xl bg-white border border-[var(--ese-line)] shadow-lg relative overflow-hidden group">
              <Image
                src={`${ESE_MEDIA}/imageslider/home-v4/03.jpg`}
                alt="ESE Smart Warehousing and Distribution Network"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </ParallaxFrame>

            <div className="bg-[var(--ese-soft)]/60 rounded-2xl p-7 border border-[var(--ese-line)] relative overflow-hidden">
              <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-[var(--ese-blue)] rounded-full m-4" />
              <h3 className="font-display text-sm font-black uppercase tracking-widest text-[var(--ese-blue)]">
                Smart Warehousing Network
              </h3>
              <p className="mt-3.5 text-xs leading-6 text-neutral-600">
                To guarantee immediate availability, ESE manages an expansive network of warehouses in Jordan's key cities. Stock is systematically segregated by category (surveillance, access, cabling, gates) and monitored by trained logistics engineers, ensuring seamless order dispatch and delivery.
              </p>
              <div className="mt-5 flex gap-4 text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Real-time Inventory
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ese-blue)]" />
                  Category Segregation
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
