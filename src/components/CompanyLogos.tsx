    const companies = [
    { name: "OpenAI", text: "OpenAI" },
    { name: "Figma", text: "Figma" },
    { name: "ramp", text: "ramp" },
    { name: "CURSOR", text: "CURSOR" },
    { name: "Vercel", text: "Vercel" },
    { name: "NVIDIA", text: "NVIDIA" },
    { name: "VOLVO", text: "VOLVO" },
    { name: "Discord", text: "Discord" },
    { name: "Lovable", text: "Lovable" },
    { name: "1Password", text: "1Password" },
    { name: "affirm", text: "affirm" },
    { name: "RIOT GAMES", text: "RIOT GAMES" },
    { name: "clay", text: "clay" },
    ];
    
    export function CompanyLogos() {
    return (
        <section className="hero-gradient py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-white/50 text-sm mb-8">
            Trusted by 98% of the Forbes Cloud 100
            </p>
        </div>
    
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of logos */}
            {companies.map((company, index) => (
                <div
                key={`${company.name}-1-${index}`}
                className="shrink-0 mx-8 text-white/60 hover:text-white/90 transition-colors"
                >
                <span className="text-lg font-semibold tracking-wide">{company.text}</span>
                <span className="text-white/40 ml-2">•</span>
                </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, index) => (
                <div
                key={`${company.name}-2-${index}`}
                className="shrink-0 mx-8 text-white/60 hover:text-white/90 transition-colors"
                >
                <span className="text-lg font-semibold tracking-wide">{company.text}</span>
                <span className="text-white/40 ml-2">•</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }