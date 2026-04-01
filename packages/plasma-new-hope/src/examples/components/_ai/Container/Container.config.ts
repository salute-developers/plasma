import { css } from '@linaria/core';

import { tokens } from '../../../../components/_ai/Container/Container.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.contentScrollTrackColor}: var(--surface-transparent-primary);
                ${tokens.contentScrollThumbColor}: var(--surface-transparent-tertiary);

                ${tokens.footerCaptionColor}: var(--text-secondary);
            `,
            secondary: css`
                ${tokens.backgroundColor}: var(--surface-solid-primary);
                ${tokens.contentScrollTrackColor}: var(--surface-transparent-primary);
                ${tokens.contentScrollThumbColor}: var(--surface-transparent-tertiary);

                ${tokens.footerCaptionColor}: var(--text-secondary);
            `,
        },
        size: {
            xl: css`
                ${tokens.contentPadding}: 2rem;
                ${tokens.contentRightPadding}: 1.75rem;
                ${tokens.contentGap}: 1.5rem;

                ${tokens.contentScrollWidth}: 0.25rem;
                ${tokens.contentScrollHeightOffset}: 0.5rem;
                ${tokens.contentScrollRightOffset}: 0.25rem;

                ${tokens.footerPadding}: 0 2rem 2rem 2rem;
                ${tokens.footerCaptionMarginTop}: 0.5rem;
                ${tokens.footerBlur}: 1rem;

                ${tokens.footerCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.footerCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.footerCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.footerCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.footerCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.footerCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${tokens.contentPadding}: 1.75rem;
                ${tokens.contentRightPadding}: 1.5rem;
                ${tokens.contentGap}: 1.5rem;

                ${tokens.contentScrollWidth}: 0.25rem;
                ${tokens.contentScrollHeightOffset}: 0.5rem;
                ${tokens.contentScrollRightOffset}: 0.25rem;

                ${tokens.footerPadding}: 0 2rem 2rem 2rem;
                ${tokens.footerCaptionMarginTop}: 0.5rem;
                ${tokens.footerBlur}: 1rem;

                ${tokens.footerCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.footerCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.footerCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.footerCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.footerCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.footerCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${tokens.contentPadding}: 1.5rem;
                ${tokens.contentRightPadding}: 1.25rem;
                ${tokens.contentGap}: 1.25rem;

                ${tokens.contentScrollWidth}: 0.25rem;
                ${tokens.contentScrollHeightOffset}: 0.5rem;
                ${tokens.contentScrollRightOffset}: 0.25rem;

                ${tokens.footerPadding}: 0 2rem 1.5rem 2rem;
                ${tokens.footerCaptionMarginTop}: 0.375rem;
                ${tokens.footerBlur}: 0.625rem;

                ${tokens.footerCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.footerCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.footerCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.footerCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.footerCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.footerCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tokens.contentPadding}: 1.25rem;
                ${tokens.contentRightPadding}: 1rem;
                ${tokens.contentGap}: 1rem;

                ${tokens.contentScrollWidth}: 0.25rem;
                ${tokens.contentScrollHeightOffset}: 0.5rem;
                ${tokens.contentScrollRightOffset}: 0.25rem;

                ${tokens.footerPadding}: 0 1.25rem 1.25rem 1.25rem;
                ${tokens.footerCaptionMarginTop}: 0.375rem;
                ${tokens.footerBlur}: 0.625rem;

                ${tokens.footerCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.footerCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.footerCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.footerCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.footerCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.footerCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xs: css`
                ${tokens.contentPadding}: 1rem;
                ${tokens.contentRightPadding}: 0.75rem;
                ${tokens.contentGap}: 1rem;

                ${tokens.contentScrollWidth}: 0.25rem;
                ${tokens.contentScrollHeightOffset}: 0.5rem;
                ${tokens.contentScrollRightOffset}: 0.25rem;

                ${tokens.footerPadding}: 0 1rem 1rem 1rem;
                ${tokens.footerCaptionMarginTop}: 0.25rem;
                ${tokens.footerBlur}: 0.625rem;

                ${tokens.footerCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.footerCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.footerCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.footerCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.footerCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.footerCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
