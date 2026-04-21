# `packages/sdds-sbcom` scripts

Most migration and Storybook missing-token work runs through the **repo-level** CLI: [`scripts/css-migration-tool.mjs`](../../../scripts/css-migration-tool.mjs).

From **`packages/sdds-sbcom`**:

```bash
npm run migrate-to-design-tokens
npm run update-storybook-with-missing-tokens
```

-   **`migrate-to-design-tokens`** — Config migration via `migrate-configs` using `@salutejs-ds/sdds_sbcom/theme/tokens`.
-   **`update-storybook-with-missing-tokens`** — Regenerates missing-token data and story title markers. Also used by **`prestorybook:build`**.

Equivalent from repo root:

```bash
node scripts/css-migration-tool.mjs migrate-configs \
  --package-root packages/sdds-sbcom \
  --tokens-import @salutejs-ds/sdds_sbcom/theme/tokens

node scripts/css-migration-tool.mjs update-storybook \
  --package-root packages/sdds-sbcom \
  --tokens-import @salutejs-ds/sdds_sbcom/theme/tokens
```

## Other scripts in this folder

-   **`copy-linaria-components.sh`** — Used by `prebuild:css` (unchanged).

Plasma `styled-components` import restoration (`restore-plasma-*.mjs`) is handled inside **`migrate-configs`** in the repo-level tool.
