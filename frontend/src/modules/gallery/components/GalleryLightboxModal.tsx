"use client";

import React from "react";
import Image from "next/image";
import { X, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { GalleryItem } from "../types/gallery.types";

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export default function GalleryLightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: GalleryLightboxModalProps) {
  const { language, t } = useLanguage();

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl space-y-6 p-6 sm:p-8 text-foreground">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors z-20"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Prev & Next Controls */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2.5 bg-black/50 text-white hover:bg-primary transition-all z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2.5 bg-black/50 text-white hover:bg-primary transition-all z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Main Media Preview */}
        {item.isVideo && item.videoUrl ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
            <iframe
              src={item.videoUrl}
              title={item.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted -mt-2">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Metadata & Caption */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{t("gallery_modal_date")}: {language === "bn" ? item.date : item.dateEn}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{t("gallery_modal_location")}: {language === "bn" ? item.location : item.locationEn}</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
            {language === "bn" ? item.title : item.titleEn}
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium pt-2 border-t border-border">
            {language === "bn" ? item.caption : item.captionEn}
          </p>
        </div>

        {/* Footer CTAs */}
        <div className="pt-2 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-6 py-2.5 text-xs font-bold text-muted-foreground hover:bg-muted transition-colors"
          >
            {t("gallery_btn_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
