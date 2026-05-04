"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.phoneFull.replace("+", "")}?text=Bonjour, je souhaite un devis pour mon vitrage.`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-64 h-18">
              <Image 
                src="/logo_propre.png" 
                alt={`${siteConfig.name} - Spécialiste Pare-Brise et Vitrage Automobile`} 
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#services" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
              Nos Services
            </Link>
            <Link href="/#franchise" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors text-accent">
              Franchise Offerte
            </Link>
            <div className="flex items-center gap-6">
              <div className="relative border-l border-border pl-6">
                <button 
                  onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
                  className="flex items-center gap-2 text-primary font-bold transition-colors hover:text-secondary"
                >
                  <Phone size={18} className="text-secondary" />
                  {siteConfig.phone}
                  <ChevronDown size={14} className={cn("transition-transform duration-200", isPhoneMenuOpen && "rotate-180")} />
                </button>

                {/* Dropdown Menu */}
                <div 
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-border shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top",
                    isPhoneMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="p-2 space-y-1">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsPhoneMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-primary hover:bg-green-50 hover:text-green-600 transition-colors rounded-lg"
                    >
                      <MessageCircle size={18} className="text-green-500" />
                      Devis par WhatsApp
                    </a>
                    <a 
                      href={`tel:${siteConfig.phoneFull}`} 
                      onClick={() => setIsPhoneMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-primary hover:bg-blue-50 hover:text-secondary transition-colors rounded-lg"
                    >
                      <Phone size={18} className="text-secondary" />
                      Devis par Téléphone
                    </a>
                  </div>
                </div>
              </div>
              <Link 
                href={siteConfig.links.booking}
                className="bg-primary text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-colors rounded-lg"
              >
                Rendez-vous
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-200">
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-primary">Services</Link>
          <Link href="/#franchise" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-primary">Franchise Offerte</Link>
          <hr className="border-border" />
          
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nous contacter</p>
            <div className="grid grid-cols-1 gap-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 bg-green-50 text-green-700 rounded-xl border border-green-100"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-green-500" />
                  <span className="text-sm font-bold uppercase tracking-wider">WhatsApp</span>
                </div>
                <ChevronDown size={14} className="-rotate-90 opacity-50" />
              </a>
              <a 
                href={`tel:${siteConfig.phoneFull}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 bg-blue-50 text-secondary rounded-xl border border-blue-100"
              >
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-secondary" />
                  <span className="text-sm font-bold uppercase tracking-wider">Appeler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">{siteConfig.phone}</span>
                  <ChevronDown size={14} className="-rotate-90 opacity-50" />
                </div>
              </a>
            </div>
          </div>

          <Link 
            href="/rendez-vous"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-secondary text-white py-4 rounded-xl text-center text-sm font-bold uppercase tracking-widest"
          >
            Prendre RDV
          </Link>
        </div>
      )}
    </nav>
  );
}
