# mecheportfolio

Job-application portfolio site for Shahrad (mechanical engineer, CA job search). Public-facing — quality and polish matter.

## Stack
- **TanStack Start** (React 19 + TanStack Router, file-based routing) on **Vite 7**, TypeScript.
- **shadcn/ui** components (Radix primitives) + **Tailwind CSS v4**. UI config in `components.json`.
- Forms: `react-hook-form` + `zod`. Icons: `lucide-react`.
- **Package manager: Bun** (`bun.lock`). Use `bun`, not `npm`/`yarn`.

## Commands
- `bun run dev` — local dev server
- `bun run build` — production build
- `bun run lint` — ESLint
- `bun run format` — Prettier

## Layout
- `src/routes/` — pages (file-based): `index.tsx`, `resume.tsx`, `projects.$slug.tsx`, `sitemap[.]xml.ts`, `__root.tsx`. Adding a route = adding a file here.
- `src/components/` — UI (shadcn components live here). `src/lib/` — utils. `src/hooks/` — hooks. `src/data/` — content/data. `src/assets/` & `public/` — static files.
- `src/routeTree.gen.ts` is auto-generated — never edit by hand.

## Deploy
- Pushing to `main` on GitHub (`Radanator223/mecheportfolio`) auto-deploys to Vercel. Treat `main` as production.

## Conventions
- **No em-dashes** in any user-facing copy.
- Reuse existing shadcn components before adding new dependencies.
- Run `bun run lint` before considering a change done.
- Keep accessibility in mind (this is a hiring showcase): alt text, labels, keyboard nav.
