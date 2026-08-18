"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, Shield } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function MembershipCta() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary-surface dark:bg-primary-dark/40 py-14 sm:py-18 text-foreground border-t border-border transition-colors duration-300">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
              <Shield className="h-4 w-4 text-secondary" />
              <span>আজই যুক্ত হোন</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              {t("cta_title")}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t("cta_subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/membership/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-extrabold text-primary-foreground shadow-md hover:bg-primary-dark transition-all"
            >
              <UserCheck className="h-4 w-4 text-secondary-light" />
              <span>{t("membership_btn_apply")}</span>
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border px-6 py-3.5 text-sm font-bold text-foreground hover:bg-primary-surface transition-all shadow-2xs"
            >
              <span>{t("btn_portal_login")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
