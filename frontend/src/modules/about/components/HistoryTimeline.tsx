"use client";

import React from "react";
import { Calendar, Flag, Award, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function HistoryTimeline() {
  const { t } = useLanguage();

  const events = [
    {
      year: "2016",
      icon: Flag,
      title: t("timeline_2016_title"),
      desc: t("timeline_2016_desc"),
    },
    {
      year: "2018",
      icon: Calendar,
      title: t("timeline_2018_title"),
      desc: t("timeline_2018_desc"),
    },
    {
      year: "2021",
      icon: Award,
      title: t("timeline_2021_title"),
      desc: t("timeline_2021_desc"),
    },
    {
      year: "2024",
      icon: Globe,
      title: t("timeline_2024_title"),
      desc: t("timeline_2024_desc"),
    },
    {
      year: "2026",
      icon: Sparkles,
      title: t("timeline_2026_title"),
      desc: t("timeline_2026_desc"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary-surface dark:bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="content-narrow mb-16 space-y-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            {t("history_section_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t("history_section_sub")}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-primary dark:border-secondary/40 ml-4 md:ml-32 space-y-12">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Year Marker Circle */}
                <div className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-secondary border-2 border-secondary shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs font-black text-secondary-foreground">
                    {event.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-foreground">
                    {event.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {event.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
