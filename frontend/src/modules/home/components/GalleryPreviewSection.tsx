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
    <section className="bg-white py-16 transition-colors duration-300 sm:py-24">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-surface px-3.5 py-1.5 text-xs font-bold text-primary">
              <Camera className="h-4 w-4 text-secondary-dark" />
              <span>ছবি ও স্মারক গ্যালারি</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              {t("gallery_title")}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {t("gallery_subtitle")}
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary dark:text-secondary-light hover:underline"
          >
            <span>সম্পূর্ণ গ্যালারি দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-primary/15 bg-primary-surface shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-secondary" />
              <div className="absolute inset-0 flex items-center justify-center text-primary/18 transition-transform duration-500 group-hover:scale-110">
                <ImageIcon className="h-20 w-20 stroke-[1.2]" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 space-y-1 bg-[linear-gradient(180deg,rgba(241,251,245,0)_0%,#F1FBF5_36%,#F1FBF5_100%)] p-5">
                <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-extrabold text-secondary-foreground">
                  {item.tag}
                </span>
                <h4 className="text-sm font-bold text-primary transition-colors group-hover:text-primary-dark">
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
