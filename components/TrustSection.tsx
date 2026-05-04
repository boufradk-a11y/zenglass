import Image from "next/image";
import { Key, FileText, Clock, ShieldCheck } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

export function TrustSection() {
  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-accent px-4 py-1 mb-6 rounded-xl">
              <span className="text-xs font-black uppercase tracking-widest text-white">Sérénité Totale</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none">
              Solution <br />
              <span className="text-secondary italic">Clés en Main</span>
            </h3>
            
            <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-xl">
              Nous prenons en charge l'intégralité de votre dossier bris de glace. De la déclaration d'assurance au nettoyage final de votre véhicule, vous n'avez rien à faire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-4">
                <FileText className="text-accent" size={32} />
                <h4 className="text-lg font-bold uppercase tracking-tight ">Service de qualité</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nous garantissons un remplacement rapide et fiable avec 0€ à avancer et sans paperasse.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Clock className="text-accent" size={32} />
                <h4 className="text-lg font-bold uppercase tracking-tight ">techniciens experts</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nos techniciens qualifiés prennent en charge tous les types de véhicules et toutes les marques avec un haut niveau de professionnalisme.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FileText className="text-accent" size={32} />
                <h4 className="text-lg font-bold uppercase tracking-tight  ">Respect de la tarification constructeur                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                Vitrages Conformes aux normes européennes 43-R
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Clock className="text-accent" size={32} />
                <h4 className="text-lg font-bold uppercase tracking-tight  ">Équipements Modernes                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nous utilisons des équipements de pointe pour garantir une intervention rapide et efficace.
                </p>
              </div>
            </div>          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative group overflow-hidden border border-white/10 w-full max-w-md aspect-square rounded-xl">
              <Image 
                src="/cle_en_main.webp"
                alt="Service Clés en Main"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Voile noir pour plus de sobriété */}
              <div className="absolute inset-0 bg-slate-950/60 transition-colors group-hover:bg-slate-950/50" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center text-center items-center">
                <p className="text-2xl font-black uppercase tracking-tighter mb-4">On vous rend les clés</p>
                <div className="h-1 w-20 bg-secondary mb-6"></div>
                <p className="p-2 bg-white/60 rounded-lg text-sm text-secondary font-bold leading-relaxed italic max-w-xs">
                  "Notre mission : vous simplifier la vie. On vient, on répare, vous êtes <span className="text-secondary font-bold italic">zen,</span> on repart."
                </p>
                <div className="mt-8 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck size={16} /> Expertise Certifiée
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
    </section>
  );
}
