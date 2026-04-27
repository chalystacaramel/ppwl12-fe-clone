import { ArrowRight } from "lucide-react";

const agentFeatures = [
  { title: "Triage product feedback", icon: "📊" },
  { title: "Resolve support tickets in Slack", icon: "💬" },
  { title: "Respond to security alerts faster", icon: "🔒" },
  { title: "Automate weekly reporting", icon: "📈" },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#f9f9f8] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#131b41] mb-12">
          Keep work moving 24/7.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">Custom Agents</span>
              <span className="bg-[#0a85d1] text-white text-xs px-2 py-0.5 rounded-full">New</span>
            </div>
            <h3 className="text-2xl font-bold text-[#131b41] mb-4">
              Automate repetitive<br />work for your team.
            </h3>
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-[#131b41] rounded-full text-white hover:bg-[#2a3660] transition-colors">
              <ArrowRight size={18} />
            </a>
            <div className="mt-6 bg-[#f9f9f8] rounded-xl p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">Q&A agents</p>
                  <p className="text-xs text-gray-500">Answers questions instantly using knowledge you already have.</p>
                </div>
                <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <span className="text-sm font-medium">Emily</span>
                  </div>
                  <p className="text-xs text-gray-600">How do I submit an expense?</p>
                  <p className="text-xs text-[#0a85d1] mt-1">💬 1 reply</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <p className="text-sm text-gray-500 mb-4">See what Custom Agents can do</p>
            <div className="space-y-3">
              {agentFeatures.map((feature, index) => (
                <a key={index} href="#" className="flex items-center gap-3 p-4 bg-[#f9f9f8] rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-lg">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-[#131b41] flex-1">{feature.title}</span>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#131b41] transition-colors" />
                </a>
              ))}
            </div>
            <a href="#" className="mt-4 flex items-center gap-3 p-4 bg-[#131b41] rounded-xl text-white hover:bg-[#2a3660] transition-colors">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-400 rounded-lg" />
                <div className="w-8 h-8 bg-yellow-400 rounded-lg" />
                <div className="w-8 h-8 bg-orange-400 rounded-lg" />
              </div>
              <span className="font-medium">Create your own Custom Agent</span>
              <ArrowRight size={16} className="ml-auto" />
            </a>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#131b41] mb-12">
          Ask your on-demand assistants.
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden mb-6">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <p className="text-sm text-gray-500 mb-2">Notion Agent</p>
              <h3 className="text-2xl font-bold text-[#131b41] mb-4">
                You assign the tasks. Notion Agent does the work.
              </h3>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-[#131b41] rounded-full text-white hover:bg-[#2a3660] transition-colors">
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">✨</div>
                  <span className="text-sm">How can I help you today?</span>
                </div>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>AI · Translate this page</p>
                  <p>📊 Analyze for insights</p>
                  <p>📋 Create a task tracker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}