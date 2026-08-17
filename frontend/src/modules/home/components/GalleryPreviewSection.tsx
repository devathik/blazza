"use client";

import React from "react";
import Link from "next/link";
import { Camera, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function GalleryPreviewSection() {
  const { t } = useLanguage();

  const galleryItems = [
    { id: 1, title: "জাতীয় আইনি সম্মেলন ২০২৬", tag: "সম্মেলন" },
    { id: 2, title: "বিশ্ববিদ্যালয় শাখা প্রতিনিধি সভা", tag: "ওয়ার্কশপ" },
    { id: 3, title: "বিনামূল্যে আইনি সেবা সহায়তা ক্যাম্প", tag: "ফিল্ড প্রোগ্রাম" },
    { id: 4, title: "নবীন আইনজীবী বরণ অনুষ্ঠান", tag: "কমিটি" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-[#07190F] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 text-xs font-bold text-[#0B3D24] dark:text-emerald-400 mb-3 border border-emerald-300 dark:border-emerald-800">
              <Camera className="h-4 w-4 text-amber-500" />
              <span>ছবি ও স্মারক গ্যালারি</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              {t("gallery_title")}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t("gallery_subtitle")}
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B3D24] dark:text-amber-400 hover:underline"
          >
            <span>সম্পূর্ণ গ্যালারি দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-[#0B3D24] aspect-[4/3] border border-amber-400/20 shadow-md cursor-pointer"
            >
              {/* Decorative background visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-emerald-800/40 group-hover:scale-110 transition-transform duration-500">
                <ImageIcon className="h-20 w-20 stroke-[1]" />
              </div>

              {/* Tag & Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 space-y-1">
                <span className="inline-block rounded-md bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold text-zinc-950">
                  {item.tag}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
