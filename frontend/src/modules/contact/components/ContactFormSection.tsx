"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ContactFormInput } from "../types/contact.types";

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    phone: "",
    subject: "সাধারণ জিজ্ঞাসা (General Inquiry)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "সাধারণ জিজ্ঞাসা (General Inquiry)",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border transition-colors duration-300">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-surface border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
              <MessageSquare className="h-3.5 w-3.5 text-secondary" />
              <span>বার্তা পাঠান</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              {t("contact_form_title")}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t("contact_form_sub")}
            </p>
          </div>

          {isSuccess && (
            <div className="p-4 rounded-2xl bg-primary-surface border border-primary/30 flex items-center gap-3 text-primary text-xs font-bold animate-in fade-in">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
              <span>{t("contact_success_msg")}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-foreground">{t("contact_label_name")} *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="আপনার নাম লিখুন..."
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-foreground">{t("contact_label_email")} *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.com"
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-foreground">{t("contact_label_phone")}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+৮৮০ ১৭০০-০০০০০০"
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-foreground">{t("contact_label_subject")}</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                >
                  <option value="সাধারণ জিজ্ঞাসা">সাধারণ জিজ্ঞাসা (General Inquiry)</option>
                  <option value="সদস্যপদ সংক্রান্ত">সদস্যপদ সংক্রান্ত (Membership Query)</option>
                  <option value="আইনি সহায়তা সেল">আইনি সহায়তা সেল (Legal Aid Clinic)</option>
                  <option value="শাখা কমিটি যোগাযোগ">শাখা কমিটি যোগাযোগ (Chapter Inquiry)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-foreground">{t("contact_label_message")} *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="আপনার বিস্তারিত বার্তা বা জিজ্ঞাসা লিখুন..."
                className="w-full rounded-xl bg-background border border-border px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-extrabold text-primary-foreground shadow-md hover:bg-primary-dark transition-all disabled:opacity-50"
            >
              <Send className="h-4 w-4 text-secondary-light" />
              <span>{isSubmitting ? t("contact_sending") : t("contact_btn_send")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
