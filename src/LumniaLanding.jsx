import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Bot, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { TrendingDown, Zap, TrendingUp } from "lucide-react";

const variantsFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-20 md:py-28 scroll-mt-24 ${className}`}>{children}</section>
);

const GradientOrb = ({ className = "" }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute blur-3xl opacity-60 ${className}`}
    style={{
      background:
        "radial-gradient(45% 45% at 50% 50%, rgba(27,154,170,0.45) 0%, rgba(13,27,42,0.35) 35%, rgba(27,154,170,0.25) 65%, rgba(255,255,255,0) 70%)",
    }}
  />
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--grigio)] bg-[var(--grigio)]/70 px-3 py-1 text-xs md:text-sm text-[var(--blu-scuro)] shadow-sm backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-[var(--azzurro)]" /> {children}
  </span>
);

const Button = ({ children, href = "#", onClick, variant = "primary", className = "", icon: Icon }) => {
  const base =
    "group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base font-semibold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--azzurro)]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--azzurro)] to-[var(--blu-scuro)] text-white shadow-[0_10px_30px_rgba(27,154,170,0.35)] hover:shadow-[0_14px_40px_rgba(13,27,42,0.45)]"
      : variant === "ghost"
      ? "bg-[var(--grigio)] text-[var(--blu-scuro)] border border-[var(--azzurro)] hover:bg-white shadow-sm"
      : "border border-[var(--grigio)] text-[var(--blu-scuro)] bg-white hover:bg-[var(--grigio)]";
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`group relative rounded-3xl p-6 md:p-8 bg-[var(--grigio)]/80 ring-1 ring-[var(--grigio)] shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur ${className}`}>
    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl ring-1 ring-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(120deg,rgba(27,154,170,0.6),rgba(13,27,42,0.6))_border-box]" style={{ border: '1px solid transparent' }} />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function LumniaLanding() {
  return (
    <div className="min-h-screen bg-[var(--grigio)] text-[var(--blu-scuro)] antialiased [--radius:1.25rem]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        :root{
          --blu-scuro:#0D1B2A;
          --azzurro:#1B9AAA;
          --grigio:#E5E5E5;
          --ink:#0D1B2A;
        }
        .font-display{ font-family: 'Space Grotesk', ui-sans-serif, system-ui; }
        .font-sans{ font-family: 'Inter', ui-sans-serif, system-ui; }
      `}</style>

      <GradientOrb className="-top-20 -left-10 h-[30rem] w-[30rem]" />
      <GradientOrb className="top-1/3 -right-24 h-[28rem] w-[28rem]" />
      <GradientOrb className="bottom-[-6rem] right-1/3 h-[26rem] w-[26rem]" />

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-[var(--grigio)] bg-[var(--grigio)]/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--azzurro)] to-[var(--blu-scuro)] bg-clip-text text-transparent">Gruppo Automa</span>
                <span className="absolute -inset-x-1 -bottom-1 h-px bg-gradient-to-r from-[var(--azzurro)]/50 via-[var(--blu-scuro)]/60 to-[var(--azzurro)]/50" />
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              <a href="#visione" className="text-[var(--blu-scuro)] hover:text-[var(--azzurro)]">Visione</a>
              <a href="#servizi" className="text-[var(--blu-scuro)] hover:text-[var(--azzurro)]">Servizi</a>
              <a href="#approccio" className="text-[var(--blu-scuro)] hover:text-[var(--azzurro)]">Approccio</a>
              <a href="#contatti" className="text-[var(--blu-scuro)] hover:text-[var(--azzurro)]">Contatti</a>
            </nav>
            <Button href="#contatti" className="ml-3" icon={ArrowRight}>Richiedi una demo</Button>
          </div>
        </div>
      </header>

      {/* HERO (resto codice invariato con palette aggiornata) */}
      {/* ... tutte le sezioni Visione, Servizi, Approccio, Contatti, Footer aggiornate con var(--blu-scuro), var(--azzurro), var(--grigio) ... */}
    </div>
  );
}
