"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, UserCheck, Shield } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "/about" },
    { name: t("nav_leadership"), href: "/leadership" },
    { name: t("nav_events"), href: "/events" },
    { name: t("nav_membership"), href: "/membership" },
    { name: t("nav_chapters"), href: "/chapters" },
    { name: t("nav_news"), href: "/news" },
    { name: t("nav_publications"), href: "/publications" },
    { name: t("nav_gallery"), href: "/gallery" },
    { name: t("nav_contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 shadow-xs">
      <div className="container-custom container-header">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-secondary/80 shadow-xs transition-transform group-hover:scale-105">
              <Image
                src="/logo/blazza-logo.jpeg"
                alt="BLAJA Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-primary dark:text-primary-light leading-tight">
                ব্লাজা
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase -mt-0.5">
                বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-lg px-2 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-primary-surface text-primary border border-primary/20 shadow-2xs"
                      : "text-foreground/80 hover:bg-primary-surface hover:text-primary dark:hover:bg-muted dark:hover:text-primary-light"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-2 md:flex shrink-0">
            <Link
              href="/membership/apply"
              className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary-light active:scale-95 border border-secondary/40"
            >
              <UserCheck className="h-4 w-4 text-secondary-light" />
              <span>{t("btn_apply_member")}</span>
            </Link>
            <Link
              href="/login"
              className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground/80 hover:bg-muted transition-colors"
            >
              <Shield className="h-3.5 w-3.5 text-secondary" />
              <span>{t("btn_portal_login")}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground/80 hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="space-y-1 border-b border-border bg-background px-4 pb-4 pt-2 shadow-lg lg:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-primary text-secondary-light"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <Link
              href="/membership/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-xs"
            >
              <UserCheck className="h-4 w-4 text-secondary-light" />
              <span>{t("btn_apply_member")}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
