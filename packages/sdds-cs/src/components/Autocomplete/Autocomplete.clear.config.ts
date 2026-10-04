import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineNegativeHover,
    outlineSolidPrimary,
    outlineSolidSecondary,
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

                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.textFieldBackgroundColorHover}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
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

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: ${surfaceClear};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.dropdownBorderColor}: ${surfaceSolidPrimary};

                ${tokens.textFieldBackgroundColorHover}: transparent;
                ${tokens.textFieldDividerColor}: ${outlineSolidPrimary};
                ${tokens.textFieldDividerColorHover}: ${textSecondary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};
            `,
            negative: css`
                ${tokens.textFieldColor}: ${textNegative};
                ${tokens.textFieldClearColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textNegative};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.textFieldBackgroundColorHover}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldLeftHelperColorFocus}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};
                ${tokens.textFieldContentSlotRightColor}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotRightColorActive}: ${textSecondaryActive};
                ${tokens.textFieldColorFocus}: ${textPrimary};
                ${tokens.textFieldContentSlotColorFocus}: ${textPrimary};

                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColorHover}: ${outlineNegativeHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: ${surfaceClear};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemColor}: ${textPrimary};

                ${tokens.infiniteLoaderSpinnerColor}: ${textPrimary};

                ${tokens.dropdownBorderColor}: ${surfaceSolidPrimary};

                ${tokens.textFieldBackgroundColorHover}: transparent;
                ${tokens.textFieldDividerColor}: ${surfaceNegative};
                ${tokens.textFieldDividerColorHover}: ${surfaceNegative};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0;
                ${tokens.textFieldBorderRadius}: 0;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem 0;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0 -0.1875rem 0.75rem;

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
                ${tokens.textFieldIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
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
                ${tokens.textFieldBackgroundColorHover}: ${surfaceSolidPrimary};

                ${tokens.textFieldDividerColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldDividerColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceSolidPrimary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldBorderColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textPrimary};

                ${tokens.textFieldDividerColorReadOnly}: ${outlineSolidSecondary};
            `,
        },
    },
};
