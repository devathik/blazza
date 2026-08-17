"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, Plus, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "হোম", href: "/", icon: Home },
    { name: "ফেভারিট", href: "/favorites", icon: Heart },
    { name: "যুক্ত করুন", href: "/profile/add-shop", icon: Plus, isFab: true },
    { name: "প্রোফাইল", href: "/profile", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 pb-safe-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          if (item.isFab) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center -translate-y-4 w-12 h-12 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white rounded-full shadow-lg shadow-sky-500/30 border-4 border-white dark:border-zinc-900 transition-all duration-200"
              >
                <Plus className="w-6 h-6 stroke-[3]" />
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 text-xs font-semibold gap-1 transition-all ${
                isActive
                  ? "text-sky-500 dark:text-sky-400 scale-105"
                  : "text-zinc-500 dark:text-zinc-400 active:text-zinc-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
