import React from "react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const testimonials = [
  {
    name: "Jean-Pierre M.",
    date: "Il y a 2 semaines",
    content: "Service rapide et efficace. Le technicien est venu sur mon lieu de travail, ce qui m'a évité de poser une demi-journée. Très pro.",
    rating: 5,
    color: "bg-slate-200"
  },
  {
    name: "Sandrine L.",
    date: "Il y a 1 mois",
    content: "Pare-brise changé le lendemain de mon appel. La franchise a bien été prise en charge comme annoncé, je n'ai rien eu à payer.",
    rating: 5,
    color: "bg-blue-100"
  },
  {
    name: "Thomas D.",
    date: "Il y a 3 jours",
    content: "Bon travail, propre et ponctuel. Ils se sont occupés de tout avec mon assurance, c'est vraiment un souci en moins.",
    rating: 5,
    color: "bg-slate-300"
  },
  {
    name: "Marc A.",
    date: "Il y a 1 mois",
    content: "Réparation d'un impact en 30 minutes à mon domicile. Équipe sérieuse et sympathique. Je recommande sans hésiter.",
    rating: 5,
    color: "bg-blue-200"
  },
  {
    name: "Julie V.",
    date: "Il y a 2 mois",
    content: "Remplacement parfait sur ma Clio.",
    rating: 5,
    color: "bg-slate-100"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">Avis Clients</h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary uppercase leading-none tracking-tighter">
              Ils nous ont <br />
              <span className="text-secondary italic">fait confiance</span>
            </h3>
          </div>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
