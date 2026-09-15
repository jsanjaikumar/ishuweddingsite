export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className = "",
}) {
  return (
    <div
      data-reveal
      className={`text-center w-full max-w-3xl mx-auto px-4 mb-8 sm:mb-10 md:mb-12 ${className}`}
    >
      {eyebrow && (
        <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#c5a059] mb-2 sm:mb-2.5 font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium leading-[1.22] tracking-[-0.01em] text-balance ${
          dark ? "text-[#f6ece3]" : "text-[#775a19]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-xs sm:text-sm mt-2 sm:mt-2.5 max-w-[42ch] mx-auto leading-relaxed ${
            dark ? "text-[#d1c5b4]/80" : "text-[#4e4639]"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Centered subtle decorative gold element matching Doctor section */}
      <div
        className="flex items-center justify-center mt-3.5 sm:mt-4"
        aria-hidden="true"
      >
        <div className="w-9 sm:w-12 h-[1.5px] rounded-full bg-gradient-to-r from-[#c5a059]/30 via-[#c5a059] to-[#c5a059]/30" />
      </div>
    </div>
  );
}
