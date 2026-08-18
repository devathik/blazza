"use client";

import React from "react";
import { Users, Shield, Building2, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function LeadershipStats() {
  const { language, t } = useLanguage();

  const stats = [
    { icon: Shield, val: language === "bn" ? "৩১ জন" : "31 Members", label: t("leadership_stat_central") },
    { icon: Users, val: language === "bn" ? "১৫ জন" : "15 Advisors", label: t("leadership_stat_advisors") },
    { icon: Building2, val: language === "bn" ? "৬৪ জেলা" : "64 Districts", label: t("leadership_stat_district_heads") },
    { icon: GraduationCap, val: language === "bn" ? "২৫ বিশ্ববিদ্যালয়" : "25 Universities", label: t("leadership_stat_student_heads") },
  ];

  return (
    <section className="bg-card py-10 border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-primary-surface/60 border border-primary/10 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-primary">
                  {st.val}
                </div>
                <div className="text-xs font-semibold text-muted-foreground mt-0.5">
                  {st.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
