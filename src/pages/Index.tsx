import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { MethodsSection } from "@/components/MethodsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <MethodsSection />
      <ContactSection />
    </>
  );
}
