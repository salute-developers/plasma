import { css, textFieldGroupTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyM, bodyS } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.textFieldDefaultRadius}: 0.875rem;
                ${tokens.textFieldSegmentedRadius}: 0.375rem;
                ${tokens.textFieldSideRadius}: 0.875rem;

                ${tokens.height}: 3.5rem;
                ${tokens.padding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.paddingWithChips}: 0.375rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.rightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.75rem;
                ${tokens.chipPadding}: 0 0.75rem 0 1rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
                ${tokens.chipFontFamily}: ${bodyL.fontFamily};
                ${tokens.chipFontSize}: ${bodyL.fontSize};
                ${tokens.chipFontStyle}: ${bodyL.fontStyle};
                ${tokens.chipFontWeight}: ${bodyL.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.textFieldDefaultRadius}: 0.75rem;
                ${tokens.textFieldSegmentedRadius}: 0.25rem;
                ${tokens.textFieldSideRadius}: 0.75rem;

                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.paddingWithChips}: 0.375rem;

                ${tokens.leftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.rightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.25rem;
                ${tokens.chipPadding}: 0 0.625rem 0 0.875rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.25rem;
                ${tokens.chipFontFamily}: ${bodyM.fontFamily};
                ${tokens.chipFontSize}: ${bodyM.fontSize};
                ${tokens.chipFontStyle}: ${bodyM.fontStyle};
                ${tokens.chipFontWeight}: ${bodyM.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${tokens.textFieldSegmentedRadius}: 0.25rem;
                ${tokens.textFieldSideRadius}: 0.625rem;
                ${tokens.textFieldDefaultRadius}: 0.625rem;

                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.paddingWithChips}: 0.375rem;

                ${tokens.leftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.rightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.25rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.75rem;
                ${tokens.chipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: ${bodyS.fontFamily};
                ${tokens.chipFontSize}: ${bodyS.fontSize};
                ${tokens.chipFontStyle}: ${bodyS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.textFieldSegmentedRadius}: 0.125rem;
                ${tokens.textFieldDefaultRadius}: 0.5rem;
                ${tokens.textFieldSideRadius}: 0.5rem;

                ${tokens.height}: 2rem;
                ${tokens.padding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.paddingWithChips}: 0.375rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.rightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelOffset}: 0.375rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.125rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.25rem;
                ${tokens.chipPadding}: 0 0.375rem 0 0.625rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 0.75rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${tokens.textFieldGroupOrientation}: row;
            `,
            vertical: css`
                ${tokens.textFieldGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${tokens.textFieldGroupItemsGap}: 0.063rem;
            `,
            dense: css`
                ${tokens.textFieldGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${tokens.textFieldGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
