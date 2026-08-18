"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import {
  EventsHero,
  EventsStats,
  EventsFilterBar,
  EventCard,
  EventDetailModal,
  EventsCta,
  MOCK_EVENTS,
  EventItem,
  EventCategory,
} from "@/modules/events";
import { CalendarX } from "lucide-react";

export default function EventsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<EventCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((evt) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory === "upcoming") matchesCat = evt.status === "upcoming";
      else if (activeCategory === "past") matchesCat = evt.status === "past";
      else if (activeCategory !== "all") matchesCat = evt.category === activeCategory;

      // Search query filter
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesQuery =
          evt.title.toLowerCase().includes(q) ||
          evt.titleEn.toLowerCase().includes(q) ||
          evt.location.toLowerCase().includes(q) ||
          evt.venue.toLowerCase().includes(q) ||
          evt.description.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <EventsHero />
      <EventsStats />

      <section className="py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <EventsFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredEvents.length}
          />

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onSelect={(item) => setSelectedEvent(item)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border space-y-3">
              <CalendarX className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t("events_no_results")}
              </p>
            </div>
          )}
        </div>
      </section>

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <EventsCta />
    </div>
  );
}
