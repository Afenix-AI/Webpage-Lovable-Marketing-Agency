import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contacto" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 md:p-16 shadow-glow">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center text-primary-foreground">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Hablemos de tu próxima campaña.
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl">
                Reserva un diagnóstico gratuito de 30 minutos. Saldrás con un plan de acción claro,
                aunque no trabajemos juntos.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <a href="mailto:hola@pulsoagencia.com">
                  Reservar diagnóstico <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a href="https://wa.me/" className="text-primary-foreground/85 text-sm hover:text-primary-foreground">
                o escríbenos por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
