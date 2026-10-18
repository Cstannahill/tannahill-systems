import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: `${siteConfig.companyName} | Custom Software Engineering & Applied AI Systems`,
  description:
    "Independent software engineering studio and research lab specializing in full-stack web applications, private LLM inference pipelines, distributed data scraping, and native developer tooling.",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: `${siteConfig.companyName} | Software Engineering & AI Systems`,
    description:
      "Custom full-stack engineering (.NET 9, Next.js, TypeScript, Python) and local AI infrastructure.",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.companyName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-emerald-500 selection:text-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
