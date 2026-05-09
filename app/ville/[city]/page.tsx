import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Franchise } from "@/components/Franchise";
import { TrustSection } from "@/components/TrustSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CityBandeau } from "@/components/CityBandeau";
import { CityExpertise } from "@/components/CityExpertise";

// On importe la liste des villes depuis le sitemap pour rester cohérent
import { targetCities } from "../../sitemap";

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
      <Hero cityName={cityName} />
      <CityBandeau cityName={cityName} />
      
      {/* Nouveau composant extrait */}
      
      <Services />
      <Franchise />

      <TrustSection />
      <CityExpertise cityName={cityName} />

      <Testimonials />
      <Footer />
      
      {/* Bouton WhatsApp Flottant */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <a
          href="https://wa.me/33666638158"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
          aria-label="Contact WhatsApp Zen Glass"
        >
          <Image 
            src="/whatsapp.svg" 
            alt="WhatsApp" 
            width={32} 
            height={32} 
            className="group-hover:rotate-12 transition-transform"
          />
        </a>
      </div>
    </main>
  );
}
