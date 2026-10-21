# @tutor-crm/api

NestJS backend for Tutor CRM. See the [root README](../../README.md) for how the monorepo fits together.

## Scripts

Run from the repository root with `-w @tutor-crm/api`, or directly inside this folder:

| Script | What it does |
| --- | --- |
| `npm run start:dev` | Start in watch mode on port 3000 (or `PORT`) |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run the compiled build |
| `npm run test` | Unit tests (Vitest) |
| `npm run test:e2e` | End-to-end tests against the real HTTP routes |
| `npm run lint` | Lint with oxlint |

## Structure

```
src/
├── auth/                 POST /auth/register
├── practice-settings/    GET/PUT /practice-settings
└── common/pipes/         ZodValidationPipe — validates request bodies with schemas from @tutor-crm/shared
```

Request bodies are validated with the same Zod schemas the mobile app uses, via `ZodValidationPipe`. Storage is in memory until a database is added.
