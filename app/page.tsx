import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="comet" />
          <div className="comet" />
          <div className="comet" />
        </div>
        
        <HeroSection />
      </section>
      <div className="section-spacing">
        <ServicesSection />
      </div>
      <div className="section-spacing bg-gray-50">
        <WhyUsSection />
      </div>
      <div className="section-spacing">
        <StatsSection />
      </div>
      <div className="section-spacing bg-gray-50">
        <TestimonialsSection />
      </div>
      <div className="section-spacing">
        <PartnersSection />
      </div>
      <div className="section-spacing">
        <CTASection />
      </div>
    </main>
  );
}
