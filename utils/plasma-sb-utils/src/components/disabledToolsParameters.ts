/**
 * Globally hides the `Measure`, `Outline` and `Backgrounds` (incl. its grid) toolbar tools.
 *
 * In Storybook 10 these are `type: 'tool'` toolbar items (not panels), so
 * `parameters: { measure: { disable: true } }` does NOT remove them — that key
 * only affects addon panels. Likewise `backgrounds: { grid: { disable: true } }`
 * is legacy SB6/7 syntax: in SB10 `GridConfig` has no `disable` field, the grid is
 * part of the single backgrounds tool and is toggled via the `backgrounds` global.
 *
 * Toolbar tools are hidden via `toolbar[<tool id>].hidden`, which Storybook merges
 * from `parameters.toolbar` (and/or `addons.setConfig`).
 *
 * Tool ids come from Storybook core constants:
 *   - measure:     `${ADDON_ID}/tool` where ADDON_ID = 'storybook/measure-addon'
 *   - outline:     ADDON_ID = 'storybook/outline'
 *   - backgrounds: ADDON_ID = 'storybook/background' (color switcher + grid live here)
 */
export const disabledToolsParameters = {
    toolbar: {
        'storybook/measure-addon/tool': { hidden: true },
        'storybook/outline': { hidden: true },
        'storybook/background': { hidden: true },
    },
};
