"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Real Photo Background */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/par-brise.jpeg"
          alt="Expert pare-brise en intervention"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl py-10 md:py-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-l-4 border-secondary pl-4 md:pl-6 mb-6 md:mb-8"
          >
            <h2 className="text-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2">
              Spécialiste du vitrage automobile
            </h2>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:leading-tight uppercase">
              Remplacement de <br />
              <span className="text-secondary">Pare-Brise</span> <br className="hidden md:block" />
              et Réparation
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-2xl text-white/90 max-w-2xl mb-8 md:mb-12 font-medium leading-relaxed"
          >
            Profitez de votre <span className="text-white font-black underline decoration-secondary underline-offset-4">franchise offerte</span> ou d'un bonus de <span className="text-white font-black">150€</span>. <br className="hidden md:block" /> Intervention rapide à domicile ou en centre.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16"
          >
            <Link 
              href="/rendez-vous" 
              className="bg-secondary text-white px-6 md:px-10 py-4 md:py-5 rounded-none text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all text-center"
            >
              Prendre Rendez-vous
            </Link>
            <a 
              href="tel:0123456789" 
              className="bg-white text-primary px-6 md:px-10 py-4 md:py-5 rounded-none text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-all text-center flex items-center justify-center gap-3"
            >
              <Phone size={18} />
              01 23 45 67 89
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-8 md:pt-10"
          >
            <div className="flex items-center gap-3 md:gap-4 text-white">
              <CheckCircle className="text-secondary shrink-0" size={20} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">0€ Avance de frais</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-white">
              <CheckCircle className="text-secondary shrink-0" size={20} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Agréé Assurances</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-white">
              <CheckCircle className="text-secondary shrink-0" size={20} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Garantie à vie</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
