# Token migration report

Generated: 2026-03-27T17:14:56.031Z (repo root: `scripts/migrate-plasma-giga-config-tokens.mjs --all`)

## Summary

-   **Packages in batch:** 17
-   **Total `.config.ts` files scanned:** 1314
-   **Files updated in this run:** 1 (subsequent `--all` runs show **0** here if configs are already migrated; use git history for the first full pass)
-   **Triple-dash typo fixes in this run:** 0 files (`var(---x)` → `var(--x)`, only where matches existed)

## Theme / token mapping notes

| Package profile    | Token import                                    | PR                                                             | Notes                                                                                                                |
| ------------------ | ----------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `plasma-giga`      | `@salutejs/plasma-themes/tokens/plasma_giga`    | [#2637](https://github.com/salute-developers/plasma/pull/2637) | —                                                                                                                    |
| `plasma-homeds`    | `@salutejs/plasma-themes/tokens/plasma_homeds`  | [#2649](https://github.com/salute-developers/plasma/pull/2649) | —                                                                                                                    |
| `plasma-b2c`       | `@salutejs/plasma-themes/tokens/plasma_b2c`     | [#2651](https://github.com/salute-developers/plasma/pull/2651) | —                                                                                                                    |
| `plasma-web`       | `@salutejs/plasma-themes/tokens/plasma_web`     | [#2650](https://github.com/salute-developers/plasma/pull/2650) | —                                                                                                                    |
| `plasma-new-hope`  | `@salutejs/plasma-themes/tokens/plasma_b2c`     | [#2652](https://github.com/salute-developers/plasma/pull/2652) | Example / Storybook configs under `src/examples/components` (not `src/components`); same token bundle as plasma_b2c. |
| `sdds-bizcom`      | `@salutejs/sdds-themes/tokens/sdds_bizcom`      | [#2648](https://github.com/salute-developers/plasma/pull/2648) | —                                                                                                                    |
| `sdds-crm`         | `@salutejs/sdds-themes/tokens/sdds_serv`        | [#2647](https://github.com/salute-developers/plasma/pull/2647) | No sdds_crm token set in repo; package uses sdds_serv (see ViewContainer / tokens re-export).                        |
| `sdds-cs`          | `@salutejs/sdds-themes/tokens/sdds_cs`          | [#2646](https://github.com/salute-developers/plasma/pull/2646) | —                                                                                                                    |
| `sdds-dfa`         | `@salutejs/sdds-themes/tokens/sdds_dfa`         | [#2645](https://github.com/salute-developers/plasma/pull/2645) | —                                                                                                                    |
| `sdds-finai`       | `@salutejs/sdds-themes/tokens/sdds_finai`       | [#2644](https://github.com/salute-developers/plasma/pull/2644) | —                                                                                                                    |
| `sdds-insol`       | `@salutejs/sdds-themes/tokens/sdds_insol`       | [#2643](https://github.com/salute-developers/plasma/pull/2643) | —                                                                                                                    |
| `sdds-netology`    | `@salutejs/plasma-themes/tokens/plasma_b2c`     | [#2642](https://github.com/salute-developers/plasma/pull/2642) | Package depends on @salutejs/plasma-themes; re-exports plasma_b2c (not sdds-themes).                                 |
| `sdds-os`          | `@salutejs/sdds-themes/tokens/sdds_os`          | [#2641](https://github.com/salute-developers/plasma/pull/2641) | —                                                                                                                    |
| `sdds-platform-ai` | `@salutejs/sdds-themes/tokens/sdds_platform_ai` | [#2640](https://github.com/salute-developers/plasma/pull/2640) | —                                                                                                                    |
| `sdds-sbcom`       | `@salutejs/sdds-themes/tokens/sdds_sbcom`       | [#2639](https://github.com/salute-developers/plasma/pull/2639) | —                                                                                                                    |
| `sdds-scan`        | `@salutejs/sdds-themes/tokens/sdds_scan`        | [#2653](https://github.com/salute-developers/plasma/pull/2653) | —                                                                                                                    |
| `sdds-serv`        | `@salutejs/sdds-themes/tokens/sdds_serv`        | [#2654](https://github.com/salute-developers/plasma/pull/2654) | —                                                                                                                    |

## Known bugs fixed before migration (`var(---…)` typos)

Some configs had **three (or more) hyphens** after `var(` (e.g. `var(---text-secondary-active)` instead of `var(--text-secondary-active)`). That is invalid CSS and broke the migrator’s `var(--*)` parser.

> **First full batch (this repo effort):** 31 `*.config.ts` files under these packages were auto-corrected (`var(---x)` → `var(--x)`) before token migration. Re-running `--all` shows **0** in the table below unless new typos appear.

-   _(No triple-dash occurrences found in batch package configs during this run.)_

### Same typo elsewhere (not in this batch)

Other trees outside the batch (e.g. ad-hoc fixtures) may still contain `var(---…)` until migrated or fixed separately.

### Remaining `var(---…)` in batch packages (after this run)

-   None found under batch packages’ config roots (e.g. `src/components/`** or `src/examples/components/**`).

## Per-package results

-   **Written this run:** `.config.ts` files the script saved in this invocation (still had `var(--*)` in a styled-components css template and every variable resolved). Usually **0** or small once the package is already migrated.
-   **Configs importing theme:** count of `.config.ts` files under the config root whose source contains an import from that package’s theme module. Measured **after** the run; includes files not touched this run.

### `plasma-giga`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_giga/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_giga`
-   **Config files:** 80
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 79
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 76

Skipped (manual / non-css configs)

-   `packages/plasma-giga/src/components/Scrollbar/Scrollbar.config.ts`

### `plasma-homeds`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_homeds/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_homeds`
-   **Config files:** 77
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 76
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 73

Skipped (manual / non-css configs)

-   `packages/plasma-homeds/src/components/Scrollbar/Scrollbar.config.ts`

### `plasma-b2c`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_b2c/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_b2c`
-   **Config files:** 92
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 80
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 11
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 77

Skipped (manual / non-css configs)

-   `packages/plasma-b2c/src/components/Scrollbar/Scrollbar.config.ts`

**Unresolved variables (not written):**

-   `packages/plasma-b2c/src/components/Skeleton/LineSkeleton.config.ts`: --plasma-typo-body1-line-height, --plasma-typo-body1-font-size, --plasma-typo-body2-line-height, --plasma-typo-body2-font-size, --plasma-typo-body3-line-height, --plasma-typo-body3-font-size, --plasma-typo-button1-line-height, --plasma-typo-button1-font-size, --plasma-typo-button2-line-height, --plasma-typo-button2-font-size, --plasma-typo-caption-line-height, --plasma-typo-caption-font-size, --plasma-typo-display1-line-height, --plasma-typo-display1-font-size, --plasma-typo-display2-line-height, --plasma-typo-display2-font-size, --plasma-typo-display3-line-height, --plasma-typo-display3-font-size, --plasma-typo-footnote1-line-height, --plasma-typo-footnote1-font-size, --plasma-typo-footnote2-line-height, --plasma-typo-footnote2-font-size, --plasma-typo-headline1-line-height, --plasma-typo-headline1-font-size, --plasma-typo-headline2-line-height, --plasma-typo-headline2-font-size, --plasma-typo-headline3-line-height, --plasma-typo-headline3-font-size, --plasma-typo-headline4-line-height, --plasma-typo-headline4-font-size, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph2-line-height, --plasma-typo-paragraph2-font-size, --plasma-typo-underline-line-height, --plasma-typo-underline-font-size
-   `packages/plasma-b2c/src/components/Typography/Old/Body.config.ts`: --plasma-typo-body1-font-family, --plasma-typo-body1-font-size, --plasma-typo-body1-font-style, --plasma-typo-body1-font-weight, --plasma-typo-body1-letter-spacing, --plasma-typo-body1-line-height, --plasma-typo-body2-font-family, --plasma-typo-body2-font-size, --plasma-typo-body2-font-style, --plasma-typo-body2-font-weight, --plasma-typo-body2-letter-spacing, --plasma-typo-body2-line-height, --plasma-typo-body3-font-family, --plasma-typo-body3-font-size, --plasma-typo-body3-font-style, --plasma-typo-body3-font-weight, --plasma-typo-body3-letter-spacing, --plasma-typo-body3-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Button.config.ts`: --plasma-typo-button1-font-family, --plasma-typo-button1-font-size, --plasma-typo-button1-font-style, --plasma-typo-button1-font-weight, --plasma-typo-button1-letter-spacing, --plasma-typo-button1-line-height, --plasma-typo-button2-font-family, --plasma-typo-button2-font-size, --plasma-typo-button2-font-style, --plasma-typo-button2-font-weight, --plasma-typo-button2-letter-spacing, --plasma-typo-button2-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Caption.config.ts`: --plasma-typo-caption-font-family, --plasma-typo-caption-font-size, --plasma-typo-caption-font-style, --plasma-typo-caption-font-weight, --plasma-typo-caption-letter-spacing, --plasma-typo-caption-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Display.config.ts`: --plasma-typo-display1-font-family, --plasma-typo-display1-font-size, --plasma-typo-display1-font-style, --plasma-typo-display1-font-weight, --plasma-typo-display1-letter-spacing, --plasma-typo-display1-line-height, --plasma-typo-display2-font-family, --plasma-typo-display2-font-size, --plasma-typo-display2-font-style, --plasma-typo-display2-font-weight, --plasma-typo-display2-letter-spacing, --plasma-typo-display2-line-height, --plasma-typo-display3-font-family, --plasma-typo-display3-font-size, --plasma-typo-display3-font-style, --plasma-typo-display3-font-weight, --plasma-typo-display3-letter-spacing, --plasma-typo-display3-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Footnote.config.ts`: --plasma-typo-footnote1-font-family, --plasma-typo-footnote1-font-size, --plasma-typo-footnote1-font-style, --plasma-typo-footnote1-font-weight, --plasma-typo-footnote1-letter-spacing, --plasma-typo-footnote1-line-height, --plasma-typo-footnote2-font-family, --plasma-typo-footnote2-font-size, --plasma-typo-footnote2-font-style, --plasma-typo-footnote2-font-weight, --plasma-typo-footnote2-letter-spacing, --plasma-typo-footnote2-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Headline.config.ts`: --plasma-typo-headline1-font-family, --plasma-typo-headline1-font-size, --plasma-typo-headline1-font-style, --plasma-typo-headline1-font-weight, --plasma-typo-headline1-letter-spacing, --plasma-typo-headline1-line-height, --plasma-typo-headline2-font-family, --plasma-typo-headline2-font-size, --plasma-typo-headline2-font-style, --plasma-typo-headline2-font-weight, --plasma-typo-headline2-letter-spacing, --plasma-typo-headline2-line-height, --plasma-typo-headline3-font-family, --plasma-typo-headline3-font-size, --plasma-typo-headline3-font-style, --plasma-typo-headline3-font-weight, --plasma-typo-headline3-letter-spacing, --plasma-typo-headline3-line-height, --plasma-typo-headline4-font-family, --plasma-typo-headline4-font-size, --plasma-typo-headline4-font-style, --plasma-typo-headline4-font-weight, --plasma-typo-headline4-letter-spacing, --plasma-typo-headline4-line-height, --plasma-typo-headline5-font-family, --plasma-typo-headline5-font-size, --plasma-typo-headline5-font-style, --plasma-typo-headline5-font-weight, --plasma-typo-headline5-letter-spacing, --plasma-typo-headline5-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Paragraph.config.ts`: --plasma-typo-paragraph1-font-family, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph1-font-style, --plasma-typo-paragraph1-font-weight, --plasma-typo-paragraph1-letter-spacing, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph2-font-family, --plasma-typo-paragraph2-font-size, --plasma-typo-paragraph2-font-style, --plasma-typo-paragraph2-font-weight, --plasma-typo-paragraph2-letter-spacing, --plasma-typo-paragraph2-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/ParagraphText.config.ts`: --plasma-typo-paragraph1-font-family, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph1-font-style, --plasma-typo-paragraph1-font-weight, --plasma-typo-paragraph1-letter-spacing, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph2-font-family, --plasma-typo-paragraph2-font-size, --plasma-typo-paragraph2-font-style, --plasma-typo-paragraph2-font-weight, --plasma-typo-paragraph2-letter-spacing, --plasma-typo-paragraph2-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Subtitle.config.ts`: --plasma-typo-subtitle-font-family, --plasma-typo-subtitle-font-size, --plasma-typo-subtitle-font-style, --plasma-typo-subtitle-font-weight, --plasma-typo-subtitle-letter-spacing, --plasma-typo-subtitle-line-height
-   `packages/plasma-b2c/src/components/Typography/Old/Underline.config.ts`: --plasma-typo-underline-font-family, --plasma-typo-underline-font-size, --plasma-typo-underline-font-style, --plasma-typo-underline-font-weight, --plasma-typo-underline-letter-spacing, --plasma-typo-underline-line-height

### `plasma-web`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_web/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_web`
-   **Config files:** 93
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 81
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 11
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 79

Skipped (manual / non-css configs)

-   `packages/plasma-web/src/components/Scrollbar/Scrollbar.config.ts`

**Unresolved variables (not written):**

-   `packages/plasma-web/src/components/Skeleton/LineSkeleton.config.ts`: --plasma-typo-body1-line-height, --plasma-typo-body1-font-size, --plasma-typo-body2-line-height, --plasma-typo-body2-font-size, --plasma-typo-body3-line-height, --plasma-typo-body3-font-size, --plasma-typo-button1-line-height, --plasma-typo-button1-font-size, --plasma-typo-button2-line-height, --plasma-typo-button2-font-size, --plasma-typo-caption-line-height, --plasma-typo-caption-font-size, --plasma-typo-display1-line-height, --plasma-typo-display1-font-size, --plasma-typo-display2-line-height, --plasma-typo-display2-font-size, --plasma-typo-display3-line-height, --plasma-typo-display3-font-size, --plasma-typo-footnote1-line-height, --plasma-typo-footnote1-font-size, --plasma-typo-footnote2-line-height, --plasma-typo-footnote2-font-size, --plasma-typo-headline1-line-height, --plasma-typo-headline1-font-size, --plasma-typo-headline2-line-height, --plasma-typo-headline2-font-size, --plasma-typo-headline3-line-height, --plasma-typo-headline3-font-size, --plasma-typo-headline4-line-height, --plasma-typo-headline4-font-size, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph2-line-height, --plasma-typo-paragraph2-font-size, --plasma-typo-underline-line-height, --plasma-typo-underline-font-size
-   `packages/plasma-web/src/components/Typography/Old/Body.config.ts`: --plasma-typo-body1-font-family, --plasma-typo-body1-font-size, --plasma-typo-body1-font-style, --plasma-typo-body1-font-weight, --plasma-typo-body1-letter-spacing, --plasma-typo-body1-line-height, --plasma-typo-body2-font-family, --plasma-typo-body2-font-size, --plasma-typo-body2-font-style, --plasma-typo-body2-font-weight, --plasma-typo-body2-letter-spacing, --plasma-typo-body2-line-height, --plasma-typo-body3-font-family, --plasma-typo-body3-font-size, --plasma-typo-body3-font-style, --plasma-typo-body3-font-weight, --plasma-typo-body3-letter-spacing, --plasma-typo-body3-line-height
-   `packages/plasma-web/src/components/Typography/Old/Button.config.ts`: --plasma-typo-button1-font-family, --plasma-typo-button1-font-size, --plasma-typo-button1-font-style, --plasma-typo-button1-font-weight, --plasma-typo-button1-letter-spacing, --plasma-typo-button1-line-height, --plasma-typo-button2-font-family, --plasma-typo-button2-font-size, --plasma-typo-button2-font-style, --plasma-typo-button2-font-weight, --plasma-typo-button2-letter-spacing, --plasma-typo-button2-line-height
-   `packages/plasma-web/src/components/Typography/Old/Caption.config.ts`: --plasma-typo-caption-font-family, --plasma-typo-caption-font-size, --plasma-typo-caption-font-style, --plasma-typo-caption-font-weight, --plasma-typo-caption-letter-spacing, --plasma-typo-caption-line-height
-   `packages/plasma-web/src/components/Typography/Old/Display.config.ts`: --plasma-typo-display1-font-family, --plasma-typo-display1-font-size, --plasma-typo-display1-font-style, --plasma-typo-display1-font-weight, --plasma-typo-display1-letter-spacing, --plasma-typo-display1-line-height, --plasma-typo-display2-font-family, --plasma-typo-display2-font-size, --plasma-typo-display2-font-style, --plasma-typo-display2-font-weight, --plasma-typo-display2-letter-spacing, --plasma-typo-display2-line-height, --plasma-typo-display3-font-family, --plasma-typo-display3-font-size, --plasma-typo-display3-font-style, --plasma-typo-display3-font-weight, --plasma-typo-display3-letter-spacing, --plasma-typo-display3-line-height
-   `packages/plasma-web/src/components/Typography/Old/Footnote.config.ts`: --plasma-typo-footnote1-font-family, --plasma-typo-footnote1-font-size, --plasma-typo-footnote1-font-style, --plasma-typo-footnote1-font-weight, --plasma-typo-footnote1-letter-spacing, --plasma-typo-footnote1-line-height, --plasma-typo-footnote2-font-family, --plasma-typo-footnote2-font-size, --plasma-typo-footnote2-font-style, --plasma-typo-footnote2-font-weight, --plasma-typo-footnote2-letter-spacing, --plasma-typo-footnote2-line-height
-   `packages/plasma-web/src/components/Typography/Old/Headline.config.ts`: --plasma-typo-headline1-font-family, --plasma-typo-headline1-font-size, --plasma-typo-headline1-font-style, --plasma-typo-headline1-font-weight, --plasma-typo-headline1-letter-spacing, --plasma-typo-headline1-line-height, --plasma-typo-headline2-font-family, --plasma-typo-headline2-font-size, --plasma-typo-headline2-font-style, --plasma-typo-headline2-font-weight, --plasma-typo-headline2-letter-spacing, --plasma-typo-headline2-line-height, --plasma-typo-headline3-font-family, --plasma-typo-headline3-font-size, --plasma-typo-headline3-font-style, --plasma-typo-headline3-font-weight, --plasma-typo-headline3-letter-spacing, --plasma-typo-headline3-line-height, --plasma-typo-headline4-font-family, --plasma-typo-headline4-font-size, --plasma-typo-headline4-font-style, --plasma-typo-headline4-font-weight, --plasma-typo-headline4-letter-spacing, --plasma-typo-headline4-line-height, --plasma-typo-headline5-font-family, --plasma-typo-headline5-font-size, --plasma-typo-headline5-font-style, --plasma-typo-headline5-font-weight, --plasma-typo-headline5-letter-spacing, --plasma-typo-headline5-line-height
-   `packages/plasma-web/src/components/Typography/Old/Paragraph.config.ts`: --plasma-typo-paragraph1-font-family, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph1-font-style, --plasma-typo-paragraph1-font-weight, --plasma-typo-paragraph1-letter-spacing, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph2-font-family, --plasma-typo-paragraph2-font-size, --plasma-typo-paragraph2-font-style, --plasma-typo-paragraph2-font-weight, --plasma-typo-paragraph2-letter-spacing, --plasma-typo-paragraph2-line-height
-   `packages/plasma-web/src/components/Typography/Old/ParagraphText.config.ts`: --plasma-typo-paragraph1-font-family, --plasma-typo-paragraph1-font-size, --plasma-typo-paragraph1-font-style, --plasma-typo-paragraph1-font-weight, --plasma-typo-paragraph1-letter-spacing, --plasma-typo-paragraph1-line-height, --plasma-typo-paragraph2-font-family, --plasma-typo-paragraph2-font-size, --plasma-typo-paragraph2-font-style, --plasma-typo-paragraph2-font-weight, --plasma-typo-paragraph2-letter-spacing, --plasma-typo-paragraph2-line-height
-   `packages/plasma-web/src/components/Typography/Old/Subtitle.config.ts`: --plasma-typo-subtitle-font-family, --plasma-typo-subtitle-font-size, --plasma-typo-subtitle-font-style, --plasma-typo-subtitle-font-weight, --plasma-typo-subtitle-letter-spacing, --plasma-typo-subtitle-line-height
-   `packages/plasma-web/src/components/Typography/Old/Underline.config.ts`: --plasma-typo-underline-font-family, --plasma-typo-underline-font-size, --plasma-typo-underline-font-style, --plasma-typo-underline-font-weight, --plasma-typo-underline-letter-spacing, --plasma-typo-underline-line-height

### `plasma-new-hope`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_b2c/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_b2c`
-   **Config root:** `packages/plasma-new-hope/src/examples/components`
-   **Config files:** 103
-   **Written this run:** 1
-   **No `var(--*)` (unchanged / already migrated):** 97
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 4
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 95

Skipped (manual / non-css configs)

-   `packages/plasma-new-hope/src/examples/components/Scrollbar/Scrollbar.config.ts`

**Unresolved variables (not written):**

-   `packages/plasma-new-hope/src/examples/components/Dropzone/Dropzone.config.ts`: --outline-secondary
-   `packages/plasma-new-hope/src/examples/components/Radiobox/Radiobox.outline.config.ts`: --text-default
-   `packages/plasma-new-hope/src/examples/components/Select/Select.config.ts`: --plasma-input-label-color, --plasma-input-placeholder-color
-   `packages/plasma-new-hope/src/examples/components/Switch/Switch.outline.config.ts`: --outline-secondary

### `sdds-bizcom`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_bizcom/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_bizcom`
-   **Config files:** 78
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 78
-   **Skipped (has CSS variables but no styled-components `css` template):** 0
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 75

### `sdds-crm`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_serv/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_serv`
-   **Config files:** 77
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 76
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 73

Skipped (manual / non-css configs)

-   `packages/sdds-crm/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-cs`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_cs/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_cs`
-   **Config files:** 61
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 43
-   **Skipped (has CSS variables but no styled-components `css` template):** 0
-   **Failed (unresolved vars):** 18
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 40

**Unresolved variables (not written):**

-   `packages/sdds-cs/src/components/Autocomplete/Autocomplete.config.ts`: --plasma-colors-transparent, --plasma-input-label-color, --plasma-input-placeholder-color, --plasma-colors-secondary
-   `packages/sdds-cs/src/components/Calendar/Calendar.config.ts`: --surface-primary
-   `packages/sdds-cs/src/components/Calendar/CalendarDouble.config.ts`: --surface-primary
-   `packages/sdds-cs/src/components/Combobox/Combobox.config.ts`: --surface-transparent-secondary, --surface-transparent-secondary-hover, --surface-transparent-secondary-active, --plasma-input-label-color, --plasma-input-placeholder-color, --plasma-colors-secondary
-   `packages/sdds-cs/src/components/DatePicker/DatePicker.config.ts`: --surface-transparent-secondary
-   `packages/sdds-cs/src/components/Drawer/Drawer.config.ts`: --surface-transparent-primary, --overlay-blur, --overlay-soft
-   `packages/sdds-cs/src/components/Dropdown/Dropdown.config.ts`: --surface-transparent-tertiary
-   `packages/sdds-cs/src/components/Modal/Modal.config.ts`: --overlay-soft
-   `packages/sdds-cs/src/components/Select/Select.config.ts`: --plasma-input-label-color, --plasma-input-placeholder-color, --plasma-colors-secondary
-   `packages/sdds-cs/src/components/Skeleton/LineSkeleton.config.ts`: --surface-transparent-secondary, --surface-transparent-tertiary
-   `packages/sdds-cs/src/components/Spinner/Spinner.config.ts`: --text-paragraph
-   `packages/sdds-cs/src/components/Table/Table.config.ts`: --surface-transparent-tertiary
-   `packages/sdds-cs/src/components/Tabs/horizontal/HorizontalTabItem.config.ts`: --surface-transparent-card
-   `packages/sdds-cs/src/components/Tabs/horizontal/HorizontalTabs.config.ts`: --surface-transparent-primary
-   `packages/sdds-cs/src/components/TextArea/TextArea.clear.config.ts`: --outline-negative-focus, --surface-transparent-primary
-   `packages/sdds-cs/src/components/TextArea/TextArea.config.ts`: --outline-negative-focus, --surface-transparent-primary
-   `packages/sdds-cs/src/components/TextField/TextField.config.ts`: --surface-transparent-secondary, --surface-transparent-secondary-hover, --surface-transparent-secondary-active
-   `packages/sdds-cs/src/components/TimePicker/TimePicker.config.ts`: --surface-transparent-primary

### `sdds-dfa`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_dfa/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_dfa`
-   **Config files:** 76
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 76
-   **Skipped (has CSS variables but no styled-components `css` template):** 0
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 73

### `sdds-finai`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_finai/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_finai`
-   **Config files:** 74
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 73
-   **Skipped (has CSS variables but no styled-components `css` template):** 0
-   **Failed (unresolved vars):** 1
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 70

**Unresolved variables (not written):**

-   `packages/sdds-finai/src/components/Progress/Progress.config.ts`: --surface-accent-gradient

### `sdds-insol`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_insol/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_insol`
-   **Config files:** 76
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 74
-   **Skipped (has CSS variables but no styled-components `css` template):** 0
-   **Failed (unresolved vars):** 2
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 70

**Unresolved variables (not written):**

-   `packages/sdds-insol/src/components/Autocomplete/Autocomplete.config.ts`: --plasma-colors-transparent
-   `packages/sdds-insol/src/components/Combobox/Combobox.config.ts`: --plasma-input-label-color, --plasma-input-placeholder-color, --plasma-colors-secondary

### `sdds-netology`

-   **Token module:** `packages/themes/plasma-themes/src/tokens/plasma_b2c/index.ts`
-   **Import:** `@salutejs/plasma-themes/tokens/plasma_b2c`
-   **Config files:** 79
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 78
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 75

Skipped (manual / non-css configs)

-   `packages/sdds-netology/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-os`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_os/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_os`
-   **Config files:** 55
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 54
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 52

Skipped (manual / non-css configs)

-   `packages/sdds-os/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-platform-ai`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_platform_ai/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_platform_ai`
-   **Config files:** 64
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 63
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 62

Skipped (manual / non-css configs)

-   `packages/sdds-platform-ai/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-sbcom`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_sbcom/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_sbcom`
-   **Config files:** 78
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 77
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 73

Skipped (manual / non-css configs)

-   `packages/sdds-sbcom/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-scan`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_scan/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_scan`
-   **Config files:** 72
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 71
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 68

Skipped (manual / non-css configs)

-   `packages/sdds-scan/src/components/Scrollbar/Scrollbar.config.ts`

### `sdds-serv`

-   **Token module:** `packages/themes/sdds-themes/src/tokens/sdds_serv/index.ts`
-   **Import:** `@salutejs/sdds-themes/tokens/sdds_serv`
-   **Config files:** 79
-   **Written this run:** 0
-   **No `var(--*)` (unchanged / already migrated):** 78
-   **Skipped (has CSS variables but no styled-components `css` template):** 1
-   **Failed (unresolved vars):** 0
-   **Failed (triple-dash, if any before fix pass):** 0
-   **Errors:** 0
-   **Configs importing theme:** 75

Skipped (manual / non-css configs)

-   `packages/sdds-serv/src/components/Scrollbar/Scrollbar.config.ts`

## Follow-up

-   For **Scrollbar**-style configs (plain object + string colors, no styled-components css template), add theme imports manually (see `packages/plasma-giga/.../Scrollbar.config.ts`).
-   Run **ESLint with `--fix`** on touched packages if `import/order` or Prettier complain.
-   Re-run a single package: `node scripts/migrate-plasma-giga-config-tokens.mjs <profile>` (profiles: `plasma-giga`, `sdds-sbcom`, …).

## Unresolved variables (why migration can fail)

-   **Legacy plasma-web “Old” typography** (`--plasma-typo-body1-*`, `display1`, `headline1`, …): these names are **not** present as string exports in `plasma_web/index.ts` (the theme uses the newer `--plasma-typo-body-m-*` / `dspl-*` scale). Migrate those configs manually or point them at the correct token exports.
-   **Theme-specific gaps**: some packages reference CSS variables (e.g. `--surface-primary`, `--plasma-input-*`, `--overlay-soft`) that **do not appear** in the matching `tokens/*/index.ts` file. Add tokens upstream, or replace with the closest exported token after design review.
-   `**--plasma-typo-*-bold-bold-*`\*\*: duplicated `bold` segment in the variable name; the migrator normalizes `-bold-bold-` → `-bold-` when resolving typography.
