"use client";

import Image from "next/image";
import { Hammer, Car, Zap, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4">Expertise Technique</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary uppercase leading-none">
            Nos prestations <br />
            <span className="text-secondary italic">sur tous véhicules</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border p-0 flex flex-col md:flex-row"
          >
            <div className="relative w-full md:w-1/2 min-h-[300px]">
              <Image 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
                alt="Réparation d'impact"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <Hammer className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase mb-4">Réparation d'Impact</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Un éclat sur votre pare-brise ? Nous réparons l'impact en 30 minutes avant qu'il ne fissure, sans frais pour vous.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                En savoir plus <ArrowRight size={14} className="text-secondary" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border p-0 flex flex-col md:flex-row"
          >
            <div className="relative w-full md:w-1/2 min-h-[300px]">
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                alt="Remplacement pare-brise"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <Car className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase mb-4">Remplacement</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Pose de vitrage certifié d'origine. Nous intervenons sur toutes les marques et tous les modèles de véhicules.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                En savoir plus <ArrowRight size={14} className="text-secondary" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Calibrage ADAS", text: "Recalibrage des systèmes de sécurité (caméras, capteurs) après chaque remplacement de pare-brise." },
            { icon: Truck, title: "Service Mobile", text: "Déplacement gratuit à domicile ou sur votre lieu de travail. Pas besoin de vous déplacer." },
            { type: "contact", title: "Une urgence ?", text: "Intervention sous 24h", phone: "01 23 45 67 89" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={item.type === "contact" ? "bg-primary text-white p-8" : "bg-slate-50 p-8 border-l-4 border-secondary"}
            >
              {item.icon && <item.icon className="text-secondary mb-4" size={28} />}
              {item.phone ? (
                <>
                  <h5 className="font-black uppercase text-xl mb-4 leading-tight tracking-tighter">
                    {item.title} <br />
                    {item.phone}
                  </h5>
                  <p className="text-white/60 text-xs uppercase tracking-widest font-bold">{item.text}</p>
                </>
              ) : (
                <>
                  <h5 className="font-bold uppercase text-sm mb-2">{item.title}</h5>
                  <p className="text-muted text-xs leading-relaxed">{item.text}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
