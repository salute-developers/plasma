import { css, progressBarCircularTokens } from '@salutejs/plasma-new-hope/styled-components';

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
            info: css`
                ${progressBarCircularTokens.backgroundStroke}: var(--surface-transparent-tertiary);
                ${progressBarCircularTokens.progressStroke}: var(--surface-info);
                ${progressBarCircularTokens.contentColor}: var(--text-primary);
            `,
        },
        size: {
            m: css`
                ${progressBarCircularTokens.size}: 48;
                ${progressBarCircularTokens.height}: 3rem;
                ${progressBarCircularTokens.width}: 3rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
    },
};
