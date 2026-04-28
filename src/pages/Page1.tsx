import HeaderCarousel from "@/components/HeaderCarousel";
import CompanyLogos from "@/components/CompanyLogos";
import FeaturesSection from "@/components/FeaturesSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page1() {
  return (
    <main className="min-h-screen">
      <HeaderCarousel />
      <CompanyLogos />
      <FeaturesSection />
      <WorkTogetherSection />
      <TestimonialsSection />
    </main>
  );
}