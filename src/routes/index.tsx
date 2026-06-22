import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulso · Agencia de Marketing Digital — Ads, SEO e IA" },
      {
        name: "description",
        content:
          "Agencia de marketing digital: Meta Ads, Google Ads, community manager, SEO/SEM y contenido con IA. Estrategias que convierten clics en clientes.",
      },
      { property: "og:title", content: "Pulso · Agencia de Marketing Digital" },
      {
        property: "og:description",
        content:
          "Publicidad en redes, SEO, community manager y contenido con IA para marcas que quieren crecer en serio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pulso Agencia Digital",
            description:
              "Agencia de marketing digital especializada en Meta Ads, Google Ads, community manager, SEO/SEM y contenido con IA.",
            areaServed: ["ES", "CO", "MX"],
            sameAs: [],
          }),
        }}
      />
    </div>
  );
}
