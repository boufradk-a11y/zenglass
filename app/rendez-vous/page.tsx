import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ShieldCheck, ArrowLeft, Clock, MapPin, CheckSquare, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24 pb-12 container-custom">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-bold text-[10px] uppercase tracking-widest">
          <ArrowLeft size={14} />
          Retour
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border bg-white shadow-pro">
          {/* Form Side */}
          <div className="lg:col-span-2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border">
            <div className="mb-8">
              <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-2">Réservation Express</h2>
              <h1 className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tighter uppercase leading-none">Prendre RDV <span className="text-secondary italic">sous 24 heures</span></h1>
              <p className="text-xs text-muted font-medium">Réponse immédiate garantie.</p>
            </div>
            <ContactForm />
          </div>

          {/* Info Side - Re-designed to be sober and professional */}
          <div className="bg-white p-6 md:p-10 flex flex-col border-l border-border">
            <div className="mb-8">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-secondary mb-2">Nos Engagements</h3>
              <div className="h-1 w-12 bg-secondary"></div>
            </div>
            
            <div className="space-y-8 mb-12 flex-grow">
              <div className="flex gap-4 items-start">
                <CheckSquare className="text-secondary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-black text-[11px] uppercase tracking-tight text-primary">Franchise Offerte</p>
                  <p className="text-[10px] text-muted font-medium mt-1 leading-relaxed">Prise en charge immédiate jusqu'à 150€ sur votre sinistre.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckSquare className="text-secondary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-black text-[11px] uppercase tracking-tight text-primary">Agréé Assurances</p>
                  <p className="text-[10px] text-muted font-medium mt-1 leading-relaxed">Nous traitons directement avec AXA, Allianz, MAIF, MACIF...</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckSquare className="text-secondary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-black text-[11px] uppercase tracking-tight text-primary">Garantie à vie</p>
                  <p className="text-[10px] text-muted font-medium mt-1 leading-relaxed">Toutes nos poses de vitrage sont garanties à vie sur l'étanchéité.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-border">
              <p className="text-[9px] font-black uppercase tracking-widest text-muted mb-4">Besoin d'assistance ?</p>
              <a href={`tel:${siteConfig.phoneFull}`} className="flex items-center gap-3 text-primary hover:text-secondary transition-colors group">
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg font-black tracking-tighter">{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
