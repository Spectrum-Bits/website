# AGENTS.md

Context for AI assistants working in this repo. Read this before making structural or styling changes.

## What this is

The SpectrumBits robotics team website. Originally a hand-written multi-page HTML/Tailwind site with a custom client-side "pageloader" script; rewritten as a SvelteKit app (static-prerendered, deployed on Netlify). The old `public/` HTML site no longer exists in the working tree — see git history (before the "remade the full website in svelte" commit) if you ever need to reference it.

## Repo layout

Everything the app needs — source, config, `package.json`, dependencies — lives in **`public_sverlte/`**, not the repo root. That's deliberate: the repo root stays reserved for repo-wide concerns (`netlify.toml`, `.githooks/`, `.claude/`), mirroring how the pre-rewrite site kept its whole deployable inside a `public/` folder. If you add new site code, it goes inside `public_sverlte/`; don't create a parallel `src/` at the repo root.

`netlify.toml` sets `base = "public_sverlte"` — Netlify installs/builds from inside that folder and publishes `public_sverlte/build/`.

## Architecture (inside `public_sverlte/`)

- **SvelteKit + `@sveltejs/adapter-static`**, fully prerendered (`export const prerender = true` in `src/routes/+layout.ts`). There is no server runtime — every route is written to static HTML at build time.
- **`trailingSlash = 'always'`** (same file) — routes render as `/team/index.html` etc., matching the old site's URL shape. Keep this in mind if you add routes with dynamic params.
- **Route group `(content)`** (`src/routes/(content)/`): team/robots/sponsors/mentors/contests/contact all share a centered-content layout (`(content)/+layout.svelte`). The home page (`src/routes/+page.svelte`) is a sibling outside the group — it has its own full-bleed hero layout, not the centered wrapper.
- **Shared components** (`src/lib/components/`):
  - `Navbar.svelte` — the floating glass nav bar + mobile menu (`$state` toggle, no external router).
  - `RobotShowcase.svelte` — the reusable "kicker/title/lead/details/body/media" layout used by robots, contests, sponsors, mentors, contact. The `details` prop takes `{ label, value, href?, external? }` — **do not** reintroduce `{@html}` for links here; render real `<a>` tags via `href`/`external` (see `svelte/no-at-html-tags`).
  - `TeamRoster.svelte` — the two-column PR/Engineering member grid.
  - `InfoList.svelte` — simple label/rows list, used for sponsors and mentors.
- **Data** (`src/lib/data/`): `team.ts`, `sponsors.ts`, `mentors.ts`. Plain arrays — edit these to update roster/sponsor/mentor content, no need to touch components.

## Styling — read this before touching CSS

Tailwind v4 is wired in via `@tailwindcss/vite` (`@import 'tailwindcss'` in `src/routes/layout.css`). Tailwind emits its utilities inside `@layer` blocks. **Unlayered CSS always wins over layered CSS in the cascade, regardless of specificity or source order.** This bit us once already: an unscoped `* { margin: 0; padding: 0; }` reset in `layout.css` silently overrode every Tailwind spacing utility site-wide (`px-*`, `mx-auto`, `mt-*`, everything), breaking the navbar's padding/rounding and page-width centering on large screens. Tailwind's own preflight (inside `@layer base`) already does this reset correctly — don't duplicate it unscoped.

Rule of thumb: any custom global CSS that's meant to coexist with Tailwind utility classes on the same elements must go inside `@layer base` / `@layer components` / `@layer utilities` (see the `.glass` / `.nav-link` rules in `layout.css` for the pattern), not left bare. Component-scoped `<style>` blocks in `.svelte` files are also technically unlayered, but that's only a problem if a scoped rule sets a property that's *also* set by a Tailwind utility class on the same element — check for that before adding scoped styles alongside utility classes.

## Navigation links

`eslint-plugin-svelte`'s `no-navigation-without-resolve` rule is enabled. Internal links must go through `resolve()` from `$app/paths` (see `Navbar.svelte`, `+page.svelte`), using the route ID including trailing slash (e.g. `resolve('/team/')`, not `resolve('/team')`). For genuinely external URLs (mailto:, social links — see `RobotShowcase.svelte`'s `details` rendering), the rule's escape hatch is a **static string literal** `rel="external"` — a ternary/expression for `rel` won't satisfy the linter's static analysis, so keep it a literal.

## Verifying changes

There's no test suite. To verify a change actually works:
```sh
cd public_sverlte
npm run check   # svelte-check, type errors
npm run lint    # prettier + eslint
npm run build   # prerenders every route — catches route/link errors check/lint miss
```
For visual changes, there's no in-repo screenshot tooling — this has been done ad hoc with the Playwright CLI (`npx playwright screenshot --viewport-size=W,H <url> <path>`) against a running `npm run dev`/`npm run preview` server, checked across a few viewport sizes (narrow mobile, tablet, standard desktop, and a tall/portrait aspect ratio — the last one matters here since the home page hero footer is pinned to the bottom via flexbox and needs checking on unusually tall viewports).

## Local-only files / git hooks

`.claude/` (repo root) and `public_sverlte/.vscode/` are local-only — gitignored, and additionally hard-blocked from being committed (even with `git add -f`) by `.githooks/pre-commit`. `core.hooksPath` is set to `.githooks` automatically by the `prepare` npm script, so `npm install` inside `public_sverlte/` re-applies it on fresh clones. If you add another local-only tool config directory, update both the relevant `.gitignore` and the `blocked_pattern` in `.githooks/pre-commit`.
