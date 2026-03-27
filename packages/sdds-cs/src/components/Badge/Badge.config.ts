import {
    bodyS,
    inverseTextPrimary,
    onDarkTextPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: ${inverseTextPrimary};
                ${badgeTokens.background}: ${surfaceSolidDefault};

                ${badgeTokens.colorClear}: ${textPrimary};
            `,
            accent: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceAccent};

                ${badgeTokens.colorTransparent}: ${textAccent};
                ${badgeTokens.colorClear}: ${textAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfacePositive};

                ${badgeTokens.colorTransparent}: ${textPositive};
                ${badgeTokens.colorClear}: ${textPositive};
            `,
            negative: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceNegative};

                ${badgeTokens.colorTransparent}: ${textNegative};
                ${badgeTokens.colorClear}: ${textNegative};
            `,
        },
        size: {
            s: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.5rem;
                ${badgeTokens.padding}: 0 0.5rem;
                ${badgeTokens.paddingIconOnly}: 0 0.375rem;

                ${badgeTokens.fontFamily}: ${bodyS.fontFamily};
                ${badgeTokens.fontSize}: ${bodyS.fontSize};
                ${badgeTokens.fontStyle}: ${bodyS.fontStyle};
                ${badgeTokens.fontWeight}: ${bodyS.fontWeight};
                ${badgeTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${badgeTokens.lineHeight}: ${bodyS.lineHeight};

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.125rem;

                ${badgeTokens.rightContentMarginLeft}: 0.125rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
        },
        pilled: {
            true: css`
                ${badgeTokens.pilledBorderRadius}: 1.25rem;
            `,
        },
        transparent: {
            true: css``,
        },
        clear: {
            true: css`
                ${badgeTokens.backgroundClear}: ${surfaceClear};
            `,
        },
    },
};
