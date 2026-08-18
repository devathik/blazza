"use client";

import React from "react";
import { Calendar, Building2, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function StatsSection() {
  const { t } = useLanguage();
  const stats = [
    {
      icon: Calendar,
      val: t("stat_established_val"),
      label: t("stat_established"),
    },
    {
      icon: Building2,
      val: t("stat_chapters_val"),
      label: t("stat_chapters"),
    },
    {
      icon: Users,
      val: t("stat_members_val"),
      label: t("stat_members"),
    },
    {
      icon: GraduationCap,
      val: t("stat_events_val"),
      label: t("stat_events"),
    },
  ];

  return (
    <section className="border-y border-border bg-white py-10 transition-colors duration-300 dark:bg-[#081C12]">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-primary/10 bg-primary-surface p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white hover:shadow-lg dark:bg-[#0D2619]"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-white text-primary shadow-2xs dark:bg-primary-dark dark:text-secondary">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl font-black tracking-normal text-primary dark:text-secondary sm:text-3xl">
                  {stat.val}
                </div>
                <div className="mt-1 text-xs font-bold text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
