import Image from "next/image";
import { ArrowRight, Wallet, AlertCircle } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";

export function NoInsurance() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-custom">
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center"
        >
          {/* Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
                <Wallet size={12} /> Solution Économique
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-primary uppercase leading-[0.9] tracking-tighter">
                Remplacement de pare-brise <br />
                <span className="text-secondary italic">Sans Assurance ?</span>
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Vous n’avez pas l’option <span className="text-primary font-bold">bris de glace</span> dans votre assurance ? 
                Pas d'inquiétude. Chez <span className="font-bold text-primary">Zen Glass</span>, nous remplaçons votre pare-brise même sans prise en charge.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-2xl space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs">
                <AlertCircle size={14} className="text-secondary" /> Un budget maîtrisé
              </div>
              <p className="text-sm text-muted-foreground">
                Obtenez un devis gratuit et transparent, pour une gestion maîtrisée de votre budget sans mauvaises surprises.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/33666638158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-[#20ba59] transition-all shadow-xl shadow-green-500/20 group"
              >
                Devis WhatsApp Gratuit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image/Visual - Keeping it clean and focused on budget/transparency */}
          
        </MotionDiv>
      </div>
    </section>
  );
}
