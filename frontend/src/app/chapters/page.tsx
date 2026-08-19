"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  ChaptersHero,
  ChaptersStats,
  ChaptersFilterBar,
  ChapterCard,
  ChapterDetailModal,
  ChaptersCta,
  MOCK_CHAPTERS,
  ChapterItem,
  ChapterCategory,
} from "@/modules/chapters";
import { Building2 } from "lucide-react";

export default function ChaptersPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ChapterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<ChapterItem | null>(null);

  const filteredChapters = useMemo(() => {
    return MOCK_CHAPTERS.filter((ch) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory !== "all") matchesCat = ch.category === activeCategory;

      // Search query filter
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesQuery =
          ch.name.toLowerCase().includes(q) ||
          ch.nameEn.toLowerCase().includes(q) ||
          ch.region.toLowerCase().includes(q) ||
          ch.regionEn.toLowerCase().includes(q) ||
          ch.location.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ChaptersHero />
      <ChaptersStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <ChaptersFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredChapters.length}
          />

          {filteredChapters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  onSelect={(item) => setSelectedChapter(item)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <Building2 className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("chapters_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <ChapterDetailModal
        chapter={selectedChapter}
        onClose={() => setSelectedChapter(null)}
      />

      <ChaptersCta />
    </div>
  );
}
