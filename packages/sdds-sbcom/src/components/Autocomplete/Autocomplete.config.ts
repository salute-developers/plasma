import { css, autocompleteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, surfaceTransparentNegative
 * surfaceTransparentNegativeActive, surfaceTransparentPositive, surfaceTransparentPositiveActive
 * surfaceTransparentWarning, surfaceTransparentWarningActive
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldDividerColor}: ${surfaceTransparentTertiary};
                ${tokens.textFieldDividerColorHover}: ${textSecondary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.textFieldContentSlotColor}: ${tokens.textFieldColor};
                ${tokens.textFieldContentSlotRightColor}: ${tokens.textFieldColor};
                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.textFieldHintIconColor}: ${textSecondary};
            `,
            positive: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textPositive};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textPositive};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textPositive};

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-positive-active);
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textPositive};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldDividerColor}: ${surfacePositive};
                ${tokens.textFieldDividerColorHover}: ${surfacePositive};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.textFieldContentSlotColor}: ${tokens.textFieldColor};
                ${tokens.textFieldContentSlotRightColor}: ${tokens.textFieldColor};
                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.textFieldHintIconColor}: ${textSecondary};
            `,
            warning: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textWarning};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textWarning};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textWarning};

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-warning);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-warning-active);
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textWarning};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldDividerColor}: ${surfaceWarning};
                ${tokens.textFieldDividerColorHover}: ${surfaceWarning};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.textFieldContentSlotColor}: ${tokens.textFieldColor};
                ${tokens.textFieldContentSlotRightColor}: ${tokens.textFieldColor};
                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.textFieldHintIconColor}: ${textSecondary};
            `,
            negative: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textNegative};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textNegative};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textNegative};

                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-negative);
                /* NOTE: no token surfaceTransparentNegativeActive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-negative-active);
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldDividerColor}: ${surfaceNegative};
                ${tokens.textFieldDividerColorHover}: ${surfaceNegative};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.textFieldContentSlotColor}: ${tokens.textFieldColor};
                ${tokens.textFieldContentSlotRightColor}: ${tokens.textFieldColor};
                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.textFieldHintIconColor}: ${textSecondary};
            `,
        },
        size: {
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.438rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 1.0625rem 1rem;
                ${tokens.itemBorderRadius}: 0.75rem;

                ${tokens.itemFontFamily}: ${bodyL.fontFamily};
                ${tokens.itemFontSize}: ${bodyL.fontSize};
                ${tokens.itemFontStyle}: ${bodyL.fontStyle};
                ${tokens.itemFontWeight}: ${bodyL.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyL.lineHeight};

                ${tokens.emptyStatePadding}: 2rem 1rem 1rem 1rem;
                ${tokens.emptyStateGap}: 0.5rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.5rem;
            `,
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.125rem -0.438rem -0.125rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.875rem 0.875rem 0.875rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.625rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeight}: ${bodyM.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyM.lineHeight};

                ${tokens.emptyStatePadding}: 1.625rem 0.875rem 0.875rem 0.875rem;
                ${tokens.emptyStateGap}: 0.375rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.375rem;
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.1875rem -0.438rem -0.1875rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.6875rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.emptyStatePadding}: 1.375rem 0.625rem 0.625rem 0.625rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.375rem;
                ${tokens.textFieldClearLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldHintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.5625rem 0.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.emptyStatePadding}: 1rem 0.5rem 0.5rem 0.5rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            outer: css``,
        },
        hintView: {
            default: css`
                ${tokens.textFieldTooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.textFieldTooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.textFieldTooltipColor}: ${textPrimary};
                ${tokens.textFieldTooltipArrowBackground}: ${surfaceSolidCard};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.875rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.875rem;

                ${tokens.textFieldTooltipMinHeight}: 2.5rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.625rem;

                ${tokens.textFieldTooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldTooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldTooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldTooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldTooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldTooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldTooltipContentLeftMargin}: 0.375rem;

                ${tokens.textFieldTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.textFieldTooltipArrowHeight}: 0.5rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.5rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.75rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.5rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.75rem;

                ${tokens.textFieldTooltipMinHeight}: 2rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldTooltipContentLeftMargin}: 0.25rem;

                ${tokens.textFieldTooltipArrowMaskWidth}: 1rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.textFieldTooltipArrowHeight}: 0.375rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.textFieldDisabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textPrimary};
                ${tokens.textFieldDividerColorReadOnly}: ${surfaceTransparentPrimary};
            `,
        },
    },
};
