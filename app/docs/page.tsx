import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Build your application with our comprehensive guides and examples.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-12">
        {/* Quick Start */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Quick Start</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to install and set up the template.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Configure the template for your project.
              </p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Components</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">UI Components</h3>
              <p className="text-sm text-muted-foreground">
                Pre-built UI components using Radix UI and Tailwind CSS.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Layout Components</h3>
              <p className="text-sm text-muted-foreground">
                Layout components for building pages.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Implement authentication in your application.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Database</h3>
              <p className="text-sm text-muted-foreground">
                Set up and use the database in your application.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">API Routes</h3>
              <p className="text-sm text-muted-foreground">
                Create and use API routes in your application.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Deploy your application to production.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-start">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
} 