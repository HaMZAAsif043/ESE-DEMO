import type { Stat } from "../_data/ese";
import { Stagger, StaggerItem } from "./motion-effects";

type StatsBandProps = {
  stats: Stat[];
};

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="bg-white py-8 relative overflow-hidden futuristic-grid border-b border-[var(--ese-line)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Stagger className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stats.map((stat) => (
            <StaggerItem 
              key={stat.label} 
              className="glass-card rounded-xl p-4 flex flex-col justify-center items-center text-center h-28 border border-[var(--ese-line)] glow-border-hover relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute top-2 right-2 h-1.5 w-1.5 bg-[var(--ese-sky)] rounded-full animate-pulse" />
              <div className="font-display text-2xl font-extrabold text-[var(--ese-blue)] tracking-tight leading-none">
                {stat.value}
              </div>
              <h3 className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[var(--ese-ink)] leading-tight">
                {stat.label}
              </h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
