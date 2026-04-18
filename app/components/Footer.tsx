"use client";

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 w-[92%] border border-t-0 border-[#2b241d] bg-[#0d0c0a] px-4 py-6 text-white sm:mb-10 sm:w-[90%] sm:px-6 sm:py-8 md:px-10 lg:px-14">
      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xl font-medium uppercase tracking-[0.12em] text-[#f3eadf] sm:text-2xl sm:tracking-[0.16em]">
            Barber<span className="text-[#b89563]">Shop</span>
          </p>
          <p className="mt-3 max-w-md text-[14px] leading-6 text-[#d4c4b2]/72 sm:text-sm sm:leading-7">
            პრემიუმ შეჭრა, დახვეწილი მოვლა და თანამედროვე ბარბერ გამოცდილება, შექმნილი გამორჩეული შედეგისთვის.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-[#d4c4b2]/72 sm:gap-x-8 sm:gap-y-3 sm:text-sm sm:tracking-[0.18em]">
          <a href="#home" className="transition hover:text-[#b89563]">მთავარი</a>
          <a href="#about" className="transition hover:text-[#b89563]">ჩვენს შესახებ</a>
          <a href="#services" className="transition hover:text-[#b89563]">სერვისები</a>
          <a href="#booking" className="transition hover:text-[#b89563]">ჩაწერა</a>
          <a href="#contact" className="transition hover:text-[#b89563]">კონტაქტი</a>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-[#9f917f] sm:mt-8 sm:gap-3 sm:pt-6 sm:text-sm md:flex-row md:items-center md:justify-between">
        <p>2026 BarberShop. ყველა უფლება დაცულია.</p>
        <p>თბილისი, საქართველო</p>
      </div>
    </footer>
  );
}
