# AI Starter - Mega Full-Stack Project

## Project Overview

This is a mega starter project that aggregates the best AI skills, UI libraries, and design systems from across GitHub into one unified codebase. The goal is maximum capability for front-end and full-stack development.

## Tech Stack

- **Framework**: Next.js 15 (App Router) - front + back
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 4
- **Database/Auth/Storage**: Supabase
- **Deployment**: Vercel
- **Visual Feedback**: Playwright MCP (browser automation)

## UI Component Libraries Available

### Tailwind-native (preferred for new components)
- **daisyui** - Component classes for Tailwind
- **flowbite** + **flowbite-react** - Component library
- **radix-ui** - Unstyled accessible primitives
- **headlessui** - Unstyled accessible components
- **heroui** - Full component library

### Animation & Motion
- **motion** (framer-motion) - React animations
- **gsap** - High-performance animations
- **lottie-react** - Lottie animations

### Utilities
- **zod** - Schema validation
- **react-hook-form** - Form management
- **zustand** - State management
- **nuqs** - URL state management
- **lucide-react** + **react-icons** - Icon libraries
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **cmdk** - Command palette
- **embla-carousel-react** - Carousel
- **date-fns** - Date utilities

## Aggregated Skills Sources (vendors/)

The `vendors/` directory contains cloned GitHub repos with skills, design rules, and agent instructions:

| Directory | Source | Purpose |
|-----------|--------|---------|
| `ui-ux-pro-max-skill` | nextlevelbuilder/ui-ux-pro-max-skill | Design intelligence engine - 161 reasoning rules, 67 styles, CLI |
| `ui-ux-design-pro-skill` | saifyxpro/ui-ux-design-pro-skill | Design pro - 150+ rules, 107 styles, 127 palettes, CLI |
| `ui-skills` | ibelick/ui-skills | UI polish skills for agent-built interfaces |
| `antigravity-awesome-skills` | sickn33/antigravity-awesome-skills | 1,311+ agentic skills library |
| `awesome-claude-skills` | ComposioHQ/awesome-claude-skills | Curated skills + 78 SaaS integrations |
| `awesome-claude-code` | hesreallyhim/awesome-claude-code | Skills, hooks, slash-commands, orchestrators |
| `awesome-agent-skills` | VoltAgent/awesome-agent-skills | 1,000+ skills from official dev teams |
| `cursor-designer` | spencergoldade/cursor-designer | UX/UI/IA design rules |
| `platform-design-skills` | ehmo/platform-design-skills | Apple HIG, Material 3, WCAG 2.2 - 450+ rules |
| `agent-skills` | vercel-labs/agent-skills | Vercel official web design guidelines |
| `apple-design-skill` | dickwu/apple-design-skill | Cross-platform Apple HIG reviewer |
| `marketingskills` | coreyhaines31/marketingskills | CRO, copywriting, SEO, growth |
| `planning-with-files` | OthmanAdi/planning-with-files | Persistent markdown planning |

## How to Use Skills

### Read from vendors/ when needed
When building UI, consult the relevant vendor directories for rules, patterns, and design intelligence:
- For design system generation: read `vendors/ui-ux-pro-max-skill/src/`
- For platform-specific rules: read `vendors/platform-design-skills/`
- For polish patterns: read `vendors/ui-skills/`
- For marketing content: read `vendors/marketingskills/`

### Visual Feedback Loop
1. Generate code
2. Start dev server: `pnpm dev`
3. Use Playwright MCP to navigate to `http://localhost:3000`
4. Take screenshots at desktop/tablet/mobile breakpoints
5. Analyze visuals and iterate

## Project Structure

```
ai-starter/
├── app/                    # Next.js App Router pages
├── components/ui/          # Reusable UI components
├── lib/                    # Utilities and clients
├── vendors/                # Cloned skill repos (read-only reference)
├── screenshots/            # Visual review screenshots
├── reviews/                # Visual review reports
├── public/                 # Static assets
├── .claude/                # Claude Code config + skills
├── .mcp.json               # MCP server config (Playwright + Supabase)
└── CLAUDE.md               # This file
```

## Conventions

- Use `cn()` from `@/lib/utils` for className merging
- Components go in `components/ui/` or co-located in feature folders
- All new components must be accessible (WCAG 2.1 AA minimum)
- Use Tailwind utility classes, avoid custom CSS unless necessary
- Use Server Components by default, add `"use client"` only when needed
- Supabase client: server-side from `@/lib/supabase/server`, client-side from `@/lib/supabase/client`

## Commands

- `pnpm dev` - Start development server (Turbopack)
- `pnpm build` - Production build
- `pnpm lint` - ESLint check
- `pnpm type-check` - TypeScript type checking
