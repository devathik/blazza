"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#051C10] text-zinc-300 border-t border-[#124229] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand & Intro */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-amber-400/80 shadow-md">
                <Image
                  src="/logo/blazza-logo.jpeg"
                  alt="BLAJA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-tight">
                  BLAJA
                </span>
                <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-widest -mt-0.5">
                  Est. 2016
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-zinc-400">
              {t("footer_about")}
            </p>
            <div className="flex items-center gap-3 text-amber-400">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-1.5 bg-[#0b3d24] rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 bg-[#0b3d24] rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-1.5 bg-[#0b3d24] rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-colors" aria-label="YouTube">
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-amber-400 border-b border-[#124229] pb-2">
              {t("footer_quick_links")}
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">{t("nav_home")}</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">{t("nav_about")}</Link></li>
              <li><Link href="/leadership" className="hover:text-amber-300 transition-colors">{t("nav_leadership")}</Link></li>
              <li><Link href="/events" className="hover:text-amber-300 transition-colors">{t("nav_events")}</Link></li>
              <li><Link href="/membership" className="hover:text-amber-300 transition-colors">{t("nav_membership")}</Link></li>
              <li><Link href="/chapters" className="hover:text-amber-300 transition-colors">{t("nav_chapters")}</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Press */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-amber-400 border-b border-[#124229] pb-2">
              প্রকাশনা ও সংবাদ
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/news" className="hover:text-amber-300 transition-colors">{t("nav_news")}</Link></li>
              <li><Link href="/publications" className="hover:text-amber-300 transition-colors">{t("nav_publications")}</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-300 transition-colors">{t("nav_gallery")}</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">{t("nav_contact")}</Link></li>
              <li><Link href="/membership/apply" className="text-amber-400 font-bold hover:underline">{t("btn_apply_member")}</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-amber-400 border-b border-[#124229] pb-2">
              {t("footer_contact_title")}
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-zinc-400">
              <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{t("footer_address")}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Mail className="h-4 w-4 text-amber-400 shrink-0" />
              <span>{t("topbar_email")}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Phone className="h-4 w-4 text-amber-400 shrink-0" />
              <span>{t("topbar_phone")}</span>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-[#0b3d24] px-2.5 py-1 rounded-full border border-emerald-700/50">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>নিবন্ধিত পেশাজীবী সংস্থা</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#124229] pt-6 text-xs text-zinc-500 md:flex-row">
          <p className="text-center md:text-left">
            {t("footer_rights")}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">{t("footer_terms")}</Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">{t("footer_privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
