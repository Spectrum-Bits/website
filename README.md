# SpectrumBits Website (app)

Built with SvelteKit, prerendered to static HTML via `@sveltejs/adapter-static`. This folder is the whole app — everything you need to develop, build, and deploy lives here. See the [repo root README](../README.md) for why it's namespaced in a subfolder, and [`../AGENTS.md`](../AGENTS.md) for a deeper architecture walkthrough.

## Developing

```sh
npm install
npm run dev -- --open
```

## Building

```sh
npm run build
```

This writes the prerendered site to `build/`, which is what Netlify publishes (see `../netlify.toml`). Preview it locally with `npm run preview`.

## Checks

```sh
npm run check   # type-check
npm run lint    # prettier + eslint
```
