"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { MotionDiv } from "./ui/motion";
import { MapPin, Phone, Calendar, CheckCircle2 } from "lucide-react";

interface CityBandeauProps {
  cityName: string;
}

export function CityBandeau({ cityName }: CityBandeauProps) {
  return (
    <section className="bg-slate-50 py-12 border-b border-slate-100">
      <div className="container-custom">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full mb-4">
              <MapPin size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Proximité {cityName}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-primary uppercase leading-tight mb-3">
              Votre expert vitrage <span className="text-secondary italic">à {cityName}</span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Zen Glass se déplace directement chez vous ou sur votre lieu de travail à <span className="font-bold">{cityName}</span>. Nous gérons toutes les démarches pour un service 100% serein.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="hidden md:flex flex-col items-end mr-4 text-right">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Franchise Offerte</span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Intervention en 48h maximum</p>
            </div>
            
            <Link 
              href={siteConfig.links.booking}
              className="bg-secondary text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-secondary/20 flex items-center gap-2"
            >
              <Calendar size={14} />
              Prendre rendez-vous
            </Link>
            <a
              href={`tel:${siteConfig.phoneFull}`}
              className="bg-white text-primary border border-slate-200 px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
