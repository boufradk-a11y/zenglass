"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckSquare, Info } from "lucide-react";

type GlassType = "front" | "back" | "sides" | "other";

interface VehicleSelectorProps {
  onChange: (type: GlassType) => void;
}

export function VehicleSelector({ onChange }: VehicleSelectorProps) {
  const [selected, setSelected] = useState<GlassType>("front");

  const handleSelect = (type: GlassType) => {
    setSelected(type);
    onChange(type);
  };

  const zones = [
    { id: "front" as const, label: "Pare-brise Avant" },
    { id: "back" as const, label: "Pare-brise Arrière" },
    { id: "sides" as const, label: "Vitres Latérales" },
    { id: "other" as const, label: "Autre (Optique, Toit...)" },
  ];

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-slate-50 p-4 md:p-6 border border-border">
        {/* Car SVG Section - Smaller */}
        <div className="relative flex justify-center py-2">
          <svg
            viewBox="0 0 200 300"
            className="w-32 h-auto drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... rest of the SVG remains the same ... */}
            <path
              d="M50 40C50 20 70 10 100 10C130 10 150 20 150 40V260C150 280 130 290 100 290C70 290 50 280 50 260V40Z"
              stroke="#101828"
              strokeWidth="4"
              className="fill-white"
            />
            <path
              d="M65 75C65 65 80 55 100 55C120 55 135 65 135 75L130 120H70L65 75Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "front" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("front")}
            />
            <path
              d="M70 220H130L135 250C135 260 120 270 100 270C80 270 65 260 65 250L70 220Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "back" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("back")}
            />
            <path
              d="M55 130H65V170H55V130Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "sides" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("sides")}
            />
            <path
              d="M135 130H145V170H135V130Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "sides" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("sides")}
            />
            <path
              d="M55 180H65V210H55V180Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "sides" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("sides")}
            />
            <path
              d="M135 180H145V210H135V180Z"
              className={cn(
                "cursor-pointer transition-colors duration-300 stroke-2",
                selected === "sides" ? "fill-secondary stroke-secondary" : "fill-slate-100 stroke-primary/20 hover:fill-slate-200"
              )}
              onClick={() => handleSelect("sides")}
            />
            <rect x="42" y="50" width="10" height="30" rx="2" fill="#101828" />
            <rect x="148" y="50" width="10" height="30" rx="2" fill="#101828" />
            <rect x="42" y="220" width="10" height="30" rx="2" fill="#101828" />
            <rect x="148" y="220" width="10" height="30" rx="2" fill="#101828" />
          </svg>

          <div className="absolute top-0 right-0 bg-white border border-border p-1.5 text-[8px] font-black uppercase tracking-tighter rounded-xl">
            {zones.find(z => z.id === selected)?.label}
          </div>
        </div>

        {/* Text Selection List - Compact */}
        <div className="flex flex-col gap-2">
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => handleSelect(zone.id)}
              className={cn(
                "flex items-center justify-between px-4 py-3 border text-left transition-all rounded-xl",
                selected === zone.id 
                  ? "bg-secondary border-secondary text-white" 
                  : "bg-white border-border text-primary hover:border-secondary/30"
              )}
            >
              <span className="text-[10px] font-black uppercase tracking-widest">{zone.label}</span>
              {selected === zone.id ? <CheckSquare size={14} /> : <div className="w-[14px] h-[14px] border border-slate-200 rounded-sm"></div>}
            </button>
          ))}
          
          <div className="mt-2 p-3 bg-slate-100/50 flex gap-2 items-center rounded-xl">
            <Info size={12} className="text-secondary shrink-0" />
            <p className="text-[9px] text-primary/60 font-bold uppercase tracking-tight">
              Cliquez sur le schéma ou utilisez la liste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
