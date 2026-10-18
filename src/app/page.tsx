import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <ArchitectureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
