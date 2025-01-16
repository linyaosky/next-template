import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComponentsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Components
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of pre-built components.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-12">
        {/* UI Components */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">UI Components</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Buttons</h3>
              <p className="text-sm text-muted-foreground">
                Different button styles and variants.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Forms</h3>
              <p className="text-sm text-muted-foreground">
                Form components and validation.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Cards</h3>
              <p className="text-sm text-muted-foreground">
                Card layouts and designs.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Navigation</h3>
              <p className="text-sm text-muted-foreground">
                Navigation components and menus.
              </p>
            </div>
          </div>
        </div>

        {/* Layout Components */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Layout Components</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Headers</h3>
              <p className="text-sm text-muted-foreground">
                Different header layouts and styles.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Footers</h3>
              <p className="text-sm text-muted-foreground">
                Footer components and layouts.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Sidebars</h3>
              <p className="text-sm text-muted-foreground">
                Sidebar navigation and layouts.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Grids</h3>
              <p className="text-sm text-muted-foreground">
                Grid system and layouts.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Components */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Interactive Components</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Modals</h3>
              <p className="text-sm text-muted-foreground">
                Modal dialogs and overlays.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Dropdowns</h3>
              <p className="text-sm text-muted-foreground">
                Dropdown menus and selects.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Tabs</h3>
              <p className="text-sm text-muted-foreground">
                Tab navigation and panels.
              </p>
            </div>
            <div className="group relative rounded-lg border p-6 hover:border-foreground">
              <h3 className="font-bold">Accordions</h3>
              <p className="text-sm text-muted-foreground">
                Expandable content sections.
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