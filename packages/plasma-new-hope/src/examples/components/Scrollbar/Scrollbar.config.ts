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
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-solid-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-accent);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            accent: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-solid-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-accent);
                ${progressBarCircularTokens.contentColor}: var(--on-dark-text-primary);
            `,
            positive: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-solid-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-positive);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            warning: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-solid-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-warning);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
            negative: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-solid-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-negative);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
        },
        size: {
            l: css`
                ${progressBarCircularTokens.width}: 4rem;
                ${progressBarCircularTokens.height}: 4rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.5rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.5rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-l-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${progressBarCircularTokens.width}: 3rem;
                ${progressBarCircularTokens.height}: 3rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.375rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.375rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${progressBarCircularTokens.width}: 2rem;
                ${progressBarCircularTokens.height}: 2rem;
                ${progressBarCircularTokens.backgroundStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.progressStrokeWidth}: 0.25rem;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
    },
};
