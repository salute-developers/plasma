import { css } from '@linaria/core';

import { tokens } from '../../../components/Avatar/Avatar.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'xxl',
        shape: 'circled',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-accent-gradient);
                // TODO: #1005 заменить на токен
                ${tokens.backgroundColor}: linear-gradient(94deg, rgba(62, 121, 240, 0.2) 6.49%, rgba(39, 198, 229, 0.2) 93.51%);
                ${tokens.statusOnlineColor}: var(--surface-positive);
                ${tokens.statusOfflineColor}: var(--surface-solid-tertiary);
                ${tokens.scaleHover}: 1.02;
            `,
        },
        size: {
            xxl: css`
                ${tokens.avatarSize}: 6.25rem;
                ${tokens.fontSize}: 2rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 2rem;
                ${tokens.statusIconSize}: 0.75rem;
                ${tokens.borderRadius}: 1.125rem;

                ${tokens.badgeBorderRadius}: 0.5rem;
                ${tokens.badgeHeight}: 1.75rem;
                ${tokens.badgePadding}: 0 0.6875rem;
                ${tokens.badgePaddingIconOnly}: 0 0.375rem;

                ${tokens.badgeFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.badgeFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.badgeFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.badgeFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.badgeLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.badgeLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.25rem;

                ${tokens.badgeRightContentMarginLeft}: 0.25rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1.75rem;
                ${tokens.counterPadding}: 0 0.625rem;
                ${tokens.counterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            l: css`
                ${tokens.avatarSize}: 3rem;
                ${tokens.fontSize}: 1.25rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 1.25rem;
                ${tokens.statusIconSize}: 0.5rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.extraPlacementFactor}: 2;

                ${tokens.badgeBorderRadius}: 0.375rem;
                ${tokens.badgeHeight}: 1.25rem;
                ${tokens.badgePadding}: 0 0.4375rem;
                ${tokens.badgePaddingIconOnly}: 0 0.25rem;

                ${tokens.badgeFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.badgeFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.badgeFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.badgeFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.badgeLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.badgeLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;
                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            m: css`
                ${tokens.avatarSize}: 2.25rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.875rem;
                ${tokens.statusIconSize}: 0.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.extraPlacementFactor}: 2;

                ${tokens.badgeBorderRadius}: 0.25rem;
                ${tokens.badgeHeight}: 1rem;
                ${tokens.badgePadding}: 0 0.25rem;
                ${tokens.badgePaddingIconOnly}: 0 0.188rem;

                ${tokens.badgeFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.badgeFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.badgeFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.badgeFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.badgeLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.badgeLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

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
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.extraPlacementFactor}: 1;

                ${tokens.counterBorderRadius}: 1rem;
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
                ${tokens.borderRadius}: 50%;
            `,
        },
        focused: {
            true: css`
                ${tokens.outlineSize}: 0.1rem;
                ${tokens.outlineOffset}: -0.2rem;
                ${tokens.outlineColor}: var(--surface-accent);
            `,
        },
        shape: {
            circled: css`
                ${tokens.borderRadius}: 50%;
                ${tokens.statusLeft}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
                ${tokens.statusTop}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
            `,
            rounded: css`
                ${tokens.statusLeft}: calc(var(${tokens.avatarSize}) - var(${tokens.statusIconSize}));
                ${tokens.statusTop}: calc(var(${tokens.avatarSize}) - var(${tokens.statusIconSize}));
            `,
        },
        badgeView: {
            default: css`
                ${tokens.badgeColor}: var(--inverse-text-primary);
                ${tokens.badgeBackground}: var(--surface-solid-default);

                ${tokens.badgeColorTransparent}: var(--text-primary);
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-secondary);

                ${tokens.badgeColorClear}: var(--text-primary);
                ${tokens.badgeBackgroundClear}: var(--surface-clear);
            `,
            accent: css`
                ${tokens.badgeColor}: var(--on-dark-text-primary);
                ${tokens.badgeBackground}: var(--surface-accent);

                ${tokens.badgeColorTransparent}: var(--text-accent);
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-accent);

                ${tokens.badgeColorClear}: var(--text-accent);
                ${tokens.badgeBackgroundClear}: var(--surface-clear)
            `,
            positive: css`
                ${tokens.badgeColor}: var(--on-dark-text-primary);
                ${tokens.badgeBackground}: var(--surface-positive);

                ${tokens.badgeColorTransparent}: var(--text-positive);
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-positive);

                ${tokens.badgeColorClear}: var(--text-positive);
                ${tokens.badgeBackgroundClear}: var(--surface-clear)
            `,
            warning: css`
                ${tokens.badgeColor}: var(--on-dark-text-primary);
                ${tokens.badgeBackground}: var(--surface-warning);

                ${tokens.badgeColorTransparent}: var(--text-warning);
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-warning);

                ${tokens.badgeColorClear}: var(--text-warning);
                ${tokens.badgeBackgroundClear}: var(--surface-clear)
            `,
            negative: css`
                ${tokens.badgeColor}: var(--on-dark-text-primary);
                ${tokens.badgeBackground}: var(--surface-negative);

                ${tokens.badgeColorTransparent}: var(--text-negative);
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-negative);

                ${tokens.badgeColorClear}: var(--text-negative);
                ${tokens.badgeBackgroundClear}: var(--surface-clear)
            `,
            dark: css`
                ${tokens.badgeColor}: var(--on-dark-text-primary);
                ${tokens.badgeBackground}: var(--on-light-surface-solid-default);

                ${tokens.badgeColorTransparent}: var(--on-dark-text-primary);
                ${tokens.badgeBackgroundTransparent}: var(--on-light-surface-transparent-deep);

                ${tokens.badgeColorClear}: var(--on-light-text-pri
                ${tokens.badgeBackgroundClear}: var(--surface-clear)mary);
            `,
            light: css`
                ${tokens.badgeColor}: var(--on-light-text-primary);
                ${tokens.badgeBackground}: var(--on-dark-surface-solid-default);

                ${tokens.badgeColorTransparent}: var(--on-dark-text-primary);
                ${tokens.badgeBackgroundTransparent}: var(--on-dark-surface-transparent-card);

                ${tokens.badgeColorClear}: var(--on-dark-text-prima
                ${tokens.badgeBackgroundClear}: var(--surface-clear)ry);
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
            warning: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--surface-warning);
            `,
            negative: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--surface-negative);
            `,
            dark: css`
                ${tokens.counterColor}: var(--on-dark-text-primary);
                ${tokens.counterBackground}: var(--on-light-surface-solid-default);
            `,
            light: css`
                ${tokens.counterColor}: var(--on-light-text-primary);
                ${tokens.counterBackground}: var(--on-dark-surface-solid-default);
            `,
        },
    },
};
