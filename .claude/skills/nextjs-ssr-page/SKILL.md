---
name: nextjs-ssr-page
description: Create a Next.js SSR-compatibility page for a plasma component based on its plasma-sb-utils story. Use when asked to add a component to the Next.js SSR check, verify a component works in Next.js, or create a nextjs page for a component. Example - "add Button to nextjs check", "create nextjs page for TextField".
argument-hint: '[ComponentName]'
allowed-tools: Glob, Grep, Read, Write, Edit, Bash
---

# Creating a Next.js SSR page for **\$ARGUMENTS**

The page verifies three things:

1. **Imports resolve** — no ESM/CJS issues on the server
2. **SSR renders without errors** — the component does not access `window`/`document` on the server
3. **styled-components** — CSS is collected server-side via `ServerStyleSheet` (already configured in `_document.tsx`)

`getServerSideProps` is used intentionally: it forces a server render on every request and will immediately surface any SSR incompatibilities.

---

## Step 1 — Read sources in parallel

Read simultaneously:

1. Story factory: `utils/plasma-sb-utils/src/components/$ARGUMENTS/stories.tsx`
2. Meta file: `utils/plasma-sb-utils/src/components/$ARGUMENTS/meta.ts`
3. sdds-serv exports: `packages/sdds-serv/src/components/$ARGUMENTS/index.ts` (or `.tsx`)
    - If not found — grep `packages/sdds-serv/src/index.ts` for `$ARGUMENTS`
4. Component map: `e2e/nextjs-pages/pages/index.tsx`

---

## Step 2 — Determine the category

Read the `title` field from `meta.ts`. Format: `'Category/ComponentName'` — the category is the part before `/`.

Examples:

-   `title = 'Data Entry/Attach'` → category `Data Entry`
-   `title = 'Data Display/Badge'` → category `Data Display`
-   `title = 'Navigation/Steps'` → category `Navigation`
-   `title = 'Overlay/Popover'` → category `Overlay`

If `meta.ts` is not found or has no `title` — **ask the user**: "Could not find the category in meta.ts. What category should \$ARGUMENTS belong to (`Data Entry`, `Data Display`, `Navigation`, `Overlay`, or other)?" and wait for the answer before continuing.

---

## Step 3 — Analyse the story

From `stories.tsx` extract:

-   **Component props** — arguments inside `createDefaultStory` (destructuring like `{ label, placeholder, ... }`)
-   **Controlled state** — presence of `useState` → move it to the page
-   **Icons** — which ones are imported from `@salutejs/plasma-icons`
-   **Sub-components** — any extra plasma imports (Counter, Icon, Dropdown, etc.)
-   **Callbacks** — `action('xxx')` → replace with `() => {}` or a real `useState` handler

Ignore:

-   `size`, `view` — set automatically by theme tokens, do not pass them
-   `disabled`, `readOnly` — these are component states, not SSR compatibility concerns; skip them
-   `import { action } from 'storybook/actions'` — replace with `() => {}`
-   `import { IconXxx } from '@salutejs/plasma-icons'` — keep as-is

---

## Step 4 — Create the page

**Path:** `e2e/nextjs-pages/pages/$ARGUMENTS.tsx` (PascalCase component name)

### Page template

```tsx
import React, { useState } from 'react'; // useState only if the component is controlled
import type { GetServerSideProps, NextPage } from 'next';
// Import component from sdds-serv — styled-components path
import { ComponentName /*, SubComponent */ } from '@salutejs/sdds-serv/styled-components';
// Icons — only those actually used in the story
import { IconXxx } from '@salutejs/plasma-icons';

// getServerSideProps forces SSR: if the component accesses window/document it will fail here
export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};

const ComponentNamePage: NextPage = () => {
    // Controlled state (if the component uses it in the story)
    const [value, setValue] = useState('');

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>$ARGUMENTS — SSR check</h1>

            {/* Basic render — reproduces the default args from the story */}
            <ComponentName
                {/* props with default values from the story, no size/view */}
            />

            {/* Controlled variant — if the component has value/onChange */}
            <ComponentName
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            />
        </main>
    );
};

export default ComponentNamePage;
```

### Story → page adaptation rules

| In story                                   | In page                                           |
| ------------------------------------------ | ------------------------------------------------- |
| `action('onClick')`                        | `() => {}`                                        |
| `action('onChange')`                       | `(e) => setValue(e.target.value)` (if controlled) |
| `useState` inside a story component        | `useState` at the page level                      |
| `enableContentLeft ? <Icon /> : undefined` | Render with icon (enable the feature)             |
| `{...rest}` with args                      | Use concrete default values                       |
| `size`, `view` in args                     | Do not pass — set automatically by theme tokens   |
| `disabled`, `readOnly` variants            | Not needed — these are states, not SSR concerns   |

### Checklist

-   [ ] At least **2 instances** of the component: basic, controlled (if applicable)
-   [ ] `getServerSideProps` — always, no exceptions
-   [ ] Real icons from `@salutejs/plasma-icons` if the story uses them
-   [ ] Do not use `typeof window !== 'undefined'` — this hides SSR problems instead of fixing them

---

## Step 5 — Update index.tsx

In `e2e/nextjs-pages/pages/index.tsx` add an entry to the `const components: ComponentEntry[] = [` array.

Use the category determined in Step 2. Insert in alphabetical order within the category:

```tsx
{ name: '$ARGUMENTS', category: 'Data Entry' },  // replace with the actual category
```

---

## Step 6 — Verify

Run from the `e2e/nextjs-pages` directory:

```bash
cd e2e/nextjs-pages && npm run type-check && npm run build
```

Expected result:

-   `type-check` — no errors
-   `build` — `✓ Compiled successfully`, new page appears in the route table
-   If there is an SSR error — Next.js will throw it during `Generating static pages` or as a separate warning

If there are type errors — fix them in the page, not in the component.
