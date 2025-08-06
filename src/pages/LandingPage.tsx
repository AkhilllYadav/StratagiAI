import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import APIIntegration from "@/components/APIIntegration";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      <header>
        <ResponsiveNavbar />
      </header>
      
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <APIIntegration />
        <TestimonialsSection />
        <CTASection />
        <PricingSection />
      </main>
      
    </div>
  );
}