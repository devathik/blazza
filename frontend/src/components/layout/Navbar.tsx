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
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/95 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-amber-400/80 shadow-md transition-transform group-hover:scale-105">
              <Image
                src="/logo/blazza-logo.jpeg"
                alt="BLAJA Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0B3D24] dark:text-emerald-400 leading-tight">
                BLAJA
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400 -mt-0.5">
                Law & Jurist's Assoc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center space-x-1 lg:flex xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#0B3D24] text-white shadow-sm"
                      : "text-zinc-700 hover:bg-emerald-50 hover:text-[#0B3D24] dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/membership/apply"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0B3D24] px-3.5 py-2 text-xs font-bold text-amber-300 shadow-sm transition-all hover:bg-[#125533] hover:text-white active:scale-95 border border-amber-400/40"
            >
              <UserCheck className="h-4 w-4" />
              <span>{t("btn_apply_member")}</span>
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Shield className="h-3.5 w-3.5 text-amber-500" />
              <span>{t("btn_portal_login")}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="space-y-1 border-b border-zinc-200 bg-white px-4 pb-4 pt-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 lg:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#0B3D24] text-amber-300"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-2">
            <Link
              href="/membership/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0B3D24] px-4 py-2.5 text-sm font-bold text-amber-300 shadow-sm"
            >
              <UserCheck className="h-4 w-4" />
              <span>{t("btn_apply_member")}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
