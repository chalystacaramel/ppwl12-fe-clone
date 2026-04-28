import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Product",
    dropdown: ["Notion AI", "Docs", "Wikis", "Projects", "Calendar", "Sites"],
  },
  {
    label: "AI",
    dropdown: ["AI Features", "Custom Agents", "Enterprise Search", "AI Meeting Notes"],
  },
  {
    label: "Solutions",
    dropdown: ["For Teams", "For Enterprise", "For Startups", "For Personal"],
  },
  {
    label: "Resources",
    dropdown: ["Blog", "Help Center", "Community", "Templates", "Integrations"],
  },
  { label: "Enterprise", dropdown: [] },
  { label: "Pricing", dropdown: [] },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {showBanner && (
        <div className="bg-white border-b border-gray-100 py-2.5 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-gray-700">
              Developers: Get a first look at our new Developer Platform on May 13.{" "}
              <a href="#" className="text-[#37a1bf] hover:underline inline-flex items-center">
                Register today <span className="ml-1">→</span>
              </a>
            </p>
            <button type="button" className="text-gray-400 hover:text-gray-600 hidden sm:block" onClick={() => setShowBanner(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="text-white">
                <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.894.036 68.147-.357 61.35.227zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083z" fill="#191d3a"/>
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button type="button" className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium px-3 py-2 transition-colors rounded-lg hover:bg-white/10">
                    {item.label}
                    {item.dropdown.length > 0 && <ChevronDown className="w-3 h-3" />}
                  </button>
                  {item.dropdown.length > 0 && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-48 z-50">
                      {item.dropdown.map((subItem) => (
                        <a key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              <a href="#" className="hidden sm:inline-flex btn-primary text-sm">Get Notion free</a>
              <a href="#" className="hidden sm:inline-flex text-white/80 hover:text-white text-sm font-medium transition-colors">Log in</a>
              <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white lg:hidden">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-[#0a0f2e] border-t border-white/10 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href="#" className="block text-white/80 hover:text-white text-sm font-medium py-2">{item.label}</a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a href="#" className="btn-primary text-center">Get Notion free</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium text-center py-2">Log in</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}