import { motion } from "framer-motion";
import { Facebook, Search, Users, TrendingUp, Bot, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Facebook,
    title: "Meta Ads",
    desc: "Campañas en Facebook e Instagram con segmentación quirúrgica y creatividades testeadas.",
    bullets: ["Audiencias avanzadas", "A/B testing creativo", "Reportes semanales"],
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Search, Performance Max y YouTube optimizados para captar demanda con el mejor CPA.",
    bullets: ["Search & Shopping", "Performance Max", "Optimización de pujas"],
  },
  {
    icon: Users,
    title: "Community Manager",
    desc: "Gestión integral de redes con calendario editorial, respuesta y crecimiento orgánico.",
    bullets: ["Calendario mensual", "Atención a comunidad", "Reels & shorts"],
  },
  {
    icon: TrendingUp,
    title: "SEO & SEM",
    desc: "Posicionamiento orgánico y de pago para dominar las búsquedas que importan a tu negocio.",
    bullets: ["Auditoría técnica", "Link building", "Keyword research"],
  },
  {
    icon: Bot,
    title: "Contenido con IA",
    desc: "Producción a escala de copys, imágenes y vídeo con flujos de trabajo asistidos por IA.",
    bullets: ["Copys multicanal", "Banco de imágenes", "Guiones para vídeo"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Servicios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Todo lo que tu marca necesita,{" "}
            <span className="text-gradient">bajo un mismo techo.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Combinamos estrategia, creatividad y tecnología para que cada euro invertido trabaje al máximo.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-surface p-7 hover:border-primary/40 hover:bg-surface-elevated transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-2xl p-7 bg-gradient-primary text-primary-foreground flex flex-col justify-between shadow-glow"
          >
            <div>
              <h3 className="font-display text-2xl font-bold">¿Necesitas algo a medida?</h3>
              <p className="mt-2 text-primary-foreground/80">
                Cada negocio es único. Diseñamos planes combinando los servicios que realmente mueven la aguja.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 font-semibold border-b border-primary-foreground/40 self-start pb-1 hover:border-primary-foreground"
            >
              Habla con un estratega <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
