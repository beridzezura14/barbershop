"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto scroll-mt-24 grid w-[92%] border border-t-0 border-[#2b241d] bg-[#11100e] text-white sm:w-[90%] lg:grid-cols-[minmax(0,1fr)_360px]"
    >
      <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-16">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
          კონტაქტი
        </p>
        <h2 className="mt-4 max-w-2xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-[#f3eadf] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
          ეწვიე სტუდიას და
          <br />
          მიიღე გამორჩეული შედეგი.
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
          <div className="border border-white/10 bg-[#191613] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">მისამართი</p>
            <p className="mt-3 text-base leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-lg sm:leading-8">
              ჭავჭავაძის გამზირი 25
              <br />
              ვაკე, თბილისი
            </p>
          </div>

          <div className="border border-white/10 bg-[#191613] p-4 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">დაგვიკავშირდი</p>
            <p className="mt-3 text-base leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-lg sm:leading-8">
              +995 555 12 34 56
              <br />
              contact@barbershop.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#171412] px-4 py-8 sm:px-6 sm:py-10 lg:border-t-0 lg:border-l lg:px-8 lg:py-16">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#b89563] sm:text-[11px] sm:tracking-[0.32em]">სამუშაო საათები</p>
        <div className="mt-5 space-y-3 text-sm text-[#d4c4b2]/78 sm:mt-6 sm:space-y-4 sm:text-base">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <span>ორშაბათი - პარასკევი</span>
            <span>10:00 - 22:00</span>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <span>შაბათი</span>
            <span>10:00 - 21:00</span>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <span>კვირა</span>
            <span>12:00 - 20:00</span>
          </div>
        </div>

        <div className="mt-8 border border-[#3c352d] p-4 sm:mt-10 sm:p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">ადგილზე მოსვლა</p>
          <p className="mt-3 text-[15px] leading-7 text-[#d4c4b2]/78 sm:mt-4 sm:text-base sm:leading-8">
            თუ თავისუფალი დრო გვაქვს, ადგილზე მოსულ სტუმრებსაც ვიღებთ, თუმცა სასურველი დროისთვის წინასწარი ჩაწერა უკეთესია.
          </p>
        </div>
      </div>
    </section>
  );
}
