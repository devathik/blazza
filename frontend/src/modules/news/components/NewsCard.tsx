"use client";

import React from "react";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { NewsItem } from "../types/news.types";

interface NewsCardProps {
  news: NewsItem;
  onSelect: (news: NewsItem) => void;
}

export default function NewsCard({ news, onSelect }: NewsCardProps) {
  const { language, t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    press: t("news_filter_press"),
    announcement: t("news_filter_announcement"),
    article: t("news_filter_article"),
  };

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Media Thumbnail */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 z-10">
            <span className="rounded-lg bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow-xs">
              {categoryLabels[news.category] || news.category}
            </span>
          </div>
        </div>

        {/* Article Details */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{language === "bn" ? news.date : news.dateEn}</span>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <User className="h-3.5 w-3.5 text-primary" />
              <span className="line-clamp-1 max-w-[120px]">{news.author}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {language === "bn" ? news.title : news.titleEn}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
            {language === "bn" ? news.summary : news.summaryEn}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-5 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
        <button
          onClick={() => onSelect(news)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
        >
          <span>{t("news_btn_read")}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
