import { css, avatarTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        shape: 'circled',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-secondary);
                ${tokens.backgroundColor}: var(--surface-solid-tertiary);
                ${tokens.statusOnlineColor}: var(--surface-positive);
                ${tokens.statusOfflineColor}: var(--on-light-surface-solid-primary);
                ${tokens.scaleHover}: 1.02;
                ${tokens.fontFamily}: var(--plasma-typo-text-font-family);
            `,
        },
        size: {
            // TODO: #1044 токены типографики в Avatar
            xxl: css`
                ${tokens.avatarSize}: 5.5rem;
                ${tokens.fontSize}: 2rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 2.25rem;
                ${tokens.statusIconSize}: 0.75rem;

                ${tokens.counterBorderRadius}: 1.25rem;
                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;

                ${tokens.counterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${tokens.avatarSize}: 2.25rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.875rem;
                ${tokens.statusIconSize}: 0.5rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1rem;
                ${tokens.counterPadding}: 0 0.25rem;

                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            s: css`
                ${tokens.avatarSize}: 1.5rem;
                ${tokens.fontSize}: 0.5rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.5rem;
                ${tokens.statusIconSize}: 0.375rem;

                ${tokens.counterBorderRadius}: 0.75rem;
                ${tokens.counterHeight}: 0.75rem;
                ${tokens.counterPadding}: 0 0.125rem;

                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            fit: css`
                ${tokens.avatarSize}: 100%;
                ${tokens.fontSize}: 0;
                ${tokens.fontWeight}: 0;
                ${tokens.lineHeight}: 0;
                ${tokens.statusIconSize}: 0;
            `,
        },
        shape: {
            circled: css`
                ${tokens.borderRadius}: 50%;
                ${tokens.statusLeft}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
                ${tokens.statusTop}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
            `,
        },
        focused: {
            true: css`
                ${tokens.outlineSize}: 0.1rem;
                ${tokens.outlineOffset}: -0.2rem;
                ${tokens.outlineColor}: var(--surface-accent);
            `,
        },
        counterView: {
            default: css`
                ${tokens.counterColor}: var(--inverse-text-primary);
                ${tokens.counterBackground}: var(--surface-solid-default);
            `,
            accent: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--surface-accent);
            `,
            positive: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--surface-positive);
            `,
            negative: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--surface-negative);
            `,
        },
    },
};
