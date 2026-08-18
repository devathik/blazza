import { EventItem } from "../types/event.types";

export const MOCK_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    title: "জাতীয় আইনি গবেষণা ও সিম্পোজিয়াম ২০২৬",
    titleEn: "National Legal Research & Symposium 2026",
    date: "২৫ সেপ্টেম্বর, ২০২৬",
    dateEn: "Sept 25, 2026",
    time: "সকাল ১০:০০ - বিকাল ০৫:০০",
    location: "ঢাকা",
    venue: "সুপ্রিম কোর্ট বার অডিটোরিয়াম, ঢাকা",
    category: "conference",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
    description: "সুপ্রিম কোর্টের বিজ্ঞ আইনজীবী ও আইনের অধ্যাপকদের অংশগ্রহণে সাংবিধানিক নীতি, মেধা সম্পদ আইন এবং ডিজিটাল নিরাপত্তা আইন বিষয়ক দিনব্যাপী জাতীয় সিম্পোজিয়াম।",
    descriptionEn: "A national day-long symposium discussing constitutional law principles, IP law, and cyber security legislations with Supreme Court advocates.",
    highlights: [
      "উদ্বোধনী প্রধান অতিথি: আন্তর্জাতিক আইনি বিশেষজ্ঞ",
      "গবেষণা পেপার উপস্থাপন ও প্যানেল আলোচনা",
      "অংশগ্রহণকারী সকল সদস্যকে সনদপত্র প্রদান"
    ],
    speaker: "বিজ্ঞ এডভোকেট এ. কে. এম. মোস্তফা ও প্যানেলিস্টগণ",
    organizer: "কেন্দ্রীয় কার্যনির্বাহী কমিটি, BLAJA",
    registrationUrl: "/membership/apply",
    isFeatured: true
  },
  {
    id: "evt-2",
    title: "আইন শিক্ষার্থীদের জন্য ড্রাফটিং ও প্লিডিং ওয়ার্কশপ",
    titleEn: "Drafting & Pleading Workshop for Law Students",
    date: "১০ অক্টোবর, ২০২৬",
    dateEn: "Oct 10, 2026",
    time: "সকাল ১১:০০ - দুপুর ০৩:০০",
    location: "চট্টগ্রাম",
    venue: "আইন অনুষদ অডিটোরিয়াম, চট্টগ্রাম বিশ্ববিদ্যালয়",
    category: "workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80",
    description: "দেওয়ানি ও ফৌজদারি মামলার আরজি তৈরি, জামিন আবেদন এবং স্মারকলিপি ড্রাফটিং সংক্রান্ত ব্যবহারিক প্রশিক্ষণ কর্মশালা।",
    descriptionEn: "Practical training workshop covering civil and criminal petition drafting, bail applications, and memorandum writing.",
    highlights: [
      "বাস্তব মামলা নথিপত্র বিশ্লেষণ ও হাতেকলমে ড্রাফটিং",
      "সিনিয়র আইনজীবীদের অভিজ্ঞতা বিনিময়",
      "ডিজিটাল আইন গাইড ও টেমপ্লেট বিতরণ"
    ],
    speaker: "এডভোকেট শাহানাজ বেগম (সিনিয়র আইনজীবী, চট্টগ্রাম বার)",
    organizer: "চট্টগ্রাম বিশ্ববিদ্যালয় শাখা, BLAJA",
    registrationUrl: "/membership/apply",
    isFeatured: true
  },
  {
    id: "evt-3",
    title: "বিনামূল্যে আইনি সেবা সহায়তা ও সচেতনতা ক্যাম্প",
    titleEn: "Free Legal Aid & Rights Awareness Camp",
    date: "১৫ আগস্ট, ২০২৬",
    dateEn: "Aug 15, 2026",
    time: "সকাল ০৯:০০ - বিকাল ০৪:০০",
    location: "রাজশাহী",
    venue: "জেলা বার এ্যাসোসিয়েশন প্রাঙ্গণ, রাজশাহী",
    category: "legal_camp",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80",
    description: "প্রান্তিক ও সুবিধাবঞ্চিত জনগণের মাঝে জমিজমা, পারিবারিক আইন এবং মানবাধিকার সুরক্ষা বিষয়ে বিনামূল্যে পরামর্শ প্রদান ক্যাম্প।",
    descriptionEn: "Free consultation camp on land disputes, family law, and human rights protection for marginalized communities.",
    highlights: [
      "১৫০+ পরিবারকে তাৎক্ষণিক আইনি পরামর্শ",
      "বিনামূল্যে আইনি পরামর্শ ও প্রবোনো আইনজীবী বরাদ্দ",
      "আইনি অধিকার নির্দেশিকা লিফলেট বিতরণ"
    ],
    speaker: "রাজশাহী জেলা শাখা আইনজীবী প্যানেল",
    organizer: "রাজশাহী জেলা শাখা, BLAJA",
    registrationUrl: "/membership/apply",
    isFeatured: false
  },
  {
    id: "evt-4",
    title: "মানবাধিকার ও পরিবেশ আইন বিষয়ক সেমিনার",
    titleEn: "Seminar on Human Rights & Environmental Law",
    date: "০৫ মে, ২০২৬",
    dateEn: "May 05, 2026",
    time: "বিকাল ০৩:০০ - সন্ধ্যা ০৭:০০",
    location: "সিলেট",
    venue: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় অডিটোরিয়াম",
    category: "seminar",
    status: "past",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description: "জলবায়ু পরিবর্তন, নদী রক্ষা আইন ও পরিবেশীয় ন্যায়বিচার সংক্রান্ত বিষয়ে জাতীয় আইনি বিষেশজ্ঞদের মূল প্রবন্ধ পাঠ।",
    descriptionEn: "Keynote presentations by national legal experts regarding climate change, river conservation laws, and environmental justice.",
    highlights: [
      "পরিবেশ আইনজীবী ও গবেষকদের মূল প্রবন্ধ উপস্থাপন",
      "পরিবেশ সুরক্ষা নীতি প্রস্তাবনা উপস্থাপন",
      "স্মারক গ্রন্থ প্রকাশনা"
    ],
    speaker: "ড. শফিকুর রহমান (পরিবেশ আইন বিশেষজ্ঞ)",
    organizer: "সিলেট জেলা ও শাবিপ্রবি শাখা, BLAJA",
    isFeatured: false
  },
  {
    id: "evt-5",
    title: "নবীন আইনজীবী বরণ ও পেশাগত নীতি সম্মেলন",
    titleEn: "Fresh Lawyers Orientation & Professional Ethics Conference",
    date: "২০ জানুয়ারি, ২০২৬",
    dateEn: "Jan 20, 2026",
    time: "সকাল ১০:৩০ - বিকাল ০৪:৩০",
    location: "ঢাকা",
    venue: "ইনস্টিটিউট অফ ল অ্যান্ড ডিপ্লোম্যাসি, ঢাকা",
    category: "conference",
    status: "past",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    description: "বার কাউন্সিল তালিকায় সদ্য নিবন্ধিত বিজ্ঞ তরুণ আইনজীবীদের অভিনন্দন বরণ ও পেশাগত আচরণবিধি সংক্রান্ত সেমিনার।",
    descriptionEn: "Welcoming ceremony for newly enrolled Bar Council advocates and orientation seminar on professional canons of ethics.",
    highlights: [
      "৫০০+ নবীন আইনজীবীর অংশগ্রহণ",
      "পেশাগত নীতি ও আচরণবিধি স্মরণিকা বিতরণ",
      "নেটওয়ার্কিং লাঞ্চ ও সম্মাননা প্রদান"
    ],
    speaker: "সুপ্রিম কোর্টের প্রবীণ আইনজীবী পরিষদ",
    organizer: "কেন্দ্রীয় যুব ও পেশাগত উন্নয়ন সেল, BLAJA",
    isFeatured: false
  }
];
