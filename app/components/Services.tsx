"use client";

import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

export default function Services() {
  const { language } = useLanguage();
  const { services } = getSiteContent(language);

  return (
    <section
      id="services"
      className="mx-auto w-[92%] scroll-mt-24 border border-t-0 border-[#2b241d] bg-[#13110f] px-4 py-10 text-white sm:w-[90%] sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-16"
    >
      <div className="fade-up flex flex-col gap-4 border-b border-white/10 pb-6 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
            {services.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
            {services.title.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>

        <p className="max-w-md text-[15px] leading-7 text-[#d4c4b2]/75 sm:text-base sm:leading-8">
          {services.description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
        {services.items.map((service) => (
          <article
            key={service.title}
            className="gold-card gold-shimmer fade-up delay-1 border border-white/10 bg-[#191613] p-4 transition hover:border-[#b89563]/40 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4 sm:gap-4 sm:pb-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">
                  {services.cardEyebrow}
                </p>
                <h3 className="mt-2 text-xl font-medium text-[#f3eadf] sm:mt-3 sm:text-2xl">
                  {service.title}
                </h3>
              </div>
              <span className="text-lg font-medium text-[#b89563] sm:text-xl">{service.price}</span>
            </div>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#d4c4b2]/72 sm:mt-5 sm:text-base sm:leading-8">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
