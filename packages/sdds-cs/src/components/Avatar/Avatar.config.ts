import {
    bodyS,
    bodyXXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    onLightSurfaceSolidPrimary,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, avatarTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        shape: 'circled',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textSecondary};
                ${tokens.backgroundColor}: ${surfaceSolidTertiary};
                ${tokens.statusOnlineColor}: ${surfacePositive};
                ${tokens.statusOfflineColor}: ${onLightSurfaceSolidPrimary};
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

                ${tokens.counterFontFamily}: ${bodyS.fontFamily};
                ${tokens.counterFontSize}: ${bodyS.fontSize};
                ${tokens.counterFontStyle}: ${bodyS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyS.lineHeight};
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

                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};
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

                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};
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
                ${tokens.outlineColor}: ${surfaceAccent};
            `,
        },
        shape: {
            circled: css`
                ${tokens.borderRadius}: 50%;
                ${tokens.statusLeft}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
                ${tokens.statusTop}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
            `,
        },
        counterView: {
            default: css`
                ${tokens.counterColor}: ${inverseTextPrimary};
                ${tokens.counterBackground}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfaceAccent};
            `,
            positive: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfacePositive};
            `,
            negative: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfaceNegative};
            `,
        },
    },
};
