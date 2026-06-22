import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Auditamos tu marca, competencia y embudo para detectar oportunidades reales." },
  { n: "02", title: "Estrategia", desc: "Definimos objetivos, canales, mensajes y KPIs medibles para cada etapa." },
  { n: "03", title: "Ejecución", desc: "Lanzamos campañas, contenidos y SEO con tiempos claros y entregables semanales." },
  { n: "04", title: "Optimización", desc: "Iteramos con datos: A/B tests, escala de presupuestos y mejora continua." },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 border-y border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Proceso</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Un método probado en <span className="text-gradient">4 pasos</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Sin humo ni promesas vacías: un sistema claro que aplicamos en cada cliente para que sepas qué pasa y cuándo.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-background p-7"
            >
              <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
