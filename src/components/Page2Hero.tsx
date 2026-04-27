import { useState } from "react";

export default function Page2Hero() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="w-full px-8 md:px-16 pt-16 pb-8"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Heading - rata kiri, besar */}
      <h1
        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
        style={{ color: "#000000", fontFamily: "sans-serif" }}
      >
        One tool to run your company.
      </h1>

      {/* Trusted by - horizontal */}
      <div className="flex flex-wrap items-center gap-6 mb-12">
        <span
          className="text-sm"
          style={{ color: "#6b7280", fontFamily: "sans-serif" }}
        >
          Trusted by teams at
        </span>
        {/* Logos sebagai styled text */}
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>
          OpenAI
        </span>
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>
          𝔽 Figma
        </span>
        <span className="font-bold text-base tracking-widest text-sm" style={{ color: "#000", fontFamily: "sans-serif" }}>
          VOLVO
        </span>
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>
          ramp ↗
        </span>
        <span className="font-bold text-base tracking-widest text-sm" style={{ color: "#000", fontFamily: "sans-serif" }}>
          ⊙ CURSOR
        </span>
      </div>

      {/* Toggle + Save label + Price in USD */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          {/* Toggle */}
          <div
            className="flex items-center rounded-full px-1 py-1"
            style={{ backgroundColor: "#f3f4f6" }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: !isYearly ? "#ffffff" : "transparent",
                color: !isYearly ? "#111827" : "#6b7280",
                boxShadow: !isYearly ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                fontFamily: "sans-serif",
              }}
            >
              Pay monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: isYearly ? "#ffffff" : "transparent",
                color: isYearly ? "#111827" : "#6b7280",
                boxShadow: isYearly ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                fontFamily: "sans-serif",
              }}
            >
              Pay yearly
            </button>
          </div>

          {/* Save label - selalu tampil */}
          <span
            className="text-sm font-medium"
            style={{ color: "#2563eb", fontFamily: "sans-serif" }}
          >
            Save up to 20% with yearly
          </span>
        </div>

        {/* Price in USD */}
        <span
          className="text-sm"
          style={{ color: "#6b7280", fontFamily: "sans-serif" }}
        >
          Price in USD
        </span>
      </div>
    </section>
  );
}