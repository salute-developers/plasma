---
name: migrate-test
description: Migrate a Cypress component test from packages/plasma-b2c to the new pattern in packages/plasma-new-hope. Trigger when user asks to rewrite, migrate, or port a component test to plasma-new-hope style. Example: "перепиши тесты для ComponentName по новому паттерну", "migrate ComponentName test to new-hope".
---

# Migrate component test from plasma-b2c to plasma-new-hope

You are migrating a Cypress component test to the new pattern used in `packages/plasma-new-hope`.

## Arguments

The user provides a component name, e.g. `NumberInput`, `Autocomplete`, `TextField`.
Source is always `packages/plasma-b2c/src/components/{Name}/{Name}.component-test.tsx`.
Target is always `packages/plasma-new-hope/src/components/{Name}/{Name}.component-test.tsx`.

## Step 1 — Read source files in parallel

Read all of the following simultaneously:

1. Source test: `packages/plasma-b2c/src/components/{Name}/{Name}.component-test.tsx`
2. Also read `packages/plasma-b2c/src/components/{Name}/{Name}.update-test.component-test.tsx` if exists. You should take from there tests that contain `[PLASMA- ]` in it's name
3. Component config:
   `packages/plasma-b2c/src/components/{Name}/{Name}.config.ts`
4. Component types (for import): look for `{Name}.types.ts` or `{Name}.types.tsx` in:
   `packages/plasma-new-hope/src/components/{Name}/`
5. Reference test for structure (read one):
   `packages/plasma-new-hope/src/components/Range/Range.component-test.tsx`

## Step 2 — Determine configPropsForMatrix

From the config file, identify keys of `config.variations` (typically `view`, `size`, and possibly `stretching`, `segmentation`, etc.).
These become the `configPropsForMatrix` array.

## Step 3 — Write the new test

### File structure rules (MANDATORY):

1. **No `CypressTestDecorator`** — `mount()` auto-wraps content in it.
2. **No `StandardTypoStyle`** — not needed.
3. **No theme imports** (`b2cTheme`, `webTheme`, etc.).
4. **Icons** — import from `'override/_Icon'` with `// @ts-ignore` on the line above:
    ```tsx
    // @ts-ignore
    import { IconPlasma } from 'override/_Icon';
    ```
5. **Types** — import component props type from `./ComponentName.types`:
    ```tsx
    import type { ComponentNameProps } from './ComponentName.types';
    ```
    If the component uses special item types (e.g. `SuggestionItemType`), import them too.
6. **Top-level structure** (always in this order):

    ```tsx
    import React from 'react'; // add useState/useRef only if used
    import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
    // @ts-ignore (only if icons are used)
    import { IconXxx } from 'override/_Icon';

    import type { ComponentNameProps } from './ComponentName.types';

    const componentExists = hasComponent('ComponentName');
    const describeFn = getDescribeFN('ComponentName');

    // shared fixtures/constants

    const componentProps = {
        // minimal required props for visual matrix
    };

    getBaseVisualTests({
        component: 'ComponentName',
        componentProps,
        configPropsForMatrix: ['view', 'size'], // from config.variations keys
    });

    describeFn('ComponentName', () => {
        const ComponentName = componentExists ? getComponent<ComponentNameProps>('ComponentName') : () => null;

        // individual tests here
    });
    ```

7. **Inside `describeFn`**: preserve all meaningful tests from the source. Translate them:

    - Remove `CypressTestDecorator` wrappers — use `mount(...)` directly.
    - Keep `cy.viewport(...)` calls, interactions, and assertions as-is.
    - Keep helper components (e.g. `DemoWithPortal`) inside the `describeFn` block.
    - Remove all props that are used in `getBaseVisualTests` from passing to component.

8. **`PadMe`** — import from `@salutejs/plasma-cy-utils` if used for visual spacing between items.

9. **Formatting**: multiline JSX props — each prop on its own line when there are 3+ props.

### What to SKIP from the source:

-   Tests that only test theming / token colors (covered by `getBaseVisualTests`)
-   Tests marked `it.skip` — keep them skipped
-   `StandardTypoStyle` usage

## Step 4 — Verify

After writing the file, confirm:

-   The file is at `packages/plasma-new-hope/src/components/{Name}/{Name}.component-test.tsx`
-   `tsconfig.tests.json` exists and `tsconfig.json` references it
-   No `CypressTestDecorator`, no `StandardTypoStyle`, no theme imports remain
