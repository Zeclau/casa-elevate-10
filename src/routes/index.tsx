import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BedDouble,
  Bath,
  Sofa,
  WashingMachine,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Car,
  Trees,
  Home,
  Send,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import fachada from "@/assets/property/fachada.jpg";
import exterior from "@/assets/property/exterior.jpg";
import entrada from "@/assets/property/entrada.jpg";
import sala from "@/assets/property/sala.jpg";
import habitacion from "@/assets/property/habitacion.jpg";
import bano from "@/assets/property/bano.jpg";
import cocina from "@/assets/property/cocina.jpg";
import patio from "@/assets/property/patio.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const PHONE = "+50587607418";
const PHONE_DISPLAY = "+505 8760-7418";
const WA = `https://wa.me/50587607418?text=${encodeURIComponent(
  "Hola Ligia, me interesa la casa en Valle Sandino ($45,000 USD). ¿Podemos agendar una visita?"
)}`;

const gallery = [
  { src: fachada, label: "Fachada principal", category: "Exterior", className: "md:col-span-2 md:row-span-2" },
  { src: exterior, label: "Vista lateral", category: "Exterior" },
  { src: entrada, label: "Entrada y pérgola", category: "Exterior" },
  { src: sala, label: "Sala comedor", category: "Interior", className: "md:col-span-2" },
  { src: cocina, label: "Cocina", category: "Interior" },
  { src: habitacion, label: "Habitación principal", category: "Interior" },
  { src: bano, label: "Baño completo", category: "Interior" },
  { src: patio, label: "Patio trasero", category: "Exterior", className: "md:col-span-2" },
];

const categories = ["Todas", "Exterior", "Interior"] as const;

function Landing() {
  useReveal();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todas");
  const filtered = gallery.filter((g) => filter === "Todas" || g.category === filter);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hola Ligia, soy ${data.get("name")} (${data.get("phone")}). ${data.get("message")}`;
    window.open(`https://wa.me/50587607418?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("¡Mensaje listo! Te redirigimos a WhatsApp.");
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster position="top-center" />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <img
          src={fachada}
          alt="Fachada de la casa moderna en Valle Sandino"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        {/* Cinematic blending stack */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.03_255/0.7)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-sheen mix-blend-overlay" />
        <div className="grain absolute inset-0" />

        {/* Decorative gold corner */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-navy opacity-40 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
              <Home className="h-4 w-4 text-[var(--navy-deep)]" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                Valle Sandino
              </div>
              <div className="text-sm font-semibold">Casa Moderna · Managua</div>
            </div>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white transition hover:bg-white/15 sm:flex"
          >
            <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
          </a>
        </header>

        <div className="relative z-10 mx-auto flex h-[calc(100%-88px)] max-w-7xl flex-col items-start justify-end px-6 pb-16 text-white sm:pb-20">
          <span className="reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Propiedad exclusiva
          </span>

          <h1 className="reveal max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-[5.25rem]">
            Tu casa propia en{" "}
            <span className="italic shimmer-gold">Valle Sandino</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Una residencia diseñada para vivir o invertir, sobre Carretera Nueva
            a León — una de las zonas con mayor proyección de Managua.
          </p>

          <div className="reveal mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 glass px-5 py-3.5 shadow-elegant">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                Precio de venta
              </div>
              <div className="mt-0.5 text-3xl font-semibold tracking-tight text-white">
                $45,000{" "}
                <span className="text-sm font-medium text-white/60">USD</span>
              </div>
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-gold opacity-30 blur-xl" />
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group relative h-14 w-full overflow-hidden rounded-full bg-gradient-gold px-7 text-base font-semibold text-[var(--navy-deep)] shadow-gold transition-all hover:scale-[1.02] sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar visita por WhatsApp
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </Button>
            </a>
          </div>

          {/* Scroll cue */}
          <div className="reveal mt-12 hidden items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50 sm:flex">
            <span className="block h-px w-10 bg-white/40" />
            Desplázate para descubrir
          </div>
        </div>
      </section>

      {/* QUICK STATS — floating glass card */}
      <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
        <div className="reveal grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant sm:grid-cols-4">
          {[
            { icon: BedDouble, label: "Habitaciones", value: "2" },
            { icon: Bath, label: "Baño", value: "1" },
            { icon: Sofa, label: "Sala & Cocina", value: "Amplia" },
            { icon: WashingMachine, label: "Área de servicio", value: "Sí" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`relative flex flex-col items-center justify-center px-4 py-7 text-center ${
                i > 0 ? "sm:border-l border-border" : ""
              } ${i === 1 ? "border-l border-border sm:border-l" : ""} ${
                i === 2 ? "border-t border-border sm:border-t-0" : ""
              } ${i === 3 ? "border-t border-l border-border sm:border-t-0" : ""}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-cream ring-1 ring-border">
                <s.icon className="h-5 w-5 text-navy" />
              </div>
              <div className="mt-3 font-serif text-xl font-semibold text-navy">{s.value}</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPTION + BENEFITS */}
      <section className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="divider-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                La propiedad
              </span>
            </div>
            <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">
              Una oportunidad pensada
              <br />
              para <span className="italic text-gradient-gold">crecer</span>.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Descubre esta excelente oportunidad de inversión sobre{" "}
              <span className="text-foreground">Carretera Nueva a León</span>.
              Una propiedad diseñada para ofrecerte comodidad y accesibilidad,
              perfecta para tu primera casa o como una inversión inteligente con
              excelente proyección de plusvalía.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Distribución funcional, acabados sobrios y un patio amplio listo
              para personalizar a tu estilo. A pocos minutos de centros
              comerciales, colegios y la salida hacia León.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: TrendingUp, title: "Alta plusvalía", desc: "Zona de fuerte crecimiento sobre Carretera Nueva a León." },
              { icon: ShieldCheck, title: "Documentos al día", desc: "Listo para escriturar y financiamiento bancario." },
              { icon: Car, title: "Acceso vehicular", desc: "Portón amplio y entrada para vehículo." },
              { icon: Trees, title: "Patio amplio", desc: "Espacio para ampliar, jardín o área social." },
            ].map((b) => (
              <div
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-elegant"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 via-transparent to-[var(--navy)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-cream ring-1 ring-[var(--gold)]/30">
                  <b.icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="relative mt-4 text-base font-semibold">{b.title}</h3>
                <p className="relative mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-gradient-cream py-28 sm:py-36">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-gold opacity-[0.08] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="divider-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  Galería
                </span>
              </div>
              <h2 className="text-4xl font-semibold sm:text-5xl">
                Recorre cada espacio.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                    filter === c
                      ? "border-[var(--gold)] bg-gradient-navy text-white shadow-gold"
                      : "border-border bg-white text-foreground hover:border-[var(--gold)]/60 hover:text-navy"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[230px]">
            {filtered.map((g) => (
              <figure
                key={g.label}
                className={`group relative overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border transition-all duration-500 hover:ring-[var(--gold)]/50 ${g.className ?? ""}`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-1 p-5 text-white transition-all duration-500 group-hover:translate-y-0">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                    {g.category}
                  </div>
                  <div className="mt-0.5 font-serif text-base font-semibold">
                    {g.label}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="reveal lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="divider-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Ubicación privilegiada
              </span>
            </div>
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Conectado con todo
              <br />
              lo que <span className="italic text-gradient-gold">necesitas</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              En Valle Sandino, sobre{" "}
              <span className="text-foreground">Carretera Nueva a León</span>,
              una de las zonas con mayor proyección de Managua. A pocos minutos
              de comercios, colegios, centros de salud y rutas principales —
              ideal para vivir tranquilo y mantener todo cerca.
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-gold">
                <MapPin className="h-5 w-5 text-[var(--navy-deep)]" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Valle Sandino</div>
                <div className="text-muted-foreground">
                  Carretera Nueva a León, Managua, Nicaragua.
                </div>
              </div>
            </div>
          </div>

          <div className="reveal relative overflow-hidden rounded-3xl border border-border shadow-elegant lg:col-span-3">
            <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-[var(--gold)]/20" />
            <iframe
              title="Ubicación de la propiedad"
              src="https://www.google.com/maps?q=12.1747189,-86.3646663&z=16&output=embed"
              loading="lazy"
              className="h-[460px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden bg-gradient-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-sheen" />
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-gold opacity-[0.18] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[var(--gold)] opacity-[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="divider-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Hablemos
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Agenda tu visita{" "}
              <span className="italic text-gradient-gold">hoy mismo</span>.
            </h2>
            <p className="mt-4 text-white/70">
              Ligia te acompaña en cada paso, desde la visita hasta el cierre.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Agent card */}
            <div className="reveal relative overflow-hidden rounded-3xl glass-light p-8 text-foreground shadow-elegant">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              <div className="relative flex items-center gap-5">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-navy font-serif text-2xl font-semibold text-white shadow-gold ring-2 ring-[var(--gold)]/60 ring-offset-2 ring-offset-white">
                  LD
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold">Ligia Donaire</div>
                  <div className="text-sm font-medium text-gold">
                    Keller Williams Nicaragua
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </div>

              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                <a href={`tel:${PHONE}`}>
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-full border-[var(--navy)]/15 bg-white text-base font-semibold text-navy hover:bg-[var(--navy)] hover:text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Llamar ahora
                  </Button>
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <Button className="h-12 w-full rounded-full bg-gradient-gold text-base font-semibold text-[var(--navy-deep)] shadow-gold hover:scale-[1.02]">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>

              <div className="relative mt-6 rounded-2xl border border-border bg-gradient-cream p-4 text-sm text-muted-foreground">
                Respuesta en menos de 1 hora en horario laboral. Atención
                personalizada.
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="reveal relative overflow-hidden rounded-3xl glass-light p-8 text-foreground shadow-elegant"
            >
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[var(--navy)] opacity-10 blur-2xl" />
              <h3 className="font-serif text-2xl font-semibold">Envía tu interés</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Completa el formulario y te contactamos por WhatsApp.
              </p>

              <div className="relative mt-6 grid gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Nombre
                  </label>
                  <Input name="name" required maxLength={80} placeholder="Tu nombre completo" className="mt-1.5 h-12 border-border bg-white" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Teléfono
                  </label>
                  <Input name="phone" required maxLength={20} placeholder="+505 0000-0000" className="mt-1.5 h-12 border-border bg-white" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    defaultValue="Me interesa la propiedad en Valle Sandino"
                    className="mt-1.5 border-border bg-white"
                  />
                </div>
                <Button type="submit" className="h-12 rounded-full bg-gradient-navy text-base font-semibold text-white hover:opacity-95">
                  <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[var(--navy-deep)] py-10 text-center text-sm text-white/55">
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        <div className="mx-auto mt-6 max-w-7xl px-6">
          Desarrollado por{" "}
          <span className="font-semibold text-gold">Sacuanjoche.dev</span>{" "}
          <span className="mx-2 text-white/30">·</span>
          Marketing Inmobiliario de Alto Nivel
        </div>
      </footer>
    </div>
  );
}
