"use client";

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
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

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-primary-dark text-xs text-primary-foreground/90 border-b border-primary-light/20 transition-colors duration-300">
      <div className="container-custom container-header">
        <div className="flex h-10 items-center justify-between">
          {/* Left: Tagline & Contact info */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block font-medium text-secondary-light">
              {t("topbar_tagline")}
            </span>
            <span className="hidden md:inline text-primary-light/40">|</span>
            <a
              href={`mailto:${t("topbar_email")}`}
              className="flex items-center gap-1.5 hover:text-secondary-light transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-secondary" />
              <span>{t("topbar_email")}</span>
            </a>
            <a
              href={`tel:${t("topbar_phone")}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-secondary-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-secondary" />
              <span>{t("topbar_phone")}</span>
            </a>
          </div>

          {/* Right: Social icons & Language switcher */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80 border-r border-primary-light/30 pr-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary-light transition-colors p-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary-light transition-colors p-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary-light transition-colors p-1"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-primary/40 p-0.5 rounded-full border border-primary-light/30">
              <Globe className="h-3.5 w-3.5 ml-1.5 text-secondary" />
              <button
                onClick={() => setLanguage("bn")}
                className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all ${
                  language === "bn"
                    ? "bg-secondary text-secondary-foreground shadow-xs"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all ${
                  language === "en"
                    ? "bg-secondary text-secondary-foreground shadow-xs"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
