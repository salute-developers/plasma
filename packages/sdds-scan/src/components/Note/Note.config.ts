import {
    surfaceTransparentInfo,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    textInfo,
    textM,
    textMBold,
    textNegative,
    textPositive,
    textPrimary,
    textS,
    textSBold,
    textSecondary,
    textSecondaryHover,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPrimary};
            `,
            positive: css`
                ${tokens.background}: ${surfaceTransparentPositive};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPositive};
            `,
            warning: css`
                ${tokens.background}: ${surfaceTransparentWarning};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textWarning};
            `,
            negative: css`
                ${tokens.background}: ${surfaceTransparentNegative};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textNegative};
            `,
            info: css`
                ${tokens.background}: ${surfaceTransparentInfo};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textInfo};
            `,
        },
        size: {
            m: css`
                ${tokens.padding}: 1.25rem 1.5rem;
                ${tokens.paddingScalable}: 1.25rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.gap}: 0.625rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.75rem;
                ${tokens.closeIconRight}: 0.75rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 1.5rem;
                ${tokens.fixedContentBeforePadding}: 0;

                ${tokens.titleFontFamily}: ${textM.fontFamily};
                ${tokens.titleFontSize}: ${textM.fontSize};
                ${tokens.titleFontStyle}: ${textM.fontStyle};
                ${tokens.titleFontWeight}: ${textMBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textM.letterSpacing};
                ${tokens.titleLineHeight}: ${textM.lineHeight};

                ${tokens.textFontFamily}: ${textM.fontFamily};
                ${tokens.textFontSize}: ${textM.fontSize};
                ${tokens.textFontStyle}: ${textM.fontStyle};
                ${tokens.textFontWeight}: ${textM.fontWeight};
                ${tokens.textLetterSpacing}: ${textM.letterSpacing};
                ${tokens.textLineHeight}: ${textM.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1.125rem;
                ${tokens.fixedContentBeforePadding}: 0.063rem 0;

                ${tokens.titleFontFamily}: ${textS.fontFamily};
                ${tokens.titleFontSize}: ${textS.fontSize};
                ${tokens.titleFontStyle}: ${textS.fontStyle};
                ${tokens.titleFontWeight}: ${textSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textS.letterSpacing};
                ${tokens.titleLineHeight}: ${textS.lineHeight};

                ${tokens.textFontFamily}: ${textS.fontFamily};
                ${tokens.textFontSize}: ${textS.fontSize};
                ${tokens.textFontStyle}: ${textS.fontStyle};
                ${tokens.textFontWeight}: ${textS.fontWeight};
                ${tokens.textLetterSpacing}: ${textS.letterSpacing};
                ${tokens.textLineHeight}: ${textS.lineHeight};
            `,
        },
    },
};
