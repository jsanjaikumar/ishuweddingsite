import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const details = [
  { label: "Date", value: "Sep 17, 2026" },
  { label: "Ceremony", value: "9:00 AM - 10:45 AM" },
  { label: "City", value: "Madurai" },
  { label: "Dress Code", value: "Festive Formals" },
];
// September 17, 2026 — JEA Lucky Palace A/C Melur Main Road, Uthankudi, Madurai
export default function Venue() {
  return (
    <SectionWrapper id="venue" className="bg-[#f0e7dd]">
      <SectionHeading
        eyebrow="The Venue"
        title="The Operating Theater"
        subtitle="JEA Lucky Palace Melur Main Road, Uthankudi, Madurai — Where two medical careers surrender to one eternal vow."
      />

      <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Centered Venue Photo Frame */}
        <div data-reveal className="w-full max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="relative p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-[#fffdfa] border border-[#c5a059]/60 shadow-[0_10px_30px_rgba(119,90,25,0.08)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#e9dfd5]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80"
                alt="JEA Lucky Palace Wedding Venue"
                className="w-full h-full object-cover img-warm transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Centered Supporting Description */}
        <div data-reveal className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-[2rem] text-[#775a19] leading-tight mb-2 font-medium">
            JEA Lucky Palace
          </h3>
          <p className="font-sans text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.2em] text-[#c5a059] mb-4 font-medium">
            Melur Main Road, Uthankudi, Madurai
          </p>
          <div className="divider-gold opacity-40 max-w-xs mx-auto mb-5" />
          <p className="font-sans text-[13px] sm:text-sm text-[#4e4639] leading-relaxed max-w-xl mx-auto">
            Where two medical careers surrender to one eternal vow.
          </p>
        </div>

        {/* Centered Venue Details Grid */}
        <div
          data-reveal
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto w-full mb-8 sm:mb-10"
        >
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-[#fffdfa]/80 border border-[#c5a059]/35 rounded-xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center shadow-sm"
            >
              <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#7f7667] mb-1 font-medium">
                {d.label}
              </p>
              <p className="font-serif text-[#1f1b15] text-base sm:text-lg font-medium leading-snug">
                {d.value}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Open in Maps Button */}
        <div data-reveal className="flex justify-center w-full">
          <a
            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMjM2ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVfxcTZfxQA7MfqXW3qnG-2t&daddr=52C,+Melur+Main+Rd,+Muthia+Nagar,+Uthangudi,+Madurai,+Tamil+Nadu+625020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-[#775a19] border-2 border-[#c5a059] bg-[#fffdfa] px-8 sm:px-10 py-3.5 min-h-[48px] w-full sm:w-auto hover:bg-[#c5a059] hover:text-white active:bg-[#775a19] transition-all duration-300 shadow-sm"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Open in Maps
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
