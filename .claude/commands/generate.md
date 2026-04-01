Run the full front-end design pipeline to build a production-quality application.

Use the `fe-design-pipeline` skill to orchestrate the 5-phase pipeline:

1. **Discovery** - Parse my requirements, ask clarifying questions, create `.fe-pipeline.json`
2. **Design System** - Select best UI library + generate design tokens + Tailwind theme
3. **Code Generation** - Scaffold Next.js app with Supabase, generate all pages and components
4. **Visual Review** - Use Playwright MCP to screenshot at 3 breakpoints, analyze and score
5. **Iteration** - Fix issues found, loop until score >= 8 or max 3 iterations

Consult the aggregated skills in `vendors/` for design intelligence:
- `vendors/ui-ux-pro-max-skill/` for industry-specific rules
- `vendors/platform-design-skills/` for Apple HIG / Material / WCAG
- `vendors/ui-skills/` for polish patterns
- `vendors/cursor-designer/` for UX/UI/IA patterns

The user's request follows: $ARGUMENTS
