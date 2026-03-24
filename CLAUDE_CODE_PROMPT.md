# TinkerHive Website Rebuild — Senior Engineer Specification

## TOOL USAGE INSTRUCTIONS (MANDATORY)

You have these MCP tools connected. Use ALL of them throughout this build:

### 1. Magic MCP (21st.dev)
- Use this FIRST for every UI component you build
- Generate production-grade React components with 21st.dev's component library
- Use it for: buttons, cards, navigation, hero sections, grids, testimonial cards, form elements
- Every component must come through Magic MCP before manual customization

### 2. UI-UX Pro Max
- Use this for design decisions and visual auditing
- Before building each section, consult UI-UX Pro Max for layout recommendations, spacing, typography hierarchy, color contrast validation
- After building each section, run it through UI-UX Pro Max to audit the visual quality
- Use it to validate the dark theme accessibility and contrast ratios

### 3. Stitch (Google)
- Use for design system generation and maintaining visual consistency
- Generate the color palette, typography scale, and spacing tokens through Stitch
- Use it to ensure cross-component design consistency

### 4. Playwright
- After building each major section, write and run a Playwright test to verify:
  - The section renders correctly
  - Animations fire on scroll
  - Responsive breakpoints work (test at 375px, 768px, 1024px, 1440px)
  - Accessibility: keyboard navigation, focus states, aria attributes
- Run full regression after the complete build

### 5. Chrome DevTools
- Use to profile performance after adding canvas particle effects
- Check for layout shifts (CLS), largest contentful paint (LCP)
- Verify no memory leaks from canvas animations
- Audit contrast ratios on the dark theme

### 6. Security MCP
- Run a security audit on the contact form
- Check for XSS vulnerabilities in any dynamic content
- Validate CSP headers and meta tags
- Check all external links have rel="noopener noreferrer"

### 7. Code Review
- After completing the full build, run Code Review on every component
- Fix any code quality issues, unused imports, type safety problems
- Ensure consistent patterns across all components

---

## PROJECT CONTEXT

**Company:** TinkerHive — "We Tinker. You Thrive."
**What they do:** Full-Stack DevOps & Infrastructure Engineering firm. They build websites/apps, manage cloud infrastructure (AWS/GCP/Azure), deploy private clouds (OpenStack/Proxmox/OpenShift/Harvester), set up DevOps pipelines, and implement security solutions.
**Target audience:** Businesses in US, Canada, EU, Middle East, Australia who need senior-level engineering.
**Current codebase:** Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion + Lucide React
**Project path:** C:\Users\DELL\projects\tinkerhive

---

## VISUAL DIRECTION — NON-NEGOTIABLE

This website must look like it was built by a principal engineer with 20 years of experience, NOT a template. Every design decision must be intentional and opinionated.

### Theme: Dark Mode — "Command Center" Aesthetic
Think Linear.app + Vercel Dashboard + Raycast website. Dark, precise, engineered.

### Color Palette (define as CSS custom properties in globals.css using Tailwind v4 @theme):
```
Background:       #06070a (near-black)
Surface:          #0d0f18 (cards, elevated areas)
Surface Alt:      #141625 (secondary surfaces)
Glass:            rgba(20, 22, 37, 0.6) + backdrop-blur-20px
Primary:          #00b4d8 (electric cyan)
Primary Dark:     #0096b7
Primary Light:    #48cae4
Primary Glow:     rgba(0, 180, 216, 0.35)
Secondary:        #7209b7 (vivid purple)
Secondary Light:  #9d4edd
Accent:           #f72585 (hot pink — for highlights only)
Text:             #e8eaed
Muted:            #6b7280
Muted Light:      #9ca3af
Border:           rgba(255, 255, 255, 0.06)
Border Light:     rgba(255, 255, 255, 0.1)
Success:          #10b981
Error:            #ef4444
```

### Typography (load via next/font/google):
```
Display/Headings: "Outfit" — geometric, modern, distinctive
Body:             "Plus Jakarta Sans" — refined, professional
Code/Technical:   "JetBrains Mono" — monospace with character
```

### Type Scale:
```
Hero headline:    clamp(3rem, 5vw + 1rem, 6rem) — font-display, weight 800, line-height 1.05
Section headings: clamp(2rem, 3vw + 0.5rem, 3rem) — font-display, weight 700
Subheadings:      clamp(1.25rem, 2vw, 1.75rem) — font-display, weight 600
Body:             clamp(1rem, 1.1vw, 1.125rem) — font-sans, weight 400, line-height 1.7
Small:            0.875rem — font-sans
Mono/Technical:   0.8125rem — font-mono, used for badges, tech labels, code snippets
```

### Global Effects:
- Grain texture overlay (SVG noise filter, opacity 0.03, fixed position, pointer-events: none)
- Glassmorphism on cards: rgba surface + backdrop-blur-20px + 1px rgba(255,255,255,0.1) border
- Cyan glow on interactive elements: box-shadow 0 0 20px rgba(0,180,216,0.35)
- Gradient text on key headings: linear-gradient(135deg, #00b4d8, #9d4edd, #f72585)
- Custom scrollbar: 6px, dark track, rgba(255,255,255,0.1) thumb
- Skip-to-content link for accessibility

---

## SECTIONS TO BUILD (in order)

### 1. HEADER — Dark Glass Navigation
- Fixed, full-width, glassmorphism background on scroll (transparent initially)
- Logo: "T" icon in a rounded square with cyan background + "TinkerHive" text with "Hive" in cyan
- Nav links with numbered prefixes: "01 Services", "02 Cloud", "03 DevOps", "04 About", "05 Contact"
- Each link: subtle underline animation on hover (scale-x from left)
- CTA button: "Get a Free Quote" with cyan glow on hover
- Mobile: animated hamburger → X icon, full-screen overlay menu with staggered link reveals
- Active section indicator (track scroll position, highlight current section)

### 2. HERO — Full Viewport Impact
- Full viewport height (min-h-screen)
- **Background:** Animated canvas particle network — floating dots connected by lines when close. Cyan-tinted particles, subtle purple accents. Use requestAnimationFrame, NOT setInterval. ~80 particles, connection threshold 150px. Mouse interaction: particles gently repel from cursor.
- **Layout:** Asymmetric — content left (60%), floating visual right (40%)
- **Left side:**
  - Small pill badge: "Full-Stack Infrastructure Engineering" with subtle border animation
  - Main headline: "We Tinker." (line break) "You Thrive." — 96px, Outfit font, gradient text (cyan → purple)
  - Subtitle: "Websites, apps, cloud infrastructure, and DevOps — handcrafted by senior engineers who've deployed to production 10,000+ times." — Plus Jakarta Sans, muted-light color
  - Two CTA buttons: "Start Your Project →" (cyan fill, white text, glow hover) + "Explore Our Work ↓" (ghost, border-light)
- **Right side:**
  - Floating tech icon cloud — AWS, Kubernetes, Docker, Terraform, React, Linux icons as glassmorphism badges, each floating at different speeds/offsets with framer-motion. Parallax effect on scroll.
- **Bottom:** Scroll indicator — thin line that pulses, "Scroll to explore" in mono font

### 3. SHOWCASE — "What We've Built" (Portfolio)
- Section title with mono prefix: "// OUR WORK" in cyan, then "Applications & platforms we've engineered" as heading
- **Bento grid layout** — NOT uniform columns. Mix of:
  - 2 large cards (span 2 columns)
  - 4 standard cards (1 column each)
- Each card is a glassmorphism panel with:
  - Fake browser chrome at top (3 dots: red/yellow/green, address bar with URL)
  - Below: a colored gradient block simulating a screenshot (use distinct gradient for each — don't use actual images)
  - Project name (bold)
  - 1-line description
  - Tech stack badges at bottom (mono font, tiny pills)
  - Hover: card lifts 8px, border glows cyan, inner gradient shifts
- **Projects to show:**
  1. "NovaPay Dashboard" — Fintech payment platform. React, Node.js, PostgreSQL, AWS
  2. "GreenLeaf CMS" — Headless CMS for marketing teams. Next.js, GraphQL, Prisma
  3. "StudyBridge" — EdTech web app with real-time features. React, Socket.io, Redis
  4. "CloudOps Monitor" — Internal infra monitoring tool. Go, Prometheus, Grafana, K8s
  5. "MedFlow" — Healthcare appointment system. React Native, Firebase, HIPAA compliant
  6. "HiveCI" — Custom CI/CD platform for clients. Python, Docker, GitHub API

### 4. CLOUD MANAGEMENT — Multi-Cloud Expertise
- Dark section with circuit-board dot pattern background
- Section title: "// CLOUD" + "Multi-Cloud Infrastructure Management"
- **Center visual:** Large animated orbital diagram:
  - Center: A glowing cloud/server icon (cyan outline, pulsing)
  - Orbiting around it in 2 elliptical rings: cloud provider logos
  - Ring 1 (inner, slower): AWS, Google Cloud, Microsoft Azure
  - Ring 2 (outer, faster): DigitalOcean, Hetzner, Linode, OVH, Vultr
  - Each logo: glassmorphism circle, glows on hover, shows provider name tooltip
  - Subtle dashed orbit path lines
- **Below the orbital:** 3 metric cards in a row:
  - "99.99%" — Uptime SLA
  - "40%" — Avg Cost Reduction
  - "200+" — Clusters Managed
  - Each card: glass background, large number in gradient text, label below in muted
- **Side text (below metrics):** Brief paragraph about multi-cloud strategy, vendor lock-in prevention, cost optimization

### 5. PRIVATE CLOUD — On-Premise Infrastructure
- Full-width section, slightly different background (surface-alt)
- Section title: "// PRIVATE CLOUD" + "Own Your Infrastructure"
- **Layout:** Staggered 2×2 grid of large platform cards, each with mouse-tracking parallax tilt (CSS perspective + transform)
- **Platform cards (each unique accent tint):**
  1. **OpenStack** — accent: orange (#f97316). Icon/logo, "The open-source cloud operating system", features: Compute (Nova), Storage (Cinder), Networking (Neutron), Identity (Keystone)
  2. **Proxmox VE** — accent: cyan (#00b4d8). "Enterprise virtualization made accessible", features: KVM & LXC, HA Clustering, Ceph Storage, Backup & Restore
  3. **OpenShift** — accent: red (#ef4444). "Enterprise Kubernetes by Red Hat", features: Built-in CI/CD, Operator Framework, Service Mesh, Multi-cluster Management
  4. **Harvester** — accent: green (#10b981). "Modern HCI for Kubernetes-native infrastructure", features: VM Management, Rancher Integration, Storage (Longhorn), Cloud Provider Interface
- Each card: glass background, colored top border (2px gradient), platform logo area, description, feature list with colored bullet dots, hover glow matching accent color
- Below cards: a brief "Why Private Cloud?" paragraph — control, compliance, cost, performance

### 6. DEVOPS & PLATFORM ENGINEERING
- Dark section
- Section title: "// DEVOPS" + "Ship Faster. Deploy Safer."
- **Hero visual:** Animated horizontal CI/CD pipeline
  - 5 stages flowing left → right: Code → Build → Test → Deploy → Monitor
  - Each stage: glowing circle node with icon inside (GitBranch, Hammer, TestTube, Rocket, Activity)
  - Connected by animated dashed lines (CSS animation moving dashes right)
  - Pulse animation on each node, staggered timing
  - Below each node: stage label in mono font
- **Below pipeline:** Tool categories in a 4-column grid:
  - **CI/CD:** Jenkins, GitLab CI, GitHub Actions, ArgoCD, Tekton
  - **Infrastructure as Code:** Terraform, Ansible, Pulumi, CloudFormation
  - **Containers & Orchestration:** Docker, Kubernetes, Helm, Podman, Rancher
  - **Monitoring & Observability:** Prometheus, Grafana, ELK Stack, Datadog, Loki
  - Each tool: small glass pill with name in mono font, subtle hover glow
  - Category headers in colored mono font (each category a different accent)
- **Bottom stat strip:** "500+ Pipelines Deployed" | "Zero-Downtime Deployments" | "< 5min Mean Deploy Time"

### 7. SECURITY
- Section with radial gradient background (subtle purple tint from center)
- Section title: "// SECURITY" + "Defense in Depth"
- **Center visual:** Large animated shield SVG
  - Shield outline draws itself on scroll (SVG path animation with stroke-dasharray)
  - Inner glow pulse (cyan)
  - Lock icon in center
- **Floating around the shield:** Security capability badges in an orbital/scattered arrangement
  - WAF (Web Application Firewall)
  - SIEM & Log Analysis
  - Zero Trust Architecture
  - SOC 2 & ISO 27001 Compliance
  - Vulnerability Scanning
  - IAM & RBAC
  - Secret Management (Vault)
  - Network Segmentation
  - Each badge: glass pill, floats with subtle animation (different speeds)
- **Below:** 2-column layout — brief security philosophy text left, trust indicators right (certifications, tools logos)

### 8. HOW IT WORKS — Timeline Process
- Section title: "// PROCESS" + "From Call to Production"
- **Vertical timeline** (not horizontal — more impact on scroll):
  - Animated vertical line that draws down as you scroll
  - 4 steps alternating left/right of the line:
    1. "Discovery" (Day 1) — icon: MessageSquare — glass card with description
    2. "Architecture" (Day 2-3) — icon: FileCode — glass card
    3. "Build & Ship" (Week 1-6) — icon: Rocket — glass card
    4. "Evolve & Support" (Ongoing) — icon: Headphones — glass card
  - Each card: glass background, numbered with "01" style prefix, step timeline badge, description
  - Cards fade in when the timeline line reaches them
  - Step numbers: large, gradient text

### 9. ABOUT — Why TinkerHive
- 60/40 split layout (text left, stats right)
- Section title: "// ABOUT" + "Built by Engineers, for Businesses"
- Left: Company story, differentiators with checkmark list (glass checkmark icons, cyan color)
- Right: Glassmorphism stats card with metrics (50+ Projects, 99.9% Uptime, 8+ Years, <4hr Response)
  - Each stat: large gradient text number, small muted label
- Below stats card: Tech stack cloud — badges animate in with stagger, glass pills, hover glow
- Include AWS, GCP, Azure, Kubernetes, Docker, Terraform, Ansible, Prometheus, Grafana, React, Node.js, Python, Go, PostgreSQL, MongoDB, OpenStack, Proxmox, Linux, Nginx, Redis

### 10. TESTIMONIALS
- Section title: "// TESTIMONIALS" + "What Our Clients Say"
- 3 testimonial cards in a row, glass background
- Each card: large quote mark (gradient text, very large, decorative), quote text, 5 cyan stars, person name, role, location
- Cards have subtle border glow on hover
- Keep the existing testimonial data (Sarah Mitchell, James Al-Rashid, Emily Chen)

### 11. CTA SECTION
- Full-width, gradient background (primary → secondary, diagonal)
- Grid pattern overlay (subtle white lines)
- Bold centered headline: "Ready to build your digital everything?"
- Subtitle + 2 CTA buttons (white fill + ghost)
- Floating particle effect (fewer particles, white-tinted)

### 12. FAQ
- Section title: "// FAQ" + "Frequently Asked Questions"
- Glass accordion cards
- Chevron rotation animation on open/close
- Animated expand/collapse with framer-motion
- Keep existing FAQ content

### 13. CONTACT
- Section title: "// CONTACT" + "Let's Build Something Great"
- 2-column: contact info left (glass cards for email, twitter, response time, regions) + form right
- Form: glass card, dark inputs with subtle borders, cyan focus rings, send button with glow
- Keep existing contact data (tedionabera@gmail.com, @DTedion)

### 14. FOOTER
- Dark surface background, glass top border
- 4-column grid: Brand + social, Services links, Company links, Regions
- Bottom: copyright + privacy/terms links
- Social icons with glass hover effect

---

## ANIMATION RULES

1. **Variety is mandatory** — Never use the same entrance animation twice in a row. Alternate between: fade-up, slide-left, slide-right, scale-in, blur-in, rotate-in
2. **Stagger children** — Any group of items (cards, badges, list items) must stagger with 60-100ms delays
3. **Scroll-triggered** — Use Framer Motion's whileInView with viewport={{ once: true, margin: "-80px" }}
4. **3D card tilt** — All cards that display content must tilt toward cursor on hover using CSS perspective (1000px) and transform: rotateX/rotateY based on mouse position
5. **Reduced motion** — ALL animations must respect prefers-reduced-motion: reduce
6. **Performance** — Canvas animations use requestAnimationFrame. No setInterval. Throttle mousemove handlers to 16ms.

---

## TECHNICAL REQUIREMENTS

- Next.js 16 App Router (already set up)
- React 19 (already installed)
- Tailwind CSS v4 with @theme inline in globals.css (no tailwind.config file)
- Framer Motion for all component animations
- Lucide React for icons
- Vanilla Canvas API for particle effects (no Three.js dependency)
- All components must be "use client" if they use hooks/motion
- TypeScript strict mode
- Mobile-first responsive (breakpoints: 640px, 768px, 1024px, 1280px)
- Max content width: 1280px (max-w-7xl)
- Semantic HTML5 landmarks throughout
- WCAG AA contrast compliance on all text (minimum 4.5:1 on dark background)

---

## FILE STRUCTURE

```
src/
├── app/
│   ├── globals.css          (dark theme, utilities, grain, glass)
│   ├── layout.tsx           (fonts: Outfit, Plus Jakarta Sans, JetBrains Mono)
│   └── page.tsx             (all sections composed)
├── components/
│   ├── ParticleField.tsx    (canvas particle network — reusable)
│   ├── GlassCard.tsx        (glassmorphism card with 3D tilt)
│   ├── AnimateIn.tsx        (enhanced scroll animations)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Showcase.tsx         (portfolio bento grid)
│   ├── CloudProviders.tsx   (multi-cloud orbital)
│   ├── PrivateCloud.tsx     (OpenStack/Proxmox/OpenShift/Harvester)
│   ├── DevOpsSection.tsx    (pipeline + tool grid)
│   ├── SecuritySection.tsx  (shield + capabilities)
│   ├── HowItWorks.tsx       (vertical timeline)
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts             (cn helper — already exists)
```

---

## WORKFLOW

1. Update `globals.css` with the full dark theme (colors, glass, grain, glow utilities)
2. Update `layout.tsx` with new fonts (Outfit, Plus Jakarta Sans, JetBrains Mono)
3. Build `ParticleField.tsx` and `GlassCard.tsx` utility components
4. Build each section top-to-bottom
5. After each section: use **Chrome DevTools** to check rendering, **UI-UX Pro Max** to audit design quality
6. After all sections: use **Playwright** to run accessibility and responsive tests
7. Use **Security MCP** to audit the contact form and external links
8. Use **Code Review** for final code quality pass
9. Use **Magic MCP** to enhance any components that look generic

---

## QUALITY GATE — DO NOT SHIP UNTIL:

- [ ] Every section has a unique layout pattern (no two consecutive sections look similar)
- [ ] Dark theme contrast passes WCAG AA on every text element
- [ ] Canvas particle animation runs at 60fps on mid-range hardware
- [ ] Mobile layout works flawlessly at 375px width
- [ ] All hover states have visible transitions (200-300ms)
- [ ] No Tailwind default colors remain (no blue-500, no slate-500 etc.)
- [ ] Every interactive element has a focus-visible state
- [ ] prefers-reduced-motion disables all animations
- [ ] No TypeScript errors
- [ ] No console errors or warnings
- [ ] Lighthouse performance score > 90
- [ ] Lighthouse accessibility score > 95
