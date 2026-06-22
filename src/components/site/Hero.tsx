import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-marketing.jpg";

const stats = [
  { value: "+120", label: "Clientes activos" },
  { value: "5.4x", label: "ROAS promedio" },
  { value: "+3M", label: "€ gestionados en ads" },
  { value: "98%", label: "Retención anual" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Agencia de marketing digital · Performance & IA
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Marketing digital que convierte{" "}
            <span className="text-gradient">clics en clientes.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Diseñamos estrategias de publicidad pagada, SEO, redes sociales y contenido con IA
            para escalar tu negocio con datos reales y resultados medibles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              <a href="#contacto">
                Solicita tu diagnóstico
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src={heroImg}
              alt="Visualización de campañas digitales y métricas en tiempo real"
              width={1536}
              height={1152}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
