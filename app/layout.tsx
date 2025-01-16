import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
