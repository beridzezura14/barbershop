"use client";

import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

export default function About() {
  const { language } = useLanguage();
  const { about } = getSiteContent(language);

  return (
    <section
      id="about"
      className="mx-auto grid w-[92%] scroll-mt-24 overflow-hidden border border-t-0 border-[#2b241d] bg-[#e6d8c7] text-[#181411] sm:w-[90%] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1fr)]"
    >
      <div className="order-1 flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:order-2 lg:px-14 lg:py-16 fade-up">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.38em]">
          {about.eyebrow}
        </p>

        <h2 className="mt-5 max-w-2xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] sm:mt-6 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.06]">
          {about.title.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#42362b]/82 sm:mt-6 sm:text-base sm:leading-8">
          {about.description}
        </p>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {about.cards.map((card) => (
            <div key={card.title} className="border border-black/10 bg-white/25 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.28em]">
                {card.title}
              </p>
              <p className="mt-3 text-base leading-7 text-[#231d18] sm:mt-4 sm:text-lg sm:leading-8">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-black/10 pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.26em]">
                {stat.label}
              </p>
              <p className="mt-1.5 text-base font-medium sm:mt-2 sm:text-3xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative order-2 min-h-[300px] sm:min-h-[420px] lg:order-1 lg:min-h-full fade-up delay-1">
        <img
          src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1600&q=80"
          alt={about.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,20,17,0.08),rgba(24,20,17,0.28))]" />

        <div className="absolute right-4 bottom-4 left-4 border border-white/10 bg-[#11100e]/72 p-4 text-white backdrop-blur-sm sm:right-6 sm:bottom-6 sm:left-6 sm:p-5 md:right-8 md:bottom-8 md:left-8 md:p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#b89563] sm:text-[11px] sm:tracking-[0.34em]">
            {about.overlayEyebrow}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-lg font-medium leading-7 text-[#f3eadf] sm:text-2xl sm:leading-tight">
              {about.overlayText}
            </p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4c4b2]/70 sm:text-sm sm:tracking-[0.24em]">
              {about.overlayLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
