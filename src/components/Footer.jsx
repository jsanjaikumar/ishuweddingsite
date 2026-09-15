export default function Footer() {
  const links = [
    { label: "Our Story", href: "#story" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Venue", href: "#venue" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <footer className="bg-[#1f1b15] w-full py-12 sm:py-16 md:py-20 relative overflow-clip">
      <div className="site-container">
        <div className="divider-gold opacity-20 mb-8 sm:mb-10 max-w-4xl mx-auto" />

        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-3xl mx-auto">
          <div>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f6ece3] mb-1 font-medium">
              Ishwarya <span className="text-[#c5a059] italic">&</span> Vigneswaran
            </p>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#c5a059]/90 mt-2 font-medium">
              September 17, 2026
            </p>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="min-h-[44px] inline-flex items-center justify-center px-3 py-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#d1c5b4]/70 hover:text-[#c5a059] transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="font-sans text-xs text-[#7f7667]">
           JEA Lucky Palace A/C Melur Main Road, Uthankudi, Madurai
          </p>
        </div>

        {/* Subtle Heart / EKG Wave Line */}
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 opacity-45" aria-hidden="true">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
          <svg viewBox="0 0 48 20" className="w-8 sm:w-10 h-3.5 text-[#c5a059]" fill="none">
            <path
              d="M 0 10 L 14 10 L 18 4 L 22 16 L 26 2 L 30 18 L 34 10 L 48 10"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="w-12 sm:w-24 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
        </div>

        <div className="divider-gold opacity-20 mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-4xl mx-auto" />

        <div className="text-center flex flex-col items-center gap-3">
          <p className="font-serif italic text-[#d1c5b4] text-sm sm:text-base">
            "Two doctors, one prescription — a lifetime of love."
          </p>
          <p className="font-sans text-[8.5px] uppercase tracking-[0.2em] text-[#7f7667]">
            Made with love for the happy couple
          </p>
        </div>
      </div>
    </footer>
  );
}
