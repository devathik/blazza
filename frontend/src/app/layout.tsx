import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { TopBar, Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "ব্লাজা — Bangladesh Law & Jurist's Association | বাংলাদেশ ল এন্ড জুরিস্টস এসোসিয়েশন",
  description: "ব্লাজা হলো বাংলাদেশের আইনজীবী ও আইন শিক্ষার্থীদের একটি অন্যতম বৃহত্তম অরাজনৈতিক ও পেশাজীবী সংগঠন। প্রতিষ্ঠাকাল ২০১৬।",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Providers>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
