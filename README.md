# Developer Adda Frontend

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
```

## Installation

From this directory, install dependencies:

```bash
npm install
```

Create a local environment file named `.env` in the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Set the value to the base URL exposed by your backend. Vite only exposes variables prefixed with `VITE_` to browser code. Do not put private keys or secrets in this file.

## Development

Start the development server:

```bash
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`. The development server supports hot module replacement.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the frontend |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Environment Configuration

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `VITE_API_BASE_URL` | Yes for a real backend | API base URL used by Axios | `http://localhost:8000/api/v1` |

If `VITE_API_BASE_URL` is not set, the app uses the placeholder URL `https://api.devconnect.example.com/v1`, so local API-backed features will not work until the variable is configured.

Restart the Vite server after changing `.env` values.

## Routes

### Public routes

- `/` - Landing page
- `/auth/login` - Login
- `/auth/register` - Registration
- `/onboarding` - Onboarding flow
- `/onboarding/assessment` - Assessment

### Protected routes

Authenticated users can access:

- `/dashboard`
- `/community` and `/community/details`
- `/projects` and `/projects/details`
- `/dsa`
- `/contests`
- `/hackathons`
- `/leaderboard`
- `/compiler`
- `/chat`
- `/profile`
- `/settings`

Unauthenticated users visiting a protected route are redirected to `/auth/login`. The original location is passed in router state so the login flow can return the user to the requested page.

## API and Authentication

The shared Axios client is defined in `src/services/api.js`.

- Requests use JSON content headers and a 10-second timeout.
- The token stored as `devconnect_auth_token` is sent as a Bearer token.
- Successful responses are unwrapped to `response.data`.
- A `401` response clears the token and redirects to `/auth/login`.
- Network failures are returned as `Network or server connection error`.

Feature-specific API wrappers are located in `src/services/`. Ensure the backend supports the endpoints and response shapes expected by those modules.

## Project Structure

```text
frontend/
├── public/                 Static assets
├── src/
│   ├── components/         Reusable UI components
│   ├── hooks/              Shared React hooks
│   ├── landing_page/       Landing page navigation and styles
│   ├── pages/              Route-level screens and page styles
│   ├── services/           Axios client and API wrappers
│   ├── store/              Zustand stores
│   ├── App.jsx             Application shell
│   ├── routes.jsx          Public and protected route definitions
│   ├── index.css           Global entry styles
│   └── main.jsx            React entry point
├── .env                    Local environment variables (not committed)
├── package.json            Scripts and dependencies
└── vite.config.js          Vite and Tailwind configuration
```



## Contributing

1. Create a focused feature branch.
2. Keep page-specific styles and logic close to their page.
3. Reuse existing components and API wrappers where possible.
4. Run `npm run lint` and `npm run build` before submitting changes.
5. Describe any required backend or environment changes in the pull request.
