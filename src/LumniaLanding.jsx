import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Bot, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

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
        "radial-gradient(45% 45% at 50% 50%, rgba(99,102,241,0.45) 0%, rgba(59,130,246,0.35) 35%, rgba(168,85,247,0.25) 65%, rgba(255,255,255,0) 70%)",
    }}
  />
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs md:text-sm text-slate-700 shadow-sm backdrop-blur">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Button = ({ children, href = "#", onClick, variant = "primary", className = "", icon: Icon }) => {
  const base =
    "group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base font-semibold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_14px_40px_rgba(139,92,246,0.45)]"
      : variant === "ghost"
      ? "bg-white/70 text-slate-900 border border-slate-200 hover:bg-white shadow-sm"
      : "border border-slate-300 text-slate-900 bg-white hover:bg-slate-50";
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`group relative rounded-3xl p-6 md:p-8 bg-white/80 ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur ${className}`}>
    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl ring-1 ring-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(120deg,rgba(59,130,246,0.6),rgba(139,92,246,0.6))_border-box]" style={{ border: '1px solid transparent' }} />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

function useMailto() {
  return React.useCallback((data) => {
    const subject = encodeURIComponent("Richiesta demo — Lumnia");
    const body = encodeURIComponent(
      `Nome: ${data.nome}\nEmail: ${data.email}\nAzienda: ${data.azienda}\nMessaggio: ${data.messaggio}`
    );
    window.location.href = `mailto:hello@lumnia.ai?subject=${subject}&body=${body}`;
  }, []);
}

export default function LumniaLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased [--radius:1.25rem]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        :root{
          --electric:#3b82f6;
          --neon:#8b5cf6;
          --ink:#0f172a;
        }
        .font-display{ font-family: 'Space Grotesk', ui-sans-serif, system-ui; }
        .font-sans{ font-family: 'Inter', ui-sans-serif, system-ui; }
      `}</style>

      <GradientOrb className="-top-20 -left-10 h-[30rem] w-[30rem]" />
      <GradientOrb className="top-1/3 -right-24 h-[28rem] w-[28rem]" />
      <GradientOrb className="bottom-[-6rem] right-1/3 h-[26rem] w-[26rem]" />

      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">Lumnia</span>
                <span className="absolute -inset-x-1 -bottom-1 h-px bg-gradient-to-r from-sky-400/50 via-violet-500/60 to-sky-400/50" />
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              <a href="#servizi" className="text-slate-700 hover:text-slate-900">Servizi</a>
              <a href="#approccio" className="text-slate-700 hover:text-slate-900">Approccio</a>
              <a href="#contatti" className="text-slate-700 hover:text-slate-900">Contatti</a>
            </nav>
            <Button href="#contatti" className="ml-3" icon={ArrowRight}>Richiedi una demo</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section className="pb-10 md:pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={variantsFadeUp}>
              <Badge>Soluzioni di Intelligenza Artificiale alla portata di tutti</Badge>
              <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
                <span className="bg-[linear-gradient(90deg,var(--ink),var(--ink))] bg-clip-text text-transparent">Trasforma il tuo Business</span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 via-sky-600 to-violet-600 bg-clip-text text-transparent">con l'Intelligenza Artificiale</span>
              </h1>
              <p className="mt-5 max-w-xl text-base md:text-lg text-slate-600">
                Sviluppiamo soluzioni AI avanzate per aziende B2C. Assistenti virtuali, call center intelligenti e chatbot che rivoluzionano l'esperienza dei tuoi clienti.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#contatti" icon={ArrowRight}>Prenota una consulenza</Button>
                <Button href="#servizi" variant="ghost">Guarda i servizi</Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4" /> Nessun tecnicismo inutile
                <CheckCircle2 className="h-4 w-4 ml-3" /> Focus su risultati
              </div>
            </motion.div>

            {/* Visual 3D-like stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-violet-400/20 to-white/0 blur-2xl" />

              <div className="relative perspective-[1200px]">
                <motion.div whileHover={{ rotateX: 6, rotateY: -8 }} className="relative">
                  {/* Layer 1 */}
                  <div className="relative -rotate-2 translate-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Assistente Virtuale</p>
                        <p className="font-medium">WhatsApp · Email</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="relative z-10 -mt-4 rotate-1 translate-x-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg">
                        <PhoneCall className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Call Center AI</p>
                        <p className="font-medium">Risposte vocali automatiche</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="relative z-20 -mt-4 -rotate-2 -translate-x-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Chatbot Intelligente</p>
                        <p className="font-medium">Per siti e Customer Care</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* SERVIZI */}
      <Section id="servizi" className="pt-0">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={variantsFadeUp}>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">Servizi</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Tre soluzioni, un’unica esperienza coerente su tutti i canali. Con integrazioni rapide e KPI chiari.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg"><MessageCircle className="h-6 w-6"/></div>
                <div>
                  <h3 className="font-semibold text-lg">Assistente Virtuale AI</h3>
                  <p className="mt-1 text-slate-600 text-sm">Conversazioni naturali su WhatsApp, Email e altri canali. Riduci tempi di risposta e aumenta la soddisfazione.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> H24 multilingua</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Integrazione CRM</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Gestione Calendario</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg"><PhoneCall className="h-6 w-6"/></div>
                <div>
                  <h3 className="font-semibold text-lg">Call Center AI</h3>
                  <p className="mt-1 text-slate-600 text-sm">Risposta vocale automatica su chiamate in entrata. Smista, risolve e inoltra solo ciò che serve agli operatori.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Riconoscimento intenti</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Voce naturale</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Routing intelligente</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg"><Bot className="h-6 w-6"/></div>
                <div>
                  <h3 className="font-semibold text-lg">Chatbot Intelligente</h3>
                  <p className="mt-1 text-slate-600 text-sm">Widget conversazionale per siti e portali. Risposte istantanee, raccomandazioni e raccolta lead.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Onboarding rapido</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Analytics integrati</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500"/> Sicurezza enterprise</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur">
            <div>
              <p className="font-medium">Vuoi vedere un caso d’uso sul tuo settore?</p>
              <p className="text-sm text-slate-600">Prenota 30 minuti con un nostro solution designer.</p>
            </div>
            <Button href="#contatti" icon={ArrowRight}>Richiedi una demo</Button>
          </div>
        </div>
      </Section>

      {/* APPROCCIO */}
      <Section id="approccio" className="pt-0">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={variantsFadeUp}>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">Il nostro approccio</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Percorso chiaro, decisioni rapide. In 4 step trasformiamo un’idea in un progetto attivo.</p>
          </motion.div>

          <div className="relative mt-10 grid gap-6 md:grid-cols-4">
            <div className="pointer-events-none absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-sky-200 via-violet-200 to-sky-200 md:block" />

            {[
              { title: "Incontro con il cliente", desc: "Allineamento su obiettivi e KPI." },
              { title: "Studio delle Soluzioni possibili", desc: "Analisi canali, dataset e integrazioni." },
              { title: "Proposta (al cliente)", desc: "Roadmap, tempi e metriche di impatto." },
              { title: "Inizio del progetto", desc: "Setup, test e go‑live supervisionato." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 font-semibold text-white shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </Section>

      {/* CONTATTI / CTA with Typeform */}
      <Section id="contatti" className="pt-0">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">Richiedi una demo</h2>
              <p className="mt-3 text-slate-600">Parliamo dei tuoi obiettivi e valutiamo l’impatto dell’AI sul tuo customer journey. Zero vincoli, massima chiarezza.</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4"><span className="font-medium">Time‑to‑value</span><br/><span className="text-slate-600">4–6 settimane</span></div>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4"><span className="font-medium">Canali</span><br/><span className="text-slate-600">WhatsApp, Email, Voce, Web</span></div>
              </div>

              <div className="mt-6">
                <Button href="https://wa.me/" variant="ghost" icon={ArrowRight}>Scrivici su WhatsApp</Button>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] max-h-[80vh]">
  <iframe
    className="absolute inset-0 h-full w-full"
    src="https://form.typeform.com/to/HXLSZsoY"
    title="Contattaci - Lumnia"
    frameBorder="0"
    allow="camera; microphone; autoplay; encrypted-media;"
    loading="lazy"
  />
</div>

            
          </div>

          <div className="mx-auto mt-12 max-w-7xl rounded-3xl border border-slate-200 bg-white/60 p-6 text-center text-xs text-slate-500">
            <p>
              Il modulo è fornito da Typeform. Nessun dato viene salvato da questo sito di esempio.
            </p>
          </div>
        </div>
      </Section>

      <footer className="mt-10 border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Lumnia. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Termini</a>
            <a href="#" className="hover:text-slate-900">Cookie</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
