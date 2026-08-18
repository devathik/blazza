import { MembershipCategory, FaqItem } from "../types/membership.types";

export const MEMBERSHIP_CATEGORIES: MembershipCategory[] = [
  {
    id: "advocate",
    title: "আইনজীবী সদস্য (Advocate Member)",
    titleEn: "Advocate Member",
    fee: "১,০০০ টাকা / বার্ষিক",
    feeEn: "1,000 BDT / Annual",
    target: "বার কাউন্সিল নিবন্ধিত বিজ্ঞ আইনজীবীগণ",
    targetEn: "Advocates enrolled with Bangladesh Bar Council",
    badge: "সবচেয়ে জনপ্রিয়",
    isPopular: true,
    features: [
      "জাতীয় সেমিনার ও সিম্পোজিয়ামে অংশগ্রহণের অগ্রাধিকার",
      "প্রবোনো ও আইনি সহায়তা প্যানেলে অন্তর্ভুক্তি",
      "ডিজিটাল ল লাইব্রেরি ও জার্নাল এক্সেস",
      "জাতীয় কার্যনির্বাহী কমিটি ভোটাধিকার",
      "অফিসিয়াল সদস্য সনদপত্র ও আইডি কার্ড"
    ],
    featuresEn: [
      "Priority entry to National Seminars & Symposiums",
      "Inclusion in Pro-Bono Legal Aid Panel",
      "Access to Digital Law Library & Journals",
      "Voting rights in Central Executive Council",
      "Official Membership Certificate & ID Card"
    ]
  },
  {
    id: "student",
    title: "আইন শিক্ষার্থী সদস্য (Student Member)",
    titleEn: "Student Member",
    fee: "৫০০ টাকা / বার্ষিক",
    feeEn: "500 BDT / Annual",
    target: "অনুমোদিত বিশ্ববিদ্যালয়/ল কলেজের আইন শিক্ষার্থী",
    targetEn: "LL.B students of recognized Universities & Law Colleges",
    badge: "শিক্ষার্থী বিশেষ ছাড়",
    isPopular: false,
    features: [
      "বিশ্ববিদ্যালয় শাখা কমিটিতে সদস্যপদ ও নেতৃত্ব সুযোগ",
      "ড্রাফটিং, প্লিডিং ও মুটিং ওয়ার্কশপে অংশগ্রহণ",
      "সিনিয়র সুপ্রিম কোর্ট আইনজীবীদের মেন্টরশিপ",
      "আইনি গবেষণা পেপার ও স্কলারশিপ প্রতিযোগিতা",
      "ডিজিটাল সার্টিফিকেট ও ল স্টুডেন্ট ফোরাম"
    ],
    featuresEn: [
      "Membership & leadership roles in University Chapters",
      "Participation in Drafting, Pleading & Mooting Workshops",
      "Mentorship from Senior Supreme Court Advocates",
      "Legal Research Paper & Scholarship competitions",
      "Digital Student Certificate & Law Forum access"
    ]
  },
  {
    id: "life",
    title: "আজীবন সদস্য (Life Member)",
    titleEn: "Life Member",
    fee: "১০,০০০ টাকা / এককালীন",
    feeEn: "10,000 BDT / One-time",
    target: "সুপ্রিম কোর্ট ও জেলা বারের প্রবীণ আইনজীবীগণ",
    targetEn: "Senior Advocates & Jurists with 5+ years bar experience",
    badge: "আজীবন মর্যাদা",
    isPopular: false,
    features: [
      "আজীবন সদস্যপদ মর্যাদা ও কোনো বার্ষিক ফি নেই",
      "উপদেষ্টা ও নীতি নির্ধারণী প্যানেলে অংশগ্রহণের সুযোগ",
      "জাতীয় কনফারেন্সে বিশেষ সম্মাননা ও আসন বরাদ্দ",
      "BLAJA প্রকাশনা ও ল সাময়িকী বিনামূল্যে প্রাপ্তি",
      "বিশেষ মেটাল সদস্য আইডি কার্ড ও স্মারক"
    ],
    featuresEn: [
      "Lifetime membership status with zero annual renewal fees",
      "Inclusion in Advisory & Policy Formulation Panels",
      "VIP seating & honors at National Conferences",
      "Free copies of all BLAJA Publications & Law Journals",
      "Special Metal Membership ID Badge & Memento"
    ]
  }
];

export const MEMBERSHIP_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "সদস্যপদ আবেদনের জন্য কী কী কাগজপত্র প্রয়োজন?",
    questionEn: "What documents are required for membership application?",
    answer: "আইনজীবীদের জন্য বার কাউন্সিল সনদপত্র/আইডি কার্ডের কপি এবং আইন শিক্ষার্থীদের জন্য বিশ্ববিদ্যালয় স্টুডেন্ট আইডি বা প্রত্যয়ন পত্র প্রয়োজন।",
    answerEn: "Advocates require a copy of Bar Council Enrolment / Bar ID. Law students require a University Student ID Card or testimonial."
  },
  {
    id: "faq-2",
    question: "আবেদন জমা দেওয়ার কতদিনের মধ্যে সদস্যপদ অনুমোদিত হয়?",
    questionEn: "How long does it take for membership approval?",
    answer: "অনলাইন ফর্ম ও ফি জমা দেওয়ার পর কেন্দ্রীয় যাচাইকরণ দল ২ থেকে ৫ কর্মদিবসের মধ্যে তথ্য যাচাই করে অ্যাকাউন্ট সক্রিয় করে।",
    answerEn: "Upon online form submission & fee deposit, the Central Verification Team verifies credentials within 2 to 5 business days."
  },
  {
    id: "faq-3",
    question: "আমি কীভাবে ডিজিটাল সদস্য আইডি কার্ড এবং সনদ ডাউনলোড করব?",
    questionEn: "How do I download my digital Membership ID & Certificate?",
    answer: "সদস্যপদ অনুমোদিত হলে আপনার গুগল অ্যাকাউন্ট দিয়ে সদস্য পোর্টালে লগইন করে সরাসরি আপনার ডিজিটাল আইডি কার্ড ও ড্যাশবোর্ড থেকে সনদ ডাউনলোড করা যাবে।",
    answerEn: "Once approved, sign in to the Member Portal via Google Auth to download your digital ID card & certificate from your dashboard."
  }
];
