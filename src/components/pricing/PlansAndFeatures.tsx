const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
    <path d="M13.5 4.5L6.5 11.5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface FeatureRowProps {
  feature: string;
  free: React.ReactNode;
  plus: React.ReactNode;
  business: React.ReactNode;
  enterprise: React.ReactNode;
}

function FeatureRow({ feature, free, plus, business, enterprise }: FeatureRowProps) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-4 pr-4 text-sm text-gray-700 font-medium">{feature}</td>
      <td className="py-4 px-4 text-sm text-gray-600 text-center">{free}</td>
      <td className="py-4 px-4 text-sm text-gray-600 text-center">{plus}</td>
      <td className="py-4 px-4 text-sm text-gray-600 text-center">{business}</td>
      <td className="py-4 px-4 text-sm text-gray-600 text-center">{enterprise}</td>
    </tr>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <tr>
      <td colSpan={5} className="pt-8 pb-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</h4>
      </td>
    </tr>
  );
}

export function PlansAndFeatures() {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Plans and features
      </h2>

      {/* Plan Headers - Sticky */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 w-[280px]"></th>
              <th className="py-4 px-4 w-[140px]">
                <div className="text-left">
                  <p className="font-bold text-gray-900">Free</p>
                  <p className="text-sm text-gray-500">$0 per seat/month</p>
                  <button className="mt-2 w-full px-4 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                    Sign up
                  </button>
                </div>
              </th>
              <th className="py-4 px-4 w-[140px]">
                <div className="text-left">
                  <p className="font-bold text-gray-900">Plus</p>
                  <p className="text-sm text-gray-500">$10 per seat/month</p>
                  <button className="mt-2 w-full px-4 py-1.5 bg-[#0a85d1] text-white rounded text-sm font-medium hover:bg-[#0976ba]">
                    Get started
                  </button>
                </div>
              </th>
              <th className="py-4 px-4 w-[140px]">
                <div className="text-left">
                  <p className="font-bold text-gray-900">Business</p>
                  <p className="text-sm text-gray-500">$20 per seat/month</p>
                  <button className="mt-2 w-full px-4 py-1.5 bg-[#0a85d1] text-white rounded text-sm font-medium hover:bg-[#0976ba]">
                    Get started
                  </button>
                </div>
              </th>
              <th className="py-4 px-4 w-[140px]">
                <div className="text-left">
                  <p className="font-bold text-gray-900">Enterprise</p>
                  <p className="text-sm text-gray-500">Contact us →</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Content Section */}
            <SectionHeader title="Content" />
            <FeatureRow
              feature="Pages & blocks"
              free={<span className="text-xs">Unlimited for individuals<br/><span className="text-gray-400">limited for 2+ members</span></span>}
              plus="Unlimited"
              business="Unlimited"
              enterprise="Unlimited"
            />
            <FeatureRow
              feature="File uploads"
              free="Up to 5 MB"
              plus="Unlimited"
              business="Unlimited"
              enterprise="Unlimited"
            />
            <FeatureRow
              feature="Page history"
              free="7 days"
              plus="30 days"
              business="90 days"
              enterprise="Unlimited"
            />
            <FeatureRow
              feature="Verify any page"
              free=""
              plus=""
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Offline"
              free={<span className="text-xs">Choose pages to download for offline use.</span>}
              plus={<span className="text-xs">Recents and Favorites auto-download for offline use.</span>}
              business={<span className="text-xs">Recents and Favorites auto-download for offline use.</span>}
              enterprise={<span className="text-xs">Recents and Favorites auto-download for offline use.</span>}
            />

            {/* Sharing & collaboration Section */}
            <SectionHeader title="Sharing & collaboration" />
            <FeatureRow
              feature="External guest limit"
              free="10"
              plus="Unlimited guests"
              business="Unlimited guests"
              enterprise="Unlimited guests"
            />
            <FeatureRow
              feature="Teamspaces (open & closed)"
              free={<CheckIcon />}
              plus={<CheckIcon />}
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Teamspaces (private)"
              free=""
              plus=""
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Permission groups"
              free={<CheckIcon />}
              plus={<CheckIcon />}
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Advanced teamspace permissions"
              free=""
              plus=""
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Granular database permissions"
              free=""
              plus=""
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />

            {/* Notion AI Section */}
            <SectionHeader title="Notion AI" />
            <FeatureRow
              feature="Notion AI Core (chat, generate, autofill, translate)"
              free="Limited Trial"
              plus="Limited Trial"
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Meeting notes"
              free="Limited Trial"
              plus="Limited Trial"
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Enterprise Search"
              free=""
              plus=""
              business={
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  <img src="https://ext.same-assets.com/4258207962/3862525768.svg" alt="" className="w-4 h-4" />
                  <img src="https://ext.same-assets.com/4258207962/1626385731.svg" alt="" className="w-4 h-4" />
                  <img src="https://ext.same-assets.com/4258207962/2635632619.svg" alt="" className="w-4 h-4" />
                </div>
              }
              enterprise={
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  <img src="https://ext.same-assets.com/4258207962/3862525768.svg" alt="" className="w-4 h-4" />
                  <img src="https://ext.same-assets.com/4258207962/1626385731.svg" alt="" className="w-4 h-4" />
                  <img src="https://ext.same-assets.com/4258207962/2635632619.svg" alt="" className="w-4 h-4" />
                  <img src="https://ext.same-assets.com/4258207962/1551934129.svg" alt="" className="w-4 h-4" />
                </div>
              }
            />
            <FeatureRow
              feature="Research mode"
              free="Limited Trial"
              plus="Limited Trial"
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Data retention"
              free="30 day retention"
              plus="30 day retention"
              business="30 day retention"
              enterprise="Zero data retention"
            />
            <FeatureRow
              feature="Notion Agent"
              free="Limited Trial"
              plus="Limited Trial"
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Custom Agents"
              free=""
              plus=""
              business={<span className="text-xs">Requires Notion credits</span>}
              enterprise={<span className="text-xs">Requires Notion credits</span>}
            />

            {/* Admin & security Section */}
            <SectionHeader title="Admin & security" />
            <FeatureRow
              feature="Export entire workspace as HTML, Markdown, & CSV"
              free={<CheckIcon />}
              plus={<CheckIcon />}
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="SAML single sign-on (SSO)"
              free=""
              plus=""
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="User provisioning (SCIM)"
              free=""
              plus=""
              business=""
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Advanced security & controls"
              free=""
              plus=""
              business=""
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Audit log"
              free=""
              plus=""
              business=""
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Domain Management"
              free=""
              plus=""
              business=""
              enterprise={<CheckIcon />}
            />

            {/* Support Section */}
            <SectionHeader title="Support" />
            <FeatureRow
              feature="Priority support"
              free=""
              plus={<CheckIcon />}
              business={<CheckIcon />}
              enterprise={<CheckIcon />}
            />
            <FeatureRow
              feature="Premium support"
              free=""
              plus=""
              business=""
              enterprise="Custom"
            />
            <FeatureRow
              feature="Customer success manager"
              free=""
              plus=""
              business=""
              enterprise="Custom"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}
