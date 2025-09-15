# Klyn Robotics Website

A modern, high-end startup website for Klyn Robotics built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Dark theme with Klyn Robotics brand colors
- **Smooth Animations**: Framer Motion for professional motion effects
- **Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety throughout the codebase
- **Performance**: Optimized with Next.js 14 stable features

## Tech Stack

- Next.js 14 (stable release)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Brand Colors

- Dark Brown / Background: `#2B2623`
- Medium Brown / Accent: `#5A544F`
- Beige / Light Contrast: `#B8B2A7`
- Light Sand / Secondary Accent: `#D8D2C8`
- Muted Grey: `#403B38`

## Project Structure

```
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── Diagram.tsx
│   ├── Steps.tsx
│   └── Footer.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/             # Global styles
│   └── globals.css
└── public/             # Static assets
```

## Deployment

The website is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform.

```bash
npm run build
npm start
```
