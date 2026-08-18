"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { EventItem } from "../types/event.types";

interface EventCardProps {
  event: EventItem;
  onSelect: (event: EventItem) => void;
}

export default function EventCard({ event, onSelect }: EventCardProps) {
  const { language, t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    seminar: "সেমিনার",
    workshop: "ওয়ার্কশপ",
    legal_camp: "আইনি সেবা ক্যাম্প",
    conference: "জাতীয় সম্মেলন",
  };

  const statusBadge = {
    upcoming: { bg: "bg-primary text-primary-foreground", text: "আসন্ন" },
    ongoing: { bg: "bg-secondary text-secondary-foreground", text: "চলমান" },
    past: { bg: "bg-muted text-muted-foreground", text: "সম্পন্ন" },
  }[event.status];

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Media Thumbnail */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="rounded-lg bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow-xs">
              {categoryLabels[event.category] || event.category}
            </span>
            <span className={`rounded-lg px-2.5 py-1 text-[11px] font-bold shadow-xs ${statusBadge.bg}`}>
              {statusBadge.text}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-3">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{language === "bn" ? event.date : event.dateEn}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {language === "bn" ? event.title : event.titleEn}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
            {language === "bn" ? event.description : event.descriptionEn}
          </p>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-5 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(event)}
          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
        >
          <span>{t("events_btn_details")}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        {event.status === "upcoming" && (
          <button
            onClick={() => onSelect(event)}
            className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-2xs hover:bg-primary-dark transition-all"
          >
            <UserCheck className="h-3.5 w-3.5 text-secondary-light" />
            <span>{t("events_btn_register")}</span>
          </button>
        )}
      </div>
    </article>
  );
}
