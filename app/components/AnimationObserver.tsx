"use client";

import { useEffect } from "react";

export default function AnimationObserver() {
  useEffect(() => {
    const animatedElements = new Set<HTMLElement>();

    const markVisible = (element: HTMLElement) => {
      element.classList.add("is-visible");
      observer.unobserve(element);
      animatedElements.delete(element);
    };

    const observeElement = (element: HTMLElement) => {
      if (element.classList.contains("is-visible") || animatedElements.has(element)) {
        return;
      }

      animatedElements.add(element);
      observer.observe(element);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          markVisible(entry.target as HTMLElement);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    const scanAnimatedElements = () => {
      document.querySelectorAll<HTMLElement>(".fade-up").forEach((element) => {
        observeElement(element);
      });
    };

    scanAnimatedElements();

    const mutationObserver = new MutationObserver(() => {
      scanAnimatedElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    const fallbackTimeout = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".fade-up:not(.is-visible)").forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isNearViewport = rect.top < window.innerHeight * 1.15;

        if (isNearViewport) {
          markVisible(element);
        }
      });
    }, 700);

    return () => {
      window.clearTimeout(fallbackTimeout);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
