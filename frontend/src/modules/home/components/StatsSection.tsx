"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Building2, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function StatsSection() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

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
    <section className="bg-amber-400 py-10 border-y border-amber-500/40 text-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-amber-300/40 border border-amber-500/30 transition-all duration-700 ${
                  hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3D24] text-amber-400 shadow-md">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B3D24]">
                  {stat.val}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-900 mt-1">
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
