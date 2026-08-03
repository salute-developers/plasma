import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceTransparentInfo,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryHover,
    textWarning,
    bodyS,
    bodyM,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'vertical',
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
                ${tokens.borderRadius}: 1.25rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.contentBeforeAlignSelf}: center;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1rem;
                ${tokens.fixedContentBeforePadding}: 0rem;

                ${tokens.titleFontFamily}: ${bodyM.fontFamily};
                ${tokens.titleFontSize}: ${bodyM.fontSize};
                ${tokens.titleFontStyle}: ${bodyM.fontStyle};
                ${tokens.titleFontWeight}: ${bodyM.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyM.lineHeight};
                ${tokens.titlePaddingRight}: 1.75rem;

                ${tokens.textFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFontSize}: ${bodyS.fontSize};
                ${tokens.textFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFontWeight}: ${bodyS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyS.lineHeight};
            `,
        },
        orientation: {
            vertical: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.paddingBottomWithActionContent}: 0.3125rem;
            `,
            horizontal: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.paddingBottomWithActionContent}: 1rem;

                ${tokens.actionContentMargin}: -0.6875rem 0rem 0rem 1rem;
                ${tokens.closeIconMargin}: -0.175rem 0rem 0rem 0.875rem;

                ${tokens.closeIconTop}: 0.5rem;
                ${tokens.closeIconRight}: 0.625rem;
            `,
        },
    },
    intersections: [],
};
