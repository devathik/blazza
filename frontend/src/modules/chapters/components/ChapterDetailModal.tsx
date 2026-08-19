"use client";

import React from "react";
import { X, Building2, MapPin, Mail, Phone, Calendar, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ChapterItem } from "../types/chapter.types";

interface ChapterDetailModalProps {
  chapter: ChapterItem | null;
  onClose: () => void;
}

export default function ChapterDetailModal({ chapter, onClose }: ChapterDetailModalProps) {
  const { language, t } = useLanguage();

  if (!chapter) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl space-y-6 p-6 sm:p-8 text-foreground">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Title */}
        <div className="space-y-2 pt-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3 py-1 text-xs font-bold text-primary">
            <Building2 className="h-3.5 w-3.5 text-secondary shrink-0" />
            <span>
              {chapter.category === "district"
                ? t("chapters_filter_district")
                : t("chapters_filter_university")}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            {language === "bn" ? chapter.name : chapter.nameEn}
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{t("chapters_modal_established")}: {chapter.established}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>
                {language === "bn" ? `${chapter.totalMembers} জন নিবন্ধিত সদস্য` : `${chapter.totalMembers} Members`}
              </span>
            </div>
          </div>
        </div>

        {/* Location & Office */}
        <div className="p-3.5 rounded-xl bg-primary-surface/60 border border-primary/10 space-y-1 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-primary">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>{t("chapters_modal_location")}</span>
          </div>
          <p className="text-foreground/90 font-semibold">{chapter.location}</p>
        </div>

        {/* Executive Roster */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-foreground text-sm">{t("chapters_modal_committee")}</h4>
          <ul className="space-y-1.5 bg-background p-4 rounded-xl border border-border">
            {chapter.committeeMembers.map((m, i) => (
              <li key={i} className="flex items-center gap-2 text-muted-foreground font-medium">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 pt-2 border-t border-border text-xs">
          <h4 className="font-bold text-foreground">যোগাযোগ ও হেল্পলাইন</h4>
          <div className="space-y-1.5 text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary shrink-0" />
              <a href={`mailto:${chapter.email}`} className="hover:text-primary transition-colors">
                {chapter.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>{chapter.phone}</span>
            </div>
          </div>
        </div>

        {/* Close CTA */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary-dark transition-all"
          >
            {t("events_btn_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
