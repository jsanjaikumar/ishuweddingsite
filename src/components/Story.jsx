import "./Story.css";
import iswariyaImg from "../assets/ishu_img_pro.png";
import vigneswaranImg from "../assets/ishu_img_groom.png";

const profiles = [
  {
    name: "Dr. Iswariya",
    role: "Chief of Stealing Hearts",
    image: iswariyaImg,
    alt: "Dr. Iswariya",
  },
  {
    name: "Dr. Vigneswaran",
    role: "Lead Romance Consultant",
    image: vigneswaranImg,
    alt: "Dr. Vigneswaran",
  },
];

export default function Story() {
  return (
    <section id="story" className="cardiac-section scroll-mt-20">
      {/* Background ambient lighting matching Hero */}
      <div className="cardiac-ambient-bg" aria-hidden="true">
        <div className="cardiac-glow-center" />
        <div className="cardiac-glow-gold" />
      </div>

      <div className="cardiac-container">
        {/* Section Heading */}
        <div data-reveal className="cardiac-header">
          <h2 className="cardiac-heading">
            Cardiac Surgeons of Our Own
            <span className="cardiac-heading-break"> Hearts</span>
          </h2>

          {/* Centered subtle decorative gold cardiac EKG + medical cross element */}
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 opacity-75" aria-hidden="true">
            <div className="w-8 sm:w-14 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <svg viewBox="0 0 48 20" className="w-8 sm:w-10 h-3.5 sm:h-4 text-[#c5a059]" fill="none">
              <path
                d="M 0 10 L 12 10 L 16 4 L 20 16 L 24 2 L 28 18 L 32 10 L 48 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#c5a059] text-[10px] sm:text-xs">✚</span>
            <div className="w-8 sm:w-14 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>
        </div>

        {/* Profiles Layout */}
        <div className="cardiac-profiles-wrapper">
          {/* Subtle medical lifeline / golden center axis on mobile */}
          <div className="cardiac-lifeline" aria-hidden="true" />

          {/* Profiles: Clean single column on mobile, balanced 2-column on desktop */}
          <div className="cardiac-profiles-grid">
            {profiles.map((person) => (
              <div
                key={person.name}
                data-reveal
                className="cardiac-profile-item"
              >
                {/* Profile Portrait Card */}
                <div className="cardiac-card-frame">
                  <div className="cardiac-card-img-wrapper">
                    <img
                      src={person.image}
                      alt={person.alt}
                      className="cardiac-card-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Profile Information */}
                <h3 className="cardiac-profile-name">{person.name}</h3>
                <p className="cardiac-profile-role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Romantic Quote */}
        <div data-reveal className="cardiac-quote-wrapper">
          <div className="divider-gold mb-6 sm:mb-8 opacity-45" />
          <p className="cardiac-quote-text">
            "Two doctors who spent years studying the heart — only to discover
            they hadn't truly understood it until they found each other."
          </p>
          <div className="divider-gold mt-6 sm:mt-8 opacity-45" />
        </div>
      </div>
    </section>
  );
}
