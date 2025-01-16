import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-600 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="h-full w-full rounded-lg bg-white dark:bg-slate-900">
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-lg font-bold text-indigo-500">T</span>
              </div>
            </div>
          </div>
          <span className="hidden font-bold sm:inline-block">
            {process.env.NEXT_PUBLIC_SITE_NAME || "Template"}
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
} 