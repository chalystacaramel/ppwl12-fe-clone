interface PricingCardsProps {
  billingCycle: "monthly" | "yearly";
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
    <path d="M13.5 4.5L6.5 11.5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function PricingCards({ billingCycle }: PricingCardsProps) {
  const yearlyDiscount = billingCycle === "yearly" ? 0.8 : 1;

  return (
    <div className="space-y-6">
      {/* Essentials Section */}
      <div className="border border-gray-200 rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Essentials for staying organized.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Free</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 text-sm">per member / month</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                For individuals to organize personal projects and life.
              </p>
            </div>

            <button className="w-full sm:w-auto px-6 py-2.5 border border-[#0a85d1] text-[#0a85d1] rounded-md font-medium hover:bg-[#0a85d1] hover:text-white transition-colors">
              Sign up
            </button>

            <div className="space-y-3">
              <p className="font-semibold text-gray-900 text-sm">Includes:</p>
              <ul className="space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Trial of Notion AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Basic forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Basic sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Notion Calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Notion Mail (Syncs with Gmail)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Databases including subtasks, dependencies, custom properties and more</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="space-y-6 md:border-l md:border-gray-200 md:pl-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Plus</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${Math.round(10 * yearlyDiscount)}
                </span>
                <span className="text-gray-500 text-sm">per member / month</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                For small teams and professionals to work together.
              </p>
            </div>

            <button className="w-full sm:w-auto px-6 py-2.5 border border-[#0a85d1] text-[#0a85d1] rounded-md font-medium hover:bg-[#0a85d1] hover:text-white transition-colors">
              Get started
            </button>

            <div className="space-y-3">
              <p className="font-semibold text-gray-900 text-sm">Everything in Free, and:</p>
              <ul className="space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Trial of Notion AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Custom forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Custom sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Unlimited charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Unlimited collaborative blocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span>Unlimited file uploads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span>Basic connections</span>
                    <div className="flex items-center gap-1 mt-1">
                      <img src="https://ext.same-assets.com/4258207962/3926593521.svg" alt="Slack" className="w-4 h-4" />
                      <img src="https://ext.same-assets.com/4258207962/648075215.svg" alt="Gmail" className="w-4 h-4" />
                      <img src="https://ext.same-assets.com/4258207962/1127621262.svg" alt="Drive" className="w-4 h-4" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI Workspace Section */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        {/* Header with illustration */}
        <div className="bg-gradient-to-r from-gray-50 to-white p-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The AI workspace for work that matters.
          </h2>
          <img
            src="https://ext.same-assets.com/4258207962/2107144549.png"
            alt="AI illustration"
            className="w-20 h-20 object-contain hidden sm:block"
          />
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Plan */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">Business</h3>
                  <span className="text-xs font-medium text-[#eb5757] bg-red-50 px-2 py-0.5 rounded">
                    Recommended
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${Math.round(20 * yearlyDiscount)}
                  </span>
                  <span className="text-gray-500 text-sm">per member / month</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  For growing businesses to streamline teamwork.
                </p>
              </div>

              <button className="w-full sm:w-auto px-6 py-2.5 bg-[#0a85d1] text-white rounded-md font-medium hover:bg-[#0976ba] transition-colors">
                Get started
              </button>

              <div className="space-y-3">
                <p className="font-semibold text-gray-900 text-sm">Everything in Plus, and:</p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Notion Agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>AI Meeting Notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <div>
                      <span>Enterprise Search</span>
                      <div className="flex items-center gap-1 mt-1 flex-wrap">
                        <img src="https://ext.same-assets.com/4258207962/3862525768.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/1626385731.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/2635632619.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/1551934129.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/202955443.svg" alt="" className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ml-1">Beta</span>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>SAML SSO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Granular database permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Verify any page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Private teamspaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Domain verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <div>
                      <span>Premium connections</span>
                      <div className="flex items-center gap-1 mt-1">
                        <img src="https://ext.same-assets.com/4258207962/1715959837.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/2717800339.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/1896055928.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/3499111687.svg" alt="" className="w-4 h-4" />
                        <img src="https://ext.same-assets.com/4258207962/1696512648.svg" alt="" className="w-4 h-4" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="space-y-6 md:border-l md:border-gray-200 md:pl-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
                <div className="mt-2">
                  <span className="text-lg text-gray-600">Custom pricing</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  For organizations to operate with scalability, control, and security.
                </p>
              </div>

              <button className="w-full sm:w-auto px-6 py-2.5 border border-[#0a85d1] text-[#0a85d1] rounded-md font-medium hover:bg-[#0a85d1] hover:text-white transition-colors">
                Contact Sales
              </button>

              <div className="space-y-3">
                <p className="font-semibold text-gray-900 text-sm">Everything in Business, and:</p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Zero data retention with LLM providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>User provisioning (SCIM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Advanced security & controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Audit log</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Customer success manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Security & Compliance connections (DLP, SIEM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Domain management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span>Advanced connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Agents Banner */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Custom Agents</h4>
                <p className="text-sm text-gray-600">
                  AI agents handle repetitive tasks autonomously, so your team doesn't have to.
                  Free to try, then $10 per 1,000 monthly Notion credits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
