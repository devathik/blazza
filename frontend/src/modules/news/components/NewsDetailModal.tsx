"use client";

import React from "react";
import Image from "next/image";
import { X, Calendar, User, Share2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { NewsItem } from "../types/news.types";

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export default function NewsDetailModal({ news, onClose }: NewsDetailModalProps) {
  const { language, t } = useLanguage();

  if (!news) return null;

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

        {/* Article Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-muted -mt-2">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 640px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        {/* Title & Metadata */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{language === "bn" ? news.date : news.dateEn}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5 text-primary" />
              <span>{news.author}</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
            {language === "bn" ? news.title : news.titleEn}
          </h2>
        </div>

        {/* Article Content */}
        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed font-medium pt-2 border-t border-border">
          <p>{language === "bn" ? news.content : news.contentEn}</p>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold text-muted-foreground hover:bg-muted transition-colors"
          >
            {t("news_btn_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
