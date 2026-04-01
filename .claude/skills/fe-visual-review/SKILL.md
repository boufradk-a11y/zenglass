---
name: fe-visual-review
description: Use when visually reviewing a front-end application, taking screenshots, analyzing UI quality, checking responsive design, or auditing visual output. Triggers on "review the UI", "take a screenshot", "check how it looks", "visual review", "audit the design". Requires Playwright MCP.
---

# Visual Review Skill

Uses Playwright MCP to capture screenshots and analyze UI quality with visual feedback.

## Prerequisites

Playwright MCP must be configured in `.mcp.json`:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest", "--caps", "vision"]
    }
  }
}
```

If not installed, run: `claude mcp add playwright -- npx @playwright/mcp@latest --caps vision`

## Review Workflow

### Step 1: Navigate & Wait
```
browser_navigate url="http://localhost:3000"
browser_wait_for text="body" timeout=10000
```

### Step 2: Structural Analysis
```
browser_snapshot
```
Analyze the accessibility tree for:
- Proper heading hierarchy (h1 > h2 > h3)
- Alt text on images
- ARIA labels on interactive elements
- Semantic HTML usage

### Step 3: Desktop Screenshot
```
browser_resize width=1280 height=720
browser_take_screenshot filename="screenshots/review-{N}-desktop.png" fullPage=true
```

### Step 4: Tablet Screenshot
```
browser_resize width=768 height=1024
browser_take_screenshot filename="screenshots/review-{N}-tablet.png" fullPage=true
```

### Step 5: Mobile Screenshot
```
browser_resize width=375 height=812
browser_take_screenshot filename="screenshots/review-{N}-mobile.png" fullPage=true
```

### Step 6: Reset Viewport
```
browser_resize width=1280 height=720
```

### Step 7: Analyze Screenshots
Read each screenshot using the Read tool (multimodal):
- `Read screenshots/review-{N}-desktop.png`
- `Read screenshots/review-{N}-tablet.png`
- `Read screenshots/review-{N}-mobile.png`

### Step 8: Score Against Rubric

| Criteria | Weight | Description |
|----------|--------|-------------|
| Typography | 20% | Font choices, hierarchy, readability, line-height |
| Color | 20% | Palette coherence, contrast, accent usage |
| Layout | 20% | Spacing, alignment, grid, whitespace |
| Responsiveness | 15% | Breakpoint behavior, content adaptation |
| Components | 15% | Rendering, interactions, consistency |
| Polish | 10% | Animations, hover states, attention to detail |

Score each 0-10, compute weighted average.

### Step 9: Output Review Report
Save to `reviews/review-{N}.json`:
```json
{
  "iteration": 1,
  "timestamp": "ISO date",
  "scores": {
    "typography": 7,
    "color": 6,
    "layout": 8,
    "responsiveness": 5,
    "components": 7,
    "polish": 4
  },
  "overallScore": 6.5,
  "issues": [
    {
      "severity": "critical",
      "category": "responsiveness",
      "description": "Hero section overflows on mobile",
      "suggestion": "Add responsive padding and reduce font size at md breakpoint"
    }
  ],
  "passed": false
}
```

## Severity Levels
- **critical**: Layout broken, content inaccessible, major visual bugs
- **important**: Poor contrast, broken responsive, missing hover states
- **minor**: Polish issues, spacing inconsistencies, animation timing

## Decision
- Score >= 8: PASS - output is production-ready
- Score 6-7: ITERATE - fix critical and important issues
- Score < 6: MAJOR REWORK - revisit design decisions from Phase 2
