import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Vera — Understand your IBD. Discover your triggers.",
  description:
    "Vera is an AI-powered health companion for people with IBD. Track daily lifestyle factors, discover personal patterns, and manage your condition with confidence.",
  openGraph: {
    title: "Vera — Your AI companion for managing IBD",
    description:
      "Track your health, discover personal patterns, and gain insights into what influences your IBD symptoms.",
    images: [{ url: "/logo.png", width: 400, height: 400, alt: "Vera" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vera — Understand your IBD",
    description:
      "An AI companion that helps people with IBD discover triggers and manage symptoms with confidence.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
