import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const events = [
  {
    phase: "The Beginning",
    title: "Engagement",
    date: "Engagement Completed",
    time: "",
    description:
      "The rings were exchanged, the promise was made, and two hearts officially began their journey together.",
    icon: "♡",
    bg: "bg-[#fbf2e8]",
    featured: false,
  },
  {
    phase: "The Main Event",
    title: "The Wedding",
    date: "September 17, 2026",
    time: "9:00 AM",
    description:
      "The day two hearts become one, surrounded by love, blessings, and the beginning of a beautiful life together.",
    icon: "✦",
    bg: "bg-[#fffdfa]",
    featured: true,
  },
];

export default function Events() {
  return (
    <SectionWrapper id="events" className="bg-[#f0e7dd]">
      <SectionHeading
        eyebrow="Schedule of Events"
        title="The Treatment Plan"
        subtitle="A three-phase clinical procedure uniting two cardiothoracic souls in love."
      />

      {/* Centered cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full items-stretch">
        {events.map((ev) => (
          <div
            key={ev.title}
            data-reveal
            className={`relative ${ev.bg} rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
              ev.featured
                ? "border-2 border-[#c5a059] shadow-[0_12px_36px_rgba(119,90,25,0.12)]"
                : "border border-[#c5a059]/35 hover:border-[#c5a059]/70 shadow-[0_6px_24px_rgba(119,90,25,0.05)]"
            }`}
          >
            {ev.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#775a19] text-[#fff8f3] font-sans text-[8.5px] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap font-medium pointer-events-none">
                Main Event
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                  {ev.phase}
                </span>
                <span
                  className="text-[#c5a059] text-base select-none"
                  aria-hidden="true"
                >
                  {ev.icon}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-2xl md:text-[1.75rem] text-[#775a19] leading-tight font-medium">
                {ev.title}
              </h3>
              <div className="w-7 h-[1.5px] bg-[#c5a059] mt-2.5 mb-4 rounded-full" />

              <p className="font-sans text-[13px] sm:text-sm text-[#4e4639] leading-relaxed mb-6">
                {ev.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#d1c5b4]/50 flex items-center justify-between mt-auto">
              <span className="font-sans text-xs text-[#7f7667]">
                {ev.date}
              </span>
              <span className="font-sans text-xs font-semibold text-[#775a19] tracking-wider">
                {ev.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
