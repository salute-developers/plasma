import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceSolidSecondary,
    surfaceSolidTertiary,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { timePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.backgroundError}: ${surfaceSolidCard};
                ${tokens.backgroundSuccess}: ${surfaceSolidCard};

                ${tokens.labelColor}: ${textPrimary};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.timePickerShadow}: ${shadowDownSoftS};

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorHover}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundErrorColor}: var--surface-solid-card);
                ${tokens.textFieldBackgroundErrorColorFocus}: var--surface-solid-card);
                ${tokens.textFieldBackgroundSuccessColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundSuccessColorFocus}: ${surfaceSolidCard};

                ${tokens.borderColor}: ${outlineSolidPrimary};
                ${tokens.borderColorFocus}: ${outlineAccent};
                ${tokens.borderColorHover}: ${outlineSolidPrimaryHover};

                ${tokens.textFieldBorderColorError}: ${textNegative};
                ${tokens.textFieldBorderColorErrorFocus}: ${textNegative};
                ${tokens.textFieldBorderColorErrorHover}: ${textNegative};

                ${tokens.textFieldBorderColorSuccess}: ${textNegative};
                ${tokens.textFieldBorderColorSuccessFocus}: ${textNegative};
                ${tokens.textFieldBorderColorSuccessHover}: ${textNegative};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentRightSlotColor}: ${textAccent};
                ${tokens.textFieldContentRightSlotColorHover}: ${textAccentMinor};
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: ${textAccentActive};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.timePickerBackground}: ${surfaceSolidCard};
                ${tokens.itemBackgroundHover}: ${surfaceSolidSecondary};
                ${tokens.itemBackgroundActive}: ${surfaceSolidSecondary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.scrollbarColor}: ${surfaceSolidTertiary};
                ${tokens.scrollbarTrackColor}: var(--surface-transparent-primary);

                ${tokens.disabledOpacity}: 0.4;

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};
            `,
        },
        size: {
            s: css`
                ${tokens.width}: 17.625rem;
                ${tokens.dropdownMarginTop}: 0.125rem;

                ${tokens.labelOffset}: 0.5rem;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.55rem 0.75rem;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLeftContentMargin}: 0 0.5rem 0 0rem;
                ${tokens.textFieldRightContentMargin}: 0 0rem 0 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.625rem;
                ${tokens.timePickerWidth}: 7.75rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 19rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeight}: ${bodyM.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyM.lineHeight};

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;

                ${tokens.textFieldColor}: ${textSecondary};

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidPrimary};

                ${tokens.textFieldBorderColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
            `,
        },
        readonly: {
            true: css`
                ${tokens.labelColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};

                ${tokens.textFieldContentSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondary};

                ${tokens.textFieldBorderWidth}: 0;
                ${tokens.textFieldBorderColor}: transparent;

                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
    },
};
