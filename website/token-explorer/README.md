# Design token explorer

Browse theme tokens from `plasma-themes` / `sdds-themes` and see where they appear in component `*.config.ts` files (`plasma-giga`, `sdds-sbcom`, `sdds-serv`). The **design system** selector scopes tokens, usages, components, and gaps to one package.

## Setup

```bash
cd website/token-explorer
npm install
```

## Run

```bash
npm run dev
```

`predev` runs `generate:data` and writes `public/token-explorer.data.json` (paths resolve to the monorepo root: two levels above this folder).

## Build

```bash
npm run build
npm run preview
```

## Data only

```bash
npm run generate:data
```

Generated JSON is gitignored. Edit `explorer.config.json` to add packages or design systems.
