"use client";

import React from "react";
import { Search, X, Filter } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { EventCategory } from "../types/event.types";

interface EventsFilterBarProps {
  activeCategory: EventCategory;
  onCategoryChange: (cat: EventCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export default function EventsFilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  resultCount,
}: EventsFilterBarProps) {
  const { language, t } = useLanguage();

  const categories: { id: EventCategory; label: string }[] = [
    { id: "all", label: t("events_filter_all") },
    { id: "upcoming", label: t("events_filter_upcoming") },
    { id: "past", label: t("events_filter_past") },
    { id: "seminar", label: t("events_filter_seminar") },
    { id: "workshop", label: t("events_filter_workshop") },
    { id: "legal_camp", label: t("events_filter_camp") },
  ];

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs border border-primary"
                    : "bg-card text-foreground/80 hover:bg-primary-surface hover:text-primary border border-border"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t("events_search_placeholder")}
            className="w-full rounded-xl bg-card border border-border pl-10 pr-9 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Result Count Status */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <div className="flex items-center gap-1.5 font-medium">
          <Filter className="h-3.5 w-3.5 text-primary" />
          <span>
            {language === "bn"
              ? `প্রদর্শিত হচ্ছে: ${resultCount} টি কার্যক্রম`
              : `Showing ${resultCount} events`}
          </span>
        </div>
      </div>
    </div>
  );
}
