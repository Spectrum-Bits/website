# SpectrumBits Website

The SpectrumBits robotics team website, built with SvelteKit and prerendered to static HTML via `@sveltejs/adapter-static`, deployed on Netlify.

## Developing

```sh
npm install
npm run dev -- --open
```

## Building

```sh
npm run build
```

This writes the prerendered site to `build/`, which is what Netlify publishes (see `netlify.toml`). Preview it locally with `npm run preview`.

## Checks

```sh
npm run check   # type-check
npm run lint    # prettier + eslint
```
