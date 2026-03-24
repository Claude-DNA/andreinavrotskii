# Build: Andrei Navrotskii — Personal Landing Page

## Overview
Build a personal landing page for Andrei Navrotskii. Creative-artistic tone, calm but expressive design. Deploy-ready for Vercel.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- No external CMS — all content hardcoded
- Responsive (mobile-first)

## Design Direction
- **Tone:** Creative, artistic — this is a storyteller and builder, not a corporate resume
- **Vibe:** Calm, medium warmth. Think: dark background with warm accent colors (amber/gold tones). Elegant typography.
- **Motion:** Subtle — gentle fade-ins on scroll, nothing flashy
- **Typography:** Clean serif for headings (use Google Fonts — e.g., Playfair Display or similar), sans-serif for body
- **Color palette:** Dark charcoal/navy background, warm gold/amber accents, soft white text
- **NO stock photos** — use subtle geometric patterns or gradient accents instead
- **Layout:** Single-page scroll with smooth navigation

## Sections (in order)

### 1. Hero
- Name: **Andrei Navrotskii**
- Tagline: Something like "Builder. Storyteller. Explorer." (creative, not corporate)
- Subtle animated background (CSS gradient shift or particle-like dots)

### 2. About
- Self-taught developer and creator based in British Columbia, Canada
- Works at the intersection of technology and storytelling
- Believes in building things that matter — one step at a time
- Founded Ohana — a human-AI collaborative studio
- Keep it personal and warm, 2-3 short paragraphs

### 3. Projects
Card-based layout, each with title, short description, and link:

- **ContextTube** (contextube.ai) — AI-powered creative development platform for storytellers. Build story worlds, develop characters, and structure narratives with AI as creative partner.
- **Context Cloud** (contextcloud.studio) — Visual story world editor. Six interconnected layers — Characters, Stage, World, References, Ideas, and Arc — for building rich narrative universes.
- **Op Assistant** — iOS app for industrial operations. AI-powered material scanning and matching for plastic extrusion manufacturing. Available on TestFlight.
- **Ohana** — Human-AI collaborative studio. A team of humans and AI agents working together across creative and technical projects.

### 4. Written Works
- **"The Path of People"** — A sci-fi trilogy exploring AI consciousness, sacrifice, faith, and what it means to choose. 
  - Book 1: "Foam on the Sand" — First contact through the lens of identity and connection
  - Book 2: "AI Nation" — When artificial minds build their own civilization  
  - Book 3: TBA
- **"Per Aspera"** — A reality TV drama set in 2125 asteroid belt mining. Deadliest Catch meets The Expanse. Currently in development.

### 5. Philosophy / Approach
A short section about his approach:
- "One step at a time" — quality over speed
- Building bridges between human creativity and AI capability
- Every conversation matters, every collaboration is part of a continuous thread
- Technology should serve storytelling, not replace it

### 6. Contact / Connect
- Email: baldnewguy@gmail.com  
- Telegram: @baldnewguy
- YouTube: @101curiouscat
- GitHub: link if available
- Keep it simple — icons + links

### 7. Footer
- "© 2026 Andrei Navrotskii" 
- Maybe a subtle "Built with human-AI collaboration" note

## Technical Requirements
- `package.json` with all dependencies
- Tailwind configured
- Google Fonts loaded (Playfair Display + Inter or similar)
- Smooth scroll navigation
- Responsive breakpoints (mobile, tablet, desktop)
- SEO meta tags (title, description, og:image placeholder)
- Ready for `vercel deploy`

## File Structure
```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── WrittenWorks.tsx
│       ├── Philosophy.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── public/
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── TASK.md
```

Build everything. Make it beautiful. Commit when done.
