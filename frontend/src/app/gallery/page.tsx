"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  GalleryHero,
  GalleryStats,
  GalleryFilterBar,
  GalleryCard,
  GalleryLightboxModal,
  GalleryCta,
  MOCK_GALLERY,
  GalleryItem,
  GalleryCategory,
} from "@/modules/gallery";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return MOCK_GALLERY.filter((item) => {
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
          item.location.toLowerCase().includes(q) ||
          item.caption.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <GalleryHero />
      <GalleryStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <GalleryFilterBar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
            searchQuery={searchQuery}
            onSearchChange={(q) => {
              setSearchQuery(q);
              setSelectedIndex(null);
            }}
            resultCount={filteredItems.length}
          />

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item, idx) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onSelect={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <ImageIcon className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("gallery_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <GalleryLightboxModal
        item={selectedItem}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < filteredItems.length - 1}
      />

      <GalleryCta />
    </div>
  );
}
