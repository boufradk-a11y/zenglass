"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/ui/motion";
import { MapPin, ShieldCheck, Zap, Truck, Clock, CheckCircle2 } from "lucide-react";

interface CityExpertiseProps {
  cityName: string;
}

export function CityExpertise({ cityName }: CityExpertiseProps) {
  return (
    <>
      {/* Section Expertise Locale - Design Premium */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Décoration de fond subtile */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-[-10deg] translate-x-1/2" />
        
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-6">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Expertise de proximité</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-primary uppercase leading-[1.1] mb-8">
                  Zen Glass, votre <br />
                  <span className="text-secondary italic">partenaire confiance</span> <br />
                  à <span className="text-accent italic">{cityName}</span>
                </h3>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    À <span className="font-bold text-primary">{cityName}</span>, Zen Glass redéfinit le service de vitrage automobile. Plus besoin de perdre une demi-journée au garage : nos unités mobiles sont équipées des dernières technologies pour intervenir directement là où vous êtes.
                  </p>
                  <p>
                    Que ce soit pour un simple impact ou un remplacement complet, nos techniciens certifiés garantissent une pose parfaite, conforme aux normes constructeurs, tout en gérant l&apos;intégralité de votre dossier d&apos;assurance pour vous.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-secondary shrink-0 border border-slate-100">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-tight">Réactivité 24/48h</h4>
                      <p className="text-xs text-slate-500">Intervention rapide partout à {cityName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-accent shrink-0 border border-slate-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-tight">0€ de Reste à charge</h4>
                      <p className="text-xs text-slate-500">Franchise offerte</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
            
            <div className="flex-1 w-full">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                  <Image 
                    src="/camion.webp" 
                    alt={`Service de vitrage automobile mobile à ${cityName}`} 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                      <p className="text-white text-sm font-medium italic mb-2">
                        &quot;Intervention rapide et impeccable à mon domicile de {cityName}. Je recommande vivement Zen Glass !&quot;
                      </p>
                      <p className="text-accent text-[10px] font-black uppercase tracking-widest">— Client Zen Glass</p>
                    </div>
                  </div>
                </div>
                {/* Éléments de design flottants */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Section Zones de Service - Grid Moderne */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-4xl font-black text-primary uppercase mb-4">
                Une couverture totale de <span className="text-secondary italic">{cityName}</span>
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.2em]">
                Nos techniciens mobiles sont déjà près de chez vous
              </p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Centre-Ville", 
                desc: "Intervention agile en hyper-centre et zones d'accès difficile.",
                icon: <MapPin size={24} />,
                color: "text-secondary"
              },
              { 
                title: "Zones d'Activités", 
                desc: "Remplacement sur votre lieu de travail sans interruption.",
                icon: <Zap size={24} />,
                color: "text-accent"
              },
              { 
                title: "Quartiers", 
                desc: "Service à domicile dans tous les secteurs résidentiels.",
                icon: <ShieldCheck size={24} />,
                color: "text-primary"
              },
              { 
                title: "Agglomération", 
                desc: "Déplacement gratuit dans toute la périphérie de la ville.",
                icon: <Truck size={24} />,
                color: "text-secondary"
              }
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
