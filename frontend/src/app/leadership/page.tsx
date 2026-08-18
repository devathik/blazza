"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  LeadershipHero,
  LeadershipStats,
  LeadershipFilterBar,
  LeaderCard,
  LeaderDetailModal,
  LeadershipCta,
  MOCK_LEADERS,
  LeaderMember,
  LeaderCategory,
} from "@/modules/leadership";
import { Users } from "lucide-react";

export default function LeadershipPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<LeaderCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeader, setSelectedLeader] = useState<LeaderMember | null>(null);

  const filteredLeaders = useMemo(() => {
    return MOCK_LEADERS.filter((ldr) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory !== "all") matchesCat = ldr.category === activeCategory;

      // Search query filter
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesQuery =
          ldr.name.toLowerCase().includes(q) ||
          ldr.nameEn.toLowerCase().includes(q) ||
          ldr.designation.toLowerCase().includes(q) ||
          ldr.designationEn.toLowerCase().includes(q) ||
          ldr.chapter.toLowerCase().includes(q) ||
          ldr.chapterEn.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LeadershipHero />
      <LeadershipStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <LeadershipFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredLeaders.length}
          />

          {filteredLeaders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLeaders.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  leader={leader}
                  onSelect={(item) => setSelectedLeader(item)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <Users className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("leadership_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <LeaderDetailModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

      <LeadershipCta />
    </div>
  );
}
