import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Franchise } from "@/components/Franchise";
import { TrustSection } from "@/components/TrustSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ"; // Import the new FAQ component
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Franchise />
      <TrustSection />
      <Testimonials />
      <FAQ /> {/* Add the FAQ component here */}
      <Footer />
      <div className="fixed bottom-0 right-0 z-[100] flex items-start justify-end p-4">
        <a
          href="https://wa.me/33666638158"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <Image 
            src="/whatsapp.svg" 
            alt="Contact WhatsApp Zen Glass" 
            width={32} 
            height={32} 
            className=""
          />
        </a>
      </div>
    </main>
  );
}
