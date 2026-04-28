type Page2HeroProps = {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
};

export default function Page2Hero({ isYearly, setIsYearly }: Page2HeroProps) {
  return (
    <section
      className="w-full px-8 md:px-16 pt-16 pb-8"
      style={{ backgroundColor: "#ffffff" }}
    >
      <h1
        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
        style={{ color: "#000000", fontFamily: "sans-serif" }}
      >
        One tool to run your company.
      </h1>

      <div className="flex flex-wrap items-center gap-6 mb-12">
        <span className="text-sm" style={{ color: "#6b7280", fontFamily: "sans-serif" }}>
          Trusted by teams at
        </span>
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>OpenAI</span>
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>𝔽 Figma</span>
        <span className="font-bold text-base tracking-widest text-sm" style={{ color: "#000", fontFamily: "sans-serif" }}>VOLVO</span>
        <span className="font-bold text-base" style={{ color: "#000", fontFamily: "sans-serif" }}>ramp ↗</span>
        <span className="font-bold text-base tracking-widest text-sm" style={{ color: "#000", fontFamily: "sans-serif" }}>⊙ CURSOR</span>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white">
          Meet the night shift.
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mb-8">
          Notion agents keep work moving 24/7. They capture knowledge,
          answer questions, and push projects forward — all while you sleep.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow">
            Get Notion free
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium backdrop-blur border border-white/20">
            Request a demo
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-10 text-white/60 text-sm">
          <span>Trusted by teams at</span>
          <span className="font-semibold text-white/80">OpenAI</span>
          <span className="font-semibold text-white/80">Figma</span>
          <span className="font-semibold text-white/80">VOLVO</span>
          <span className="font-semibold text-white/80">Ramp</span>
          <span className="font-semibold text-white/80">Cursor</span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full px-1 py-1 bg-white/10 backdrop-blur">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${!isYearly ? "bg-white text-gray-900 shadow" : "text-white/60"}`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${isYearly ? "bg-white text-gray-900 shadow" : "text-white/60"}`}
              >
                Pay yearly
              </button>
            </div>
            <span className="text-sm font-medium" style={{ color: "#2563eb", fontFamily: "sans-serif" }}>
              Save up to 20% with yearly
            </span>
          </div>
          <span className="text-sm" style={{ color: "#6b7280", fontFamily: "sans-serif" }}>
            Price in USD
          </span>
        </div>
      </div>
    </section>
  );
}