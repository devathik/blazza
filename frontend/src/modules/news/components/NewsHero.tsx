"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Newspaper, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function NewsHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-surface via-background to-background text-foreground py-14 sm:py-20 border-b border-border transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-secondary mb-4">
          <Link href="/" className="hover:underline text-muted-foreground">
            {t("nav_home")}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span>{t("nav_news")}</span>
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary shadow-2xs">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>{t("news_hero_badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            {t("news_hero_title")}
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            {t("news_hero_subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
