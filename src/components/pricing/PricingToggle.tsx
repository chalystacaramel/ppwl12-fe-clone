interface PricingToggleProps {
  billingCycle: "monthly" | "yearly";
  onToggle: (cycle: "monthly" | "yearly") => void;
}

export function PricingToggle({ billingCycle, onToggle }: PricingToggleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
      {/* Toggle Buttons — style pill outlined seperti Notion asli */}
      <div className="flex items-center border border-gray-300 rounded-full p-0.5 bg-white">
        <button
          onClick={() => onToggle("monthly")}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
            billingCycle === "monthly"
              ? "bg-gray-900 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Pay monthly
        </button>
        <button
          onClick={() => onToggle("yearly")}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
            billingCycle === "yearly"
              ? "bg-gray-900 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Pay yearly
        </button>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="text-[#0a85d1]">Save up to 20% with yearly</span>
        <span className="text-gray-400">Price in USD</span>
      </div>
    </div>
  );
}