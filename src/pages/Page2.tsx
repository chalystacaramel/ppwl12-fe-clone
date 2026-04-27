import { useState } from "react";
import PricingCalculator from "../components/PricingCalculator";
import Page2Hero from "../components/Page2Hero";

// State isYearly di-lift ke sini agar toggle di Page2Hero dan harga
// di PricingCalculator selalu sinkron (tidak ada state ganda).

export default function Page2() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Page2Hero isYearly={isYearly} setIsYearly={setIsYearly} />
      <PricingCalculator isYearly={isYearly} setIsYearly={setIsYearly} />
    </div>
  );
}