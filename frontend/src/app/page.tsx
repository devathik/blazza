import React from "react";
import {
  HeroSection,
  StatsSection,
  AboutPreviewSection,
  NewsPreviewSection,
  GalleryPreviewSection,
  JoinCtaSection,
} from "@/modules/home";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <NewsPreviewSection />
      <GalleryPreviewSection />
      <JoinCtaSection />
    </div>
  );
}
