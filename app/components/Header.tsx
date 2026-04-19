"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getSiteContent } from "../lib/siteContent";

type SocialIconProps = {
  size?: number;
};

function InstagramIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={size}
      height={size}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={size} height={size}>
      <path d="M13.5 22v-8.2h2.8l.42-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14c-.3-.04-1.3-.14-2.48-.14-2.46 0-4.14 1.5-4.14 4.27v2.39H7.4v3.2h2.73V22h3.37Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={size} height={size}>
      <path d="M16.37 2H13.6v11.18a2.31 2.31 0 1 1-2.31-2.31c.2 0 .4.03.58.08V8.13a5.07 5.07 0 1 0 4.5 5.05V7.46c1.1.8 2.45 1.27 3.9 1.27V5.96A4.52 4.52 0 0 1 16.37 2" />
    </svg>
  );
}

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const content = getSiteContent(language);

  useEffect(() => {
    if (!sidebarOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (sidebarRef.current?.contains(target)) {
        return;
      }

      if (burgerButtonRef.current?.contains(target)) {
        return;
      }

      setSidebarOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [sidebarOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#11100e]/92 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[90%] items-center justify-between gap-3 py-4 pr-4">
        <h1 className="text-[17px] md:text-xl font-medium uppercase tracking-[0.2em] text-[#f3eadf]">
          Barber<span className="text-[#b89563]">Shop</span>
        </h1>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 text-sm lg:flex">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative uppercase tracking-[0.2em] text-[#d4c4b2]/74 transition hover:text-[#f3eadf]"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#b89563] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLanguage("ka")}
              aria-pressed={language === "ka"}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] transition sm:text-xs ${
                language === "ka"
                  ? "bg-[#b89563] text-black"
                  : "text-[#d4c4b2]/74 hover:text-[#f3eadf]"
              }`}
            >
              {content.languageToggle.ka}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`cursor-pointer  rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] transition sm:text-xs ${
                language === "en"
                  ? "bg-[#b89563] text-black"
                  : "text-[#d4c4b2]/74 hover:text-[#f3eadf]"
              }`}
            >
              {content.languageToggle.en}
            </button>
          </div>

          <button
            type="button"
            ref={burgerButtonRef}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-sidebar"
            aria-expanded={sidebarOpen}
            className="group flex w-12 cursor-pointer flex-col gap-[6px] p-4"
          >
            <span className="mr-3 h-[2px] w-9 bg-[#f3eadf] transition-all duration-300 group-hover:mr-0 group-hover:w-12" />
            <span className="ml-3 h-[2px] w-9 bg-[#b89563] transition-all duration-300 group-hover:ml-0 group-hover:w-12" />
          </button>
        </div>
      </div>

      <div
        id="mobile-sidebar"
        ref={sidebarRef}
        aria-hidden={!sidebarOpen}
        className={`fixed inset-y-0 right-0 z-50 h-[100dvh] w-[340px] transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto border-l border-white/10 bg-[#11100e] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 p-[23px]">
            <div />
            <button
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer"
              type="button"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-medium uppercase tracking-[0.16em] text-[#f3eadf]">
              Barber<span className="text-[#b89563]">Shop</span>
            </h1>
            <p className="mt-2 text-sm text-[#d4c4b2]/60">{content.header.description}</p>
          </div>

          <div className="mx-6 border-t border-white/10" />

          <div className="flex flex-col gap-5 border-b border-white/10 p-6 lg:hidden">
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setSidebarOpen(false)}
                className="text-lg uppercase tracking-[0.18em] text-[#f3eadf] transition hover:text-[#b89563]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 p-6 text-sm">
            <div className="flex items-center gap-3 text-[#d4c4b2]/72">
              <Phone size={16} />
              {content.header.phone}
            </div>

            <div className="flex items-center gap-3 text-[#d4c4b2]/72">
              <Mail size={16} />
              {content.header.email}
            </div>

            <div className="flex items-center gap-3 text-[#d4c4b2]/72">
              <MapPin size={16} />
              {content.header.location}
            </div>
          </div>

          <div className="mx-6 border-t border-white/10" />

          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-[#b89563]">{content.header.follow}</p>

            <div className="mt-4 flex gap-3">
              {[InstagramIcon, FacebookIcon, TikTokIcon].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={["Instagram", "Facebook", "TikTok"][index]}
                  className="rounded-xl border border-white/10 p-3 transition hover:border-[#b89563] hover:bg-[#b89563] hover:text-black"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto p-6 text-xs uppercase tracking-[0.18em] text-[#8f7f6b]">
            BarberShop 2026
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}
    </header>
  );
}
