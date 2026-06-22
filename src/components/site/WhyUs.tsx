import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Zap, Target } from "lucide-react";

const features = [
  { icon: LineChart, title: "Decisiones por datos", desc: "Dashboards en tiempo real y reportes claros, sin métricas de vanidad." },
  { icon: Zap, title: "Velocidad de ejecución", desc: "Iteramos rápido: nuevas creatividades y experimentos cada semana." },
  { icon: Target, title: "Performance real", desc: "Optimizamos por ventas, leads y LTV — no por likes ni impresiones." },
  { icon: ShieldCheck, title: "Transparencia total", desc: "Tú eres dueño de las cuentas, los datos y los resultados. Siempre." },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Por qué nosotros</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Socios estratégicos, <span className="text-gradient">no proveedores.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Trabajamos con un grupo reducido de marcas para garantizar atención dedicada,
            pensamiento estratégico y un equipo senior implicado en cada decisión.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Meta Business Partner", "Google Partner", "HubSpot Certified", "TikTok Ads"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
