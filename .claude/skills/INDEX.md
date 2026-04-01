# Skills Index - AI Starter

Ce fichier est le catalogue de tous les skills disponibles. L'IA le lit en premier pour savoir quels skills utiliser.

## Skills Actifs (.claude/skills/)

### Design Intelligence
| Skill | Source | Description |
|-------|--------|-------------|
| `ui-ux-pro-max` | nextlevelbuilder | Design intelligence - 161 regles, 67 styles, 161 palettes, 57 fonts. Scripts Python. |
| `ui-ux-design-pro` | saifyxpro | Alternative - 150+ regles, 107 styles, 127 palettes. CLI Bun/Orama. |
| `baseline-ui` | ibelick | Regles UI de base pour eviter le "AI slop" |
| `fixing-accessibility` | ibelick | Corrections accessibilite (ARIA, contraste, clavier) |
| `fixing-metadata` | ibelick | Corrections meta/SEO |
| `fixing-motion-performance` | ibelick | Optimisation animations |
| `cursor-design-rules/` | spencergoldade | Regles UX/UI/IA design (fichiers .mdc) |

### Platform Design Rules
| Skill | Source | Description |
|-------|--------|-------------|
| `web` | ehmo/platform-design-skills | WCAG 2.2 + regles web (450+) |
| `ios` | ehmo | Apple HIG iOS |
| `ipados` | ehmo | Apple HIG iPadOS |
| `macos` | ehmo | Apple HIG macOS |
| `watchos` | ehmo | Apple HIG watchOS |
| `visionos` | ehmo | Apple HIG visionOS |
| `tvos` | ehmo | Apple HIG tvOS |
| `android` | ehmo | Material Design 3 |
| `vercel-web-design` | vercel-labs | Vercel web design guidelines |

### Pipeline Orchestration
| Skill | Description |
|-------|-------------|
| `fe-design-pipeline` | Skill maitre - orchestre generation + review + iteration |
| `fe-visual-review` | Review visuelle via Playwright MCP |
| `planning-with-files` | Planning persistant style Manus |

### Marketing & CRO (34 skills)
| Skill | Description |
|-------|-------------|
| `copywriting` | Redaction copywriting |
| `page-cro` | Optimisation landing pages |
| `form-cro` | Optimisation formulaires |
| `signup-flow-cro` | Optimisation signup |
| `onboarding-cro` | Optimisation onboarding |
| `paywall-upgrade-cro` | Optimisation paywalls |
| `popup-cro` | Optimisation popups |
| `seo-audit` | Audit SEO |
| `programmatic-seo` | SEO programmatique |
| `pricing-strategy` | Strategie de prix |
| `launch-strategy` | Strategie de lancement |
| `paid-ads` | Publicite payee |
| `analytics-tracking` | Suivi analytics |
| `ab-test-setup` | Setup A/B tests |
| `ad-creative` | Creatifs publicitaires |
| `ai-seo` | SEO avec IA |
| `churn-prevention` | Prevention churn |
| `cold-email` | Email a froid |
| `competitor-alternatives` | Analyse concurrents |
| `content-strategy` | Strategie contenu |
| `copy-editing` | Edition copy |
| `customer-research` | Recherche clients |
| `email-sequence` | Sequences email |
| `free-tool-strategy` | Strategie outils gratuits |
| `lead-magnets` | Aimants a leads |
| `marketing-ideas` | Idees marketing |
| `marketing-psychology` | Psychologie marketing |
| `product-marketing-context` | Context produit marketing |
| `referral-program` | Programme parrainage |
| `revops` | Revenue operations |
| `sales-enablement` | Sales enablement |
| `schema-markup` | Schema.org markup |
| `site-architecture` | Architecture site |
| `social-content` | Contenu social |

## Vendor Sources (vendors/)

Librairies completement clonables pour reference :

| Dossier | Stars | Nb Skills | Meilleur pour |
|---------|-------|-----------|---------------|
| `antigravity-awesome-skills/` | 29k | 1,311+ | Librairie massive, tous domaines |
| `awesome-claude-skills/` | 50k | 30+ 78 SaaS | Integrations SaaS (Slack, Gmail, Jira...) |
| `awesome-claude-code/` | 35k | Liste | Hooks, slash-commands, orchestrateurs |
| `awesome-agent-skills/` | 13k | 1,000+ | Skills officiels Sentry, Expo, HF, etc. |
| `ui-ux-pro-max-skill/` | 56k | 1 | Design intelligence (scripts Python, CSV data) |
| `ui-ux-design-pro-skill/` | - | 1 | Design pro (CLI Bun, donnees JSON) |
| `ui-skills/` | - | 4 | Polish UI agent-built |
| `cursor-designer/` | - | 8+ | Regles design frontend |
| `platform-design-skills/` | - | 9 | Apple HIG + Material + WCAG |
| `agent-skills/` | - | 3+ | Vercel web design + React |
| `apple-design-skill/` | - | 1 | Apple HIG cross-platform |
| `marketingskills/` | 18k | 34 | CRO, SEO, copywriting, growth |
| `planning-with-files/` | 17k | 1 | Planning Manus persistant |

## Comment utiliser

1. **Pour generer une app**: Utiliser `fe-design-pipeline` qui orchestre tout
2. **Pour du design system**: Utiliser `ui-ux-pro-max` ou `ui-ux-design-pro`
3. **Pour du polish UI**: Utiliser `baseline-ui` + `fixing-accessibility`
4. **Pour du marketing**: Utiliser les skills CRO/SEO/copywriting
5. **Pour un audit visuel**: Utiliser `fe-visual-review` avec Playwright MCP
6. **Pour un besoin niche**: Chercher dans `vendors/antigravity-awesome-skills/skills/`
