"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

export default function Hero() {
  const { language } = useLanguage();
  const { hero } = getSiteContent(language);

  return (
    <section
      id="home"
      className="mx-auto mt-24 grid w-[92%] scroll-mt-28 overflow-hidden border border-[#2b241d] bg-[#11100e] text-white sm:w-[90%] lg:mt-28 lg:min-h-[760px] lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1fr)]"
    >
      <div className="relative flex flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,132,76,0.16),transparent_30%)]" />

        <div className="relative z-10 fade-up">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 max-w-xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-[#f3eadf] sm:mt-7 sm:text-5xl sm:leading-[1.08] md:text-7xl md:leading-[1.02]">
            {hero.title.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#d4c4b2]/78 sm:mt-7 sm:text-base sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#booking"
              className="inline-flex w-full items-center justify-center bg-[#b89563] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-[#cfab77] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.24em]"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center border border-[#3c352d] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#f3eadf] transition hover:border-[#b89563] hover:text-[#b89563] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.24em]"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="fade-up delay-1 relative z-10 mt-10 grid grid-cols-3 gap-2 border-t border-[#2d2823] pt-5 sm:mt-12 sm:gap-4 sm:pt-6">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#9a866b] sm:text-[11px] sm:tracking-[0.26em]">
                {stat.label}
              </p>
              <p className="mt-1.5 text-xl font-medium text-[#f3eadf] sm:mt-2 sm:text-3xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1600&q=80"
          alt={hero.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,14,0.08),rgba(17,16,14,0.44))]" />

        <div className="absolute right-4 bottom-4 left-4 border border-white/10 bg-black/45 p-4 backdrop-blur-sm sm:right-6 sm:bottom-6 sm:left-6 sm:p-5 md:right-8 md:bottom-8 md:left-8 md:p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#b89563] sm:text-[11px] sm:tracking-[0.34em]">
            {hero.featuredEyebrow}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-lg font-medium leading-7 text-[#f3eadf] sm:text-2xl sm:leading-tight">
              {hero.featuredText}
            </p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4c4b2]/70 sm:text-sm sm:tracking-[0.24em]">
              {hero.featuredLocation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
