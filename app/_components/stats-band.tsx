import type { Stat } from "../_data/ese";
import { Stagger, StaggerItem, SpotlightCard, CountUp } from "./motion-effects";

type StatsBandProps = {
  stats: Stat[];
};

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="bg-white py-8 relative overflow-hidden border-b border-[var(--ese-line)]">
      <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Stagger className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <SpotlightCard className="rounded-xl border border-[var(--ese-line)] bg-white h-28 flex flex-col justify-center items-center text-center hover:shadow-md">
                <div className="absolute top-2 right-2 h-1.5 w-1.5 bg-[#0163d2] rounded-full animate-pulse z-10" />
                <div className="font-display text-xl font-black text-[#0163d2] tracking-tight leading-none">
                  <CountUp value={stat.value} />
                </div>
                <h3 className="mt-2 text-[9px] font-bold uppercase tracking-wider text-[var(--ese-ink)]/80 leading-tight">
                  {stat.label}
                </h3>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
