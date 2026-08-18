"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,var(--primary-surface)_0%,var(--background)_62%,#FFFFFF_100%)] py-16 text-foreground lg:py-24">
      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-secondary-dark">
          <Link href="/" className="text-muted-foreground hover:underline">
            {t("nav_home")}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/70" />
          <span>{t("nav_about")}</span>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1 text-xs font-bold text-primary shadow-xs">
              <Award className="h-4 w-4 text-secondary-dark" />
              <span>{t("about_hero_badge")}</span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
              {t("about_hero_title")}
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("about_hero_subtitle")}
            </p>
          </div>

          <div className="flex justify-center lg:col-span-4">
            <div className="group relative h-32 w-32 overflow-hidden rounded-full border-4 border-secondary shadow-xl sm:h-40 sm:w-40">
              <Image
                src="/logo/blazza-logo.jpeg"
                alt="BLAJA Seal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
