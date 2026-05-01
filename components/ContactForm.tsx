"use client";

import React, { useState } from "react";
import { Send, Phone, User, ClipboardList, MessageSquare, ArrowRight, ArrowLeft, Car, Mail, CheckCircle2 } from "lucide-react";
import { VehicleSelector } from "./VehicleSelector";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [glassType, setGlassType] = useState("front");
  
  // Navigation functions
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    { id: 1, label: "Vitrage" },
    { id: 2, label: "Véhicule" },
    { id: 3, label: "Contact" }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Bar - Compact */}
      <div className="flex items-center justify-between mb-8 relative px-4">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-px bg-secondary -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {steps.map((s) => (
          <div key={s.id} className="relative z-10 flex flex-col items-center">
            <div className={cn(
              "w-7 h-7 flex items-center justify-center font-black text-[10px] transition-all duration-300 border rounded-xl",
              step >= s.id 
                ? "bg-secondary border-secondary text-white shadow-md shadow-secondary/10" 
                : "bg-white border-slate-200 text-slate-400"
            )}>
              {step > s.id ? <CheckCircle2 size={14} /> : s.id}
            </div>
            <span className={cn(
              "text-[8px] font-black uppercase tracking-widest mt-2 transition-colors",
              step >= s.id ? "text-secondary" : "text-slate-400"
            )}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <form className="space-y-6">
        {/* STEP 1: GLASS SELECTION */}
        <div className={cn(step !== 1 && "hidden")}>
          <VehicleSelector onChange={(type, detail) => {
            setGlassType(type);
            // On pourrait stocker le détail ici si besoin
          }} />
          <div className="flex justify-end mt-4">
            <button 
              type="button" 
              onClick={nextStep}
              className="bg-secondary text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:bg-blue-700 transition-all rounded-xl"
            >
              Suivant <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* STEP 2: VEHICLE INFO */}
        <div className={cn(step !== 2 && "hidden")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-6 border border-border rounded-xl">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Marque</label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input type="text" placeholder="Renault..." className="w-full bg-white border border-border px-10 py-3 outline-none focus:border-secondary transition-all font-medium text-xs rounded-xl" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Modèle</label>
              <div className="relative">
                <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input type="text" placeholder="Clio..." className="w-full bg-white border border-border px-10 py-3 outline-none focus:border-secondary transition-all font-medium text-xs rounded-xl" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Immatriculation</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted font-bold text-[10px]">FR</span>
                <input type="text" placeholder="AA-123-BB" className="w-full bg-white border border-border px-10 py-3 outline-none focus:border-secondary transition-all font-bold text-xs tracking-widest uppercase rounded-xl" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button 
              type="button" 
              onClick={prevStep}
              className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 text-primary hover:bg-slate-100 transition-all rounded-xl"
            >
              <ArrowLeft size={14} /> Retour
            </button>
            <button 
              type="button" 
              onClick={nextStep}
              className="bg-secondary text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg rounded-xl"
            >
              Suivant <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* STEP 3: PERSONAL INFO */}
        <div className={cn(step !== 3 && "hidden")}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-primary">Nom</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                  <input type="text" placeholder="Jean Dupont" className="w-full bg-slate-50 border border-border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-primary">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                  <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-slate-50 border border-border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input type="email" placeholder="email@exemple.com" className="w-full bg-slate-50 border border-border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-muted" size={14} />
                <textarea rows={3} placeholder="..." className="w-full bg-slate-50 border border-border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs resize-none rounded-xl"></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              onClick={prevStep}
              className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 text-primary hover:bg-slate-100 transition-all rounded-xl"
            >
              <ArrowLeft size={14} /> Retour
            </button>
            <button 
              type="submit" 
              className="bg-secondary text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-secondary/20 rounded-xl"
            >
              Finaliser <Send size={14} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
