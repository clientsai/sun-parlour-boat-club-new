# Sun Parlour Boat Club Website

A modern, world-class redesign of the Sun Parlour Boat Club website featuring a minimalist nautical theme inspired by Jony Ive's design philosophy.

## Overview

This is a complete redesign of the SPBC website, built from scratch with Next.js 14, React, TypeScript, and TailwindCSS. The site captures all content from the original website while providing a premium, user-friendly experience optimized for all devices.

## Features

- **Modern Design**: Clean, minimalist nautical theme with professional aesthetics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Complete Content**: All pages from the original site, including:
  - Home page with Commodore's message
  - Events calendar with all 2025 events
  - AYC and I-LYA event schedules
  - Directors and contact information
  - Membership information and applications
  - Docking and reciprocal privileges
  - Photo gallery
  - Past Commodores
  - Ship's Log archives
  - Resources and links
  - Regalia information
  - Detroit River No Wake Zones
  - About/History page

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom nautical color palette
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
sun-parlour-boat-club/
├── app/                    # Next.js App Router pages
│   ├── about/             # About/History page
│   ├── ayc-events/        # AYC Events page
│   ├── directors/         # Directors/Contact page
│   ├── docking/           # Docking information
│   ├── events/            # Events calendar
│   ├── gallery/           # Photo gallery
│   ├── ilya-events/       # I-LYA Events page
│   ├── membership/        # Membership information
│   ├── no-wake-zones/     # Detroit River No Wake Zones
│   ├── past-commodores/   # Past Commodores gallery
│   ├── regalia/           # Club regalia
│   ├── resources/         # Links and resources
│   ├── ships-log/         # Ship's Log archives
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx         # Site footer
│   └── Header.tsx         # Site header with navigation
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## Design Philosophy

The design follows Jony Ive's minimalist principles:

- **Simplicity**: Clean layouts with intentional use of white space
- **Clarity**: Clear typography hierarchy and intuitive navigation
- **Premium Feel**: High-quality aesthetics throughout
- **Functionality First**: User experience drives all design decisions
- **Attention to Detail**: Every element is carefully considered

## Color Palette

The nautical theme uses a carefully crafted color palette:

- **Navy**: Primary brand color, various shades for depth
- **Ocean Blue**: Accent color for interactive elements
- **Sand**: Warm neutral for backgrounds
- **Gold**: Accent color for highlights and awards
- **White**: Clean backgrounds and text

## Accessibility

The site is built with accessibility in mind:

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive text sizing

## Performance

Optimized for fast loading and smooth interactions:

- Next.js automatic code splitting
- Optimized font loading
- Efficient CSS with TailwindCSS
- Lazy loading where appropriate

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

For questions about the website, contact:

**Web Master**: P/C Doug Potier
- Email: djpotier@gmail.com
- Phone: (519) 564-5550

**Sun Parlour Boat Club**
- Address: 2406 Front Road, LaSalle, Ontario, Canada N9J 2C4
- Phone: (519) 734-6679
- Website: www.sunparlourboatclub.com

## License

© 2025 Sun Parlour Boat Club. All rights reserved.
