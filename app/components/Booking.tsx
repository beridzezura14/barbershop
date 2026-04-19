"use client";

import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

export default function Booking() {
  const { language } = useLanguage();
  const { booking } = getSiteContent(language);

  return (
    <section
      id="booking"
      className="mx-auto grid w-[92%] scroll-mt-24 border border-t-0 border-[#2b241d] bg-[#ede2d4] text-[#181411] sm:w-[90%] lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="fade-up border-b border-black/10 px-4 py-8 sm:px-6 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-14">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.38em]">
          {booking.eyebrow}
        </p>
        <h2 className="mt-4 text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
          {booking.title.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-[#42362b]/80 sm:mt-6 sm:text-base sm:leading-8">
          {booking.description}
        </p>

        <div className="mt-8 space-y-5 border-t border-black/10 pt-5 sm:mt-10 sm:space-y-6 sm:pt-6">
          {booking.info.map((item) => (
            <div key={item.label}>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.28em]">
                {item.label}
              </p>
              <p className="mt-2 text-base sm:text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-up delay-1 px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        <form className="grid gap-4 sm:gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.fullName}
            </span>
            <input
              type="text"
              placeholder={booking.placeholders.fullName}
              className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.phone}
            </span>
            <input
              type="tel"
              placeholder={booking.placeholders.phone}
              className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.service}
            </span>
            <select className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]">
              {booking.serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.barber}
            </span>
            <select className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]">
              {booking.barberOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.date}
            </span>
            <input
              type="date"
              className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.time}
            </span>
            <input
              type="time"
              className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]"
            />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">
              {booking.labels.message}
            </span>
            <textarea
              rows={5}
              placeholder={booking.placeholders.message}
              className="resize-none border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center bg-[#181411] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b89563] hover:text-black sm:w-auto sm:text-sm sm:tracking-[0.24em]"
            >
              {booking.labels.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
