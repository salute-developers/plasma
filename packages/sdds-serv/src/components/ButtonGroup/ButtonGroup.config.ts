import { css, buttonGroupTokens, buttonGroupClasses } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${buttonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonGroupTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                ${buttonGroupTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-accent) 85%);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-accent) 80%);
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonGroupTokens.buttonColorHover}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                ${buttonGroupTokens.buttonColorActive}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonGroupTokens.buttonColorHover}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${buttonGroupTokens.buttonColorActive}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
            success: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-positive) 85%
                );
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-positive) 85%);
            `,
            warning: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-warning) 85%
                );
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-warning) 85%);
            `,
            critical: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-negative) 85%
                );
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-negative) 85%);
            `,
        },
        size: {
            l: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            lr: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonPadding}: 1.25rem;

                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            mr: css`
                &.${buttonGroupClasses.segmented} {
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.625rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.625rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            sr: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.625rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.625rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.5rem;

                ${buttonGroupTokens.buttonHeight}: 2rem;
                ${buttonGroupTokens.buttonPadding}: 0.75rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xsr: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.5rem;

                ${buttonGroupTokens.buttonHeight}: 2rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.375rem;

                ${buttonGroupTokens.buttonHeight}: 1.5rem;
                ${buttonGroupTokens.buttonPadding}: 0.625rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${buttonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${buttonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
