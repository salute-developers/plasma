import {
    bodyXS,
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
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
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.contentScrollTrackColor}: ${surfaceTransparentPrimary};
                ${tokens.contentScrollThumbColor}: ${surfaceTransparentTertiary};

                ${tokens.footerCaptionColor}: ${textSecondary};
            `,
            secondary: css`
                ${tokens.backgroundColor}: ${surfaceSolidPrimary};
                ${tokens.contentScrollTrackColor}: ${surfaceTransparentPrimary};
                ${tokens.contentScrollThumbColor}: ${surfaceTransparentTertiary};

                ${tokens.footerCaptionColor}: ${textSecondary};
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

                ${tokens.footerCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.footerCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.footerCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.footerCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.footerCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.footerCaptionLineHeight}: ${bodyXS.lineHeight};
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

                ${tokens.footerCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.footerCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.footerCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.footerCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.footerCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.footerCaptionLineHeight}: ${bodyXS.lineHeight};
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

                ${tokens.footerCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.footerCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.footerCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.footerCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.footerCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.footerCaptionLineHeight}: ${bodyXS.lineHeight};
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

                ${tokens.footerCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.footerCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.footerCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.footerCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.footerCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.footerCaptionLineHeight}: ${bodyXS.lineHeight};
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

                ${tokens.footerCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.footerCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.footerCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.footerCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.footerCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.footerCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
