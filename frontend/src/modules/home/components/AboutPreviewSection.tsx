"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Award, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function AboutPreviewSection() {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, text: t("about_feature_1") },
    { icon: CheckCircle2, text: t("about_feature_2") },
    { icon: Globe2, text: t("about_feature_3") },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-[#07170E] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 text-xs font-bold text-[#0B3D24] dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
              <Award className="h-4 w-4 text-amber-500" />
              <span>সংগঠনের পরিচয়</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight">
              {t("about_title")}
            </h2>

            <p className="text-sm font-semibold text-emerald-800 dark:text-amber-400">
              {t("about_subtitle")}
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t("about_desc")}
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B3D24] text-amber-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      {feat.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B3D24] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-[#125533] transition-all hover:gap-3"
              >
                <span>{t("btn_read_more")}</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Right Card Feature Showcase */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white dark:bg-[#0D2418] border border-zinc-200 dark:border-[#1A452E] p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-zinc-950 font-black text-xl shadow-md">
                  ১৬
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">২০১৬ সালে যাত্রা শুরু</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">দেশব্যাপী আইনজীবীদের সুসংগঠিত প্ল্যাটফর্ম</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-[#0B3D24]/40 border border-emerald-100 dark:border-emerald-900/50">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">জেলা কমিটিসমূহ</div>
                  <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1">স্থানীয় বিচার ব্যবস্থার সাথে কাজ</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-400">বিশ্ববিদ্যালয় শাখা</div>
                  <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1">আইন শিক্ষার্থীদের সহায়তা</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
