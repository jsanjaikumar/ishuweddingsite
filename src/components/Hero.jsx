import { useEffect, useRef } from "react";
import "./Hero.css";
import FloatingDecorations from "./FloatingDecorations";
import heroStethoscope from "../assets/hero_stethoscope_heart.jpg";
import heroAnatomicalHeart from "../assets/hero_anatomical_heart.jpg";
import heroCornerFlowers from "../assets/hero_corner_flowers.jpg";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Fast, smooth reveal for hero elements
    const reveals = el.querySelectorAll("[data-reveal]");
    reveals.forEach((reveal) => {
      reveal.style.opacity = "0";
      reveal.style.transform = "translateY(16px)";
      reveal.style.transition = "none";
    });

    const timer = setTimeout(() => {
      reveals.forEach((reveal, index) => {
        setTimeout(() => {
          reveal.style.transition =
            "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          reveal.style.opacity = "1";
          reveal.style.transform = "translateY(0)";
        }, index * 90);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fff8f3]">
      {/* 1. Ambient Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft Radial Rose & Champagne Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[50rem] md:w-[65rem] h-[34rem] sm:h-[50rem] md:h-[65rem] rounded-full bg-gradient-to-tr from-[#f8e2de]/40 via-[#faece7]/50 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-[#c5a059]/10 blur-2xl" />

        {/* Faint Center Heart Watermark behind Names */}
        <div className="hero-watermark-heart absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[20rem] sm:w-[30rem] md:w-[40rem] opacity-[0.16]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#c5a059]">
            <path
              d="M100 180 C20 120 10 70 40 35 C65 5 95 20 100 45 C105 20 135 5 160 35 C190 70 180 120 100 180 Z"
              strokeWidth="0.85"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Subtle Top & Bottom Separator Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
      </div>

      {/* 2. Floating Petals & Hearts Layer */}
      <FloatingDecorations section="hero" />

      {/* 3. Left Flank: Rose-Gold Heart-Shaped Stethoscope & Golden EKG Wave */}
      <div
        className="hero-flank-left absolute left-2 lg:left-6 xl:left-12 top-1/2 -translate-y-1/2 pointer-events-none z-[4] hidden md:flex items-center"
        aria-hidden="true"
      >
        <div className="relative flex items-center">
          {/* Stethoscope Illustration with Soft Breathing Animation */}
          <div className="hero-flank-img-box relative w-48 lg:w-64 xl:w-76 aspect-square animate-delicate-float">
            <img
              src={heroStethoscope}
              alt=""
              className="w-full h-full object-contain hero-stethoscope-img"
              loading="eager"
            />
          </div>

          {/* Golden EKG Pulse Line extending toward center */}
          <div className="hero-ekg-line-left -ml-6 lg:-ml-4 w-28 lg:w-40 xl:w-52 h-10 flex items-center">
            <svg viewBox="0 0 160 40" fill="none" className="w-full h-full">
              <path
                d="M 0 20 L 45 20 L 52 14 L 58 26 L 65 6 L 73 34 L 80 20 L 92 20 L 100 15 L 108 24 L 115 20 L 160 20"
                stroke="#c5a059"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ekg-pulse-path"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Right Flank: Vintage Botanical Anatomical Heart with Roses & Golden EKG */}
      <div
        className="hero-flank-right absolute right-2 lg:right-6 xl:right-12 top-1/2 -translate-y-1/2 pointer-events-none z-[4] hidden md:flex items-center justify-end"
        aria-hidden="true"
      >
        <div className="relative flex items-center justify-end">
          {/* Golden EKG Pulse Line extending inward */}
          <div className="hero-ekg-line-right -mr-6 lg:-mr-4 w-28 lg:w-40 xl:w-52 h-10 flex items-center">
            <svg viewBox="0 0 160 40" fill="none" className="w-full h-full">
              <path
                d="M 0 20 L 45 20 L 52 14 L 60 26 L 68 8 L 76 32 L 84 20 L 95 20 L 102 16 L 110 23 L 118 20 L 160 20"
                stroke="#c5a059"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ekg-pulse-path"
              />
            </svg>
          </div>

          {/* Anatomical Heart with Roses Illustration */}
          <div className="hero-flank-img-box relative w-48 lg:w-64 xl:w-76 aspect-square animate-delicate-float-reverse">
            <img
              src={heroAnatomicalHeart}
              alt=""
              className="w-full h-full object-contain hero-anatomical-img"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* 5. Bottom Corners: Bridal Flowers with Translucent Veil Folds */}
      <div
        className="hero-corner-bl absolute -bottom-6 -left-6 w-36 sm:w-52 md:w-64 lg:w-76 aspect-square pointer-events-none z-[3] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={heroCornerFlowers}
          alt=""
          className="w-full h-full object-cover hero-corner-bl-img transform -rotate-12 scale-110"
          loading="lazy"
        />
      </div>

      <div
        className="hero-corner-br absolute -bottom-6 -right-6 w-36 sm:w-48 md:w-60 lg:w-72 aspect-square pointer-events-none z-[3] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={heroCornerFlowers}
          alt=""
          className="w-full h-full object-cover hero-corner-br-img transform scale-x-[-1] rotate-12 scale-105"
          loading="lazy"
        />
      </div>

      {/* 6. Central Hero Content Wrapper */}
      <div
        ref={contentRef}
        className="relative z-10 hero-content-wrapper flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-8 md:py-12"
      >
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow label with golden heart pulses */}
          <div data-reveal className="hero-eyebrow-container flex items-center justify-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-5">
            <div className="hero-eyebrow-line w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <svg viewBox="0 0 24 24" className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#c5a059] fill-current animate-heartbeat-soft">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="hero-label">Two Stories. One Journey.</span>
            <svg viewBox="0 0 24 24" className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#c5a059] fill-current animate-heartbeat-soft">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="hero-eyebrow-line w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>

          {/* Names section */}
          <div data-reveal className="hero-names">
            <h1 className="hero-name">Iswariya</h1>
            <p className="hero-ampersand">&</p>
            <h1 className="hero-name">Vigneswaran</h1>
          </div>

          {/* Divider with tagline */}
          <div data-reveal className="hero-divider">
            <span className="hero-tagline">Forever Begins Here</span>
          </div>

          {/* Romantic Doctor Quote */}
          <p data-reveal className="hero-quote">
            "We diagnosed each other with a severe case of tachycardia, and
            decided the only cure was marriage."
          </p>

          {/* CTA Buttons */}
          <div data-reveal className="hero-buttons">
            <a href="#events" className="hero-button hero-button-primary group">
              <span>View Events</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
            </a>
            <a href="#rsvp" className="hero-button hero-button-secondary group">
              <span>Send Blessings</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
            </a>
          </div>

          {/* Scroll indicator with heartbeat ping */}
          <div data-reveal className="hero-scroll-indicator">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
              <div className="w-px h-7 sm:h-10 bg-gradient-to-b from-[#c5a059] to-transparent animate-pulse-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
