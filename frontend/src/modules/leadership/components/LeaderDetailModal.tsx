"use client";

import React from "react";
import Image from "next/image";
import { X, Mail, Phone, Building, Award, ShieldCheck, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { LeaderMember } from "../types/leadership.types";

interface LeaderDetailModalProps {
  leader: LeaderMember | null;
  onClose: () => void;
}

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function LeaderDetailModal({ leader, onClose }: LeaderDetailModalProps) {
  const { language, t } = useLanguage();

  if (!leader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl space-y-6 p-6 sm:p-8 text-foreground">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Avatar Header */}
        <div className="flex flex-col items-center text-center space-y-3 pt-2">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-secondary shadow-lg">
            <Image
              src={leader.avatar}
              alt={leader.name}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-black text-foreground">
              {language === "bn" ? leader.name : leader.nameEn}
            </h2>
            <p className="text-xs font-bold text-secondary mt-0.5">
              {language === "bn" ? leader.designation : leader.designationEn}
            </p>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3 py-1 text-xs font-bold text-primary">
                <Award className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span>{language === "bn" ? leader.chapter : leader.chapterEn}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bar Affiliation & Bio */}
        <div className="space-y-4 text-xs">
          {leader.barAffiliation && (
            <div className="p-3.5 rounded-xl bg-primary-surface/60 border border-primary/10 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-primary">
                <Building className="h-4 w-4 text-secondary" />
                <span>{t("leadership_modal_affiliation")}</span>
              </div>
              <p className="text-foreground/90 font-semibold">{leader.barAffiliation}</p>
            </div>
          )}

          <div className="space-y-1.5">
            <h4 className="font-bold text-foreground">{t("leadership_modal_bio")}</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
              {language === "bn" ? leader.bio : leader.bioEn}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 pt-3 border-t border-border text-xs">
          <h4 className="font-bold text-foreground">{t("leadership_modal_contact")}</h4>
          <div className="space-y-2 text-muted-foreground font-medium">
            {leader.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href={`mailto:${leader.email}`} className="hover:text-primary transition-colors">
                  {leader.email}
                </a>
              </div>
            )}
            {leader.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>{leader.phone}</span>
              </div>
            )}
            {leader.linkedinUrl && (
              <div className="flex items-center gap-2">
                <LinkedinIcon className="h-4 w-4 text-secondary shrink-0" />
                <a href={leader.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-bold">
                  LinkedIn Profile
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Close CTA */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary-dark transition-all"
          >
            {t("events_btn_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
