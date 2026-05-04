"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";

interface Testimonial {
  name: string;
  date: string;
  content: string;
  rating: number;
  color: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="flex gap-2 mb-8 justify-end">
        <button 
          onClick={scrollPrev}
          className="w-12 h-12 border border-border flex items-center justify-center hover:bg-slate-50 transition-colors rounded-xl"
          aria-label="Avis précédent"
        >
          <ChevronLeft size={24} className="text-primary" />
        </button>
        <button 
          onClick={scrollNext}
          className="w-12 h-12 border border-border flex items-center justify-center hover:bg-slate-50 transition-colors rounded-xl"
          aria-label="Avis suivant"
        >
          <ChevronRight size={24} className="text-primary" />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-4">
              <div className="bg-slate-50 p-8 border border-border h-full flex flex-col justify-between rounded-xl">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#e11d48" className="text-accent" />
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
    </>
  );
}
