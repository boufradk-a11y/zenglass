import Image from "next/image";
import { Hammer, Car, Zap, Truck, Handshake, Gift, CheckCircle2 } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";
import { LoiHamonCard } from "./LoiHamonCard";

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-black text-primary uppercase leading-none">
            Soyez zen, <br />
            <span className="text-secondary italic">votre pare-brise, </span>
            <span className="text-accent italic">notre maîtrise !</span>
          </h3>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border p-0 flex flex-col md:flex-row rounded-xl overflow-hidden"
          >
            {/* Image with Icon Overlay */}
            <div className="relative w-full md:w-1/2 min-h-[320px] flex items-center justify-center p-6">
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                alt="Réparation d'impact"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/60" />
              
              <div className="relative z-10 grid grid-cols-2 gap-3 w-full">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-white/20">
                  <Handshake className="text-white mb-2" size={22} />
                  <p className="text-[9px] font-black uppercase tracking-tighter leading-none mb-1 text-white">0 Paperasse</p>
                  <p className="text-[7px] font-bold text-white/70 uppercase">0€ à avancer</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-white/20">
                  <Gift className="text-white mb-2" size={22} />
                  <p className="text-[9px] font-black uppercase tracking-tighter leading-none mb-1 text-white">Franchise</p>
                  <p className="text-[7px] font-bold text-white/70 uppercase">+{siteConfig.offers.franchise}€ offerts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-white/20 border-accent/30">
                  <CheckCircle2 className="text-accent mb-2" size={22} />
                  <p className="text-[9px] font-black uppercase tracking-tighter leading-none mb-1 text-white">Compatible</p>
                  <p className="text-[7px] font-bold text-white/70 uppercase">Toutes assurances</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-white/20">
                  <Car className="text-white mb-2" size={22} />
                  <p className="text-[9px] font-black uppercase tracking-tighter leading-none mb-1 text-white">Tous véhicules</p>
                  <p className="text-[7px] font-bold text-white/70 uppercase">Toutes marques</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <Hammer className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase mb-4">Réparation d'Impact</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Un éclat sur votre pare-brise ? Nous réparons l'impact en 30 minutes avant qu'il ne fissure, sans frais pour vous.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border p-0 flex flex-col md:flex-row rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-accent text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">Populaire</span>
            </div>
            <div className="relative w-full md:w-1/2 min-h-[300px]">
              <Image 
                src="/polo.webp"
                alt="Remplacement pare-brise"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <Car className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase mb-4">Remplacement</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Pose de vitrage certifié d'origine. Nous intervenons sur toutes les marques et tous les modèles de véhicules.
              </p>
            </div>
          </MotionDiv>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 p-8 border-l-4 border-secondary rounded-xl"
          >
            <Zap className="text-secondary mb-4" size={28} />
            <h5 className="font-black uppercase text-lg mb-2 tracking-tight">Rapide et efficace</h5>
            <p className="text-muted text-xs leading-relaxed">obtenez votre rendez-vous en moin de 24h.</p>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 p-8 border-l-4 border-secondary rounded-xl"
          >
            <Truck className="text-secondary mb-4" size={28} />
            <h5 className="font-black uppercase text-lg mb-2 tracking-tight">Service Mobile</h5>
            <p className="text-muted text-xs leading-relaxed">Déplacement gratuit à domicile ou sur votre lieu de travail. Pas besoin de vous déplacer.</p>
          </MotionDiv>

          <LoiHamonCard />
        </div>
      </div>
    </section>
  );
}
