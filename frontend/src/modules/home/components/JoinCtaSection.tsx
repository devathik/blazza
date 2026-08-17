"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, MessageSquare, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function JoinCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#072517] via-[#0B3D24] to-[#082D1B] py-16 sm:py-20 text-white border-t border-amber-400/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300">
              <ShieldAlert className="h-4 w-4 text-amber-400" />
              <span>নতুন সদস্য নিবন্ধন চালুকৃত</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              {t("cta_title")}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t("cta_subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/membership/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-zinc-950 shadow-xl hover:bg-amber-300 transition-all active:scale-95"
            >
              <UserCheck className="h-4 w-4" />
              <span>{t("cta_btn")}</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-950/80 border border-emerald-700/60 px-6 py-3.5 text-sm font-bold text-zinc-200 hover:bg-emerald-900 transition-all"
            >
              <MessageSquare className="h-4 w-4 text-amber-400" />
              <span>{t("nav_contact")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
