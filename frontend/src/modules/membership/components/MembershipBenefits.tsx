"use client";

import React from "react";
import { BookOpen, Users, ShieldCheck, Scale, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function MembershipBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: GraduationCap,
      title: "পেশাগত দক্ষতা উন্নয়ন ও ওয়ার্কশপ",
      titleEn: "Professional Skill Workshops",
      desc: "আইন ড্রাফটিং, প্লিডিং ও মুটিং বিষয়ে জাতীয় পর্যায়ের কর্মশালা ও প্রশিক্ষণ।",
      descEn: "Regular workshops on drafting, pleading, and mooting led by experts."
    },
    {
      icon: Scale,
      title: "প্রবোনো ও আইনি সহায়তা প্যানেল",
      titleEn: "Pro-Bono Legal Aid Panel",
      desc: "সুপ্রিম কোর্ট ও জেলা পর্যায়ে সাধারণ মানুষের সেবায় নিখরচায় আইন সহায়তার কাজ।",
      descEn: "Opportunities to serve in legal aid clinics across Supreme Court & districts."
    },
    {
      icon: Users,
      title: "দেশব্যাপী পেশাজীবী নেটওয়ার্কিং",
      titleEn: "Nationwide Legal Network",
      desc: "বাংলাদেশের ৫০+ জেলা ও বিশ্ববিদ্যালয় শাখার ১০,০০০+ আইনজীবীর সাথে সরাসরি যোগাযোগ।",
      descEn: "Connect with 10,000+ legal practitioners and scholars nationwide."
    },
    {
      icon: BookOpen,
      title: "ডিজিটাল ল লাইব্রেরি ও পোর্টাল",
      titleEn: "Digital Law Library & Portal",
      desc: "আইন সাময়িকী, জার্নাল ও গবেষণা পেপার এক্সেস এবং অনলাইন প্রফাইল পরিচালনা।",
      descEn: "Access to digital journals, law research databases, and member portal."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-card border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <Award className="h-3.5 w-3.5 text-secondary" />
            <span>সুযোগ-সুবিধাসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            {t("membership_benefits_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {t("membership_benefits_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-primary-surface/40 border border-primary/10 space-y-3 hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-foreground">
                  {b.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
