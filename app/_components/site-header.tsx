import Image from "next/image";
import { navLinks } from "../_data/ese";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ese-line)] bg-white text-[var(--ese-ink)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3.5 group" aria-label="ESE Home">
          <span className="relative h-14 w-40 overflow-hidden rounded bg-transparent p-1 transition-all duration-300">
            <Image 
              src="/logo.png" 
              alt="ESE Logo" 
              fill 
              sizes="160px" 
              className="object-contain p-1" 
            />
          </span>
          <div className="hidden md:flex flex-col text-left">
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-[var(--ese-ink)]/90">
              Electronic Supplies Est.
            </span>
            <span className="text-[10px] text-[var(--ese-ink)]/50 font-medium font-sans">
              مؤسسة التجهيزات الإلكترونية
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[var(--ese-ink)]/70 lg:flex">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              className="transition duration-300 hover:text-[var(--ese-blue)] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--ese-blue)] after:transition-all after:duration-300 hover:after:w-full" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0096265167298"
          className="rounded-full border border-[#0163d2] bg-[var(--ese-soft)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0163d2] transition-all duration-300 hover:bg-[#0163d2] hover:text-white"
        >
          Call: +962 6 5167298
        </a>
      </div>
    </header>
  );
}
