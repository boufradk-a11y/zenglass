import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { targetCities } from "@/app/sitemap";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-8">
              <div className="relative w-56 h-14">
                <Image 
                  src="/zenglass_logo_fidele_name.svg" 
                  alt="Zen Glass Logo" 
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/40 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              Spécialiste du vitrage automobile. Nous intervenons partout en France pour assurer votre visibilité et votre sécurité sur la route.
            </p>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-secondary">Prestations</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
              <li><Link href="#services" className="hover:text-white transition-colors">Réparation d'Impact</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Remplacement Pare-Brise</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Lunette Arrière</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Vitres Latérales</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-secondary">Zones d'Intervention</h5>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-bold uppercase tracking-tight text-white/60">
              {targetCities.slice(0, 8).map((city) => ( // Limiter à 8 villes pour la clarté
                <li key={city}>
                  <Link href={`/ville/${city}`} className="hover:text-white transition-colors">
                    {city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                </li>
              ))}
              {targetCities.length > 8 && (
                <li><Link href="/zones-intervention" className="hover:text-white transition-colors">...</Link></li>
              )}
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-secondary">Nous Contacter</h5>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-secondary" />
                <span className="text-xl font-black">{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <MapPin size={20} />
                <span className="text-xs font-bold uppercase">Partout en France</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Clock size={20} />
                <span className="text-xs font-bold uppercase">9h-19h - 6j/7 (dimanche fermé)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Zen Glass. Expertise & Qualité.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
