"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  PublicationsHero,
  PublicationsStats,
  PublicationsFilterBar,
  PublicationCard,
  PublicationDetailModal,
  PublicationsCta,
  MOCK_PUBLICATIONS,
  PublicationItem,
  PublicationCategory,
} from "@/modules/publications";
import { BookOpen } from "lucide-react";

export default function PublicationsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<PublicationCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  const filteredPublications = useMemo(() => {
    return MOCK_PUBLICATIONS.filter((item) => {
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
      <PublicationsHero />
      <PublicationsStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <PublicationsFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredPublications.length}
          />

          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPublications.map((pub) => (
                <PublicationCard
                  key={pub.id}
                  publication={pub}
                  onSelect={(item) => setSelectedPub(item)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <BookOpen className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("pub_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <PublicationDetailModal
        publication={selectedPub}
        onClose={() => setSelectedPub(null)}
      />

      <PublicationsCta />
    </div>
  );
}
