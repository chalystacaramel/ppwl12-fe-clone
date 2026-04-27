import HeaderCarousel from "@/components/HeaderCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import { CompanyLogos } from  "@/components/CompanyLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import PricingCalculator from "@/components/PricingCalculator";

export default function Home() {
    return (
    <main className="min-h-screen">
        <HeaderCarousel />
        <CompanyLogos />
        <FeaturesSection />
        <TestimonialsSection />
        <WorkTogetherSection />
        <PricingCalculator isYearly={false} setIsYearly={() => {}} />
    </main>
    );
}