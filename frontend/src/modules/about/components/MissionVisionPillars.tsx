"use client";

import React from "react";
import { Target, Compass, Scale, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function MissionVisionPillars() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Target,
      title: t("mission_title"),
      desc: t("mission_desc"),
      borderColor: "border-secondary/40",
      accentBg: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Compass,
      title: t("vision_title"),
      desc: t("vision_desc"),
      borderColor: "border-primary/40",
      accentBg: "bg-primary text-secondary",
    },
    {
      icon: Scale,
      title: t("values_title"),
      desc: t("values_desc"),
      borderColor: "border-secondary/40",
      accentBg: "bg-secondary text-secondary-foreground",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="content-narrow mb-14 space-y-2 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary border border-primary/20">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>আমাদের মূল স্তম্ভসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            লক্ষ্য, রূপকল্প ও সাংবিধানিক চেতনা
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between rounded-2xl bg-card border ${card.borderColor} p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold shadow-xs ${card.accentBg}`}
                  >
                    <Icon className="h-6 w-6 stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg font-extrabold text-foreground">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
