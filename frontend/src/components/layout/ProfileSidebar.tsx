"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  FileText,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  User,
  UserCheck,
} from "lucide-react";

const menuItems = [
  { name: "ড্যাশবোর্ড", href: "/profile", icon: LayoutDashboard },
  { name: "দোকান পোস্ট করুন", href: "/profile/add-shop", icon: PlusCircle },
  { name: "আমার বিজ্ঞাপন", href: "/profile/my-post", icon: FileText },
  { name: "নোটিফিকেশন", href: "/profile/notifications", icon: Bell, showCount: true },
  { name: "প্রোফাইল সম্পাদন", href: "/profile/edit", icon: User },
];

export default function ProfileSidebar() {
  const pathname = usePathname();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Member portal notification listener (future scope)
    setUnreadCount(0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  };

  const renderCount = (showCount?: boolean) => {
    if (!showCount || unreadCount < 1) return null;

    return (
      <span className="ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
        {unreadCount}
      </span>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="hidden md:flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider px-3">
            মেনুসমূহ
          </span>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-950 dark:hover:text-zinc-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {renderCount(item.showCount)}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded-xl transition-colors">
            <UserCheck className="w-4 h-4" />
            <span>সদস্য ভেরিফিকেশন</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-colors mt-1"
          >
            <LogOut className="w-4 h-4" />
            <span>লগ আউট</span>
          </button>
        </div>
      </div>

      <div className="md:hidden flex bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 shadow-sm overflow-x-auto no-scrollbar gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-sky-500 text-white"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
              {item.showCount && unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                  {unreadCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
