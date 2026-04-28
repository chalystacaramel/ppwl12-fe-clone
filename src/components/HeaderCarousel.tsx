const agents = [
  { img: "/images/agents/book.png",      bg: "#f5c842", task: "check.svg",   pos: { left: "3%",  top: "12%" } },
  { img: "/images/agents/globe.png",     bg: "#e05c5c", task: "gmail.svg",   pos: { left: "6%",  top: "38%" } },
  { img: "/images/agents/files-v2.png",  bg: "#5b8ef0", task: "hubspot.svg", pos: { left: "1%",  top: "62%" } },
  { img: "/images/agents/checkmark.png", bg: "#a259ff", task: "github.svg",  pos: { right: "3%", top: "12%" } },
  { img: "/images/agents/light_bulb.png",bg: "#ff8c42", task: "slack.svg",   pos: { right: "6%", top: "38%" } },
  { img: "/images/agents/apple.png",     bg: "#e05c8a", task: "chart.svg",   pos: { right: "1%", top: "62%" } },
];

export default function HeaderCarousel() {
  return (
    <section className="hero-gradient relative overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-16 min-h-[600px]">

      {/* Agent Floating Icons */}
      {agents.map((agent, i) => (
        <div
          key={i}
          className="absolute animate-float hidden md:flex z-20"
          style={{ ...agent.pos, animationDelay: `${i * 0.5}s` }}
        >
          <div className="relative">
            <span
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
              style={{ backgroundColor: agent.bg }}
            >
              <img src={agent.img} alt="" width={32} height={32} className="object-contain" />
            </span>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-lg p-1 shadow-md">
              <img
                src={`https://www.notion.com/front-static/agents/tasks/${agent.task}`}
                alt=""
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Conveyor Belt Lines + Gears */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 620"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Left path */}
        <path
          d="M-10 460 L180 395 C210 385 240 400 240 430 L240 570 C240 590 260 610 280 610 L520 610 C545 610 565 590 565 565 L565 490 C565 435 615 400 665 418 L900 508 C948 525 936 588 888 600 L710 625 C662 638 615 596 615 548 L615 185 C615 148 652 122 690 122 L885 122 C940 122 995 168 995 225 L995 285"
          stroke="#1e3a8a"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Right path */}
        <path
          d="M1450 148 L558 148 C522 148 505 188 524 218 L885 308 C934 320 926 385 878 398 L648 432 C600 445 554 403 554 354 C554 305 508 263 458 270 L205 304 C156 311 110 270 110 220"
          stroke="#1e3a8a"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Gear 1 */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 615 122" to="360 615 122" dur="9s" repeatCount="indefinite"/>
          <path d="M615 105 l2.5 9q2.5 0.5 5 1.3l8-7 5 3-3 9q2 1.6 3.5 3.5l9-3 3 5-7 8q0.8 2.5 1.3 5l9 2.5v6l-9 2.5q-0.5 2.5-1.3 5l7 8-3 5-9-3q-1.6 2-3.5 3.5l3 9-5 3-8-7q-2.5 0.8-5 1.3l-2.5 9h-6l-2.5-9q-2.5-0.5-5-1.3l-8 7-5-3 3-9q-2-1.6-3.5-3.5l-9 3-3-5 7-8q-0.8-2.5-1.3-5l-9-2.5v-6l9-2.5q0.5-2.5 1.3-5l-7-8 3-5 9 3q1.6-2 3.5-3.5l-3-9 5-3 8 7q2.5-0.8 5-1.3z" fill="#1e3a8a" opacity="0.9"/>
          <circle cx="615" cy="122" r="9" fill="#060b24" opacity="1"/>
        </g>

        {/* Gear 2 */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 995 285" to="-360 995 285" dur="7s" repeatCount="indefinite"/>
          <path d="M995 268 l2.5 9q2.5 0.5 5 1.3l8-7 5 3-3 9q2 1.6 3.5 3.5l9-3 3 5-7 8q0.8 2.5 1.3 5l9 2.5v6l-9 2.5q-0.5 2.5-1.3 5l7 8-3 5-9-3q-1.6 2-3.5 3.5l3 9-5 3-8-7q-2.5 0.8-5 1.3l-2.5 9h-6l-2.5-9q-2.5-0.5-5-1.3l-8 7-5-3 3-9q-2-1.6-3.5-3.5l-9 3-3-5 7-8q-0.8-2.5-1.3-5l-9-2.5v-6l9-2.5q0.5-2.5 1.3-5l-7-8 3-5 9 3q1.6-2 3.5-3.5l-3-9 5-3 8 7q2.5-0.8 5-1.3z" fill="#1e3a8a" opacity="0.9"/>
          <circle cx="995" cy="285" r="9" fill="#060b24" opacity="1"/>
        </g>
      </svg>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Meet the night shift.
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Notion agents keep work moving 24/7. They capture knowledge, answer
            questions, and push projects forward—all while you sleep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#" className="btn-primary px-8 py-3 text-base">Get Notion free</a>
            <a href="#" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-medium transition-all text-base">
              Request a demo
            </a>
          </div>

          {/* Hero Image with glow */}
          <div className="relative max-w-5xl mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "radial-gradient(ellipse, #3b5bdb 0%, transparent 70%)" }}
            />
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <img
                src="/images/hero.webp"
                alt="Notion Hero"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}