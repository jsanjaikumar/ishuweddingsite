import React, { useMemo } from "react";
import "./FloatingDecorations.css";

// SVG Petal Component with soft gradient
export function FloatingPetal({ style, className = "", variant = 1 }) {
  return (
    <div
      className={`floating-petal pointer-events-none absolute select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full transform-gpu"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`petal-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf0ed" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f7c5be" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e5988d" stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id={`petal-sheen-${variant}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#df8e82" stopOpacity="0" />
          </radialGradient>
        </defs>
        {variant === 1 ? (
          <path
            d="M20 2 C28 4 38 14 36 26 C34 35 24 38 18 37 C10 36 3 28 4 18 C5 8 13 1 20 2 Z"
            fill={`url(#petal-grad-${variant})`}
          />
        ) : (
          <path
            d="M18 3 C26 1 37 9 37 22 C37 32 28 38 20 38 C11 38 3 30 3 20 C3 8 11 4 18 3 Z"
            fill={`url(#petal-grad-${variant})`}
          />
        )}
        <path
          d="M20 2 C28 4 38 14 36 26 C34 35 24 38 18 37"
          fill={`url(#petal-sheen-${variant})`}
        />
      </svg>
    </div>
  );
}

// SVG Heart Component (filled or outline with soft glow)
export function FloatingHeart({ style, className = "", outline = false, size = 16 }) {
  return (
    <div
      className={`floating-heart pointer-events-none absolute select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
        className="transform-gpu"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heart-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8988d" />
            <stop offset="100%" stopColor="#c5a059" />
          </linearGradient>
        </defs>
        {outline ? (
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="url(#heart-glow-grad)"
            strokeWidth="1.2"
            strokeOpacity="0.6"
            fill="none"
          />
        ) : (
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heart-glow-grad)"
            fillOpacity="0.45"
          />
        )}
      </svg>
    </div>
  );
}

// Sparkle Star Component
export function SparkleIcon({ style, className = "", size = 12 }) {
  return (
    <div
      className={`floating-sparkle pointer-events-none absolute select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z"
          fill="#c5a059"
          fillOpacity="0.55"
        />
      </svg>
    </div>
  );
}

// EKG Line Motif
export function CardiacEKGLine({ className = "", animated = true }) {
  return (
    <div className={`cardiac-ekg-wrapper pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 500 50"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ekg-gold-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c5a059" stopOpacity="0" />
            <stop offset="15%" stopColor="#c5a059" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#c5a059" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#c5a059" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 25 L 140 25 L 155 25 L 165 14 L 175 36 L 185 8 L 195 42 L 205 25 L 220 25 L 230 20 C 235 15, 245 15, 250 20 C 255 15, 265 15, 270 20 L 270 25 L 285 25 L 295 12 L 305 38 L 315 16 L 325 32 L 335 25 L 500 25"
          stroke="url(#ekg-gold-fade)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? "ekg-pulse-path" : ""}
        />
      </svg>
    </div>
  );
}

export default function FloatingDecorations({ section = "global" }) {
  // Generate stable petal particles
  const petals = useMemo(() => {
    const list = [];
    // Hero gets distinct high-aesthetic petals
    if (section === "hero") {
      const heroPetals = [
        { left: "4%", top: "15%", size: 28, delay: "0s", duration: "18s", blur: "0px", opacity: 0.75 },
        { left: "12%", top: "42%", size: 22, delay: "3s", duration: "16s", blur: "0px", opacity: 0.7 },
        { left: "22%", top: "78%", size: 34, delay: "1s", duration: "20s", blur: "1px", opacity: 0.8 },
        { left: "80%", top: "12%", size: 26, delay: "4s", duration: "17s", blur: "0px", opacity: 0.7 },
        { left: "88%", top: "35%", size: 36, delay: "2s", duration: "22s", blur: "2px", opacity: 0.65 },
        { left: "75%", top: "72%", size: 24, delay: "5s", duration: "19s", blur: "0px", opacity: 0.75 },
        { left: "48%", top: "85%", size: 30, delay: "6s", duration: "21s", blur: "1px", opacity: 0.6 },
      ];
      return heroPetals;
    }
    return list;
  }, [section]);

  // Generate stable hearts
  const hearts = useMemo(() => {
    if (section === "hero") {
      return [
        { left: "8%", top: "28%", size: 18, delay: "0.5s", duration: "14s", outline: false },
        { left: "18%", top: "58%", size: 14, delay: "2.5s", duration: "16s", outline: true },
        { left: "28%", top: "22%", size: 20, delay: "4s", duration: "15s", outline: false },
        { left: "72%", top: "26%", size: 16, delay: "1.5s", duration: "18s", outline: false },
        { left: "82%", top: "62%", size: 22, delay: "3.5s", duration: "13s", outline: true },
        { left: "68%", top: "76%", size: 15, delay: "5s", duration: "17s", outline: false },
        { left: "50%", top: "92%", size: 18, delay: "2s", duration: "19s", outline: false },
      ];
    }
    return [];
  }, [section]);

  return (
    <div className="floating-decorations-container pointer-events-none absolute inset-0 overflow-hidden select-none z-[2]">
      {/* Petals */}
      {petals.map((p, i) => (
        <FloatingPetal
          key={`petal-${i}`}
          variant={(i % 2) + 1}
          className="petal-anim"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            filter: p.blur !== "0px" ? `blur(${p.blur})` : undefined,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Hearts */}
      {hearts.map((h, i) => (
        <FloatingHeart
          key={`heart-${i}`}
          size={h.size}
          outline={h.outline}
          className="heart-anim"
          style={{
            left: h.left,
            top: h.top,
            animationDelay: h.delay,
            animationDuration: h.duration,
          }}
        />
      ))}
    </div>
  );
}
