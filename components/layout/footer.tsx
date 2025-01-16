import Link from "next/link";
import { Github, Twitter, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {process.env.NEXT_PUBLIC_GITHUB_HANDLE || "your-username"}
            </Link>
            . The source code is available on{" "}
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {process.env.NEXT_PUBLIC_GITHUB_URL && (
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {process.env.NEXT_PUBLIC_TWITTER_URL && (
            <Link
              href={process.env.NEXT_PUBLIC_TWITTER_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
          {process.env.NEXT_PUBLIC_SITE_URL && (
            <Link
              href={process.env.NEXT_PUBLIC_SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
} 