export function PricingFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Logo and Social */}
        <div className="mb-12">
          <a href="/" className="flex items-center gap-2 mb-6">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#ffffff"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.437 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zM82.903 34.537c0.387 1.75 0 3.5 -1.75 3.7l-2.917 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.9 -0.78z" fill="#000000"/>
            </svg>
            <span className="font-semibold text-xl text-gray-900">Notion</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>

          {/* Language Selector */}
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor"/>
              <path d="M1.5 8H14.5M8 1.5C9.5 3 10.5 5.5 10.5 8C10.5 10.5 9.5 13 8 14.5M8 1.5C6.5 3 5.5 5.5 5.5 8C5.5 10.5 6.5 13 8 14.5" stroke="currentColor"/>
            </svg>
            English (US)
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 block">Do Not Sell or Share My Info</a>
            <a href="#" className="hover:text-gray-700 block">Cookie settings</a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            © 2026 Notion Labs, Inc.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Security</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Status</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Terms & privacy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Your privacy rights</a></li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Download</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">iOS & Android</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Mac & Windows</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Mail</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Calendar</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Web Clipper</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Help center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Community</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Integrations</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Templates</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Partner programs</a></li>
            </ul>
          </div>

          {/* Notion for */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Notion for</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Enterprise</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Small business</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Personal</a></li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 mt-4"
            >
              Explore more
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
