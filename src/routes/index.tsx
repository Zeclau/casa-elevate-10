import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BedDouble,
  Bath,
  Sofa,
  Utensils,
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
  { src: fachada, label: "Fachada", category: "Exterior", className: "md:col-span-2 md:row-span-2" },
  { src: exterior, label: "Vista lateral", category: "Exterior" },
  { src: entrada, label: "Entrada principal", category: "Exterior" },
  { src: sala, label: "Sala comedor", category: "Interior", className: "md:col-span-2" },
  { src: cocina, label: "Cocina", category: "Interior" },
  { src: habitacion, label: "Habitación", category: "Interior" },
  { src: bano, label: "Baño", category: "Interior" },
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
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={fachada}
          alt="Fachada de la casa moderna en Valle Sandino"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Home className="h-5 w-5" />
            <span>Valle Sandino</span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/20 sm:flex"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </header>

        <div className="relative z-10 mx-auto flex h-[calc(100%-88px)] max-w-7xl flex-col items-start justify-end px-6 pb-20 text-white sm:justify-center sm:pb-0">
          <span className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" /> Valle Sandino, Managua
          </span>
          <h1 className="reveal max-w-3xl text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Tu Casa Propia <br className="hidden sm:block" />
            en Valle Sandino
          </h1>
          <p className="reveal mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Ideal para vivir o invertir en una zona de alta demanda sobre
            Carretera Nueva a León.
          </p>

          <div className="reveal mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl border border-white/20 bg-white/95 px-5 py-3 text-foreground shadow-[var(--shadow-elegant)]">
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Precio de venta
              </div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                $45,000 <span className="text-sm font-medium text-muted-foreground">USD</span>
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 rounded-full bg-primary px-7 text-base font-semibold shadow-[var(--shadow-elegant)] transition hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar visita por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative z-20 mx-auto -mt-14 max-w-6xl px-6">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-card)] sm:grid-cols-4">
          {[
            { icon: BedDouble, label: "Habitaciones", value: "2" },
            { icon: Bath, label: "Baño", value: "1" },
            { icon: Sofa, label: "Sala & Cocina", value: "Amplia" },
            { icon: WashingMachine, label: "Área de servicio", value: "Sí" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center bg-white px-4 py-6 text-center">
              <s.icon className="h-6 w-6 text-primary" />
              <div className="mt-3 text-lg font-semibold">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPTION + BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              La propiedad
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Una oportunidad pensada para crecer.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Descubre esta excelente oportunidad de inversión sobre{" "}
              <span className="text-foreground">Carretera Nueva a León</span>. Una
              propiedad diseñada para ofrecerte comodidad y accesibilidad,
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
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-muted/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Galería
              </span>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Recorre cada espacio.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-white text-foreground hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
            {filtered.map((g) => (
              <figure
                key={g.label}
                className={`group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] ${g.className ?? ""}`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                    {g.category}
                  </div>
                  <div className="text-sm font-semibold">{g.label}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="reveal lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Ubicación privilegiada
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Conectado con todo lo que necesitas.
            </h2>
            <p className="mt-5 text-muted-foreground">
              En Valle Sandino, sobre <span className="text-foreground">Carretera Nueva a León</span>,
              una de las zonas con mayor proyección de Managua. A pocos minutos
              de comercios, colegios, centros de salud y rutas principales —
              ideal para vivir tranquilo y mantener todo cerca.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="text-sm">
                <div className="font-semibold">Valle Sandino</div>
                <div className="text-muted-foreground">
                  Carretera Nueva a León, Managua, Nicaragua.
                </div>
              </div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] lg:col-span-3">
            <iframe
              title="Ubicación de la propiedad"
              src="https://www.google.com/maps?q=12.1747189,-86.3646663&z=16&output=embed"
              loading="lazy"
              className="h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Hablemos
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Agenda tu visita hoy mismo.
            </h2>
            <p className="mt-4 text-white/70">
              Ligia te acompaña en cada paso, desde la visita hasta el cierre.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Agent card */}
            <div className="reveal rounded-3xl bg-white p-8 text-foreground shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
                  LD
                </div>
                <div>
                  <div className="text-xl font-semibold">Ligia Donaire</div>
                  <div className="text-sm text-muted-foreground">
                    Keller Williams Nicaragua
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href={`tel:${PHONE}`}>
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-full border-foreground/15 text-base font-semibold"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Llamar ahora
                  </Button>
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <Button className="h-12 w-full rounded-full bg-primary text-base font-semibold hover:bg-primary/90">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-muted p-4 text-sm text-muted-foreground">
                Respuesta en menos de 1 hora en horario laboral. Atención
                bilingüe disponible.
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="reveal rounded-3xl bg-white p-8 text-foreground shadow-[var(--shadow-elegant)]"
            >
              <h3 className="text-xl font-semibold">Envía tu interés</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Completa el formulario y te contactamos por WhatsApp.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Nombre
                  </label>
                  <Input name="name" required maxLength={80} placeholder="Tu nombre completo" className="mt-1.5 h-12" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Teléfono
                  </label>
                  <Input name="phone" required maxLength={20} placeholder="+505 0000-0000" className="mt-1.5 h-12" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    defaultValue="Me interesa la propiedad en Valle Sandino"
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" className="h-12 rounded-full bg-primary text-base font-semibold hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" /> Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary border-t border-white/10 py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          Desarrollado por{" "}
          <span className="font-semibold text-white">Sacuanjoche.dev</span>{" "}
          · Marketing Inmobiliario de Alto Nivel
        </div>
      </footer>
    </div>
  );
}
