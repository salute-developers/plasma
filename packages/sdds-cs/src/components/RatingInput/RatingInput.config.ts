import { css, ratingInputTokens as tokens } from '@salutejs/plasma-new-hope/emotion';
import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    h3,
    h3Bold,
    surfaceAccent,
    textAccent,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_cs';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        iconSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.iconColor}: ${textPrimary};
                ${tokens.outlineIconColor}: ${textAccent};
                ${tokens.limitLabelColor}: ${textSecondary};
                ${tokens.focusColor}: ${surfaceAccent};
            `,
            accent: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.iconColor}: ${textWarning};
                ${tokens.outlineIconColor}: ${textAccent};
                ${tokens.limitLabelColor}: ${textSecondary};
                ${tokens.focusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.limitLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.limitLabelFontSize}: ${bodyS.fontSize};
                ${tokens.limitLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.limitLabelFontWeight}: ${bodySBold.fontWeight};
                ${tokens.limitLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.limitLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
            h3: css`
                ${tokens.fontFamily}: ${h3.fontFamily};
                ${tokens.fontSize}: ${h3.fontSize};
                ${tokens.fontStyle}: ${h3.fontStyle};
                ${tokens.fontWeight}: ${h3Bold.fontWeight};
                ${tokens.letterSpacing}: ${h3.letterSpacing};
                ${tokens.lineHeight}: ${h3.lineHeight};

                ${tokens.limitLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.limitLabelFontSize}: ${bodyS.fontSize};
                ${tokens.limitLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.limitLabelFontWeight}: ${bodySBold.fontWeight};
                ${tokens.limitLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.limitLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.iconsGap}: 0.125rem;
                ${tokens.sideLabelsGap}: 0.5rem;
            `,
        },
        iconSize: {
            l: css`
                ${tokens.iconSize}: 3rem;
                ${tokens.focusBorderRadius}: 0.75rem;
                ${tokens.valueGap}: 1rem;
                ${tokens.valueGapWithLimitLabels}: 1rem;
                ${tokens.limitLabelsGap}: 0.25rem;
            `,
            m: css`
                ${tokens.iconSize}: 2.25rem;
                ${tokens.focusBorderRadius}: 0.5rem;
                ${tokens.valueGap}: 0.75rem;
                ${tokens.valueGapWithLimitLabels}: 0.625rem;
                ${tokens.limitLabelsGap}: 0.25rem;
            `,
            s: css`
                ${tokens.iconSize}: 1.5rem;
                ${tokens.focusBorderRadius}: 0.375rem;
                ${tokens.valueGap}: 0.5rem;
                ${tokens.valueGapWithLimitLabels}: 0.5rem;
                ${tokens.limitLabelsGap}: 0.125rem;
            `,
        },
    },
    intersections: [
        {
            size: 'h3',
            iconSize: 'm',
            style: css`
                ${tokens.valueGap}: 1rem;
                ${tokens.valueGapWithLimitLabels}: 1rem;
            `,
        },
    ],
};
