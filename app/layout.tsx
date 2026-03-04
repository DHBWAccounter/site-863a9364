import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ScholariumAI | AI-Powered Research Intelligence",
  description:
    "Accelerate your academic research with AI-driven literature discovery, intelligent summarization, and collaborative knowledge management tools.",
  keywords: [
    "academic research",
    "AI research tools",
    "literature review",
    "research intelligence",
    "academic writing",
    "knowledge management",
  ],
  authors: [{ name: "ScholariumAI" }],
  openGraph: {
    title: "ScholariumAI | AI-Powered Research Intelligence",
    description:
      "Accelerate your academic research with AI-driven literature discovery, intelligent summarization, and collaborative knowledge management tools.",
    type: "website",
    locale: "en_US",
    siteName: "ScholariumAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholariumAI | AI-Powered Research Intelligence",
    description:
      "Accelerate your academic research with AI-driven literature discovery, intelligent summarization, and collaborative knowledge management tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
