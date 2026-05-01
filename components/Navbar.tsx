"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image 
                src="/zenglass_logo_fidele_name.svg" 
                alt={`${siteConfig.name} Logo`} 
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
              <a 
                href={`tel:${siteConfig.phoneFull}`} 
                className="flex items-center gap-2 text-primary font-bold border-l border-border pl-6"
              >
                <Phone size={18} className="text-secondary" />
                {siteConfig.phone}
              </a>
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
          <a href="tel:0123456789" className="flex items-center gap-3 text-secondary text-xl font-bold">
            <Phone size={24} />
            01 23 45 67 89
          </a>
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
