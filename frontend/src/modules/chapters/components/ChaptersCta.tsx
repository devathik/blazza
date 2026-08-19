"use client";

import React from "react";
import Link from "next/link";
import { Building2, Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ChaptersCta() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary-surface dark:bg-primary-dark/40 py-14 sm:py-18 text-foreground border-t border-border transition-colors duration-300">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
              <Building2 className="h-4 w-4 text-secondary" />
              <span>শাখা গঠন প্রক্রিয়া</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              {t("chapters_cta_title")}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t("chapters_cta_subtitle")}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-extrabold text-primary-foreground shadow-md hover:bg-primary-dark transition-all"
            >
              <Send className="h-4 w-4 text-secondary-light" />
              <span>{t("chapters_cta_btn")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
