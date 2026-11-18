import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = localFont({ src: "./fonts/inter.ttf", weight: "100 900", variable: "--font-inter" });
const spaceGrotesk = localFont({ src: "./fonts/spacegrotesk.ttf", weight: "300 700", variable: "--font-space" });
const jetbrainsMono = localFont({ src: "./fonts/jetbrainsmono.ttf", weight: "100 800", variable: "--font-jetbrains-mono" });
export const metadata: Metadata = {
  title: `${siteConfig.companyName} | Custom Software Engineering & Applied AI Systems`,
  description:
    "Independent software engineering studio building full-stack applications, private AI systems, model evaluation pipelines, and custom MCP tools.",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: `${siteConfig.companyName} | Software Engineering & AI Systems`,
    description:
      "Custom software, local model preparation and evaluation, and AI integrations.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
