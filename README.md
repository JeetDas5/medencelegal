# Sida — Legal / Issue Tracking Demo (Next.js)

A small Next.js application (App Router) demonstrating a legal/issue-tracking UI and basic auth flows. The project is written in TypeScript and uses MongoDB for persistence.

This README explains how to run the project locally, the important environment variable, project structure, and useful scripts.

## Features

- App Router based Next.js app (pages under `app/`).
- Sign up / Sign in API routes (server-side) with password hashing.
- Simple issue creation API and dashboard pages.
- Reusable UI components in `components/` and primitives in `components/ui/`.

## Tech stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- MongoDB via Mongoose
- TailwindCSS
- Bun / npm / pnpm compatible scripts

## Prerequisites

- Node.js (recommended 18+). The project includes modern Next.js and React versions.
- A running MongoDB instance (local or hosted).
- Optional: Bun if you prefer `bun install` / `bun dev`.

## Environment

Create a `.env.local` file in the project root (or set env vars in your environment). The app requires at least:

- `MONGO_URI` - MongoDB connection string (example: `mongodb+srv://user:pass@cluster0.mongodb.net/dbname`)

The project will throw an error on startup if `MONGO_URI` is not provided.

## Install

Install dependencies with your preferred package manager:

```powershell
# npm
npm install

# or pnpm
pnpm install

# or bun
bun install
```

## Run (development)

```powershell
# npm
npm run dev

# or bun
bun dev
```

Open http://localhost:3000 in your browser.

## Build and start (production)

```powershell
npm run build
npm run start
```

## Scripts

- `dev` - start Next.js in development mode (this repo uses turbopack: `next dev --turbopack`).
- `build` - build the production app (`next build --turbopack`).
- `start` - start the built app (`next start`).
- `lint` - run ESLint (`eslint`).

Run them via your package manager (e.g. `npm run dev`).

## Key files and folders

- `app/` — Next.js App Router pages, API routes and client/server components.
	- `app/api/auth/signin/route.ts` — sign-in API route
	- `app/api/auth/signup/route.ts` — sign-up API route
	- `app/api/issue/route.ts` — issue API route
- `components/` — React UI components and primitives (reusable building blocks).
- `components/ui/` — small UI primitives (button, input, table, etc.).
- `lib/` — small libraries/helpers. `lib/db.ts` contains the Mongoose connection helper and expects `MONGO_URI`.
- `data/` — seeded/static sample data and JSON files used by the UI.
- `public/` — static images and assets.
- `types/` — TypeScript type declarations.

## Notes / Development tips

- The project uses Mongoose to connect to MongoDB. If you have issues connecting, verify your `MONGO_URI` and network access to MongoDB.
- You can inspect API routes by sending requests to `/api/auth/signup`, `/api/auth/signin`, and `/api/issue`.
- Tailwind CSS is configured; edit `globals.css` or Tailwind config to change styles.

## Contributing

Contributions are welcome. Open an issue or PR against the `main` branch. Keep changes small and focused.

## License

This repository does not include an explicit license. Add a license file if you plan to open-source it.

