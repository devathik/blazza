"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function NewsPreviewSection() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: t("news_item_1_title"),
      date: t("news_item_1_date"),
      desc: t("news_item_1_desc"),
      category: "সেমিনার",
    },
    {
      id: 2,
      title: t("news_item_2_title"),
      date: t("news_item_2_date"),
      desc: t("news_item_2_desc"),
      category: "শাখা আপডেট",
    },
    {
      id: 3,
      title: t("news_item_3_title"),
      date: t("news_item_3_date"),
      desc: t("news_item_3_desc"),
      category: "আইনি সহায়তা",
    },
  ];

  return (
    <section className="bg-primary-surface py-16 transition-colors duration-300 dark:bg-background sm:py-24">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white px-3.5 py-1.5 text-xs font-bold text-secondary-dark shadow-xs dark:text-secondary-light">
              <Newspaper className="h-4 w-4 text-secondary-dark" />
              <span>সংবাদ ও প্রেস</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              {t("news_title")}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {t("news_subtitle")}
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary dark:text-secondary-light hover:underline"
          >
            <span>সব সংবাদ দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-primary/10 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-secondary-dark" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-secondary-light transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary dark:text-secondary-light group-hover:gap-2.5 transition-all"
                >
                  <span>{t("btn_read_more")}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
