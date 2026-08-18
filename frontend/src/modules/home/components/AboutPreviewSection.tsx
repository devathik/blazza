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
    <section className="bg-background py-16 transition-colors duration-300 sm:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold text-primary shadow-xs">
              <Award className="h-4 w-4 text-secondary-dark" />
              <span>সংগঠনের পরিচয়</span>
            </div>

            <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              {t("about_title")}
            </h2>

            <p className="text-sm font-semibold leading-6 text-primary dark:text-secondary-light">
              {t("about_subtitle")}
            </p>

            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t("about_desc")}
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary-surface text-primary shadow-xs">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-foreground/90 sm:text-sm">
                      {feat.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary-dark"
              >
                <span>{t("btn_read_more")}</span>
                <ArrowRight className="h-4 w-4 text-secondary" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-6 rounded-3xl border border-primary/15 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8">
              <div className="flex items-center gap-4 border-b border-border pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-xl font-black text-secondary-foreground shadow-xs">
                  ১৬
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">২০১৬ সালে যাত্রা শুরু</h4>
                  <p className="text-xs text-muted-foreground">দেশব্যাপী আইনজীবীদের সুসংগঠিত প্ল্যাটফর্ম</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-primary/20 bg-primary-surface p-4">
                  <div className="text-xs font-bold text-primary">জেলা কমিটিসমূহ</div>
                  <div className="mt-1 text-sm font-semibold text-muted-foreground">স্থানীয় বিচার ব্যবস্থার সাথে কাজ</div>
                </div>
                <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-4">
                  <div className="text-xs font-bold text-secondary-dark dark:text-secondary-light">বিশ্ববিদ্যালয় শাখা</div>
                  <div className="mt-1 text-sm font-semibold text-muted-foreground">আইন শিক্ষার্থীদের সহায়তা</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
