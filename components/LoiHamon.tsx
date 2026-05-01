import Image from "next/image";
import { Scale, CheckCircle2 } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

export function LoiHamon() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-xl mb-6">
              <Scale size={18} />
              <span className="text-xs font-black uppercase tracking-widest">Loi Hamon</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight tracking-tighter mb-8">
              Libre choix du <br />
              <span className="text-accent italic">réparateur</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted leading-relaxed font-medium">
              <p>
                Grâce à la <span className="text-primary font-bold">Loi Hamon</span> (article L.211-5-1 du Code des assurances), vous êtes totalement libre de choisir le réparateur de votre pare-brise.
              </p>
              <p>
                Vous n'êtes <span className="text-accent font-black">absolument pas obligé</span> de suivre celui proposé par votre assurance. Vous pouvez faire appel au professionnel de votre choix, en toute simplicité, et profiter d’un service expert en toute sérénité.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-tight">Droit garanti</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-tight">Zéro contrainte</span>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/loi.webp" 
                alt="Certification Loi Hamon" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border hidden md:block">
              <p className="text-accent font-black text-2xl tracking-tighter leading-none mb-1">ARTICLE</p>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">L.211-5-1</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
