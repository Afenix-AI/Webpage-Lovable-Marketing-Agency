import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote: "Triplicamos las ventas online en 6 meses. Su trabajo en Meta y Google Ads cambió por completo nuestro negocio.",
    name: "Lucía Hernández",
    role: "CEO, Casa Botánica",
  },
  {
    quote: "Un equipo realmente estratégico. Por fin entendemos qué genera ROI y qué no. Reportes claros y resultados.",
    name: "Andrés Molina",
    role: "Director Comercial, Nordia",
  },
  {
    quote: "El contenido con IA nos permitió publicar 4x más sin perder calidad de marca. Espectacular.",
    name: "Paula Estévez",
    role: "Marketing Lead, Tinta Studio",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Marcas que <span className="text-gradient">crecen con nosotros</span>.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
