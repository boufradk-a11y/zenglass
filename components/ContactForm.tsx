"use client";

import React, { useState } from "react";
import { Send, Phone, User, ClipboardList, MessageSquare, ArrowRight, ArrowLeft, Car, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { VehicleSelector } from "./VehicleSelector";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [glassType, setGlassType] = useState("front");
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    licensePlate: "",
    year: "",
    insurance: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 2) {
      if (!formData.brand) newErrors.brand = "La marque est requise";
      if (!formData.model) newErrors.model = "Le modèle est requis";
      if (!formData.licensePlate) newErrors.licensePlate = "L'immatriculation est requise";
      if (!formData.year) {
        newErrors.year = "L'année est requise";
      } else if (!/^\d{4}$/.test(formData.year)) {
        newErrors.year = "L'année doit comporter 4 chiffres";
      }
      if (!formData.insurance) newErrors.insurance = "L'assurance est requise";
    }

    if (currentStep === 3) {
      if (!formData.name) newErrors.name = "Le nom est requis";
      if (!formData.phone) newErrors.phone = "Le téléphone est requis";
      if (!formData.email) {
        newErrors.email = "L'email est requis";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "L'email est invalide";
      }
      if (!formData.message) newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation functions
  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log("Form submitted:", { glassType, ...formData });
      alert("Formulaire envoyé avec succès !");
    }
  };

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

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* STEP 1: GLASS SELECTION */}
        <div className={cn(step !== 1 && "hidden")}>
          <VehicleSelector onChange={(type, detail) => {
            setGlassType(type);
          }} />
          <div className="flex justify-end mt-4">
            <button 
              type="button" 
              onClick={handleNextStep}
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
                <input 
                  type="text" 
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Renault..." 
                  className={cn(
                    "w-full bg-white border px-10 py-3 outline-none focus:border-secondary transition-all font-medium text-xs rounded-xl",
                    errors.brand ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.brand && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.brand}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Modèle</label>
              <div className="relative">
                <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input 
                  type="text" 
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Clio..." 
                  className={cn(
                    "w-full bg-white border px-10 py-3 outline-none focus:border-secondary transition-all font-medium text-xs rounded-xl",
                    errors.model ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.model && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.model}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Immatriculation</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted font-bold text-[10px]">FR</span>
                <input 
                  type="text" 
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  placeholder="AA-123-BB" 
                  className={cn(
                    "w-full bg-white border px-10 py-3 outline-none focus:border-secondary transition-all font-bold text-xs tracking-widest uppercase rounded-xl",
                    errors.licensePlate ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.licensePlate && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.licensePlate}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Année</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  maxLength={4}
                  placeholder="Ex: 2023" 
                  className={cn(
                    "w-full bg-white border px-10 py-3 outline-none focus:border-secondary transition-all font-bold text-xs tracking-widest uppercase rounded-xl",
                    errors.year ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.year && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.year}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Assurance</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  placeholder="Ex: MACIF" 
                  className={cn(
                    "w-full bg-white border px-10 py-3 outline-none focus:border-secondary transition-all font-bold text-xs tracking-widest uppercase rounded-xl",
                    errors.insurance ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.insurance && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.insurance}</p>}
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
              onClick={handleNextStep}
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
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont" 
                    className={cn(
                      "w-full bg-slate-50 border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl",
                      errors.name ? "border-red-500" : "border-border"
                    )} 
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.name}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-primary">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 00 00 00 00" 
                    className={cn(
                      "w-full bg-slate-50 border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl",
                      errors.phone ? "border-red-500" : "border-border"
                    )} 
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.phone}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@exemple.com" 
                  className={cn(
                    "w-full bg-slate-50 border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs rounded-xl",
                    errors.email ? "border-red-500" : "border-border"
                  )} 
                />
              </div>
              {errors.email && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.email}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-primary">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-muted" size={14} />
                <textarea 
                  rows={3} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="..." 
                  className={cn(
                    "w-full bg-slate-50 border px-10 py-3 outline-none focus:bg-white focus:border-secondary transition-all font-medium text-xs resize-none rounded-xl",
                    errors.message ? "border-red-500" : "border-border"
                  )}
                ></textarea>
              </div>
              {errors.message && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-bold italic"><AlertCircle size={10} /> {errors.message}</p>}
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
