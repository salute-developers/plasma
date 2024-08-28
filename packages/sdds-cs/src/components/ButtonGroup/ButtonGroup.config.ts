import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-light-text-accent-minor);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: var(--text-accent);
                ${buttonGroupTokens.buttonValueColor}: var(--text-accent);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(--surface-transparent-accent);
                ${buttonGroupTokens.buttonColorHover}: var(--text-accent);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-transparent-accent);
                ${buttonGroupTokens.buttonColorActive}: var(--text-accent);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-clear);
            `,
        },
        size: {
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
