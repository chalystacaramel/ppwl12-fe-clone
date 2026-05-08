export function Testimonial() {
  return (
    <section className="py-16 border-t border-gray-100 mt-16">
      <div className="max-w-3xl">
        <div className="mb-4">
          <span className="text-xl font-bold text-gray-900">OpenAI</span>
        </div>
        <blockquote className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed mb-6">
          "There's power in a single platform where you can do all your work out of. Notion is that single place."
        </blockquote>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-medium text-gray-900">Nick Erdenberger</p>
            <p className="text-sm text-gray-500">GTM, OpenAI</p>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-4"
        >
          Watch video
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
