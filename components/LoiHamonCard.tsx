"use client";

import { useState } from "react";
import Image from "next/image";
import { Scale, ArrowRight } from "lucide-react";
import { MotionDiv } from "./ui/motion";
import { Modal } from "./ui/modal";

export function LoiHamonCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-50 p-8 border-l-4 border-accent rounded-xl flex flex-col h-full relative"
      >
        {/* Badge Notification Style */}
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
          <Image 
            src="/loi.webp"
            alt="Loi Hamon"
            fill
            className="object-cover"
          />
        </div>

        <Scale className="text-accent mb-4" size={28} />

        <h5 className="font-black uppercase text-lg mb-2 tracking-tight">Loi Hamon</h5>
        <p className="text-muted text-xs leading-relaxed mb-6">
          Libre choix du réparateur : vous n&apos;avez aucune obligation de suivre le choix de votre assureur.
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent hover:text-primary transition-colors group"
        >
          En savoir plus
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </MotionDiv>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Libre choix du réparateur"
      >
        <div className="space-y-4">
          <p className="font-bold text-primary text-lg">
            Article L.211-5-1 du Code des assurances
          </p>
          <p>
            Grâce à la <span className="text-accent font-bold">Loi Hamon</span>, vous êtes totalement libre de choisir le réparateur de votre pare-brise, sans être obligé de suivre celui proposé par votre assurance.
          </p>
          <p>
            Vous pouvez faire appel au professionnel de votre choix, en toute simplicité, et profiter d’un service expert en toute sérénité. Votre assureur ne peut pas vous imposer un prestataire agréé, et vos garanties restent identiques.
          </p>
          <div className="p-4 bg-slate-50 border-l-4 border-accent italic text-sm">
            "Le contrat d'assurance doit mentionner la faculté pour l'assuré, en cas de dommage garanti par le contrat, de choisir le réparateur professionnel auquel il souhaite recourir."
          </div>
        </div>
      </Modal>
    </>
  );
}
