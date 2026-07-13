# mecheportfolio

Portfolio site for Shahrad's mechanical engineering job search. This is public-facing and used in applications, so quality, polish, accessibility, and truthful content matter.

## Stack

- TanStack Start with React 19, TanStack Router file-based routing, Vite 7, and TypeScript.
- shadcn/ui components with Radix primitives and Tailwind CSS v4. UI config lives in `components.json`.
- Forms use `react-hook-form` and `zod`. Icons use `lucide-react`.
- Package manager is Bun. Use `bun`, not `npm` or `yarn`.

## Commands

- `bun run dev`: start the local dev server.
- `bun run build`: run the production build.
- `bun run lint`: run ESLint.
- `bun run format`: run Prettier.

## Layout

- `src/routes/`: file-based routes, including `index.tsx`, `resume.tsx`, `projects.$slug.tsx`, `sitemap[.]xml.ts`, and `__root.tsx`.
- `src/components/`: app and shadcn components.
- `src/lib/`: utilities.
- `src/hooks/`: hooks.
- `src/data/`: content and project data.
- `src/assets/` and `public/`: static assets.
- `src/routeTree.gen.ts` is auto-generated. Never edit it by hand.

## Deploy

- GitHub repo: `shahradzomorrodi/mecheportfolio`.
- Pushing to `main` auto-deploys to Vercel.
- Treat `main` as production.
- Public URL is `shahradzomorrodi.com`. Do not use the Vercel preview or vercel.app URL in resumes or application documents.
- After deploy-related changes or pushes, use the `verify-deploy` skill when asked to verify the live site. It should load the live site in a browser, check key routes, and diagnose before guessing.
- If a deploy issue is found and fixed, log the cause in `DEPLOY_NOTES.md` when appropriate.

## Conventions

- No em-dashes in user-facing copy.
- Reuse existing shadcn components before adding dependencies.
- Keep accessibility in mind: alt text, labels, semantic markup, keyboard navigation, and readable contrast.
- Preserve truthful scope of Shahrad's experience. Do not invent tools, metrics, certifications, or project claims.
- Before considering changes done, run `bun run lint` when practical. Run `bun run build` for routing, deploy, or structural changes.
