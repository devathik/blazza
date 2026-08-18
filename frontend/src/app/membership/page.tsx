import React from "react";
import Metadata from "next";
import {
  MembershipHero,
  MembershipCategories,
  MembershipBenefits,
  MembershipFaq,
  MembershipCta,
} from "@/modules/membership";

export const metadata = {
  title: "সদস্যপদ ও ক্যাটাগরি — BLAJA | Bangladesh Law & Jurist's Association",
  description: "BLAJA আইনজীবী ও আইন শিক্ষার্থী সদস্যপদ ক্যাটাগরি, সুবিধা ও অনলাইনে সদস্য হওয়ার নিয়ম জানুন।",
};

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MembershipHero />
      <MembershipCategories />
      <MembershipBenefits />
      <MembershipFaq />
      <MembershipCta />
    </div>
  );
}
