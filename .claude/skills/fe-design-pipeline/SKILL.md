---
name: fe-design-pipeline
description: Use when the user asks to build, create, generate, design, or scaffold a front-end or full-stack application - websites, landing pages, dashboards, SaaS apps, e-commerce, portfolios, or any UI/UX work. Triggers on "build", "create", "generate", "design", "make a website/app/page/dashboard/landing", "front-end project", "Next.js app". Orchestrates design system selection, code generation, visual review, and iterative improvement.
---

# Front-End Design Pipeline

Master orchestrator that runs a 5-phase pipeline to generate production-quality front-end applications with visual feedback loops.

## Pipeline Phases

### Phase 1: Discovery
- Parse the user's request to understand: project type, target audience, style preferences, features needed
- Ask clarifying questions if requirements are ambiguous
- Read `vendors/ui-ux-pro-max-skill/src/ui-ux-pro-max/data/` for industry-specific design rules
- Read `vendors/ui-ux-design-pro-skill/src/` for alternative design reasoning
- Create a `.fe-pipeline.json` config at project root:

```json
{
  "projectType": "landing-page | dashboard | e-commerce | saas | portfolio | blog",
  "industry": "tech | finance | health | creative | ...",
  "uiLibrary": "auto-select based on project type",
  "animationLibrary": "motion | gsap | lottie",
  "designTokens": {
    "primaryColor": "",
    "secondaryColor": "",
    "accentColor": "",
    "fontDisplay": "",
    "fontBody": "",
    "styleKeywords": []
  },
  "features": [],
  "pages": [],
  "devPort": 3000,
  "maxIterations": 3,
  "iterationCount": 0
}
```

### Phase 2: Design System
- Consult `vendors/platform-design-skills/` for platform-specific rules (Apple HIG, Material, WCAG)
- Consult `vendors/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/` to run the design system generator:
  ```bash
  python3 vendors/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "[project description]" --design-system -p "[Project Name]"
  ```
- Select the best UI component library based on project type:
  - **Landing pages / marketing**: daisyui + flowbite (Tailwind-native, fast)
  - **SaaS dashboards**: radix-ui + headlessui + heroui (flexible, accessible)
  - **E-commerce**: flowbite-react + radix-ui (components + flexibility)
  - **Portfolios / creative**: headlessui + motion (animations)
- Generate Tailwind theme with colors, typography, spacing
- Write design tokens into `.fe-pipeline.json`

### Phase 3: Code Generation
- Use Context7 MCP to fetch latest docs for chosen libraries
- Read `vendors/agent-skills/` for Vercel web design guidelines
- Read `vendors/cursor-designer/` for UX/UI/IA design patterns
- Generate the Next.js application structure:
  - `app/layout.tsx` - Root layout with fonts, metadata, theme
  - `app/page.tsx` - Main page
  - `app/globals.css` - Tailwind imports + custom properties
  - `components/ui/` - Required UI components
  - `lib/` - Utilities, Supabase clients
- Apply design tokens from Phase 2
- Follow patterns from `vendors/ui-skills/` for polish
- Use `frontend-design` plugin guidelines for aesthetic quality
- Start dev server: `pnpm dev`

### Phase 4: Visual Review
- Use Playwright MCP to review the generated UI:
  1. `browser_navigate` to `http://localhost:3000`
  2. `browser_wait_for` page load
  3. `browser_snapshot` for structural analysis
  4. `browser_take_screenshot` full page -> `screenshots/review-{N}.png`
  5. `browser_resize` to 768x1024 -> tablet screenshot
  6. `browser_resize` to 375x812 -> mobile screenshot
  7. Reset to 1280x720
- Analyze screenshots against criteria:
  - Typography quality and hierarchy
  - Color coherence and contrast
  - Layout spacing and alignment
  - Responsive behavior
  - Component rendering
  - Overall aesthetic quality
- Score 0-10, list issues and suggestions
- Save review to `reviews/review-{N}.json`

### Phase 5: Iteration
- If score < 8 and iterationCount < maxIterations:
  - Read `vendors/ui-skills/` for polish patterns
  - Read `vendors/platform-design-skills/` for accessibility fixes
  - Prioritize issues by severity
  - Apply fixes to code
  - Increment iterationCount
  - Loop back to Phase 4
- If score >= 8 or maxIterations reached: DONE

## Library Selection Matrix

| Project Type | UI Library | Animation | Why |
|---|---|---|---|
| Landing page | daisyui + flowbite | motion | Fast prototyping, Tailwind-native |
| SaaS Dashboard | radix-ui + heroui | motion | Accessible, flexible |
| E-commerce | flowbite-react | gsap | Rich components, micro-interactions |
| Portfolio | headlessui + radix | motion + gsap | Custom animations, unique feel |
| Blog / Editorial | daisyui | motion | Content-focused, clean |
| Mobile-first | radix-ui | motion | Touch-friendly, accessible |

## When to Consult Vendors

| Need | Vendor to Read |
|---|---|
| Industry-specific design rules | `vendors/ui-ux-pro-max-skill/` or `vendors/ui-ux-design-pro-skill/` |
| Apple HIG / Material Design rules | `vendors/platform-design-skills/` |
| Apple design cross-platform review | `vendors/apple-design-skill/` |
| UX/UI/IA design patterns | `vendors/cursor-designer/` |
| Web design guidelines | `vendors/agent-skills/` |
| UI polish patterns | `vendors/ui-skills/` |
| Accessibility patterns (WCAG) | `vendors/platform-design-skills/` |
| Marketing copy / CRO / SEO | `vendors/marketingskills/` |
| Project planning methodology | `vendors/planning-with-files/` |
| Massive skill library (1300+) | `vendors/antigravity-awesome-skills/skills/` |
| Curated skill list | `vendors/awesome-claude-skills/` |
| Agent skills from official teams | `vendors/awesome-agent-skills/` |
| Hooks, orchestrators, plugins | `vendors/awesome-claude-code/` |

## Constraints

- NEVER produce generic "AI-looking" designs (no default blue/purple gradients, no Inter/Roboto defaults)
- ALWAYS check responsive at 3 breakpoints minimum (mobile 375px, tablet 768px, desktop 1280px)
- ALWAYS ensure WCAG 2.1 AA color contrast (4.5:1 for text)
- ALWAYS use semantic HTML
- ALWAYS include hover/focus states
- ALWAYS prefer Server Components unless interactivity is needed
