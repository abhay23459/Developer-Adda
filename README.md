# DECAD Frontend

Developer Adda is a React-based developer learning and collaboration platform. The frontend provides authentication, onboarding, a personalized dashboard, DSA practice, projects, community discussions, contests, hackathons, leaderboards, an online compiler, chat, profiles, and settings.

This directory contains the Vite frontend application. API data is supplied by a separate backend service.

## Features

- Landing page and authentication flows
- User onboarding and assessment
- Protected application routes with Zustand auth state
- Developer community and project discovery
- DSA practice, contests, hackathons, and leaderboard views
- Online compiler and chat views
- Profile and account settings
- Reusable UI components and responsive page styles

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Axios for HTTP requests
- Zustand for client-side auth state
- Tailwind CSS 4 with the Vite plugin
- Recharts for data visualizations
- Lucide React and React Icons for icons
- ESLint 10

## Requirements

- Node.js 18 or newer
- npm 9 or newer
- A running Developer Adda API backend, or a reachable compatible API service

Check your installed versions:

```bash
node --version
npm --version

## Contributing

1. Create a focused feature branch.
2. Keep page-specific styles and logic close to their page.
3. Reuse existing components and API wrappers where possible.
4. Run `npm run lint` and `npm run build` before submitting changes.
5. Describe any required backend or environment changes in the pull request.
