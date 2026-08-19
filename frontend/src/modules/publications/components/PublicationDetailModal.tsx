"use client";

import React from "react";
import Image from "next/image";
import { X, Calendar, User, Download, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { PublicationItem } from "../types/publication.types";

interface PublicationDetailModalProps {
  publication: PublicationItem | null;
  onClose: () => void;
}

export default function PublicationDetailModal({ publication, onClose }: PublicationDetailModalProps) {
  const { language, t } = useLanguage();

  if (!publication) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl space-y-6 p-6 sm:p-8 text-foreground">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cover Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-muted -mt-2">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            sizes="(max-width: 640px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        {/* Title & Info */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
            {language === "bn" ? publication.title : publication.titleEn}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-primary-surface/60 p-4 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-2 font-semibold">
              <User className="h-4 w-4 text-secondary shrink-0" />
              <span>{t("pub_modal_author")}: {publication.author}</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Calendar className="h-4 w-4 text-primary shrink-0" />
              <span>{t("pub_modal_date")}: {language === "bn" ? publication.date : publication.dateEn}</span>
            </div>
            <div className="flex items-center gap-2 font-semibold sm:col-span-2">
              <FileText className="h-4 w-4 text-secondary shrink-0" />
              <span>{t("pub_modal_format")}: {publication.fileSize}</span>
            </div>
          </div>
        </div>

        {/* Abstract */}
        <div className="space-y-2 text-xs text-muted-foreground leading-relaxed font-medium pt-2 border-t border-border">
          <h4 className="font-bold text-foreground text-sm">সারসংক্ষেপ (Abstract)</h4>
          <p>{language === "bn" ? publication.summary : publication.summaryEn}</p>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold text-muted-foreground hover:bg-muted transition-colors"
          >
            {t("pub_btn_close")}
          </button>

          <a
            href={publication.fileUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-xs hover:bg-primary-dark transition-all"
          >
            <Download className="h-4 w-4 text-secondary-light" />
            <span>{t("pub_btn_download")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
