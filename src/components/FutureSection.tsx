    import { ArrowRight } from "lucide-react";
    
    const agentFeatures = [
    {
        icon: "🎯",
        title: "Triage product feedback",
        color: "bg-purple-100",
    },
    {
        icon: "💬",
        title: "Resolve support tickets in Slack",
        color: "bg-yellow-100",
    },
    {
        icon: "🔒",
        title: "Respond to security alerts faster",
        color: "bg-red-100",
    },
    {
        icon: "📊",
        title: "Automate weekly reporting",
        color: "bg-teal-100",
    },
    ];
    
    export function FeatureSection() {
    return (
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Keep work moving 24/7.
            </h2>
    
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Custom Agents Card */}
            <div className="bg-[#fef7e6] rounded-2xl p-8 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">Custom Agents</span>
                <span className="text-xs bg-[#37a1bf] text-white px-2 py-0.5 rounded-full">New</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Automate repetitive<br />work for your team.
                </h3>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-black rounded-full text-white hover:bg-gray-800 transition-colors">
                <ArrowRight className="w-5 h-5" />
                </a>
    
                {/* Chat bubbles illustration */}
                <div className="mt-8 space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-sm max-w-xs ml-auto">
                    <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-pink-200 rounded-full" />
                    <span className="font-medium text-sm">Emily</span>
                    </div>
                    <p className="text-sm text-gray-700">How do I submit an expense?</p>
                    <div className="flex items-center gap-1 mt-2 text-[#37a1bf] text-xs">
                    <span>💬</span>
                    <span>1 reply</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm max-w-xs ml-auto">
                    <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-blue-200 rounded-full" />
                    <span className="font-medium text-sm">Catherine</span>
                    </div>
                    <p className="text-sm text-gray-700">When is open enrollment?</p>
                    <div className="flex items-center gap-1 mt-2 text-[#37a1bf] text-xs">
                    <span>💬</span>
                    <span>1 reply</span>
                    </div>
                </div>
                </div>
            </div>
    
            {/* Right Column - Q&A Agents Card */}
            <div className="bg-white border rounded-2xl p-8">
                <div className="mb-4">
                <span className="text-sm font-medium text-gray-900">Q&A agents</span>
                <p className="text-sm text-gray-500 mt-1">
                    Answers questions instantly using knowledge you already have.
                </p>
                </div>
                <div className="flex gap-2 mb-6">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
    
                {/* See what Custom Agents can do */}
                <p className="text-sm text-gray-500 mb-4">See what Custom Agents can do</p>
    
                {/* Feature Links */}
                <div className="space-y-3">
                {agentFeatures.map((feature, index) => (
                    <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                    >
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center text-lg`}>
                        {feature.icon}
                        </div>
                        <span className="font-medium text-gray-900">{feature.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </a>
                ))}
                </div>
    
                {/* Create your own Custom Agent CTA */}
                <div className="mt-6 bg-[#191d3a] rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-400 rounded-lg" />
                    <div className="w-8 h-8 bg-orange-400 rounded-lg" />
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg" />
                    </div>
                    <span className="text-white font-medium">Create your own Custom Agent</span>
                </div>
                <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }