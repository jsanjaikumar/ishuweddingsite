import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import ishu1 from "../assets/ishu_1.jpeg";
import ishu2 from "../assets/ishu_7.jpeg";
import ishu3 from "../assets/ishu_3.jpeg";
import ishu4 from "../assets/ishu_4.jpeg";
import ishu5 from "../assets/ishu_5.jpeg";
import ishu6 from "../assets/ishu_6.jpeg";

const photos = [
  {
    src: ishu1,
    alt: "",
  },
  {
    src: ishu2,
    alt: "",
  },
  {
    src: ishu3,
    alt: "",
  },
  {
    src: ishu4,
    alt: "",
  },
  {
    src: ishu5,
    alt: "",
  },
  {
    src: ishu6,
    alt: "",
  },
];

function Photo({ src, alt, className = "", rounded = "rounded-xl" }) {
  return (
    <div
      data-reveal
      className={`group relative overflow-hidden bg-[#e9dfd5] border border-[#c5a059]/30 shadow-[0_4px_16px_rgba(119,90,25,0.06)] ${rounded} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover img-warm transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b15]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5 sm:p-4 pointer-events-none">
        <p className="font-serif italic text-white text-xs sm:text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {alt}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-[#fff8f3]">
      <SectionHeading
        eyebrow="Our Moments"
        title="Clinical Trials"
        subtitle="Documented evidence of two lives becoming one through every shared smile."
      />

      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-5xl mx-auto">
        {/* Top Two Featured Moments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
          <Photo
            src={photos[0].src}
            alt={photos[0].alt}
            className="aspect-[4/3]"
            rounded="rounded-2xl"
          />
          <Photo
            src={photos[1].src}
            alt={photos[1].alt}
            className="aspect-[4/3]"
            rounded="rounded-2xl"
          />
        </div>

        {/* Bottom Grid of Four Moments */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {photos.slice(2).map((p) => (
            <Photo
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className="aspect-square"
              rounded="rounded-xl sm:rounded-2xl"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
