"use client";

import React from "react";
import Image from "next/image";
import { Play, Maximize2, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { GalleryItem } from "../types/gallery.types";

interface GalleryCardProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
}

export default function GalleryCard({ item, onSelect }: GalleryCardProps) {
  const { language, t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    seminars: t("gallery_filter_seminars"),
    conferences: t("gallery_filter_conferences"),
    camps: t("gallery_filter_camps"),
    videos: t("gallery_filter_videos"),
  };

  return (
    <article
      onClick={() => onSelect(item)}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Media Thumbnail Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="rounded-lg bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow-xs">
            {categoryLabels[item.category] || item.category}
          </span>
        </div>

        {/* Play Icon for Videos */}
        {item.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 ml-0.5 fill-current" />
            </div>
          </div>
        )}

        {/* Hover Expand Icon */}
        {!item.isVideo && (
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xs">
              <Maximize2 className="h-4 w-4" />
            </div>
          </div>
        )}

        {/* Bottom Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white space-y-1.5">
          <div className="flex items-center gap-3 text-[11px] font-medium text-white/80">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-secondary-light" />
              <span>{language === "bn" ? item.date : item.dateEn}</span>
            </div>
            <div className="flex items-center gap-1 line-clamp-1">
              <MapPin className="h-3 w-3 text-primary-light" />
              <span>{language === "bn" ? item.location : item.locationEn}</span>
            </div>
          </div>

          <h3 className="text-sm sm:text-base font-extrabold line-clamp-2 leading-snug text-white">
            {language === "bn" ? item.title : item.titleEn}
          </h3>
        </div>
      </div>
    </article>
  );
}
