import { NewsItem } from "../types/news.types";

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "জাতীয় আইনি গবেষণা ও সুপ্রিম কোর্ট সিম্পোজিয়াম ২০২৬ সফলভাবে আয়োজিত",
    titleEn: "National Legal Research & Supreme Court Symposium 2026 Hosted Successfully",
    date: "১৫ আগস্ট, ২০২৬",
    dateEn: "August 15, 2026",
    category: "press",
    author: "কেন্দ্রীয় প্রেস সেল, BLAJA",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
    summary: "সুপ্রিম কোর্টের বিজ্ঞ আইনজীবী ও আইনের অধ্যাপকদের উপস্থিতিতে দিনব্যাপী জাতীয় আইনি গবেষণা কর্মশালা ও প্রেস ব্রিফিং সম্পন্ন হয়েছে।",
    summaryEn: "A national legal research symposium featuring Supreme Court advocates and professors concluded with key policy reform proposals.",
    content: "বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন (BLAJA)-এর উদ্যোগে জাতীয় আইনি গবেষণা কর্মশালা সফলভাবে অনুষ্ঠিত হয়েছে। সুপ্রিম কোর্ট অডিটোরিয়ামে আয়োজিত এ অনুষ্ঠানে সাংবিধানিক সংস্কার, পরিবেশ আইনি সুরক্ষা এবং ডিজিটাল সিকিউরিটি আইন বিষয়ে গবেষণাপত্র পাঠ করা হয়। অনুষ্ঠানে প্রধান অতিথি হিসেবে সুপ্রিম কোর্টের প্রবীণ বিচারক ও প্রখ্যাত আইনজীবীরা উপস্থিত ছিলেন।",
    contentEn: "The Bangladesh Law & Jurist's Association successfully hosted a day-long national legal research symposium. Research papers on constitutional reforms, environmental protection laws, and cyber security legislations were presented at the Supreme Court Auditorium.",
    isFeatured: true
  },
  {
    id: "news-2",
    title: "ঢাকা ও চট্টগ্রাম বিশ্ববিদ্যালয় শাখা কমিটি অনুমোদন",
    titleEn: "Dhaka & Chittagong University Executive Committees Approved",
    date: "১০ আগস্ট, ২০২৬",
    dateEn: "August 10, 2026",
    category: "announcement",
    author: "কেন্দ্রীয় কার্যনির্বাহী কমিটি",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    summary: "ঢাকা বিশ্ববিদ্যালয় ও চট্টগ্রাম বিশ্ববিদ্যালয়ের নতুন কার্যনির্বাহী কমিটি অনুমোদন দিয়েছে BLAJA কেন্দ্রীয় পর্ষদ।",
    summaryEn: "The BLAJA Central Executive Committee approved new student chapter leadership for DU and CU.",
    content: "BLAJA কেন্দ্রীয় কার্যনির্বাহী কমিটি আগামী এক বছরের জন্য ঢাকা বিশ্ববিদ্যালয় ও চট্টগ্রাম বিশ্ববিদ্যালয় শাখা কমিটি অনুমোদন করেছে। তরুণ আইন শিক্ষার্থীদের মধ্যে নেতৃত্ব চর্চা, ব্যবহারিক ড্রাফটিং শেখানো এবং প্রবোনো আইনি কার্যক্রমে শিক্ষার্থীদের সম্পৃক্ত করার লক্ষ্য নিয়ে এ কমিটি গঠিত হয়েছে।",
    contentEn: "The BLAJA Central Executive Committee has formally approved the student executive bodies at Dhaka University and Chittagong University for the upcoming academic year.",
    isFeatured: false
  },
  {
    id: "news-3",
    title: "প্রান্তিক জনগোষ্ঠীর জন্য জেলাভিত্তিক বিনামূল্যে আইনি সহায়তা সেল স্থাপন",
    titleEn: "District-wide Free Legal Aid Clinics Launched for Marginalized Citizens",
    date: "০৫ আগস্ট, ২০২৬",
    dateEn: "August 05, 2026",
    category: "press",
    author: "আইনি সহায়তা ও সামাজিক দায়বদ্ধতা সেল",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80",
    summary: "জেলা বার এ্যাসোসিয়েশনের মাধ্যমে অসচ্ছল নাগরিকদের জন্য বিনামূল্যে আইনি পরামর্শ ও প্রবোনো আইনজীবী বরাদ্দ শুরু।",
    summaryEn: "Pro-bono advocate panels established across district Bar Associations to serve underprivileged communities.",
    content: "দেশের সুবিধাবঞ্চিত জনগণের ন্যায়বিচার নিশ্চিত করতে জেলা শাখা বারসমূহে বিনামূল্যে আইনি সহায়তা ডায়ালগ ও সেল স্থাপন করা হয়েছে। স্বেচ্ছাসেবী প্রবোনো আইনজীবীরা ভূমি বিবাদ, পারিবারিক বিরোধ ও শ্রম আইন সংক্রান্ত মামলায় বিনামূল্যে আইনি পরামর্শ প্রদান করবেন।",
    contentEn: "Free legal aid clinics have been established across regional Bar Associations to provide pro-bono counsel for underprivileged community members facing land disputes and family law challenges.",
    isFeatured: false
  },
  {
    id: "news-4",
    title: "ডিজিটাল সিকিউরিটি ও তথ্যপ্রযুক্তি আইনে নাগরিক অধিকার সুরক্ষা",
    titleEn: "Safeguarding Civil Rights Under Digital Security & IT Laws",
    date: "২০ জুলাই, ২০২৬",
    dateEn: "July 20, 2026",
    category: "article",
    author: "এডভোকেট শাহানাজ পারভীন",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80",
    summary: "তথ্যপ্রযুক্তির প্রসারের সাথে সাথে বাকস্বাধীনতা, ব্যক্তিগত গোপনীয়তা ও ডিজিটাল আইনের প্রয়োগ সম্পর্কিত আইনি কলাম।",
    summaryEn: "Legal analysis column examining freedom of speech, data privacy, and digital legislations in Bangladesh.",
    content: "বর্তমান প্রযুক্তি নির্ভর সমাজে তথ্যপ্রযুক্তি আইন ও নাগরিক অধিকারের সমতা রক্ষা একটি বড় চ্যালেঞ্জ। বিজ্ঞ আইনজীবী শাহানাজ পারভীন তাঁর কলামে ডিজিটাল আইনের বিভিন্ন ধারা, ব্যক্তিগত গোপনীয়তার অধিকার এবং নাগরিক সুরক্ষা নিশ্চিতকরণে আইনি ব্যবস্থার পর্যালোচনা উপস্থাপন করেছেন।",
    contentEn: "An analytical column exploring privacy rights, freedom of speech, and digital compliance under contemporary cyber laws in Bangladesh.",
    isFeatured: false
  }
];
