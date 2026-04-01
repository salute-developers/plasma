---
name: migrate-stories
description: Migrate component Storybook stories to the new format using a shared get{Component}Stories factory from @salutejs/plasma-sb-utils, and update all final packages. Use when asked to migrate/refactor stories for a component.
argument-hint: '[ComponentName]'
---

Migrate Storybook stories for the component **\$ARGUMENTS** to the new shared-factory format.

The pattern: story logic moves into `utils/plasma-sb-utils/src/components/{Name}/`, final packages import a `get{Name}Stories` helper instead of defining everything inline.

Reference implementation to follow: `utils/plasma-sb-utils/src/components/DateTimePicker/` (and `DatePicker/` for a component with range variant).

---

## Step 1 — Read existing stories

Read these files to understand what to extract:

1. `packages/plasma-new-hope/src/examples/components/$ARGUMENTS/$ARGUMENTS.stories.tsx` — the source of truth for args, argTypes, story render logic
2. `packages/plasma-new-hope/src/examples/components/$ARGUMENTS/$ARGUMENTS.config.ts` — component token config
3. `utils/plasma-sb-utils/src/components/DateTimePicker/` — reference implementation (all 5 files)
4. `utils/plasma-sb-utils/src/components/TextFieldSlider/meta.ts` — reference for argType categories

Also read a few final-package stories (e.g. `packages/plasma-b2c/src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx`) to see what currently exists there.

---

## Step 2 — Create the module in plasma-sb-utils

Create `utils/plasma-sb-utils/src/components/$ARGUMENTS/` with these 5 files:

### `fixtures.ts`

Constants arrays used in argTypes `options`. Typical exports:

```ts
export const labelPlacements = ['outer', 'inner'];
export const requiredPlacements = ['left', 'right'];
// ...any other option arrays specific to this component
```

### `meta.ts`

Exports `createMeta(props)`. Pattern:

```ts
import { disableProps, InSpacingDecorator } from '../../index';
import { labelPlacements, ... } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component, componentConfig,
    title = 'Data Entry/$ARGUMENTS',
    defaultArgs = {}, additionalArgTypes = {}, disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        // all default arg values from the plasma-new-hope Default story
        ...defaultArgs,
    },
    argTypes: {
        // all argType definitions, each with table: { category: '...' }
        // categories: 'variation' | 'layout' | 'form-related' | and component-specific ones
        // add explicit boolean/text/number argTypes for args that had no argType before
        ...additionalArgTypes,
        ...disableProps([.../* internal disabled list */, ...disablePropsList]),
    },
});
```

**Category guide** (follow TextFieldSlider/meta.ts):

-   `variation` — view, size, disabled, readOnly, appearance/state props
-   `layout` — label, placeholder, labelPlacement, textBefore/After, enableContentLeft/Right, stretched
-   `form-related` — required, requiredPlacement, hasRequiredIndicator
-   Component-specific categories for logical prop groups (e.g. `date-related`, `calendar`, `shortcuts`, `hint`, `slider`)

### `stories.tsx`

Exports `createDefaultStory(Component)` — a factory that returns the render function. Uses `action` from `@storybook/addon-actions`. Example shape:

```tsx
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
// import icons/helpers as needed

export const createDefaultStory = (MyComponent: any) => {
    return ({ enableContentLeft, size, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);
        // ...
        return <MyComponent opened={isOpen} ... {...rest} />;
    };
};
```

### `$ARGUMENTS.tsx`

The public entry point. Exports `get{Name}Stories`:

```tsx
import React from 'react';
import { getConfigVariations } from '../../helpers';
import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const get${ARGUMENTS}Stories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;
    const componentConfigVariations = getConfigVariations(componentConfig);
    const meta = createMeta({ component, componentConfig: componentConfigVariations, ...rest });
    const DefaultStoryComponent = createDefaultStory(component);
    const Default = { render: (args: any) => <DefaultStoryComponent {...args} /> };
    return { meta, Default };
};
```

### `index.ts`

```ts
export * from './$ARGUMENTS';
```

### Register in components index

Add to `utils/plasma-sb-utils/src/components/index.ts`:

```ts
export * from './$ARGUMENTS';
```

---

## Step 3 — Build plasma-sb-utils

```bash
cd utils/plasma-sb-utils && npm run build
```

Fix any TypeScript errors before continuing.

---

## Step 4 — Refactor plasma-new-hope stories

Replace `packages/plasma-new-hope/src/examples/components/$ARGUMENTS/$ARGUMENTS.stories.tsx` with:

```tsx
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { get${ARGUMENTS}Stories } from '@salutejs/plasma-sb-utils';

import { $ARGUMENTS } from './$ARGUMENTS';
import { config } from './$ARGUMENTS.config';

type ${ARGUMENTS}Props = ComponentProps<typeof $ARGUMENTS>;

const { meta: META, Default } = get${ARGUMENTS}Stories({
    component: $ARGUMENTS,
    componentConfig: config,
});

const meta: Meta<${ARGUMENTS}Props> = {
    ...META,
    title: 'Data Entry/$ARGUMENTS',
};

export default meta;

export { Default };
```

---

## Step 5 — Analyse final-package configs

For each package in `packages/plasma-{b2c,giga,homeds,web}` and `packages/sdds-{bizcom,crm,cs,dfa,finai,insol,netology,os,platform-ai,sbcom,scan,serv}`:

1. Check if `src/components/$ARGUMENTS/$ARGUMENTS.config.ts` exists — if not, skip that package.
2. Check if `src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx` exists — if not but config exists, create it.
3. Inspect config for number of view/size variations. Use this command pattern:

```bash
python3 -c "
import re
packages = ['plasma-b2c', 'sdds-cs', ...]  # all packages
for pkg in packages:
    path = f'packages/{pkg}/src/components/$ARGUMENTS/$ARGUMENTS.config.ts'
    try:
        content = open(path).read()
        # count css\` occurrences per variation block
        ...
    except FileNotFoundError:
        print(f'{pkg}: SKIP')
"
```

Or simpler:

```bash
for pkg in plasma-b2c sdds-cs ...; do
  config="packages/$pkg/src/components/$ARGUMENTS/$ARGUMENTS.config.ts"
  [ -f "$config" ] || continue
  default_size=$(grep -A2 "defaults:" "$config" | grep "size:" | grep -oE "'[a-z]+'" | tr -d "'")
  view_count=$(awk '/^\s+view: \{/,/^\s+\}/' "$config" | grep -c "css\`")
  size_count=$(awk '/^\s+size: \{/,/^\s+\}/' "$config" | grep -c "css\`")
  echo "$pkg: views=$view_count sizes=$size_count default_size=$default_size"
done
```

4. Determine `disablePropsList` and `defaultArgs` per package:

    - **1 view variant** → add `'view'` to `disablePropsList`
    - **1 size variant** → add `'size'` to `disablePropsList`
    - **default size ≠ meta default** → add `size: '<value>'` to `defaultArgs`
    - **package-specific disabled args** (hint props not in config, etc.) → add to `disablePropsList`

5. Also diff each package's stories against plasma-b2c to spot package-specific differences:

```bash
for pkg in plasma-giga sdds-cs ...; do
  f="packages/$pkg/src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx"
  [ -f "$f" ] && diff "$f" packages/plasma-b2c/src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx | head -30
done
```

---

## Step 6 — Write final-package stories

For packages that need only `disablePropsList: ['view']` (most common case):

```tsx
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { get${ARGUMENTS}Stories } from '@salutejs/plasma-sb-utils';

import { $ARGUMENTS } from './$ARGUMENTS';
import { config } from './$ARGUMENTS.config';

type ${ARGUMENTS}Props = ComponentProps<typeof $ARGUMENTS>;

const { meta: META, Default } = get${ARGUMENTS}Stories({
    component: $ARGUMENTS,
    componentConfig: config,
    disablePropsList: ['view'],
});

const meta: Meta<${ARGUMENTS}Props> = {
    ...META,
    title: 'Data Entry/$ARGUMENTS',
};

export default meta;

export { Default };
```

For packages with overrides (e.g. different default size, disabled props):

```tsx
const { meta: META, Default } = get${ARGUMENTS}Stories({
    component: $ARGUMENTS,
    componentConfig: config,
    defaultArgs: {
        size: 's',             // if package default differs
        enableContentLeft: false,
    },
    disablePropsList: ['view', 'size'],  // if only 1 variant
});
```

Write identical packages in bulk with a bash loop. Write per-package exceptions individually.

---

## Checklist

-   [ ] `utils/plasma-sb-utils/src/components/$ARGUMENTS/` — all 5 files created
-   [ ] `utils/plasma-sb-utils/src/components/index.ts` — export added
-   [ ] `npm run build` in `utils/plasma-sb-utils` — passes with no errors
-   [ ] `packages/plasma-new-hope/…/$ARGUMENTS.stories.tsx` — refactored
-   [ ] All final packages with a config — stories created/updated
-   [ ] Packages without a `$ARGUMENTS` component — skipped

---

## Key rules

-   Use `InSpacingDecorator` (from plasma-sb-utils), never `WithTheme` (package-specific)
-   Use `action` from `@storybook/addon-actions`, not `storybook/actions`
-   Add `table: { category: '…' }` to **every** argType entry in `meta.ts`
-   Add explicit argType entries (with category) for booleans/text that are only in `args` in the original
-   Props controlled by the story component (`opened`, `contentLeft`, `onToggle`, etc.) go into the internal `commonDisabledArgs` list in `meta.ts`
-   Always rebuild `plasma-sb-utils` after any change to its source
