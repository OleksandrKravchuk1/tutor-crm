# Tutor CRM

Pocket CRM for tutors and private coaches: students, lessons, payments and schedules.

This repository is a **monorepo**: one Git repo that holds the mobile app, the backend and the code they share.

```
tutor-crm/
├── apps/
│   ├── mobile/     Expo (React Native) app
│   └── api/        NestJS backend
└── packages/
    └── shared/     Zod schemas + TypeScript types used by both apps
```

`packages/shared` is the single source of truth for validation rules (for example "password must be at least 8 characters"). The mobile forms and the API both import from `@tutor-crm/shared`, so they can never disagree.

## Getting started

Install everything once, from the repository root:

```bash
npm install
```

This installs dependencies for every app and package into one root `node_modules`, then builds `packages/shared`.

## Common commands

Run these from the repository root:

| Command | What it does |
| --- | --- |
| `npm run mobile` | Start the Expo dev server for the mobile app |
| `npm run android` / `npm run ios` | Start Expo and open Android / iOS |
| `npm run api` | Start the NestJS API in watch mode on http://localhost:3000 |
| `npm run shared:dev` | Rebuild `packages/shared` automatically while you edit it |
| `npm run shared:build` | Build `packages/shared` once |
| `npm run typecheck` | Type-check every workspace |
| `npm run lint` | Lint every workspace |

To run a script inside one workspace, use `-w`, for example `npm run test -w @tutor-crm/api`.

## Adding a dependency

Install it into the workspace that uses it, from the root:

```bash
npm install some-package -w @tutor-crm/mobile
npm install some-package -w @tutor-crm/api
```

For Expo/React Native libraries, prefer `npx expo install some-package` run inside `apps/mobile`, so Expo picks a compatible version.

## Changing shared code

Edit files in `packages/shared/src`, then rebuild (`npm run shared:build`, or keep `npm run shared:dev` running). Both apps use the built output in `packages/shared/dist`.

## API endpoints

| Method | Path | Body |
| --- | --- | --- |
| `GET` | `/health` | — |
| `POST` | `/auth/register` | `registerSchema` from `@tutor-crm/shared` |
| `GET` | `/practice-settings` | — |
| `PUT` | `/practice-settings` | `practiceSettingsSchema` from `@tutor-crm/shared` |

Data is kept in memory for now and resets when the API restarts. The mobile app still uses its local mock API and is not yet connected to this backend.
