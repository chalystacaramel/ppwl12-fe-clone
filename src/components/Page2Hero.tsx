import { useState } from "react";

const trustedLogos = [
  { name: "OpenAI", text: "OpenAI" },
  { name: "Figma", text: "Figma" },
  { name: "Volvo", text: "Volvo" },
  { name: "Ramp", text: "Ramp" },
  { name: "Cursor", text: "Cursor" },
];

export default function Page2Hero() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="flex flex-col items-center text-center py-16 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        style={{ color: "#000000", fontFamily: "sans-serif" }}
      >
        One tool to run your company.
      </h1>

      {/* Trusted by */}
      <p
        className="text-sm mb-4"
        style={{ color: "#6b7280", fontFamily: "sans-serif" }}
      >
        Trusted by teams at
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {trustedLogos.map((logo) => (
          <span
            key={logo.name}
            className="text-sm font-semibold tracking-wide"
            style={{ color: "#1f2937", fontFamily: "sans-serif" }}
          >
            {logo.text}
          </span>
        ))}
      </div>

      {/* Toggle Monthly / Yearly */}
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
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
        {isYearly && (
          <span
            className="text-xs font-medium pr-2"
            style={{ color: "#16a34a", fontFamily: "sans-serif" }}
          >
            Save up to 20%
          </span>
        )}
      </div>
    </section>
  );
}