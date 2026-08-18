"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, MessageSquare, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function JoinCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-primary/15 bg-primary-surface py-16 text-foreground dark:bg-[#062417] dark:text-white sm:py-20">
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[linear-gradient(90deg,#0B6B35_0%,#D6A21A_50%,#0B6B35_100%)]" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-primary/15 bg-white p-6 text-center shadow-xl shadow-primary/5 dark:bg-[#092B1C] lg:flex-row lg:p-8 lg:text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-surface px-3.5 py-1.5 text-xs font-bold text-primary dark:bg-emerald-950 dark:text-emerald-400">
              <ShieldAlert className="h-4 w-4 text-secondary-dark" />
              <span>নতুন সদস্য নিবন্ধন চালুকৃত</span>
            </div>
            <h2 className="text-2xl font-black leading-tight tracking-normal text-foreground dark:text-white sm:text-3xl lg:text-4xl">
              {t("cta_title")}
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-zinc-300 sm:text-sm">
              {t("cta_subtitle")}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/membership/apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-95 sm:w-auto"
            >
              <UserCheck className="h-4 w-4 text-secondary-light" />
              <span>{t("cta_btn")}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-xs transition-all hover:bg-primary-surface sm:w-auto"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>{t("nav_contact")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
