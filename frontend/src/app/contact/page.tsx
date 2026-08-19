import React from "react";
import Metadata from "next";
import {
  ContactHero,
  ContactInfoCards,
  ContactFormSection,
  ContactMapSection,
} from "@/modules/contact";

export const metadata = {
  title: "যোগাযোগ — BLAJA | Bangladesh Law & Jurist's Association",
  description: "BLAJA-এর কেন্দ্রীয় কার্যালয়ের ঠিকানা, ফোন নম্বর, ইমেইল ও অনলাইন বার্তা পাঠান।",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <ContactMapSection />
    </div>
  );
}
