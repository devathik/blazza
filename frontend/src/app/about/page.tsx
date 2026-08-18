import React from "react";
import type { Metadata } from "next";
import {
  AboutHero,
  MissionVisionPillars,
  HistoryTimeline,
  OrganizationalStructure,
  AboutCta,
} from "@/modules/about";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে — BLAJA | Bangladesh Law & Jurist's Association",
  description: "বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন (BLAJA)-এর ইতিহাস, লক্ষ্য, উদ্দেশ্য ও সাংগঠনিক কাঠামো সম্পর্কে জানুন। প্রতিষ্ঠাকাল ২০১৬।",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <MissionVisionPillars />
      <HistoryTimeline />
      <OrganizationalStructure />
      <AboutCta />
    </div>
  );
}
