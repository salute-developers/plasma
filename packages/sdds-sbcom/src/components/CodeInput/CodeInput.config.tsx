import { css, codeInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, dsplL, dsplLBold, dsplM, h4, h5, outlineAccent
     */
    bodyS,
    bodySBold,
    dsplS,
    h3,
    textNegative,
    textPrimary,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.captionColor}: ${textSecondary};
                ${tokens.captionColorError}: ${textNegative};

                ${tokens.codeColor}: ${textPrimary};
                ${tokens.codeColorError}: ${textNegative};
                /* NOTE: no token outlineAccent in @salutejs/sdds-themes/tokens */
                ${tokens.borderColorFocus}: var(--outline-accent);
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 2.5rem;
                ${tokens.codeItemsGap}: 0.75rem;

                ${tokens.separatorWidth}: 0.75rem;

                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                /* NOTE: no token dsplLBold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);

                ${tokens.largeFontSize}: 8rem;
                ${tokens.largeLineHeight}: 8rem;

                ${tokens.mediumFontSize}: 7rem;
                ${tokens.mediumLineHeight}: 7rem;

                ${tokens.smallFontSize}: 5.5rem;
                ${tokens.smallLineHeight}: 5.75rem;

                ${tokens.captionFontFamily}: ${h3.fontFamily};
                ${tokens.captionFontSize}: ${h3.fontSize};
                ${tokens.captionFontStyle}: ${h3.fontStyle};
                ${tokens.captionFontWeight}: ${h3.fontWeight};
                ${tokens.captionLetterSpacing}: ${h3.letterSpacing};
                ${tokens.captionLineHeight}: ${h3.lineHeight};

                ${tokens.largeCodeItemWidth}: 5rem;
                ${tokens.largeCodeItemHeight}: 8rem;

                ${tokens.mediumCodeItemWidth}: 4.5rem;
                ${tokens.mediumCodeItemHeight}: 7rem;

                ${tokens.smallCodeItemWidth}: 3.5rem;
                ${tokens.smallCodeItemHeight}: 5.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.125rem;
                ${tokens.codeItemCircleSize}: 1.5rem;
            `,
            m: css`
                ${tokens.captionGap}: 1.75rem;
                ${tokens.codeItemsGap}: 0.5rem;

                ${tokens.separatorWidth}: 0.75rem;

                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);

                ${tokens.largeFontSize}: 5.5rem;
                ${tokens.largeLineHeight}: 5.75rem;

                ${tokens.mediumFontSize}: 4.5rem;
                ${tokens.mediumLineHeight}: 4.75rem;

                ${tokens.smallFontSize}: 3.5rem;
                ${tokens.smallLineHeight}: 3.75rem;

                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontFamily}: var(--plasma-typo-h4-font-family);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontSize}: var(--plasma-typo-h4-font-size);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontStyle}: var(--plasma-typo-h4-font-style);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontWeight}: var(--plasma-typo-h4-font-weight);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tokens.captionLineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.largeCodeItemWidth}: 3.5rem;
                ${tokens.largeCodeItemHeight}: 5.75rem;

                ${tokens.mediumCodeItemWidth}: 3rem;
                ${tokens.mediumCodeItemHeight}: 4.75rem;

                ${tokens.smallCodeItemWidth}: 2.25rem;
                ${tokens.smallCodeItemHeight}: 3.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.094rem;
                ${tokens.codeItemCircleSize}: 1rem;
            `,
            s: css`
                ${tokens.captionGap}: 1.5rem;
                ${tokens.codeItemsGap}: 0.25rem;

                ${tokens.separatorWidth}: 0.5rem;

                ${tokens.fontFamily}: ${dsplS.fontFamily};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};

                ${tokens.largeFontSize}: 4rem;
                ${tokens.largeLineHeight}: 4.25rem;

                ${tokens.mediumFontSize}: 3rem;
                ${tokens.mediumLineHeight}: 3.25rem;

                ${tokens.smallFontSize}: 2.5rem;
                ${tokens.smallLineHeight}: 2.75rem;

                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionFontWeight}: var(--plasma-typo-h5-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.captionLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.largeCodeItemWidth}: 2.5rem;
                ${tokens.largeCodeItemHeight}: 4.25rem;

                ${tokens.mediumCodeItemWidth}: 2rem;
                ${tokens.mediumCodeItemHeight}: 3.25rem;

                ${tokens.smallCodeItemWidth}: 1.625rem;
                ${tokens.smallCodeItemHeight}: 2.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.063rem;
                ${tokens.codeItemCircleSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
