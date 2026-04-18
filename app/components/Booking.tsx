"use client";

export default function Booking() {
  return (
    <section
      id="booking"
      className="mx-auto scroll-mt-24 grid w-[92%] border border-t-0 border-[#2b241d] bg-[#ede2d4] text-[#181411] sm:w-[90%] lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="border-b border-black/10 px-4 py-8 sm:px-6 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-14">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.38em]">
          ჩაწერა
        </p>
        <h2 className="mt-4 text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
          დაჯავშნე შენი ვიზიტი
          <br />
          რამდენიმე მარტივ ნაბიჯში.
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-[#42362b]/80 sm:mt-6 sm:text-base sm:leading-8">
          აირჩიე სასურველი სერვისი, დრო და დანარჩენს ჩვენ მივხედავთ.
        </p>

        <div className="mt-8 space-y-5 border-t border-black/10 pt-5 sm:mt-10 sm:space-y-6 sm:pt-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.28em]">
              საათები
            </p>
            <p className="mt-2 text-base sm:text-lg">ორშაბათი - კვირა / 10:00 - 22:00</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.28em]">
              ტელეფონი
            </p>
            <p className="mt-2 text-base sm:text-lg">+995 555 12 34 56</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d6d47] sm:text-[11px] sm:tracking-[0.28em]">
              ლოკაცია
            </p>
            <p className="mt-2 text-base sm:text-lg">ვაკე, თბილისი</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        <form className="grid gap-4 sm:gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">სრული სახელი</span>
            <input type="text" placeholder="შენი სახელი და გვარი" className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">ტელეფონი</span>
            <input type="tel" placeholder="+995 5__ __ __ __" className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">სერვისი</span>
            <select className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]">
              <option>სტანდარტული თმა</option>
              <option>სტანდარტული თმა/წვერი</option>
              <option>არასტანდარტული თმა</option>
              <option>ბავშვის მომსახურეობა</option>
              <option>წვერის კორექცია</option>
              <option>წარბი</option>
              <option>კომბო</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">ბარბერი</span>
            <select className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]">
              <option>ნებისმიერი თავისუფალი</option>
              <option>მთავარი ბარბერი</option>
              <option>ფეიდის სპეციალისტი</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">თარიღი</span>
            <input type="date" className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">დრო</span>
            <input type="time" className="border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[#b89563]" />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8d6d47] sm:text-sm sm:tracking-[0.18em]">შეტყობინება</span>
            <textarea rows={5} placeholder="თუ გაქვს სასურველი სტილი ან დამატებითი დეტალი, მოგვწერე აქ." className="resize-none border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition placeholder:text-[#6f6256] focus:border-[#b89563]" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center bg-[#181411] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b89563] hover:text-black sm:w-auto sm:text-sm sm:tracking-[0.24em]">
              დაჯავშნის დადასტურება
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
