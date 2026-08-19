"use client";

import React from "react";
import { Building2, Landmark, GraduationCap, Users, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ChapterItem } from "../types/chapter.types";

interface ChapterCardProps {
  chapter: ChapterItem;
  onSelect: (chapter: ChapterItem) => void;
}

export default function ChapterCard({ chapter, onSelect }: ChapterCardProps) {
  const { language, t } = useLanguage();

  const Icon = chapter.category === "district" ? Landmark : GraduationCap;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
      <div className="space-y-4">
        {/* Category & Region Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3 py-1 text-[11px] font-bold text-primary">
            <Icon className="h-3.5 w-3.5 text-secondary shrink-0" />
            <span>
              {chapter.category === "district"
                ? t("chapters_filter_district")
                : t("chapters_filter_university")}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
            <MapPin className="h-3 w-3 text-secondary shrink-0" />
            <span>{language === "bn" ? chapter.region : chapter.regionEn}</span>
          </div>
        </div>

        {/* Title & Location */}
        <div>
          <h3 className="text-base sm:text-lg font-black text-foreground group-hover:text-primary transition-colors leading-snug">
            {language === "bn" ? chapter.name : chapter.nameEn}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 font-medium line-clamp-1">
            {chapter.location}
          </p>
        </div>

        {/* Executive Info */}
        <div className="p-3.5 rounded-xl bg-primary-surface/60 border border-primary/10 space-y-1.5 text-xs">
          <div className="flex justify-between items-center font-medium">
            <span className="text-muted-foreground">{t("chapters_card_president")}:</span>
            <strong className="text-foreground">{chapter.presidentName}</strong>
          </div>
          <div className="flex justify-between items-center font-medium">
            <span className="text-muted-foreground">{t("chapters_card_gs")}:</span>
            <strong className="text-foreground">{chapter.gsName}</strong>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-border/40 mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-xs font-bold text-primary">
          <Users className="h-3.5 w-3.5 text-secondary shrink-0" />
          <span>
            {language === "bn" ? `${chapter.totalMembers} জন সদস্য` : `${chapter.totalMembers} Members`}
          </span>
        </div>

        <button
          onClick={() => onSelect(chapter)}
          className="inline-flex items-center gap-1 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-2xs hover:bg-primary-dark transition-all"
        >
          <span>{t("events_btn_details")}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
