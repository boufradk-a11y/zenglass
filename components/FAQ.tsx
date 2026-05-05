"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-primary hover:text-secondary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <Minus size={20} className="text-secondary" /> : <Plus size={20} className="text-accent" />}
      </button>
      {isOpen && (
        <MotionDiv 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-muted-foreground text-base pr-8"
        >
          {answer}
        </MotionDiv>
      )}
    </div>
  );
};

export function FAQ() {
  // Placeholder FAQ content
  const faqData = [
    {
      question: "Combien de temps faut-il pour remplacer un pare-brise ?",
      answer: "Le remplacement d'un pare-brise prend généralement entre 1h30 et 2h. Nous recommandons de ne pas utiliser le véhicule pendant une heure supplémentaire après l'intervention pour assurer une bonne prise de la colle."
    },
    {
      question: "Puis-je bénéficier de la franchise offerte ?",
      answer: "Oui, la franchise est offerte sous certaines conditions. Contactez-nous pour vérifier votre éligibilité et obtenir une offre personnalisée. Nous offrons jusqu'à 200€ sur votre franchise."
    },
    {
      question: "Intervenez-vous à domicile ou sur mon lieu de travail ?",
      answer: "Absolument ! Zen Glass est un service mobile. Nous nous déplaçons gratuitement là où vous le souhaitez en Île-de-France pour votre confort et votre gain de temps."
    },
    {
      question: "Quelles sont les démarches avec mon assurance ?",
      answer: "Nous nous occupons de toutes les formalités administratives avec votre assureur. Vous n'avez rien à avancer, nous gérons tout de A à Z pour une prise en charge rapide et simplifiée."
    },
    {
      question: "Utilisez-vous des vitrages de qualité ?",
      answer: "Oui, tous nos vitrages sont conformes aux normes européennes 43R et proviennent des mêmes fabricants que ceux utilisés par les constructeurs automobiles, garantissant une qualité optimale."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4">
            Questions <span className="text-secondary italic">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus posées concernant nos services de remplacement et réparation de pare-brise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
