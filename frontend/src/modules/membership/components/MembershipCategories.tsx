"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, UserCheck, Sparkles, Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { MEMBERSHIP_CATEGORIES } from "../data/mockMembership";

export default function MembershipCategories() {
  const { language, t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>সদস্যপদ প্ল্যান</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
            {t("membership_types_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {t("membership_types_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`relative flex flex-col justify-between rounded-3xl bg-card border p-6 sm:p-8 transition-all duration-300 ${
                cat.isPopular
                  ? "border-primary shadow-xl ring-2 ring-primary/20"
                  : "border-border shadow-xs hover:shadow-md"
              }`}
            >
              {cat.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-extrabold text-primary-foreground shadow-xs flex items-center gap-1">
                  <Award className="h-3.5 w-3.5 text-secondary-light" />
                  <span>{cat.badge}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black text-foreground">
                    {language === "bn" ? cat.title : cat.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">
                    {language === "bn" ? cat.target : cat.targetEn}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-primary-surface/60 border border-primary/10">
                  <div className="text-xl sm:text-2xl font-black text-primary">
                    {language === "bn" ? cat.fee : cat.feeEn}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                    অন্তর্ভুক্ত সুবিধাসমূহ:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {(language === "bn" ? cat.features : cat.featuresEn).map((ft, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/membership/apply"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-extrabold transition-all shadow-xs ${
                    cat.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary-dark shadow-md"
                      : "bg-primary-surface border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <UserCheck className="h-4 w-4 text-secondary" />
                  <span>{t("membership_btn_apply")}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
