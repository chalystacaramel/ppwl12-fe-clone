import { ArrowRight } from "lucide-react";

export default function WorkTogetherSection() {
  return (
    <section className="bg-[#f9f9f8] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#131b41] mb-12">
          Bring all your work together.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Docs</p>
                  <h3 className="text-xl font-bold text-[#131b41]">Simple and powerful.</h3>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-[#131b41] rounded-full text-white hover:bg-[#2a3660] transition-colors">
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4">
              <div className="flex gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs">M</div>
                    <span className="text-sm font-medium">H1 Planning</span>
                  </div>
                  <p className="text-xs text-gray-500">Overview</p>
                  <p className="text-xs text-gray-400 mt-1">In H1, the Acquisition & Growth team will focus on...</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex-1">
                  <p className="text-xs text-gray-500 mb-2">Comments</p>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-200 rounded-full" />
                    <span className="text-xs">Laura Ortiz</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Can you take a look at these dates...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Knowledge Base</p>
                  <h3 className="text-xl font-bold text-[#131b41]">One source of truth for teams and agents.</h3>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-[#131b41] rounded-full text-white hover:bg-[#2a3660] transition-colors">
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="relative h-48 bg-gradient-to-br from-rose-100 to-rose-200 p-4 overflow-hidden">
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">Company HQ</h4>
                <p className="text-xs text-gray-500">Welcome to the home for company-wide info — strategy and goals, how we work day-to-day...</p>
                <div className="flex gap-4 mt-2 text-xs text-gray-400">
                  <span>Company</span>
                  <span>Meetings</span>
                  <span>Docs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="p-8">
              <p className="text-sm text-gray-500 mb-1">Projects</p>
              <h3 className="text-2xl font-bold text-[#131b41] mb-4">
                Less tracking.<br />More progress.
              </h3>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-[#131b41] rounded-full text-white hover:bg-[#2a3660] transition-colors">
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-rose-50 to-amber-50 p-6">
              <div className="flex gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🚀</span>
                    <span className="font-medium">Final QA</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Capitalization of feature names</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Add more width to tiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Add hanging punctuation to pullquotes</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                  <h4 className="font-medium mb-3">Launch tracker</h4>
                  <div className="flex gap-1 mb-2">
                    {[20,35,25,40,30,45,28,38,22,42,32,36].map((height, i) => (
                      <div key={i} className="w-3 bg-gray-100 rounded-sm" style={{ height: `${height}px` }} />
                    ))}
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Beta release</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">Staging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-16">
          <p className="text-3xl md:text-4xl text-[#131b41] italic mb-4">
            "Your AI everything app."
          </p>
          <p className="text-xl text-[#131b41] font-semibold">Forbes</p>
        </div>
      </div>
    </section>
  );
}