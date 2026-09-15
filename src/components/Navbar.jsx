import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Our Story", href: "#story" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Venue", href: "#venue" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#fff8f3]/95 backdrop-blur-md shadow-sm border-b border-[#d1c5b4]/30"
            : "bg-transparent"
        }`}
      >
        <div className="site-container h-14 sm:h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-base sm:text-lg text-[#775a19] tracking-[0.2em] uppercase select-none"
          >
            I <span className="text-[#c5a059]">&</span> V
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#4e4639] hover:text-[#c5a059] transition-colors duration-300 py-1"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer flex-shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#775a19] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#775a19] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#775a19] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden overflow-x-clip">
          <div
            className="absolute inset-0 bg-[#1f1b15]/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-[100dvh] w-[min(20rem,calc(100vw-1rem))] bg-[#fff8f3] shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-14 border-b border-[#d1c5b4]/30">
              <span className="font-serif text-[#775a19] tracking-[0.2em] uppercase text-sm">
                I <span className="text-[#c5a059]">&</span> V
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-[#775a19]"
                aria-label="Close menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="flex items-center gap-3 py-4 border-b border-[#d1c5b4]/20 font-sans text-xs uppercase tracking-[0.2em] text-[#4e4639] hover:text-[#c5a059] transition-colors duration-300 animate-fade-in-up"
                >
                  <span className="text-[#c5a059] text-xs">✦</span>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="px-6 pb-10 pt-6">
              <p className="font-serif italic text-[#7f7667] text-sm text-center">
                December 18, 2024
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
