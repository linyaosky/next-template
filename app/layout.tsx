import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "./google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || "Next.js Template",
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || "Next.js Template"}`,
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "Template",
  ],
  authors: [
    {
      name: process.env.NEXT_PUBLIC_GITHUB_HANDLE || "your-username",
      url: process.env.NEXT_PUBLIC_GITHUB_URL,
    },
  ],
  creator: process.env.NEXT_PUBLIC_GITHUB_HANDLE || "your-username",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
