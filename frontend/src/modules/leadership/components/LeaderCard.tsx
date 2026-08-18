"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { LeaderMember } from "../types/leadership.types";

interface LeaderCardProps {
  leader: LeaderMember;
  onSelect: (leader: LeaderMember) => void;
}

export default function LeaderCard({ leader, onSelect }: LeaderCardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Avatar */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-secondary/80 shadow-md group-hover:scale-105 transition-transform duration-300">
          <Image
            src={leader.avatar}
            alt={leader.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name & Designation */}
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-black text-foreground group-hover:text-primary transition-colors leading-snug">
            {language === "bn" ? leader.name : leader.nameEn}
          </h3>
          <p className="text-xs font-bold text-secondary">
            {language === "bn" ? leader.designation : leader.designationEn}
          </p>
          <div className="pt-1">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-surface border border-primary/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              <Award className="h-3 w-3 text-secondary shrink-0" />
              <span>{language === "bn" ? leader.chapter : leader.chapterEn}</span>
            </span>
          </div>
        </div>

        {/* Bio Teaser */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
          {language === "bn" ? leader.bio : leader.bioEn}
        </p>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-border/40 mt-5 flex items-center justify-center gap-3">
        <button
          onClick={() => onSelect(leader)}
          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary-surface border border-primary/20 px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-2xs"
        >
          <span>{t("events_btn_details")}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
