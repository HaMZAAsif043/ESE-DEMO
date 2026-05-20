import { AboutSection } from "./_components/about-section";
import { CasesSection } from "./_components/cases-section";
import { ContactFooter } from "./_components/contact-footer";
import { Hero } from "./_components/hero";
import { OperationsSection } from "./_components/operations-section";
import { PartnersSection } from "./_components/partners-section";
import { ProductsSection } from "./_components/products-section";
import { ServicesSection } from "./_components/services-section";
import { SiteHeader } from "./_components/site-header";
import { StatsBand } from "./_components/stats-band";
import { TimelineSection } from "./_components/timeline-section";
import { ScrollProgress } from "./_components/motion-effects";
import {
  categories,
  partners,
  profileSolutions,
  services,
  stats,
  strengths,
  successCases,
  timeline,
  values,
} from "./_data/ese";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--ese-soft)] text-[var(--ese-ink)]">
      <ScrollProgress />
      <SiteHeader />
      <Hero stats={stats} />
      <StatsBand stats={stats} />
      <AboutSection values={values} />
      <ServicesSection services={services} />
      <ProductsSection categories={categories} profileSolutions={profileSolutions} />
      <OperationsSection strengths={strengths} />
      <TimelineSection timeline={timeline} />
      <CasesSection successCases={successCases} />
      <PartnersSection partners={partners} />
      <ContactFooter />
    </main>
  );
}
