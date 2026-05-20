"use client";

type PartnersSectionProps = {
  partners: string[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="bg-[#12153e] py-10 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 futuristic-grid-dark opacity-5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
        {/* Centered Small Title */}
        <span className="font-display text-[9px] font-black uppercase tracking-[0.25em] text-white/45 block mb-6">
          AUTHORIZED DISTRIBUTOR FOR
        </span>

        {/* Seamless Infinite Marquee Scroll */}
        <div className="relative overflow-hidden">
          {/* Edge gradients to mask the entry and exit of logos */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#12153e] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#12153e] to-transparent pointer-events-none" />

          <div className="flex w-max gap-16 select-none animate-marquee hover:[animation-play-state:paused] py-1">
            {/* First Set of Brands */}
            {partners.map((brand, idx) => (
              <span
                key={`${brand}-${idx}`}
                className="font-display text-sm font-extrabold text-white/50 uppercase tracking-widest hover:text-white transition-colors duration-300 cursor-pointer shrink-0"
              >
                {brand}
              </span>
            ))}

            {/* Duplicated Set for Seamless Continuous Scroll */}
            {partners.map((brand, idx) => (
              <span
                key={`${brand}-dup-${idx}`}
                className="font-display text-sm font-extrabold text-white/50 uppercase tracking-widest hover:text-white transition-colors duration-300 cursor-pointer shrink-0"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
