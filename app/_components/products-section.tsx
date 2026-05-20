import Image from "next/image";
import type { Category, Feature } from "../_data/ese";
import { HoverLift, Reveal, Stagger, StaggerItem } from "./motion-effects";
import { SectionHeading } from "./section-heading";

type ProductsSectionProps = {
  categories: Category[];
  profileSolutions: Feature[];
};

export function ProductsSection({ categories, profileSolutions }: ProductsSectionProps) {
  return (
    <>
      {/* Category Explorer Hub */}
      <section id="products" className="scroll-mt-20 bg-[var(--ese-soft)] py-24 text-[var(--ese-ink)] relative overflow-hidden">
        <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Product Catalog"
                title="Explore ESE Security & Hardware Solutions."
                body="Select a product division below to view our comprehensive systems, specialized hardware, and global brand integrations."
              />
            </Reveal>

            {/* Futuristic Navigator */}
            <nav aria-label="Product Category Navigator" className="w-full">
              <Stagger className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <StaggerItem key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="block rounded-xl border border-[var(--ese-line)] bg-white px-4 py-3.5 text-center font-display text-xs font-black uppercase tracking-wider text-[var(--ese-ink)]/80 transition-all duration-300 hover:border-[var(--ese-sky)] hover:bg-[#0163d2] hover:text-white hover:shadow-sm"
                    >
                      {category.name}
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </nav>
          </div>

          {/* Cards Grid */}
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <StaggerItem key={category.id}>
                <HoverLift>
                  <a
                    href={`#${category.id}`}
                    className="group block overflow-hidden rounded-2xl border border-[var(--ese-line)] bg-white text-[var(--ese-ink)] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[var(--ese-sky)]"
                  >
                    <div className="relative h-48 bg-[var(--ese-soft)] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ese-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 bg-white relative">
                      <div className="absolute top-0 left-6 -mt-3.5 rounded-full bg-[#0163d2] px-3 py-1 font-display text-[9px] font-black uppercase tracking-wider text-white">
                        {category.eyebrow}
                      </div>
                      <h3 className="mt-2 font-display text-sm font-black tracking-tight group-hover:text-[#0163d2] transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="mt-3 text-[11px] leading-5 text-[var(--ese-muted)] line-clamp-3">
                        {category.summary}
                      </p>
                    </div>
                  </a>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Detailed Product Specifications */}
      <section className="bg-[var(--ese-soft)] pb-24 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <StaggerItem key={category.id} className="h-full">
                <article
                  id={category.id}
                  className="scroll-mt-24 h-full flex flex-col overflow-hidden rounded-2xl border border-[var(--ese-line)] bg-white shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                >
                  {/* Glowing Accent Dot matching color scheme */}
                  <div className="absolute top-4 right-4 z-10 h-1.5 w-1.5 bg-[#0163d2] rounded-full animate-pulse" />

                  <div className="relative h-52 bg-[var(--ese-soft)] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#0163d2]">
                        Division 0{index + 1} // {category.eyebrow}
                      </span>
                      <h3 className="mt-1 font-display text-base font-black text-[var(--ese-ink)] leading-snug">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-[var(--ese-muted)] line-clamp-4">
                        {category.summary}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="border-t border-[var(--ese-line)] pt-4">
                        <h4 className="font-display text-[9px] font-black uppercase tracking-wider text-[var(--ese-ink)] mb-2">
                          Systems & Hardware Groups
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {category.groups.map((group) => (
                            <span
                              key={group}
                              className="rounded bg-[var(--ese-soft)] border border-[var(--ese-line)] px-2 py-1 text-[9px] font-semibold text-[var(--ese-ink)]"
                            >
                              {group}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[var(--ese-line)]">
                        <a
                          href={category.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex justify-center rounded-full border border-[#0163d2] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0163d2] transition-all duration-300 hover:bg-[#0163d2] hover:text-white"
                        >
                          Open Catalog
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

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
                <StaggerItem 
                  key={solution.title} 
                  className="rounded-2xl bg-white border border-[var(--ese-line)] p-8 relative overflow-hidden group hover:border-[var(--ese-sky)] transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-[var(--ese-sky)] rounded-full m-5" />
                  <h4 className="font-display text-lg font-black text-[var(--ese-ink)]">
                    {solution.title}
                  </h4>
                  <p className="mt-3 text-xs leading-6 text-[var(--ese-muted)]">
                    {solution.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
