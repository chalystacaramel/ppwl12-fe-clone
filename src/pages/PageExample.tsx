<<<<<<< HEAD
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
=======
export default function PageExample() {
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      <h1>Page Example</h1>
    </div>
  );
>>>>>>> a7c68a7cbfbb66225cd77a48b0904e4bd20cef88
}