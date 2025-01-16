import Link from "next/link";
import { Github, ArrowRight, Sparkles, Code2, Palette, Zap, Layers, Star, Boxes, Workflow, Laptop } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:60px_60px] animate-grid" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-radial from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute -left-4 top-0 h-72 w-72 bg-indigo-500 opacity-20 blur-[128px] animate-blob" />
          <div className="absolute -right-4 bottom-0 h-72 w-72 bg-purple-500 opacity-20 blur-[128px] animate-blob delay-700" />
        </div>
        
        <div className="container relative">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-[1px] shadow-2xl shadow-indigo-500/20 animate-shimmer">
              <div className="rounded-2xl bg-gradient-to-b from-white to-white/90 px-4 py-2.5 dark:from-slate-900 dark:to-slate-900/90">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-indigo-500 animate-spin-slow" />
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">The Modern Web Template</span>
                </div>
              </div>
            </div>
            
            <h1 className="relative z-10 bg-clip-text text-center font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-6xl lg:text-7xl animate-fade-in delay-200">
              Build Web Apps{" "}
              <span className="relative">
                <span className="absolute -inset-1 block -skew-y-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient" aria-hidden="true" />
                <span className="relative text-white">Faster</span>
              </span>{" "}
              Than Ever
            </h1>

            <p className="max-w-[42rem] text-center text-lg text-slate-600 dark:text-slate-400 sm:text-xl animate-fade-in delay-300">
              A modern template for building full-stack web applications with Next.js 14, TypeScript, Tailwind CSS, and Radix UI.
              Start your next project with best practices and modern features built-in.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6 animate-fade-in delay-500">
              <Link
                href="/docs"
                className="group inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/35 hover:scale-105"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-100 px-8 text-sm font-medium text-slate-900 shadow-lg shadow-slate-200/50 transition-all hover:bg-slate-200 hover:scale-105 dark:bg-slate-800 dark:text-slate-50 dark:shadow-slate-800/50 dark:hover:bg-slate-700"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mx-auto mt-20 grid max-w-[980px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Next.js 14",
                description: "App Router, Routing, Layouts, Loading UI and API routes.",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Components",
                description: "UI components built using Radix UI and styled with Tailwind CSS.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Code2 className="h-6 w-6" />,
                title: "Authentication",
                description: "Authentication using NextAuth.js and middlewares.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Palette className="h-6 w-6" />,
                title: "Database",
                description: "ORM using Prisma and deployed on PlanetScale.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Subscriptions",
                description: "Free and paid subscriptions using Stripe.",
                gradient: "from-rose-500 to-orange-500"
              },
              {
                icon: <Boxes className="h-6 w-6" />,
                title: "Deployment",
                description: "Deploy to Vercel with CI/CD and environment variables.",
                gradient: "from-orange-500 to-yellow-500"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white/50 to-white dark:from-slate-900/50 dark:to-slate-900 p-[1px] shadow-2xl shadow-indigo-500/10 transition-all hover:shadow-indigo-500/20 animate-fade-in-up hover:scale-[1.02]"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="relative h-full space-y-4 rounded-2xl bg-gradient-to-b from-white to-white/90 p-6 dark:from-slate-900 dark:to-slate-900/90">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient} text-white shadow-lg transition-transform group-hover:scale-110 animate-float`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="mx-auto mt-32 max-w-[980px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Built with Modern Technologies</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Everything you need to build production-ready applications
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border p-8 group hover:border-indigo-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <Laptop className="h-8 w-8 text-indigo-500 animate-float" />
                  <h3 className="text-xl font-bold">TypeScript First</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Built with TypeScript for better developer experience and type safety.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border p-8 group hover:border-purple-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <Workflow className="h-8 w-8 text-purple-500 animate-float" />
                  <h3 className="text-xl font-bold">CI/CD Ready</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Integrated with GitHub Actions for automated testing and deployment.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border p-8 group hover:border-pink-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <Boxes className="h-8 w-8 text-pink-500 animate-float" />
                  <h3 className="text-xl font-bold">API Integration</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Built-in API routes and middleware for seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "100+", label: "Components", color: "text-indigo-500" },
              { number: "10k+", label: "Downloads", color: "text-purple-500" },
              { number: "24/7", label: "Support", color: "text-pink-500" },
              { number: "99.9%", label: "Uptime", color: "text-rose-500" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h3 className={`text-3xl font-bold ${stat.color} animate-float`}>{stat.number}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20">
          <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-20 text-center shadow-2xl animate-gradient">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] animate-grid" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl animate-float">
                Start Building Today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                Join thousands of developers building amazing applications.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <Link
                  href="/docs"
                  className="group inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-indigo-600 shadow-lg shadow-black/25 transition-all hover:bg-indigo-50 hover:scale-105"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
