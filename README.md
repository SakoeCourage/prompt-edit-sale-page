# PromptEdit — Front-End Developer Test Interview

This repository contains the interactive landing page and workspace experience for **PromptEdit**, developed as part of a front-end developer remote job interview test.

## 🚀 Project Overview

PromptEdit is a state-of-the-art pay-as-you-go visual generative content playground. Instead of stacking expensive monthly subscriptions across multiple different AI tools, copywriters, copy editors, and digital creators can switch between all leading AI video, image, and text generation engines instantly—all from a single, unified pay-as-you-go credit pool.

### ✨ Completed Refinements & Features

1. **Brand Identity Rebranding**:
   - Swapped the orange accent palette globally to a premium crimson **Brand Red (`#ed1c24` / `#b30e16`)** matching the brand's custom favicon mark.
   - Refined the primary hero header to the punchy, high-impact **"Words to Video, Instantly"** callout.

2. **Mobile Sidebar Navigation**:
   - Restructured navbar into a client-controlled state drawer for responsive viewports.
   - Designed a right-side sliding panel with high-performance CSS transition timing and spring curves.
   - Integrated backdrop dimming overlays and automatic click-outside close handlers.
   - Added a branded drawer header containing the favicon brand mark and custom text alignment.

3. **Premium Infinite Marquees**:
   - Replaced static content blocks with a high-end, dual-row horizontal auto-scrolling **"Trusted By"** company showcase.
   - Hand-crafted 20 pixel-perfect SVG brand logo cards (Stripe, Vercel, Supabase, Linear, Notion, Sentry, Clerk, Pinecone, and more).
   - Configured interactive pause-on-hover mechanics and custom floating hover states.
   - Optimized marquee dimensions, paddings, and font sizes to be completely responsive and elegant on all viewports.

4. **GSAP Animation Pinning**:
   - Wrapped page slides inside highly cohesive layout envelopes to ensure precise scroll heights and automatic vertical overflow pinning and snapping.

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js (React / TypeScript)
- **Styling**: Scoped CSS Modules (`page.module.css`) + Vanilla CSS Tokens (`globals.css`)
- **Animation**: GSAP (GreenSock Animation Platform) + `ScrollTrigger`
- **Asset Loader**: Responsive state-based visual controllers with shimmer loaders

## 📦 Getting Started

First, install the workspace dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the polished platform.
