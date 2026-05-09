"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className={cn(
        "group border-b border-border transition-all duration-300",
        isOpen ? "bg-white shadow-sm rounded-xl border-transparent mb-4" : "hover:bg-slate-50/50"
      )}
    >
      <button
        className="flex justify-between items-center w-full text-left py-5 px-4 font-bold text-lg text-primary transition-colors focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={cn(
          "transition-colors duration-300",
          isOpen ? "text-secondary" : "group-hover:text-secondary"
        )}>
          {question}
        </span>
        <div className={cn(
          "shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-secondary text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <MotionDiv 
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="pb-6 px-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          {answer}
        </div>
      </MotionDiv>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Combien de temps faut-il pour remplacer un pare-brise ?",
      answer: "Le remplacement d'un pare-brise prend généralement entre 1h30 et 2h. Nous recommandons de ne pas utiliser le véhicule pendant une heure supplémentaire après l'intervention pour assurer une bonne prise de la colle haute performance que nous utilisons."
    },
    {
      question: "Puis-je bénéficier de la franchise offerte ?",
      answer: "Oui ! Chez Zen Glass, nous offrons votre franchise jusqu'à 200€. Si vous n'avez pas de franchise, nous vous offrons un cadeau ou un chèque de valeur équivalente. C'est notre façon de vous remercier de votre confiance."
    },
    {
      question: "Intervenez-vous à domicile ou sur mon lieu de travail ?",
      answer: "Absolument ! Zen Glass est un service 100% mobile. Nos camions ateliers se déplacent gratuitement partout en Île-de-France, que ce soit à votre domicile, sur votre lieu de travail ou même sur votre lieu de vacances."
    },
    {
      question: "Quelles sont les démarches avec mon assurance ?",
      answer: "Nous gérons tout ! De la déclaration du sinistre à la facturation, nous nous occupons de toutes les formalités administratives avec votre assureur. Vous n'avez aucune avance de frais à faire, nous sommes payés directement par l'assurance."
    },
    {
      question: "Utilisez-vous des vitrages de qualité ?",
      answer: "Oui, sans exception. Tous nos vitrages sont certifiés conformes aux normes européennes (43R) et proviennent des plus grands fabricants mondiaux (Saint-Gobain, Pilkington, AGC) qui fournissent également les constructeurs automobiles."
    },
    {
      question: "La garantie est-elle incluse ?",
      answer: "Oui, toutes nos interventions sont garanties à vie contre les fuites et les défauts de pose. De plus, nos vitrages bénéficient de la garantie constructeur. Vous roulez l'esprit tranquille avec Zen Glass."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
                <MessageCircle size={12} /> Aide & Support
              </div>
              <MotionH2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary leading-[0.9]"
              >
                Questions <br />
                <span className="text-secondary italic">Fréquentes</span>
              </MotionH2>
              <MotionP 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-md"
              >
                Tout ce que vous devez savoir sur nos services de vitrage automobile. Vous ne trouvez pas votre réponse ? Contactez-nous directement.
              </MotionP>
            </div>

            {/* CTA Box */}
            <div className="bg-primary text-white p-8 rounded-2xl space-y-6 shadow-xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors"></div>
              
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight">Encore un doute ?</h3>
                <p className="text-slate-400 text-sm">Nos experts sont disponibles pour répondre à toutes vos questions spécifiques.</p>
              </div>

              <div className="flex justify-center flex-col sm:flex-row gap-4 relative z-10">
                <a 
                  href="tel:0666638158" 
                  className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-100 transition-all"
                >
                  <Phone size={14} className="text-secondary" /> 06 66 63 81 58
                </a>
                
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              {faqData.map((item, index) => (
                <FAQItem 
                  key={index} 
                  question={item.question} 
                  answer={item.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* No Insurance Highlight Section */}
            {/* <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-dashed border-slate-200 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0 w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-primary">
                  <span className="text-2xl font-black">€</span>
                </div>
                
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-black uppercase tracking-tight text-primary">
                    Remplacement <span className="text-secondary italic">Sans Assurance ?</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                    Vous n’avez pas l’option bris de glace ? Pas d'inquiétude. Chez <span className="font-bold text-primary">Zen Glass</span>, nous intervenons même sans prise en charge. Profitez d'un tarif transparent et maîtrisé.
                  </p>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  <a 
                    href="https://wa.me/33666638158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#20ba59] transition-all shadow-lg shadow-green-500/20 group/wa"
                  >
                    Devis WhatsApp Gratuit
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </MotionDiv> */}
          </div>

        </div>
      </div>
    </section>
  );
}
