"use client";

import React from "react";
import { Image as ImageIcon, Camera, Video, Eye } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function GalleryStats() {
  const { language, t } = useLanguage();

  const stats = [
    { icon: ImageIcon, val: language === "bn" ? "১০০+" : "100+", label: t("gallery_stat_total") },
    { icon: Camera, val: language === "bn" ? "৫,০০০+" : "5,000+", label: t("gallery_stat_photos") },
    { icon: Video, val: language === "bn" ? "৫০+" : "50+", label: t("gallery_stat_videos") },
    { icon: Eye, val: language === "bn" ? "৫০,০০০+" : "50,000+", label: t("gallery_stat_views") },
  ];

  return (
    <section className="bg-card py-10 border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-primary-surface/60 border border-primary/10 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-primary">
                  {st.val}
                </div>
                <div className="text-xs font-semibold text-muted-foreground mt-0.5">
                  {st.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
