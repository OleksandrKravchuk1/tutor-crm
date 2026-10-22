# Repository layout

This is an npm workspaces monorepo:

- `apps/mobile` — Expo app (`@tutor-crm/mobile`)
- `apps/api` — NestJS backend (`@tutor-crm/api`)
- `packages/shared` — Zod schemas and types shared by both (`@tutor-crm/shared`)

Run `npm install` from the repository root only. Validation rules and shared types belong in `packages/shared`; do not duplicate them in an app.

# Expo HAS CHANGED

When working in `apps/mobile`, read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.
