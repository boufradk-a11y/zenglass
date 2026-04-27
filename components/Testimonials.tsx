"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";

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
    content: "Remplacement parfait sur ma Clio. Le système de caméra (ADAS) a bien été recalibré, tout fonctionne parfaitement.",
    rating: 5,
    color: "bg-slate-100"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-padding bg-white border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Avis Clients</h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary uppercase leading-none tracking-tighter">
              Ils nous ont <br />
              <span className="text-secondary italic">fait confiance</span>
            </h3>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Avis suivant"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-4">
                <div className="bg-slate-50 p-8 border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#0056b3" className="text-secondary" />
                      ))}
                    </div>
                    <p className="text-primary font-medium leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-primary/60 shrink-0`}>
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-black uppercase text-xs tracking-widest text-primary leading-none">{testimonial.name}</p>
                      <p className="text-[10px] text-muted font-bold uppercase mt-1 leading-none">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
