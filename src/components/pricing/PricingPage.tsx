import { useState } from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingToggle } from "./PricingToggle";
import { PricingCards } from "./PricingCards";
import { Testimonial } from "./Testimonial";
import { PlansAndFeatures } from "./PlansAndFeatures";
import { FAQ } from "./FAQ";
import { PricingFooter } from "./PricingFooter";

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <PricingHeader />

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-[48px] md:text-[64px] font-bold text-black tracking-tight leading-tight mb-8">
          One tool to run your company.
        </h1>

        <PricingToggle
          billingCycle={billingCycle}
          onToggle={setBillingCycle}
        />

        <PricingCards billingCycle={billingCycle} />

        <Testimonial />

        <PlansAndFeatures />

        <FAQ />
      </main>

      <PricingFooter />
    </div>
  );
}

export default PricingPage;