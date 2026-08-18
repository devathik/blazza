"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar, Clock, MapPin, Building, User, CheckCircle2, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { EventItem } from "../types/event.types";

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const { language, t } = useLanguage();

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl space-y-6 p-6 sm:p-8 text-foreground">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-muted -mt-2">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Program Title & Metadata */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
            {language === "bn" ? event.title : event.titleEn}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-primary-surface/60 p-4 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-2 text-foreground/90 font-semibold">
              <Calendar className="h-4 w-4 text-secondary shrink-0" />
              <span>{language === "bn" ? event.date : event.dateEn}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90 font-semibold">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90 font-semibold sm:col-span-2">
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              <span>{event.venue}</span>
            </div>
          </div>
        </div>

        {/* Program Speakers & Organizer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-primary">
              <User className="h-4 w-4 text-secondary" />
              <span>{t("events_modal_speaker")}</span>
            </div>
            <p className="text-muted-foreground font-medium">{event.speaker}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-primary">
              <Building className="h-4 w-4 text-secondary" />
              <span>{t("events_modal_organizer")}</span>
            </div>
            <p className="text-muted-foreground font-medium">{event.organizer}</p>
          </div>
        </div>

        {/* Description & Program Highlights */}
        <div className="space-y-4 text-xs">
          <p className="text-muted-foreground leading-relaxed">
            {language === "bn" ? event.description : event.descriptionEn}
          </p>

          {event.highlights && event.highlights.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-border">
              <h4 className="font-bold text-foreground text-sm">{t("events_modal_highlights")}</h4>
              <ul className="space-y-1.5">
                {event.highlights.map((hl, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-4 py-2.5 text-xs font-bold text-muted-foreground hover:bg-muted transition-colors"
          >
            {t("events_btn_close")}
          </button>

          {event.status === "upcoming" && (
            <Link
              href={event.registrationUrl || "/membership/apply"}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-xs hover:bg-primary-dark transition-all"
            >
              <UserCheck className="h-4 w-4 text-secondary-light" />
              <span>{t("events_btn_register")}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
