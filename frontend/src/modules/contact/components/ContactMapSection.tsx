"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactMapSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-card border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <Navigation className="h-3.5 w-3.5 text-secondary" />
            <span>অবস্থান নির্দেশিকা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            {t("contact_map_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {t("footer_address")}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-muted aspect-[16/7] w-full shadow-lg relative flex items-center justify-center">
          <div className="text-center space-y-3 p-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <MapPin className="h-7 w-7 text-secondary-light" />
            </div>
            <h3 className="text-lg font-black text-foreground">
              বাংলাদেশ সুপ্রিম কোর্ট প্রাঙ্গণ, ঢাকা
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto font-medium">
              বিসিএসি ভবন (৩য় তলা), সুপ্রিম কোর্ট বার এ্যাসোসিয়েশন সংলগ্ন, কদম ফোয়ারা মোড়, ঢাকা-১০০০।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
