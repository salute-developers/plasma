import { css } from '@linaria/core';

import { buttonTokens } from '../../../../components/Button';

export const config = {
    defaults: {
        size: 'm',
        focused: 'true',
        view: 'secondary',
    },
    variations: {
        view: {
            primary: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonTokens.buttonBackgroundColorHover}: #18a2ff;
                ${buttonTokens.buttonBackgroundColorActive}: #045891;
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonTokens.buttonBackgroundColorHover}: rgba(11, 126, 203, 0.12);
                ${buttonTokens.buttonBackgroundColorActive}: rgba(11, 126, 203, 0.19);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-accent);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonBackgroundColorHover}: rgb(11, 126, 203, 0.12);
                ${buttonTokens.buttonBackgroundColorActive}: rgb(11, 126, 203, 0.19);
            `,
            negative: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonTokens.buttonBackgroundColorHover}: #e65260;
                ${buttonTokens.buttonBackgroundColorActive}: #c60014;
            `,
            white: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--background-primary);
                ${buttonTokens.buttonBackgroundColorHover}: #ffffff;
                ${buttonTokens.buttonBackgroundColorActive}: #ebeaea;
            `,
        },
        size: {
            m: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: 0.25rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 1.75rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: 0.25rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 1.25rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: 0.25rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
