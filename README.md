# SpectrumBits Website

The SpectrumBits robotics team website.

## Layout

```
.
├── netlify.toml        # deploy config (points Netlify at public_sverlte/)
├── .githooks/           # repo-wide git hooks (blocks local-only config from being committed)
├── .claude/              # local-only, not in git
└── public_sverlte/       # the actual SvelteKit project — app code, config, everything
```

Everything needed to build and run the site — source, config, dependencies — lives in [`public_sverlte/`](public_sverlte/). See [`public_sverlte/README.md`](public_sverlte/README.md) for how to develop, build, and check it.

For a fuller picture of how the site is put together (architecture, conventions, gotchas worth knowing before changing things), see [`AGENTS.md`](AGENTS.md).

## Deploying

Netlify builds from the `public_sverlte/` subfolder (`base` in `netlify.toml`) and publishes `public_sverlte/build/`, the prerendered static output.
