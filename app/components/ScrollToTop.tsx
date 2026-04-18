"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ზემოთ ასვლა"
      className={`fixed right-5 bottom-5 z-50 inline-flex h-12 w-12 items-center justify-center border border-[#b89563]/40 bg-[#11100e]/88 text-[#f3eadf] backdrop-blur-md transition-all duration-300 hover:border-[#b89563] hover:bg-[#b89563] hover:text-black ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
