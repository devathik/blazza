"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactInfoCards() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: MapPin,
      title: t("contact_info_hq"),
      desc: t("footer_address"),
    },
    {
      icon: Phone,
      title: t("contact_info_phone"),
      desc: t("topbar_phone"),
    },
    {
      icon: Mail,
      title: t("contact_info_email"),
      desc: t("topbar_email"),
    },
    {
      icon: Clock,
      title: t("contact_info_hours"),
      desc: t("contact_hours_val"),
    },
  ];

  return (
    <section className="bg-card py-10 border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-primary-surface/60 border border-primary/10 space-y-3 hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-extrabold text-foreground">
                  {c.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
