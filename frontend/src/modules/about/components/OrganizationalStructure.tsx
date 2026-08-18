"use client";

import React from "react";
import { Users, Shield, Building, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function OrganizationalStructure() {
  const { t } = useLanguage();

  const structures = [
    {
      icon: Shield,
      title: t("struct_central"),
      desc: t("struct_central_desc"),
      badge: "সর্বোচ্চ নির্বাহী",
    },
    {
      icon: Users,
      title: t("struct_advisory"),
      desc: t("struct_advisory_desc"),
      badge: "প্রবীণ বিচারক পরিষদ",
    },
    {
      icon: Building,
      title: t("struct_district"),
      desc: t("struct_district_desc"),
      badge: "৬৪ জেলা বার কমিটি",
    },
    {
      icon: GraduationCap,
      title: t("struct_university"),
      desc: t("struct_university_desc"),
      badge: "বিশ্ববিদ্যালয় অনুষদ",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="content-narrow mb-14 space-y-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            {t("structure_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t("structure_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {structures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl bg-card border border-border p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-secondary-dark dark:text-secondary-light bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-secondary-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
