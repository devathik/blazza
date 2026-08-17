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
    <section className="py-16 sm:py-24 bg-white dark:bg-[#06190F] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/60 px-3.5 py-1 text-xs font-bold text-amber-800 dark:text-amber-400 mb-3">
              <Newspaper className="h-4 w-4 text-amber-600" />
              <span>সংবাদ ও প্রেস</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              {t("news_title")}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t("news_subtitle")}
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B3D24] dark:text-amber-400 hover:underline"
          >
            <span>সব সংবাদ দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl bg-zinc-50 dark:bg-[#0B2618] border border-zinc-200/80 dark:border-emerald-900/40 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block rounded-md bg-[#0B3D24] px-2.5 py-1 text-[11px] font-bold text-amber-300">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400">
                    <Calendar className="h-3.5 w-3.5 text-amber-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white group-hover:text-[#0B3D24] dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-200/60 dark:border-emerald-950 mt-6">
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0B3D24] dark:text-amber-400 group-hover:gap-2.5 transition-all"
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
