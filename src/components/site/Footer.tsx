import { Sparkles, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Pulso<span className="text-primary">.</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Agencia de marketing digital especializada en performance, SEO y contenido con IA para marcas que quieren crecer en serio.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Red social" className="grid place-items-center h-9 w-9 rounded-lg border border-border bg-surface hover:border-primary/40 hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Servicios</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground">Meta Ads</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Google Ads</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Community Manager</a></li>
            <li><a href="#servicios" className="hover:text-foreground">SEO & SEM</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Contenido con IA</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Contacto</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hola@pulsoagencia.com" className="hover:text-foreground">hola@pulsoagencia.com</a></li>
            <li>Madrid · Bogotá · CDMX</li>
            <li><a href="#contacto" className="hover:text-foreground">Diagnóstico gratis</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Pulso Agencia Digital. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacidad</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
            <a href="#" className="hover:text-foreground">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
