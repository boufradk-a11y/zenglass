import { targetCities } from "@/app/sitemap";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Zones d'Intervention | ${siteConfig.name}`,
  description: `Découvrez toutes les villes où Zen Glass intervient pour le remplacement et la réparation de pare-brise. Service à domicile en Île-de-France.`,
};

export default function ZonesInterventionPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20">
        <section className="section-padding bg-slate-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Nos <span className="text-secondary italic">Zones d'Intervention</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Zen Glass se déplace gratuitement à votre domicile ou sur votre lieu de travail dans de nombreuses villes pour vos besoins en remplacement ou réparation de pare-brise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {targetCities.sort().map((city) => ( // Sort cities alphabetically
                <Link
                  key={city}
                  href={`/ville/${city}`}
                  className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary"
                >
                  <MapPin className="text-secondary mb-3 transition-colors group-hover:text-primary" size={24} />
                  <span className="text-primary text-lg font-extrabold uppercase tracking-wide text-center group-hover:text-secondary transition-colors">
                    {city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground mt-1">
                    Intervention à domicile
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
