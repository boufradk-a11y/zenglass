Visually review the current state of the application using Playwright MCP.

Use the `fe-visual-review` skill to:
1. Navigate to the running dev server (default: http://localhost:3000)
2. Take screenshots at desktop (1280x720), tablet (768x1024), and mobile (375x812)
3. Analyze typography, colors, layout, responsiveness, components, and polish
4. Score each category 0-10
5. List issues by severity (critical, important, minor)
6. Save the review report to `reviews/review-{N}.json`

If the dev server is not running, start it first with `pnpm dev`.

Review scope: $ARGUMENTS
