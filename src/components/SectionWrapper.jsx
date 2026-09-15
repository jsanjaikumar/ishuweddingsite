export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`section-shell scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-18 md:py-24 ${className}`}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}
