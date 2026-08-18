"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, BookOpenCheck, Scale, Users } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function HeroSection() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Scale, label: "Rule of Law" },
    { icon: Users, label: "Legal Network" },
    { icon: BookOpenCheck, label: "Skill Development" },
  ];
 

  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#F1FBF5_0%,#F8FCF7_62%,#FFFFFF_100%)] py-16 text-foreground transition-colors duration-300 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0B6B35_0%,#D6A21A_50%,#0B6B35_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,107,53,0.08)_0%,rgba(255,255,255,0)_36%,rgba(214,162,26,0.10)_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-7 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-bold text-primary shadow-xs">
              <ShieldCheck className="h-4 w-4 text-secondary-dark" />
              <span>{t("hero_badge")}</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              {t("hero_title_1")}{" "}
              <span className="text-primary">
                {t("hero_title_highlight")}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-sm font-medium leading-7 text-muted-foreground sm:text-base lg:mx-0">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row lg:justify-start">
              <Link
                href="/membership/apply"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-95 sm:w-auto"
              >
                <span>{t("hero_cta_apply")}</span>
                <ArrowRight className="h-4 w-4 text-secondary-light" />
              </Link>
              <Link
                href="/events"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-xs transition-all hover:border-primary/40 hover:bg-primary-surface sm:w-auto"
              >
                <span>{t("hero_cta_events")}</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-white/70 px-3 py-3 text-xs font-extrabold text-primary shadow-xs lg:justify-start">
                    <Icon className="h-4 w-4 text-secondary-dark" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-6 text-center shadow-xl shadow-primary/10 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#EAF7EF_0%,rgba(234,247,239,0)_100%)]" />
                <div className="relative mx-auto mb-5 h-44 w-44 overflow-hidden rounded-full border-[6px] border-secondary bg-white shadow-lg sm:h-56 sm:w-56">
                  <Image
                    src="/logo/blazza-logo.jpeg"
                    alt="BLAJA Official Logo Seal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-black tracking-normal text-primary">BLAJA</h3>
                <p className="mt-1 text-xs font-bold text-muted-foreground">বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-secondary/35 bg-secondary/10 px-3.5 py-2 text-xs font-bold text-primary">
                  <Award className="h-4 w-4 text-secondary-dark" />
                  <span>প্রতিষ্ঠাকাল ২০১৬ • রেজিস্টার্ড অর্গানাইজেশন</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
