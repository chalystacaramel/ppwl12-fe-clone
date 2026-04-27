import { useState } from "react";

export default function PricingCalculator() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-zinc-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!isYearly ? "bg-white shadow text-zinc-900" : "text-zinc-500"}`}
            >
              Pay monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${isYearly ? "bg-white shadow text-zinc-900" : "text-zinc-500"}`}
            >
              Pay yearly
            </button>
          </div>
          <span className="text-sm text-teal-600 font-medium">Save up to 20% with yearly</span>
        </div>
        <span className="text-sm text-zinc-500">Price in USD</span>
      </div>

      {/* Cards */}
      <div className="border border-zinc-200 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — Free + Plus */}
          <div className="border-b lg:border-b-0 lg:border-r border-zinc-200">
            <div className="p-8 border-b border-zinc-100">
              <h3 className="notion-serif text-2xl font-normal text-zinc-900 mb-6">Essentials for staying organized.</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Free */}
                <div>
                  <h4 className="font-semibold text-lg mb-1">Free</h4>
                  <div className="mb-1">
                    <span className="text-3xl font-semibold">$0</span>
                    <span className="text-sm text-zinc-500 ml-1">per member / month</span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">For individuals to organize personal projects and life.</p>
                  <button className="px-5 py-2 rounded-md text-sm font-medium border border-zinc-300 bg-white hover:bg-zinc-50 transition">
                    Sign up
                  </button>
                  <p className="text-sm font-semibold mt-4 mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {["Trial of Notion AI","Basic forms","Basic sites","Notion Calendar","Notion Mail (Syncs with Gmail)","Databases including subtasks, dependencies, custom properties and more"].map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <span className="text-zinc-400 mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Plus */}
                <div>
                  <h4 className="font-semibold text-lg mb-1">Plus</h4>
                  <div className="mb-1">
                    <span className="text-3xl font-semibold">{isYearly ? "$8" : "$10"}</span>
                    <span className="text-sm text-zinc-500 ml-1">per member / month</span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">For small teams and professionals to work together.</p>
                  <button className="px-5 py-2 rounded-md text-sm font-medium border border-zinc-300 bg-white hover:bg-zinc-50 transition">
                    Get started
                  </button>
                  <p className="text-sm font-semibold mt-4 mb-2">Everything in Free, and:</p>
                  <ul className="space-y-1">
                    {["Trial of Notion AI","Custom forms","Custom sites","Unlimited charts","Unlimited collaborative blocks","Unlimited file uploads","Basic integrations"].map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <span className="text-zinc-400 mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Business + Enterprise */}
          <div className="bg-blue-50">
            <div className="p-8">
              <h3 className="notion-serif text-2xl font-normal text-zinc-900 mb-6">The AI workspace for work that matters.</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Business */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-lg">Business</h4>
                    <span className="text-xs text-orange-500 font-medium">Recommended</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-3xl font-semibold">{isYearly ? "$16" : "$20"}</span>
                    <span className="text-sm text-zinc-500 ml-1">per member / month</span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">For growing businesses to streamline teamwork.</p>
                  <button className="px-5 py-2 rounded-md text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition">
                    Get started
                  </button>
                  <p className="text-sm font-semibold mt-4 mb-2">Everything in Plus, and:</p>
                  <ul className="space-y-1">
                    {["Notion Agent","AI Meeting Notes","Enterprise Search","SAML SSO","Granular database permissions","Verify any page","Private teamspaces","Domain verification","Premium integrations"].map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <span className="text-zinc-400 mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Enterprise */}
                <div>
                  <h4 className="font-semibold text-lg mb-1">Enterprise</h4>
                  <div className="mb-1">
                    <span className="text-sm text-zinc-500">Custom pricing</span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">For organizations to operate with scalability, control, and security.</p>
                  <button className="px-5 py-2 rounded-md text-sm font-medium border border-zinc-300 bg-white hover:bg-zinc-50 transition">
                    Contact Sales
                  </button>
                  <p className="text-sm font-semibold mt-4 mb-2">Everything in Business, and:</p>
                  <ul className="space-y-1">
                    {["Zero data retention with LLM providers","User provisioning (SCIM)","Advanced security & controls","Audit log","Customer success manager","Security & Compliance integrations (DLP, SIEM)","Domain management","Advanced integrations"].map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <span className="text-zinc-400 mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}