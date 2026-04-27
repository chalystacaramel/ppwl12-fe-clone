import Navbar from "@/components/Navbar";
import HeaderCarousel from "@/components/HeaderCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import { CompanyLogos } from  "@/components/CompanyLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import PricingCalculator from "@/components/PricingCalculator";
import { Footer } from "@/components/Footer";

export default function PageExample() {
    return (
    <main className="min-h-screen">
        <Navbar />
        <HeaderCarousel />
        <CompanyLogos />
        <FeaturesSection />
        <TestimonialsSection />
        <WorkTogetherSection />
        <PricingCalculator />
        <Footer />
    </main>
    );
}