"use client";

import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

export default function Contact() {
  const { language } = useLanguage();
  const { contact } = getSiteContent(language);

  return (
    <section
      id="contact"
      className="mx-auto grid w-[92%] scroll-mt-24 border border-t-0 border-[#2b241d] bg-[#11100e] text-white sm:w-[90%] lg:grid-cols-[minmax(0,1fr)_360px]"
    >
      <div className="fade-up px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-16">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
          {contact.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-[#f3eadf] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
          {contact.title.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
          <div className="border border-white/10 bg-[#191613] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">
              {contact.addressTitle}
            </p>
            <p className="mt-3 text-base leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-lg sm:leading-8">
              {contact.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="border border-white/10 bg-[#191613] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">
              {contact.reachTitle}
            </p>
            <p className="mt-3 text-base leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-lg sm:leading-8">
              {contact.reachLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="fade-up delay-1 border-t border-white/10 bg-[#171412] px-4 py-8 sm:px-6 sm:py-10 lg:border-t-0 lg:border-l lg:px-8 lg:py-16">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#b89563] sm:text-[11px] sm:tracking-[0.32em]">
          {contact.hoursEyebrow}
        </p>
        <div className="mt-5 space-y-3 text-sm text-[#d4c4b2]/78 sm:mt-6 sm:space-y-4 sm:text-base">
          {contact.hours.map((item) => (
            <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span>{item.day}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#3c352d] p-4 sm:mt-10 sm:p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">
            {contact.walkInTitle}
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-base sm:leading-8">
            {contact.walkInText}
          </p>
        </div>
      </div>
    </section>
  );
}
