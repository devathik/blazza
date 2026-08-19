"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  NewsHero,
  NewsStats,
  NewsFilterBar,
  NewsCard,
  NewsDetailModal,
  NewsCta,
  MOCK_NEWS,
  NewsItem,
  NewsCategory,
} from "@/modules/news";
import { Newspaper } from "lucide-react";

export default function NewsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews = useMemo(() => {
    return MOCK_NEWS.filter((item) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory !== "all") matchesCat = item.category === activeCategory;

      // Search query filter
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesQuery =
          item.title.toLowerCase().includes(q) ||
          item.titleEn.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.author.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NewsHero />
      <NewsStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <NewsFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredNews.length}
          />

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredNews.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  onSelect={(item) => setSelectedNews(item)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <Newspaper className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("news_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <NewsCta />
    </div>
  );
}
