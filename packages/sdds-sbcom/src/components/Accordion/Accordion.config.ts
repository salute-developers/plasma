import {
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    h3,
    h3Bold,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidTertiary,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';
import { css, accordionTokens } from '@salutejs/plasma-new-hope/styled-components';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, h2, h2Bold, h4, h4Bold, h5, h5Bold, h6, h6Bold
 * surfaceAccent
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${accordionTokens.accordionGap}: 0.125rem;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) var(${accordionTokens.accordionItemPaddingHorizontal});
                ${accordionTokens.accordionItemBackground}: ${surfaceSolidCard};
                ${accordionTokens.accordionItemTitleColor}: ${textPrimary};
                ${accordionTokens.accordionItemTextColor}: ${textPrimary};
                ${accordionTokens.accordionItemIconColor}: ${textPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemBorderBottom}: 0;
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: var(${accordionTokens.accordionItemPaddingHorizontal});
            `,
            clear: css`
                ${accordionTokens.accordionGap}: 0;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) 0rem;
                ${accordionTokens.accordionItemBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemTitleColor}: ${textPrimary};
                ${accordionTokens.accordionItemTextColor}: ${textPrimary};
                ${accordionTokens.accordionItemIconColor}: ${textPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionItemBorderRadius}: 0rem !important;
                ${accordionTokens.accordionBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemBorderBottom}: 0.063rem solid ${surfaceSolidTertiary};
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: 0;
            `,
        },
        size: {
            l: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.0625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.25rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyLBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyL.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.125rem;

                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.6875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.875rem;

                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodySBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyS.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyS.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyS.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyS.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyS.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyS.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyXSBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyXS.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyXS.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyXS.lineHeight};
            `,
            h2: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.25rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;

                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h2-font-family);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h2-font-size);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h2-font-style);
                /* NOTE: no token h2Bold in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h2-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            h3: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.125rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h3.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h3.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h3.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h3Bold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h3.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h3.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            h4: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.688rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.875rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;

                /* NOTE: h4 title + body-m: h4/bodyM not in @salutejs-ds/sdds_sbcom; raw plasma typo vars. */
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h4-font-family);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h4-font-size);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h4-font-style);
                /* NOTE: no token h4Bold in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h4-bold-font-weight);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h4-line-height);

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            h5: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;

                /* NOTE: h5 title + body-m: h5/bodyM not in @salutejs-ds/sdds_sbcom; raw plasma typo vars. */
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h5-line-height);

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            h6: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;

                /* NOTE: h6 title + body-m: h6/bodyM not in @salutejs-ds/sdds_sbcom; raw plasma typo vars. */
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h6-font-family);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h6-font-size);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h6-font-style);
                /* NOTE: no token h6Bold in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h6-bold-font-weight);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h6-letter-spacing);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h6-line-height);

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
    },
};
