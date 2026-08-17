"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072717] via-[#0B3D24] to-[#062013] text-white py-20 lg:py-28">
      {/* Subtle Background Pattern & Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/80 border border-amber-400/40 px-4 py-1.5 text-xs font-bold text-amber-300 backdrop-blur-md shadow-sm">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>{t("hero_badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {t("hero_title_1")}{" "}
              <span className="text-amber-400 underline decoration-amber-400/50 decoration-wavy decoration-2">
                {t("hero_title_highlight")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/membership/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-zinc-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all hover:scale-105 active:scale-95"
              >
                <span>{t("hero_cta_apply")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900/60 border border-emerald-600/50 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-800 transition-all"
              >
                <span>{t("hero_cta_events")}</span>
              </Link>
            </div>
          </div>

          {/* Right Emblem Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />
              <div className="relative flex flex-col items-center justify-center rounded-3xl bg-[#09321e] border border-amber-400/30 p-8 sm:p-12 text-center shadow-2xl">
                <div className="relative h-32 w-32 rounded-full border-4 border-amber-400 overflow-hidden shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo/blazza-logo.jpeg"
                    alt="BLAJA Official Logo Seal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">BLAJA</h3>
                <p className="text-xs font-semibold text-amber-300 mt-1">বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                  <Award className="h-4 w-4 text-amber-400" />
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
