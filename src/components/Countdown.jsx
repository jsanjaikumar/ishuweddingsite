import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const TARGET_DATE = new Date("2026-09-17T09:00:00");

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-[#28221b]/70 border border-[#c5a059]/30 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#c5a059]/60 w-full min-w-0">
      <span className="font-serif text-xl sm:text-3xl md:text-5xl lg:text-6xl text-[#e9c176] tabular-nums font-normal leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-[7.5px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#d1c5b4]/80 mt-1.5 sm:mt-2.5 md:mt-3 font-medium text-center truncate w-full">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE - new Date();
      if (diff <= 0) {
        setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-shell bg-[#1f1b15] w-full py-14 sm:py-18 md:py-24 relative overflow-clip">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[32rem] h-72 sm:h-96 md:h-[32rem] rounded-full bg-[#c5a059]/8 blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <SectionHeading
          eyebrow="Until We Say 'I Do' — Stat!"
          title="The Countdown Has Begun"
          subtitle="Every beat brings us closer to our forever procedure."
          dark={true}
        />

        {/* Subtle heartbeat pulse indicator */}
        <div data-reveal className="flex items-center justify-center gap-3 -mt-3 mb-6 sm:mb-8 opacity-75">
          <div className="w-10 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#c5a059]/60" />
          <svg viewBox="0 0 24 24" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#e9c176] fill-current animate-heartbeat-soft">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="w-10 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#c5a059]/60" />
        </div>

        {/* 4-column single row countdown - strictly remains 4 columns at all screen sizes */}
        <div
          data-reveal
          className="grid grid-cols-4 items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto w-full"
          style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
        >
          <Unit value={t.days} label="Days" />
          <Unit value={t.hours} label="Hours" />
          <Unit value={t.minutes} label="Minutes" />
          <Unit value={t.seconds} label="Seconds" />
        </div>

        {/* Date and schedule information below countdown, strictly centered */}
        <div
          data-reveal
          className="mt-8 sm:mt-12 max-w-xl mx-auto text-center"
        >
          <div className="divider-gold opacity-25 mb-4 sm:mb-6" />
          <p className="font-serif italic text-[#d1c5b4] text-sm sm:text-base md:text-lg leading-relaxed">
            September 17, 2026 — JEA Lucky Palace A/C Melur Main Road, Uthankudi, Madurai
          </p>
          <div className="divider-gold opacity-25 mt-4 sm:mt-6" />
        </div>
      </div>
    </section>
  );
}
