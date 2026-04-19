import type { Language } from "../components/LanguageProvider";

type ServiceItem = {
  title: string;
  price: string;
  description: string;
};

type SiteDictionary = {
  nav: Array<{ label: string; id: string }>;
  languageToggle: {
    ka: string;
    en: string;
  };
  header: {
    description: string;
    follow: string;
    contactLabel: string;
    phone: string;
    email: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ label: string; value: string }>;
    featuredEyebrow: string;
    featuredText: string;
    featuredLocation: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string[];
    description: string;
    cards: Array<{ title: string; text: string }>;
    stats: Array<{ label: string; value: string }>;
    imageAlt: string;
    overlayEyebrow: string;
    overlayText: string;
    overlayLabel: string;
  };
  services: {
    eyebrow: string;
    title: string[];
    description: string;
    cardEyebrow: string;
    items: ServiceItem[];
  };
  booking: {
    eyebrow: string;
    title: string[];
    description: string;
    info: Array<{ label: string; value: string }>;
    labels: {
      fullName: string;
      phone: string;
      service: string;
      barber: string;
      date: string;
      time: string;
      message: string;
      submit: string;
    };
    placeholders: {
      fullName: string;
      phone: string;
      message: string;
    };
    serviceOptions: string[];
    barberOptions: string[];
  };
  contact: {
    eyebrow: string;
    title: string[];
    addressTitle: string;
    addressLines: string[];
    reachTitle: string;
    reachLines: string[];
    hoursEyebrow: string;
    hours: Array<{ day: string; time: string }>;
    walkInTitle: string;
    walkInText: string;
  };
  map: {
    eyebrow: string;
    title: string;
    addressLines: string[];
    cardText: string;
    cardSubtext: string;
    iframeTitle: string;
  };
  footer: {
    description: string;
    copyright: string;
    location: string;
  };
  scrollToTopLabel: string;
};

export const siteContent: Record<Language, SiteDictionary> = {
  ka: {
    nav: [
      { label: "მთავარი", id: "home" },
      { label: "ჩვენს შესახებ", id: "about" },
      { label: "სერვისები", id: "services" },
      { label: "ჩაწერა", id: "booking" },
      { label: "კონტაქტი", id: "contact" },
    ],
    languageToggle: {
      ka: "ქარ",
      en: "ENG",
    },
    header: {
      description: "პრემიუმ შეჭრა დახვეწილი სტუდიის ატმოსფეროში.",
      follow: "გამოგვყევი",
      contactLabel: "დაგვიკავშირდი",
      phone: "+995 555 12 34 56",
      email: "contact@barbershop.com",
      location: "თბილისი, საქართველო",
    },
    hero: {
      eyebrow: "პრემიუმ ბარბერ სტუდია",
      title: ["გარეგნობა,", "რომელიც შენზე", "მეტს ამბობს."],
      description:
        "შექმნილია მათთვის, ვისაც უყვარს დეტალი, ატმოსფერო და სუფთა შედეგი. ზუსტი შეჭრა, წვერის მოვლა და გამორჩეული მომსახურება ერთ სივრცეში.",
      primaryCta: "ჩაწერა",
      secondaryCta: "გაიგე მეტი",
      stats: [
        { label: "გამოცდილება", value: "8+" },
        { label: "შეფასება", value: "4.9" },
        { label: "ღია ყოველდღე", value: "10-22" },
      ],
      featuredEyebrow: "გამორჩეული სერვისი",
      featuredText: "მორგებული შეჭრა, დახვეწილი fade და წვერის სუფთა დამუშავება.",
      featuredLocation: "თბილისი, საქართველო",
      imageAlt: "ბარბერის პორტრეტი",
    },
    about: {
      eyebrow: "ჩვენს შესახებ",
      title: [
        "დახვეწილი სივრცე",
        "თანამედროვე მოვლისა",
        "და კლასიკური",
        "ბარბერ ხელოვნებისთვის.",
      ],
      description:
        "BarberShop აერთიანებს თანამედროვე სტილს და დისციპლინირებულ ბარბერ ხელწერას. ჩვენთვის მთავარია სუფთა ხაზები, დაბალანსებული ფორმა და მომსახურება, რომელიც მშვიდად და ყურადღებით არის აწყობილი.",
      cards: [
        {
          title: "ფილოსოფია",
          text: "პირველ ადგილზე დეტალია. შედეგი უნდა იყოს ბუნებრივი, მკვეთრი და პიროვნებაზე მორგებული.",
        },
        {
          title: "ატმოსფერო",
          text: "მშვიდი, დახვეწილი და სტუმარზე მორგებული გარემო პრემიუმ barbershop განწყობით.",
        },
      ],
      stats: [
        { label: "დაარსდა", value: "2018" },
        { label: "კლიენტი", value: "2K+" },
        { label: "ლოკაცია", value: "თბილისი" },
      ],
      imageAlt: "ბარბერ სტუდია",
      overlayEyebrow: "სტუდიის ხაზი",
      overlayText: "თანამედროვე პრეზენტაცია და კლასიკური ბარბერ დისციპლინა ერთ სივრცეში.",
      overlayLabel: "პრემიუმ ინტერიერი",
    },
    services: {
      eyebrow: "სერვისები",
      title: ["მომსახურება შექმნილი", "ზუსტ შედეგსა და", "გამორჩეულ იერზე."],
      description:
        "მომსახურებების სია აწყობილია ისე, რომ თითოეული ვიზიტი დასრულდეს სუფთა ფორმით, მოწესრიგებული დეტალებით და გამოკვეთილი სტილით.",
      cardEyebrow: "ბარბერ სერვისი",
      items: [
        {
          title: "სტანდარტული თმა",
          price: "₾30",
          description: "სუფთა შეჭრა, ფორმის გასწორება და საბოლოო სტაილინგი.",
        },
        {
          title: "სტანდარტული თმა/წვერი",
          price: "₾55",
          description: "თმის და წვერის კომბინაცია ერთ სესიაში.",
        },
        {
          title: "არასტანდარტული თმა",
          price: "₾35-40",
          description: "კომპლექსური ჭრა და ინდივიდუალურად მორგებული ფორმა.",
        },
        {
          title: "ბავშვის მომსახურეობა",
          price: "₾35-40",
          description: "კომფორტული პროცესი და სუფთა, მოწესრიგებული შედეგი.",
        },
        {
          title: "წვერის კორექცია",
          price: "₾25-30",
          description: "წვერის ფორმის გასწორება და ხაზების დამუშავება.",
        },
        {
          title: "წარბი",
          price: "₾15",
          description: "წარბის მოვლა და კორექცია ბუნებრივი იერისთვის.",
        },
        {
          title: "კომბო",
          price: "₾70-80",
          description: "სრული პაკეტი - თმა + წვერი + დამატებითი.",
        },
      ],
    },
    booking: {
      eyebrow: "ჩაწერა",
      title: ["დაჯავშნე შენი ვიზიტი", "რამდენიმე მარტივ ნაბიჯში."],
      description:
        "აირჩიე სასურველი სერვისი, დრო და დანარჩენს ჩვენ მივხედავთ.",
      info: [
        { label: "საათები", value: "ორშაბათი - კვირა / 10:00 - 22:00" },
        { label: "ტელეფონი", value: "+995 555 12 34 56" },
        { label: "ლოკაცია", value: "ვაკე, თბილისი" },
      ],
      labels: {
        fullName: "სრული სახელი",
        phone: "ტელეფონი",
        service: "სერვისი",
        barber: "ბარბერი",
        date: "თარიღი",
        time: "დრო",
        message: "შეტყობინება",
        submit: "დაჯავშნის დადასტურება",
      },
      placeholders: {
        fullName: "შენი სახელი და გვარი",
        phone: "+995 5__ __ __ __",
        message: "თუ გაქვს სასურველი სტილი ან დამატებითი დეტალი, მოგვწერე აქ.",
      },
      serviceOptions: [
        "სტანდარტული თმა",
        "სტანდარტული თმა/წვერი",
        "არასტანდარტული თმა",
        "ბავშვის მომსახურეობა",
        "წვერის კორექცია",
        "წარბი",
        "კომბო",
      ],
      barberOptions: [
        "ნებისმიერი თავისუფალი",
        "მთავარი ბარბერი",
        "ფეიდის სპეციალისტი",
      ],
    },
    contact: {
      eyebrow: "კონტაქტი",
      title: ["ეწვიე სტუდიას და", "მიიღე გამორჩეული შედეგი."],
      addressTitle: "მისამართი",
      addressLines: ["ჭავჭავაძის გამზირი 25", "ვაკე, თბილისი"],
      reachTitle: "დაგვიკავშირდი",
      reachLines: ["+995 555 12 34 56", "contact@barbershop.com"],
      hoursEyebrow: "სამუშაო საათები",
      hours: [
        { day: "ორშაბათი - პარასკევი", time: "10:00 - 22:00" },
        { day: "შაბათი", time: "10:00 - 21:00" },
        { day: "კვირა", time: "12:00 - 20:00" },
      ],
      walkInTitle: "ადგილზე მოსვლა",
      walkInText:
        "თუ თავისუფალი დრო გვაქვს, ადგილზე მოსულ სტუმრებსაც ვიღებთ, თუმცა სასურველი დროისთვის წინასწარი ჩაწერა უკეთესია.",
    },
    map: {
      eyebrow: "რუკა",
      title: "გვიპოვე მარტივად",
      addressLines: ["ჭავჭავაძის გამზირი 25", "ვაკე, თბილისი, საქართველო"],
      cardText: "ჭავჭავაძის გამზირი 25, ვაკე, თბილისი",
      cardSubtext: "მარტივი მისადგომი ლოკაცია ყოველდღიური ვიზიტებისთვის.",
      iframeTitle: "BarberShop მისამართის რუკა",
    },
    footer: {
      description:
        "პრემიუმ შეჭრა, დახვეწილი მოვლა და თანამედროვე ბარბერ გამოცდილება, შექმნილი გამორჩეული შედეგისთვის.",
      copyright: "2026 BarberShop. ყველა უფლება დაცულია.",
      location: "თბილისი, საქართველო",
    },
    scrollToTopLabel: "ზემოთ ასვლა",
  },
  en: {
    nav: [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Booking", id: "booking" },
      { label: "Contact", id: "contact" },
    ],
    languageToggle: {
      ka: "ქარ",
      en: "ENG",
    },
    header: {
      description: "Premium cuts in a refined studio atmosphere.",
      follow: "Follow us",
      contactLabel: "Get in touch",
      phone: "+995 555 12 34 56",
      email: "contact@barbershop.com",
      location: "Tbilisi, Georgia",
    },
    hero: {
      eyebrow: "Premium barber studio",
      title: ["A look", "that says", "more about you."],
      description:
        "Built for people who value detail, atmosphere, and a clean result. Precise haircuts, beard care, and standout service in one place.",
      primaryCta: "Book now",
      secondaryCta: "Learn more",
      stats: [
        { label: "Experience", value: "8+" },
        { label: "Rating", value: "4.9" },
        { label: "Open daily", value: "10-22" },
      ],
      featuredEyebrow: "Featured service",
      featuredText: "Tailored haircut, refined fade, and clean beard finishing.",
      featuredLocation: "Tbilisi, Georgia",
      imageAlt: "Barber portrait",
    },
    about: {
      eyebrow: "About us",
      title: [
        "A refined space",
        "for modern grooming",
        "and classic",
        "barber craft.",
      ],
      description:
        "BarberShop combines modern style with disciplined barber technique. We care about clean lines, balanced form, and service designed with calm attention.",
      cards: [
        {
          title: "Philosophy",
          text: "Detail comes first. The result should feel natural, sharp, and tailored to the person.",
        },
        {
          title: "Atmosphere",
          text: "Calm, refined, and guest-focused surroundings with a premium barbershop mood.",
        },
      ],
      stats: [
        { label: "Established", value: "2018" },
        { label: "Clients", value: "2K+" },
        { label: "Location", value: "Tbilisi" },
      ],
      imageAlt: "Barber studio",
      overlayEyebrow: "Studio signature",
      overlayText: "A modern presentation and classic barber discipline in one space.",
      overlayLabel: "Premium interior",
    },
    services: {
      eyebrow: "Services",
      title: ["Service shaped for", "precision, presence,", "and a sharper look."],
      description:
        "Our service menu is designed so every visit ends with a clean silhouette, polished details, and a defined style.",
      cardEyebrow: "Barber service",
      items: [
        {
          title: "Standard haircut",
          price: "₾30",
          description: "Clean cut, shape refinement, and final styling.",
        },
        {
          title: "Standard hair / beard",
          price: "₾55",
          description: "Hair and beard combination in one session.",
        },
        {
          title: "Non-standard haircut",
          price: "₾35-40",
          description: "More complex cutting with a shape tailored to you.",
        },
        {
          title: "Kids service",
          price: "₾35-40",
          description: "Comfortable process and a neat, polished result.",
        },
        {
          title: "Beard correction",
          price: "₾25-30",
          description: "Beard shaping and clean line detailing.",
        },
        {
          title: "Eyebrow",
          price: "₾15",
          description: "Eyebrow grooming and correction for a natural finish.",
        },
        {
          title: "Combo",
          price: "₾70-80",
          description: "Full package - hair + beard + extras.",
        },
      ],
    },
    booking: {
      eyebrow: "Booking",
      title: ["Book your visit", "in just a few simple steps."],
      description:
        "Choose the service and time you want, and we will handle the rest.",
      info: [
        { label: "Hours", value: "Monday - Sunday / 10:00 - 22:00" },
        { label: "Phone", value: "+995 555 12 34 56" },
        { label: "Location", value: "Vake, Tbilisi" },
      ],
      labels: {
        fullName: "Full name",
        phone: "Phone",
        service: "Service",
        barber: "Barber",
        date: "Date",
        time: "Time",
        message: "Message",
        submit: "Confirm booking",
      },
      placeholders: {
        fullName: "Your full name",
        phone: "+995 5__ __ __ __",
        message: "If you have a preferred style or extra details, write them here.",
      },
      serviceOptions: [
        "Standard haircut",
        "Standard hair / beard",
        "Non-standard haircut",
        "Kids service",
        "Beard correction",
        "Eyebrow",
        "Combo",
      ],
      barberOptions: [
        "Any available barber",
        "Lead barber",
        "Fade specialist",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: ["Visit the studio and", "get a standout result."],
      addressTitle: "Address",
      addressLines: ["25 Chavchavadze Avenue", "Vake, Tbilisi"],
      reachTitle: "Reach us",
      reachLines: ["+995 555 12 34 56", "contact@barbershop.com"],
      hoursEyebrow: "Working hours",
      hours: [
        { day: "Monday - Friday", time: "10:00 - 22:00" },
        { day: "Saturday", time: "10:00 - 21:00" },
        { day: "Sunday", time: "12:00 - 20:00" },
      ],
      walkInTitle: "Walk-ins",
      walkInText:
        "If we have open time, we welcome walk-ins too, but booking ahead is the better option for your preferred slot.",
    },
    map: {
      eyebrow: "Map",
      title: "Find us easily",
      addressLines: ["25 Chavchavadze Avenue", "Tbilisi, Georgia"],
      cardText: "25 Chavchavadze Avenue, Vake, Tbilisi",
      cardSubtext: "An easy-to-reach location for everyday visits.",
      iframeTitle: "BarberShop location map",
    },
    footer: {
      description:
        "Premium cuts, refined grooming, and a modern barber experience built for a standout result.",
      copyright: "2026 BarberShop. All rights reserved.",
      location: "Tbilisi, Georgia",
    },
    scrollToTopLabel: "Scroll to top",
  },
};

export function getSiteContent(language: Language) {
  return siteContent[language];
}
