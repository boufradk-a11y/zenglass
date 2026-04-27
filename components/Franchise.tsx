"use client";

import { Gift, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Franchise() {
  return (
    <section id="franchise" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border shadow-pro flex flex-col lg:flex-row overflow-hidden"
        >
          <div className="p-10 lg:p-20 lg:w-3/5">
            <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4">Avantage Financier</h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight">
              Franchise Offerte <br />
              <span className="text-secondary italic">jusqu'à 150€</span>
            </h3>
            
            <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl">
              Votre assurance vous demande une franchise ? **Zen Glass la prend en charge.** Si vous n'avez pas de franchise, nous vous offrons un **cadeau de bienvenue** (Carte cadeau 150€).
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Valable pour tout remplacement de pare-brise",
                "Cumulable avec le service à domicile gratuit",
                "Gestion directe avec toutes les assurances",
                "Zéro avance de frais de votre côté"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckSquare className="text-secondary" size={20} />
                  <span className="text-sm font-bold uppercase text-primary tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary p-8 text-white inline-block">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Offre Spéciale</p>
              <p className="text-2xl font-black uppercase tracking-tighter">Votre sécurité au meilleur prix</p>
            </div>
          </div>

          <div className="lg:w-2/5 bg-primary p-12 lg:p-20 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 flex flex-col items-center"
            >
              <Gift size={100} className="text-secondary mb-10" />
              <h4 className="text-3xl font-black uppercase mb-6 tracking-tighter leading-none">
                Vous n'avez <br /> rien à payer.
              </h4>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                Nous sommes agréés par toutes les compagnies d'assurance (AXA, Allianz, MAIF, MACIF, etc.). Le règlement se fait directement par votre assureur.
              </p>
              <a href="/rendez-vous" className="w-full bg-white text-primary py-5 text-sm font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Vérifier mon éligibilité
              </a>
            </motion.div>
            
            {/* Background pattern for visual interest */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-white rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
