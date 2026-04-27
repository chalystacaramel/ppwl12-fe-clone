import { ArrowRight, Play } from "lucide-react";

const testimonials = [
  {
    company: "TOYOTA",
    quote: "Streamlined workflows to reduce timelines by 3x.",
  },
  {
    company: "Ramp",
    quote: "Agents get created in three minutes between meetings, then hours of manual operational work disappear.",
  },
  {
    company: "Vercel",
    quote: "Notion understands that you can solve a lot of problems with one tool.",
  },
  {
    company: "MatchGroup",
    quote: "Notion has been the most powerful and impactful way to streamline our workflow.",
  },
  {
    company: "Cursor",
    quote: "Using the most AI-native tools like Notion is an important competitive advantage for us.",
  },
  {
    company: "Figma",
    quote: "One hub for work and AI keeps everyone informed and work flowing.",
  },
];

const stats = [
  { label: "Over 100M users worldwide", icon: "👥" },
  { label: "#1 knowledge base 3 years running (G2)", icon: "🏆" },
  { label: "#1 AI enterprise search (G2)", icon: "🔍" },
  { label: "#1 rated AI writing (G2)", icon: "✨" },
  { label: "62% of Fortune 100", icon: "📈" },
  { label: "Over 50% of YC companies", icon: "🚀" },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f0] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#131b41] mb-12">
          Trusted by teams that ship.
        </h2>

        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-2xl font-bold text-[#131b41] mb-4">OpenAI</p>
              <p className="text-2xl md:text-3xl text-[#131b41] italic mb-6">
                "There's power in a single platform where you can do all your work. Notion is that single place."
              </p>
              <a href="#" className="text-[#0a85d1] font-medium hover:underline">
                Read the full story →
              </a>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                <button type="button" className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <Play size={24} className="text-[#131b41] ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <a key={index} href="#" className="bg-white rounded-xl p-6 group hover:shadow-md transition-shadow">
              <p className="font-bold text-[#131b41] mb-4">{testimonial.company}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <ArrowRight size={16} className="mt-4 text-gray-400 group-hover:text-[#131b41] transition-colors" />
            </a>
          ))}
        </div>

        <div className="overflow-hidden py-4">
          <div className="flex gap-8">
            {[...stats, ...stats].map((stat, index) => (
              <div key={index} className="flex items-center gap-2 shrink-0 text-gray-600">
                <span>{stat.icon}</span>
                <span className="text-sm whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}