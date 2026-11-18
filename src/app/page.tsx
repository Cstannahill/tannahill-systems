import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { LabSection } from "@/components/LabSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProductsSection />
        <LabSection />
        <ServicesSection />
        <ArchitectureSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
