"use client";

import React from "react";
import Link from "next/link";
import { Users, UserCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function AboutCta() {
  const { t } = useLanguage();

  return (
    <section className="relative border-t border-primary/15 bg-primary-surface py-16 text-foreground dark:bg-primary-surface dark:text-white">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl font-black text-foreground dark:text-white sm:text-3xl">
              আমাদের নেতৃত্বের সাথে পরিচিত হোন
            </h2>
            <p className="text-xs text-muted-foreground dark:text-zinc-300 sm:text-sm">
              কেন্দ্রীয় কার্যনির্বাহী কমিটি, জেলা ও বিশ্ববিদ্যালয় শাখার দায়িত্বশীলদের পরিচিতি দেখুন।
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/leadership"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-md transition-all hover:bg-primary-dark sm:w-auto"
            >
              <Users className="h-4 w-4" />
              <span>নেতৃত্বের তালিকা</span>
              <ArrowRight className="h-4 w-4 text-secondary-light" />
            </Link>
            <Link
              href="/membership/apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-xs transition-all hover:bg-background sm:w-auto"
            >
              <UserCheck className="h-4 w-4 text-primary" />
              <span>{t("btn_apply_member")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
