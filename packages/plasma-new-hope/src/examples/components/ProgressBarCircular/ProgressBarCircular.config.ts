import { css } from '@linaria/core';

import { progressBarCircularTokens } from '../../../components/ProgressBarCircular';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-solid-default);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            secondary: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-transparent-secondary);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            accent: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-accent);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            positive: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-positive);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            warning: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-warning);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            negative: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-negative);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
        },
        size: {
            xxl: css`
                ${progressBarCircularTokens.width}: 8rem;
                ${progressBarCircularTokens.height}: 8rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-h2-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-h2-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-h2-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-h2-line-height);
            `,
            xl: css`
                ${progressBarCircularTokens.width}: 5.5rem;
                ${progressBarCircularTokens.height}: 5.5rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-h5-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-h5-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-h5-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-h5-line-height);
            `,
            l: css`
                ${progressBarCircularTokens.width}: 3.5rem;
                ${progressBarCircularTokens.height}: 3.5rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-l-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-l-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${progressBarCircularTokens.width}: 3rem;
                ${progressBarCircularTokens.height}: 3rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${progressBarCircularTokens.width}: 2.25rem;
                ${progressBarCircularTokens.height}: 2.25rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-s-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${progressBarCircularTokens.width}: 1.5rem;
                ${progressBarCircularTokens.height}: 1.5rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xs-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${progressBarCircularTokens.width}: 1rem;
                ${progressBarCircularTokens.height}: 1rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.125rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xxs-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
