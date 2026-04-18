"use client";

const services = [
  ["სტანდარტული თმა", "₾30", "სუფთა შეჭრა, ფორმის გასწორება და საბოლოო სტაილინგი."],
  ["სტანდარტული თმა/წვერი", "₾55", "თმის და წვერის კომბინაცია ერთ სესიაში."],
  ["არასტანდარტული თმა", "₾35-40", "კომპლექსური ჭრა და ინდივიდუალურად მორგებული ფორმა."],
  ["ბავშვის მომსახურეობა", "₾35-40", "კომფორტული პროცესი და სუფთა, მოწესრიგებული შედეგი."],
  ["წვერის კორექცია", "₾25-30", "წვერის ფორმის გასწორება და ხაზების დამუშავება."],
  ["წარბი", "₾15", "წარბის მოვლა და კორექცია ბუნებრივი იერისთვის."],
  ["კომბო", "₾70-80", "სრული პაკეტი - თმა + წვერი + დამატებითი."],
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto scroll-mt-24 w-[92%] border border-t-0 border-[#2b241d] bg-[#13110f] px-4 py-10 text-white sm:w-[90%] sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-16"
    >
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#b89563] sm:text-[11px] sm:tracking-[0.38em]">
            სერვისები
          </p>
          <h2 className="mt-4 max-w-2xl text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] sm:mt-5 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.08]">
            მომსახურება შექმნილი
            <br />
            ზუსტ შედეგსა და
            <br />
            გამორჩეულ იერზე.
          </h2>
        </div>

        <p className="max-w-md text-[15px] leading-7 text-[#d4c4b2]/75 sm:text-base sm:leading-8">
          მომსახურების სია აწყობილია ისე, რომ თითოეული ვიზიტი დასრულდეს სუფთა ფორმით,
          მოწესრიგებული დეტალებით და გამოკვეთილი სტილით.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
        {services.map(([title, price, description]) => (
          <article
            key={title}
            className="gold-card gold-shimmer border border-white/10 bg-[#191613] p-4 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4 sm:gap-4 sm:pb-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b89563] sm:text-[11px] sm:tracking-[0.28em]">
                  ბარბერ სერვისი
                </p>
                <h3 className="mt-2 text-xl font-medium text-[#f3eadf] sm:mt-3 sm:text-2xl">{title}</h3>
              </div>
              <span className="text-lg font-medium text-[#b89563] sm:text-xl">{price}</span>
            </div>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#d4c4b2]/72 sm:mt-5 sm:text-base sm:leading-8">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
