import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Franchise } from "@/components/Franchise";
import { TrustSection } from "@/components/TrustSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { notFound } from "next/navigation";

// On importe la liste des villes depuis le sitemap pour rester cohérent
import { targetCities } from "../sitemap";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `Remplacement Pare-Brise à ${cityName} | Franchise Offerte`,
    description: `Besoin d'un remplacement de pare-brise à ${cityName} ? Zen Glass intervient à votre domicile. Profitez de votre franchise offerte et jusqu'à 200€ de cadeau !`,
    openGraph: {
      title: `Zen Glass - Pare-Brise à ${cityName}`,
      description: `Service de vitrage automobile à ${cityName}. 0€ d'avance de frais et intervention rapide.`,
    }
  };
}

export async function generateStaticParams() {
  return targetCities.map((city) => ({
    city: city,
  }));
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;

  if (!targetCities.includes(city)) {
    notFound();
  }

  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="relative min-h-screen">
      <Navbar />
      {/* On pourrait personnaliser le Hero avec le nom de la ville ici */}
      <Hero />
      <div className="bg-slate-50 py-12 border-y border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase mb-4">Votre expert vitrage à <span className="text-secondary">{cityName}</span></h2>
            <p className="text-slate-600 leading-relaxed">
              Habitants de {cityName}, Zen Glass se déplace directement chez vous ou sur votre lieu de travail pour toute intervention sur votre pare-brise. Plus besoin de vous déplacer en centre, nous gérons tout de A à Z, y compris les démarches avec votre assurance.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Franchise />
      <TrustSection />
      <Testimonials />
      <Footer />
      
      <div className="fixed bottom-0 right-0 z-[100] flex items-start justify-end p-4">
        <a
          href="https://wa.me/33768986150"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <Image 
            src="/whatsapp.svg" 
            alt="Contact WhatsApp Zen Glass" 
            width={32} 
            height={32} 
          />
        </a>
      </div>
    </main>
  );
}
