"use client";

import React from "react";
import Image from "next/image";
import { Calendar, User, Download, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { PublicationItem } from "../types/publication.types";

interface PublicationCardProps {
  publication: PublicationItem;
  onSelect: (pub: PublicationItem) => void;
}

export default function PublicationCard({ publication, onSelect }: PublicationCardProps) {
  const { language, t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    journal: t("pub_filter_journal"),
    manual: t("pub_filter_manual"),
    policy: t("pub_filter_policy"),
    report: t("pub_filter_report"),
  };

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Cover Thumbnail */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 z-10">
            <span className="rounded-lg bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow-xs">
              {categoryLabels[publication.category] || publication.category}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>{language === "bn" ? publication.date : publication.dateEn}</span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-primary">
              <FileText className="h-3.5 w-3.5" />
              <span>{publication.fileSize}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {language === "bn" ? publication.title : publication.titleEn}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
            {language === "bn" ? publication.summary : publication.summaryEn}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(publication)}
          className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("pub_btn_details")}
        </button>

        <a
          href={publication.fileUrl}
          download
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-2xs hover:bg-primary-dark transition-all"
        >
          <Download className="h-3.5 w-3.5 text-secondary-light" />
          <span>{t("pub_btn_download")}</span>
        </a>
      </div>
    </article>
  );
}
