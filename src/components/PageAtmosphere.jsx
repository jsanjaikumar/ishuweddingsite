import { useEffect } from "react";
import { FloatingPetal, FloatingHeart, SparkleIcon } from "./FloatingDecorations";

const globalPetals = [
  { left: "5%", top: "8%", size: 24, duration: "22s", delay: "0s", opacity: 0.6 },
  { left: "92%", top: "14%", size: 28, duration: "26s", delay: "4s", opacity: 0.55 },
  { left: "12%", top: "34%", size: 22, duration: "20s", delay: "7s", opacity: 0.65 },
  { left: "86%", top: "48%", size: 30, duration: "25s", delay: "2s", opacity: 0.5 },
  { left: "7%", top: "68%", size: 26, duration: "24s", delay: "8s", opacity: 0.6 },
  { left: "90%", top: "82%", size: 24, duration: "21s", delay: "3s", opacity: 0.55 },
];

const globalHearts = [
  { left: "8%", top: "22%", size: 16, duration: "16s", delay: "1s", outline: false },
  { left: "94%", top: "30%", size: 14, duration: "18s", delay: "5s", outline: true },
  { left: "10%", top: "54%", size: 18, duration: "17s", delay: "3s", outline: true },
  { left: "88%", top: "66%", size: 15, duration: "19s", delay: "9s", outline: false },
  { left: "6%", top: "88%", size: 17, duration: "15s", delay: "6s", outline: false },
];

const globalSparkles = [
  { left: "15%", top: "18%", size: 14, delay: "0s" },
  { left: "82%", top: "25%", size: 12, delay: "1.5s" },
  { left: "20%", top: "62%", size: 13, delay: "2.5s" },
  { left: "80%", top: "78%", size: 15, delay: "3.5s" },
];

export default function PageAtmosphere() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "60px 0px 60px 0px", threshold: 0.02 }
    );

    const observeAll = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    };

    observeAll();
    const timer = setTimeout(observeAll, 100);

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Subtle floating petals across the entire site */}
      {globalPetals.map((p, i) => (
        <FloatingPetal
          key={`glob-petal-${i}`}
          variant={(i % 2) + 1}
          className="petal-anim"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Floating subtle hearts */}
      {globalHearts.map((h, i) => (
        <FloatingHeart
          key={`glob-heart-${i}`}
          size={h.size}
          outline={h.outline}
          className="heart-anim"
          style={{
            left: h.left,
            top: h.top,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        />
      ))}

      {/* Delicate golden sparkles */}
      {globalSparkles.map((s, i) => (
        <SparkleIcon
          key={`glob-sparkle-${i}`}
          size={s.size}
          className="sparkle-anim"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Subtle top and bottom gold ambient edge lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/15 to-transparent" />
    </div>
  );
}
