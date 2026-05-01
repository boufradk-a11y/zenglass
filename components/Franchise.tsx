import Image from "next/image";
import { CheckCircle2, Gift, ShieldCheck, Zap } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";

export function Franchise() {
  return (
    <section id="franchise" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="relative">
          {/* Main Card */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[600px]"
          >
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-8 self-start border border-accent/20">
                <Zap size={16} className="fill-current" />
                <span className="text-xs font-black uppercase tracking-wider">Offre Exclusive</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                Franchise <br />
                <span className="text-secondary italic">Offerte</span>
              </h3>
              
              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
                On s&apos;occupe de tout. Si vous avez une franchise, <span className="text-white font-bold">{siteConfig.name} la prend en charge jusqu&apos;à {siteConfig.offers.franchise}€</span>. 
                Pas de franchise ? Repartez avec une <span className="text-secondary font-bold">Carte Cadeau de {siteConfig.offers.franchise}€</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <ShieldCheck className="text-secondary" />, text: "Agréé toutes assurances" },
                  { icon: <CheckCircle2 className="text-secondary" />, text: "0€ Avance de frais" },
                  { icon: <Gift className="text-secondary" />, text: "Cadeau si 0€ franchise" },
                  { icon: <Zap className="text-secondary" />, text: "Gestion 100% Zen" },
                ].map((item, i) => (
                  <MotionDiv 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-white/5 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-white/90 uppercase tracking-tight">{item.text}</span>
                  </MotionDiv>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={siteConfig.links.booking} 
                  className="bg-secondary text-white px-8 py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-center "
                >
                  J&apos;en profite maintenant
                </a>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-full bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#0056b3_0%,transparent_70%)] opacity-20" />
              
              <MotionDiv
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-8"
              >
                <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-lg">
                  <Image 
                    src="/camion.webp"
                    alt={`${siteConfig.name} Mobile Service`}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </MotionDiv>

              {/* Float Badge */}
              <MotionDiv
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-10 lg:left-0 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-border"
              >
                <p className="text-primary font-black text-4xl tracking-tighter leading-none mb-1">{siteConfig.offers.franchise}€</p>
                <p className="text-muted text-[10px] font-bold uppercase tracking-widest">Offerts ou remboursés</p>
              </MotionDiv>

              {/* Background Text */}
              <div className="absolute -bottom-10 -right-10 select-none pointer-events-none">
                <p className="text-[12rem] font-black text-white/[0.03] uppercase leading-none tracking-tighter">ZEN</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
