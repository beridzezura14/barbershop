"use client";

export default function MapSection() {
  return (
    <section className="gold-ambient mx-auto w-[92%] overflow-hidden border border-t-0 border-[#2b241d] bg-[#0f0d0b] text-white sm:w-[90%]">
      <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-6 sm:px-6 sm:py-8 md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
            რუკა
          </p>
          <h2 className="mt-3 text-[1.8rem] font-medium leading-[1.15] tracking-[-0.04em] text-[#f3eadf] sm:text-4xl">
            გვიპოვე მარტივად
          </h2>
        </div>

        <div className="text-sm leading-7 text-[#d4c4b2]/78 sm:text-base sm:leading-8 md:text-right">
          <p>ჭავჭავაძის გამზირი 25</p>
          <p>ვაკე, თბილისი, საქართველო</p>
        </div>
      </div>

      <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px] lg:h-[440px]">
        <iframe
          title="BarberShop location map"
          src="https://www.google.com/maps?q=Chavchavadze%20Avenue%2025,%20Tbilisi&z=15&output=embed"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,11,0.08),rgba(15,13,11,0.42))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,149,99,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(184,149,99,0.12),transparent_24%)]" />

        <div className="hidden lg:block absolute right-4 bottom-4 left-4 border border-white/10 bg-[#11100e]/78 p-4 text-white backdrop-blur-sm sm:right-6 sm:bottom-6 sm:left-auto sm:max-w-[320px] sm:p-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#b89563] sm:text-[11px] sm:tracking-[0.3em]">
            BarberShop
          </p>
          <p className="mt-3 text-base leading-7 text-[#f3eadf] sm:text-lg sm:leading-8">
            ჭავჭავაძის გამზირი 25, ვაკე, თბილისი
          </p>
          <p className="mt-3 text-sm text-[#d4c4b2]/72">
            მარტივი მისადგომი ლოკაცია ყოველდღიური ვიზიტებისთვის.
          </p>
        </div>
      </div>
    </section>
  );
}
