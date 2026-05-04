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
            {/* Grid of Service Cards */}
            <div className="relative w-full min-h-[360px] flex items-center justify-center p-6 bg-white rounded-xl overflow-hidden">
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {/* Card 1: Paperasse */}
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-accent/10 p-3 rounded-xl mb-3 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Handshake size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">0 Paperasse</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">0€ à avancer</p>
                </div>

                {/* Card 2: Franchise */}
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-secondary/10 p-3 rounded-xl mb-3 text-secondary transition-transform duration-300 group-hover:scale-110">
                    <Gift size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">Franchise</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">jusqu'à {siteConfig.offers.franchise}€ offerts</p>
                </div>

                {/* Card 3: Compatible */}
                <div className="group relative overflow-hidden bg-slate-50 border border-accent/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-accent/40 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-accent/10 p-3 rounded-xl mb-3 text-accent transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">Compatible</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">Toutes assurances</p>
                </div>

                {/* Card 4: Tous véhicules */}
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-primary/10 p-3 rounded-xl mb-3 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Car size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">Tous véhicules</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">Toutes marques</p>
                </div>

                {/* Card 5: Tarification Constructeur */}
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-secondary/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-secondary/10 p-3 rounded-xl mb-3 text-secondary transition-transform duration-300 group-hover:scale-110">
                    <Hammer size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">Prix Constructeur</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">Respect de la tarification</p>
                </div>

                {/* Card 6: Normes Européennes */}
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-accent/10 p-3 rounded-xl mb-3 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Zap size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">Normes EU 43-R</h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase">Vitrages certifiés</p>
                </div>
              </div>
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
                src="/remplacement.png"
                alt="Remplacement pare-brise"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
              <Car className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase mb-4">remplacement de vitrage automobile</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
              Zen Glass est spécialisé dans le remplacement de pare-brises et de vitrages automobiles. Engagés à offrir des services de qualité et à garantir la satisfaction de nos clients, nous assurons des prestations professionnelles, conformes aux normes du secteur. Nous proposons également un service à domicile et une assistance pour les démarches d’assurance.
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
