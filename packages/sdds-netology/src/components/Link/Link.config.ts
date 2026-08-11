import { css } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textAccentActive,
    textAccentHover,
    textM,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textParagraph,
    textParagraphActive,
    textParagraphHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textTertiaryActive,
    textTertiaryHover,
    textWarning,
    textWarningActive,
    textWarningHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textPrimary};
                --plasma-link-color-hover: ${textPrimaryHover};
                --plasma-link-color-active: ${textPrimaryActive};
                --plasma-link-color-visited: ${textPrimary};
                --plasma-link-color-visited-hover: ${textPrimaryHover};
                --plasma-link-color-visited-active: ${textPrimaryActive};
                --plasma-link-underline-border: 0;
            `,
            secondary: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textSecondary};
                --plasma-link-color-hover: ${textSecondaryHover};
                --plasma-link-color-active: ${textSecondaryActive};
                --plasma-link-color-visited: ${textSecondary};
                --plasma-link-color-visited-hover: ${textSecondaryHover};
                --plasma-link-color-visited-active: ${textSecondaryActive};
                --plasma-link-underline-border: 0;
            `,
            tertiary: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textTertiary};
                --plasma-link-color-hover: ${textTertiaryHover};
                --plasma-link-color-active: ${textTertiaryActive};
                --plasma-link-color-visited: ${textTertiary};
                --plasma-link-color-visited-hover: ${textTertiaryHover};
                --plasma-link-color-visited-active: ${textTertiaryActive};
                --plasma-link-underline-border: 0;
            `,
            paragraph: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textParagraph};
                --plasma-link-color-hover: ${textParagraphHover};
                --plasma-link-color-active: ${textParagraphActive};
                --plasma-link-color-visited: ${textParagraph};
                --plasma-link-color-visited-hover: ${textParagraphHover};
                --plasma-link-color-visited-active: ${textParagraphActive};
                --plasma-link-underline-border: 0;
            `,
            accent: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textAccent};
                --plasma-link-color-hover: ${textAccentHover};
                --plasma-link-color-active: ${textAccentActive};
                --plasma-link-color-visited: ${textAccent};
                --plasma-link-color-visited-hover: ${textAccentHover};
                --plasma-link-color-visited-active: ${textAccentActive};
                --plasma-link-underline-border: 0;
            `,
            positive: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textPositive};
                --plasma-link-color-hover: ${textPositiveHover};
                --plasma-link-color-active: ${textPositiveActive};
                --plasma-link-color-visited: ${textPositive};
                --plasma-link-color-visited-hover: ${textPositiveHover};
                --plasma-link-color-visited-active: ${textPositiveActive};
                --plasma-link-underline-border: 0;
            `,
            warning: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textWarning};
                --plasma-link-color-hover: ${textWarningHover};
                --plasma-link-color-active: ${textWarningActive};
                --plasma-link-color-visited: ${textWarning};
                --plasma-link-color-visited-hover: ${textWarningHover};
                --plasma-link-color-visited-active: ${textWarningActive};
                --plasma-link-underline-border: 0;
            `,
            negative: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: ${textNegative};
                --plasma-link-color-hover: ${textNegativeHover};
                --plasma-link-color-active: ${textNegativeActive};
                --plasma-link-color-visited: ${textNegative};
                --plasma-link-color-visited-hover: ${textNegativeHover};
                --plasma-link-color-visited-active: ${textNegativeActive};
                --plasma-link-underline-border: 0;
            `,
            clear: css`
                --plasma-link-font-family: ${textM.fontFamily};
                --plasma-link-color: inherit;
                --plasma-link-color-hover: inherit;
                --plasma-link-color-active: inherit;
                --plasma-link-color-visited: inherit;
                --plasma-link-color-visited-hover: inherit;
                --plasma-link-color-visited-active: inherit;
                --plasma-link-underline-border: 0.063rem;
            `,
        },
        disabled: {
            true: css`
                --plasma-link-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-link-focus-color: ${textPrimary};
            `,
        },
    },
};
