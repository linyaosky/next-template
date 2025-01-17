# Modern Web Template

A modern web application template built with Next.js 14, TypeScript, Tailwind CSS, and Radix UI. This template provides a clean starting point for your next web project with modern features and beautiful UI components.

![Modern Web Template](public/preview.png)

## ✨ Features

- 🚀 **Next.js 14** - Latest features including App Router and Server Components
- 💎 **TypeScript** - Type safety and enhanced developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔥 **Radix UI** - Accessible and customizable component primitives
- 🌙 **Dark Mode** - Built-in dark mode with system preference detection
- 📱 **Responsive** - Mobile-first design approach
- 🎨 **Modern UI** - Beautiful animations and transitions
- 🔍 **SEO** - Built-in SEO optimization with next-sitemap

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/linyaosky/next-template my-project
cd my-project
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

## 📦 Project Structure

```
.
├── app/                # Next.js 14 App Router
│   ├── page.tsx       # Homepage
│   └── layout.tsx     # Root layout
├── components/        # React components
│   ├── ui/           # UI components
│   └── layout/       # Layout components
├── styles/           # Global styles
└── public/           # Static assets
```

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 📝 Development Notes

### Key Files
- `app/page.tsx` - Main homepage with modern UI components and animations
- `app/layout.tsx` - Root layout with dark mode support
- `components/layout/header.tsx` - Site header with theme toggle
- `components/layout/footer.tsx` - Site footer
- `tailwind.config.ts` - Tailwind configuration with custom animations
- `styles/globals.css` - Global styles and animations

### Available Commands
```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Adding New Pages
1. Create new page in `app` directory
2. Use existing components from `components/ui`
3. Follow established patterns for animations and styling

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow existing color scheme in dark/light modes
- Maintain consistent spacing using container classes
- Reuse animation classes from `tailwind.config.ts`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) - For the amazing deployment platform
- [Tailwind Labs](https://tailwindcss.com) - For the awesome CSS framework
- [Radix UI](https://www.radix-ui.com) - For the accessible component primitives
- [shadcn/ui](https://ui.shadcn.com) - For the beautiful component inspiration 