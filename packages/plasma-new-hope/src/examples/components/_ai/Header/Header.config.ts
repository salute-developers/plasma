import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    h2Bold,
    h3Bold,
    h4Bold,
    h5Bold,
    surfaceSolidCard,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { headerTokens as tokens } from '../../../../components/_ai/Header';

export const config = {
    defaults: {
        view: 'default',
        size: 'xl',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.descriptionColor}: ${textPrimary};
            `,
            secondary: css`
                ${tokens.backgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.descriptionColor}: ${textPrimary};
            `,
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.descriptionColor}: ${textPrimary};
            `,
        },
        size: {
            xl: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 1.063rem 1.125rem;

                ${tokens.titleFontFamily}: ${bodyLBold.fontFamily};
                ${tokens.titleFontSize}: ${bodyLBold.fontSize};
                ${tokens.titleFontStyle}: ${bodyLBold.fontStyle};
                ${tokens.titleFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyLBold.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyLBold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyM.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
            l: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.813rem 0.75rem;

                ${tokens.titleFontFamily}: ${bodyLBold.fontFamily};
                ${tokens.titleFontSize}: ${bodyLBold.fontSize};
                ${tokens.titleFontStyle}: ${bodyLBold.fontStyle};
                ${tokens.titleFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyLBold.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyLBold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyM.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
            m: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.625rem 0.5rem;

                ${tokens.titleFontFamily}: ${bodyMBold.fontFamily};
                ${tokens.titleFontSize}: ${bodyMBold.fontSize};
                ${tokens.titleFontStyle}: ${bodyMBold.fontStyle};
                ${tokens.titleFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyMBold.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyMBold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 0.375rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.438rem 0.625rem;

                ${tokens.titleFontFamily}: ${bodySBold.fontFamily};
                ${tokens.titleFontSize}: ${bodySBold.fontSize};
                ${tokens.titleFontStyle}: ${bodySBold.fontStyle};
                ${tokens.titleFontWeight}: ${bodySBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodySBold.letterSpacing};
                ${tokens.titleLineHeight}: ${bodySBold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyXS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyXS.lineHeight};
            `,
            xs: css`
                ${tokens.padding}: 0.25rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.563rem 0.625rem;

                ${tokens.titleFontFamily}: ${bodyXSBold.fontFamily};
                ${tokens.titleFontSize}: ${bodyXSBold.fontSize};
                ${tokens.titleFontStyle}: ${bodyXSBold.fontStyle};
                ${tokens.titleFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyXSBold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyXS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyXS.lineHeight};
            `,
            h2: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.625rem 1.125rem;

                ${tokens.titleFontFamily}: ${h2Bold.fontFamily};
                ${tokens.titleFontSize}: ${h2Bold.fontSize};
                ${tokens.titleFontStyle}: ${h2Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h2Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h2Bold.letterSpacing};
                ${tokens.titleLineHeight}: ${h2Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyL.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyL.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyL.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyL.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyL.lineHeight};
            `,
            h3: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.563rem 0.75rem;

                ${tokens.titleFontFamily}: ${h3Bold.fontFamily};
                ${tokens.titleFontSize}: ${h3Bold.fontSize};
                ${tokens.titleFontStyle}: ${h3Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h3Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h3Bold.letterSpacing};
                ${tokens.titleLineHeight}: ${h3Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyL.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyL.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyL.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyL.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyL.lineHeight};
            `,
            h4: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.contentPadding}: 0.438rem 0.5rem;

                ${tokens.titleFontFamily}: ${h4Bold.fontFamily};
                ${tokens.titleFontSize}: ${h4Bold.fontSize};
                ${tokens.titleFontStyle}: ${h4Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h4Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h4Bold.letterSpacing};
                ${tokens.titleLineHeight}: ${h4Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyM.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
            h5: css`
                ${tokens.padding}: 0.375rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.25rem 0.625rem;

                ${tokens.titleFontFamily}: ${h5Bold.fontFamily};
                ${tokens.titleFontSize}: ${h5Bold.fontSize};
                ${tokens.titleFontStyle}: ${h5Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h5Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h5Bold.letterSpacing};
                ${tokens.titleLineHeight}: ${h5Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyM.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
        },
    },
};
