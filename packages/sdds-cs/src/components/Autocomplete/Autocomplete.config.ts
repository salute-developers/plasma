import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineNegative,
    outlineNegativeHover,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, autocompleteTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};
                ${tokens.textFieldContentSlotRightColor}: ${textAccent};
                ${tokens.textFieldContentSlotRightColorHover}: ${textAccentMinor};
                ${tokens.textFieldContentSlotRightColorActive}: ${textAccentActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: ${surfaceClear};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.dropdownBorderColor}: ${surfaceSolidPrimary};
            `,
            negative: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};
                ${tokens.textFieldContentSlotRightColor}: ${textAccent};
                ${tokens.textFieldContentSlotRightColorHover}: ${textAccentMinor};
                ${tokens.textFieldContentSlotRightColorActive}: ${textAccentActive};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColor}: ${outlineNegative};
                ${tokens.textFieldBorderColorHover}: ${outlineNegativeHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: ${surfaceClear};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.dropdownBorderColor}: ${surfaceSolidPrimary};
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyS.lineHeight};

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
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.6875rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeight}: ${bodyM.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyM.lineHeight};

                ${tokens.emptyStatePadding}: 1.375rem 0.625rem 0.625rem 0.625rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;

                ${tokens.dropdownBorderWidth}: 0.125rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXS.lineHeight};
            `,
            outer: css``,
        },
        disabled: {
            true: css`
                ${tokens.itemColor}: ${textSecondary};
                ${tokens.background}: ${surfaceSolidPrimary};
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBackgroundColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldBorderColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textSecondary};
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderWidth}: 0;
            `,
        },
    },
};
