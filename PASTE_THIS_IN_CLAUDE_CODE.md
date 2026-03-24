# Paste this into Claude Code:

Read the file `CLAUDE_CODE_PROMPT.md` in this project root. It contains the complete senior-engineer specification for rebuilding the TinkerHive website.

Follow the specification exactly. You MUST use all connected MCP tools during the build:

1. **Magic MCP (21st.dev)** — Use for generating every UI component (buttons, cards, navigation, hero sections, form elements). Generate first with Magic, then customize to match the dark theme spec.

2. **UI-UX Pro Max** — Consult before and after building each section for design quality validation. Ask it about spacing, typography hierarchy, dark theme contrast.

3. **Stitch (Google)** — Use for generating and validating the design system tokens (colors, typography scale, spacing).

4. **Chrome DevTools** — After building the hero with its canvas particle animation, profile for performance. Check CLS, LCP, memory. After the full build, run a Lighthouse audit.

5. **Playwright** — After completion, write and run tests covering: all sections render, responsive at 375/768/1024/1440px, keyboard navigation works, focus states visible, scroll animations trigger.

6. **Security MCP** — Audit the contact form for XSS, validate all external links have rel="noopener noreferrer", check meta tags.

7. **Code Review** — Final pass on all components for code quality, TypeScript strictness, unused imports, consistent patterns.

Build the entire website in one session. Start with foundation (globals.css, layout.tsx), then utility components (ParticleField, GlassCard), then each section top to bottom. Wire it all in page.tsx. Run `npm run dev` and verify in browser after completion.

The website must look like it was built by a principal engineer with 20 years of experience — dark theme, motion-heavy, 3D depth effects, glassmorphism, animated particle backgrounds, orbital cloud provider visualizations, CI/CD pipeline animations, floating security badges. No generic templates. Every pixel must be intentional.
