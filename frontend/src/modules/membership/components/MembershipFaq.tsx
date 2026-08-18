"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { MEMBERSHIP_FAQS } from "../data/mockMembership";

export default function MembershipFaq() {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <HelpCircle className="h-3.5 w-3.5 text-secondary" />
            <span>জিজ্ঞাসাবাদ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            {t("membership_faq_title")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {t("membership_faq_sub")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {MEMBERSHIP_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl bg-card border border-border shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-extrabold text-foreground text-sm hover:text-primary transition-colors"
                >
                  <span>{language === "bn" ? faq.question : faq.questionEn}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed font-medium border-t border-border/40">
                    {language === "bn" ? faq.answer : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
