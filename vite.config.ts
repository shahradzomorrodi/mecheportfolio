import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    // The pinned @lovable.dev/vite-tanstack-config (2.1.1) does not redirect
    // Nitro's output into .vercel/output on its own — without these overrides
    // it writes to dist/ and Vercel never finds the Build Output API (404 on
    // every route). The server dir MUST be named __server.func to match the
    // /__server route that Nitro's vercel preset writes into config.json.
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__server.func",
    },
  },
});
