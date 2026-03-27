import {
    bodyM,
    bodyS,
    bodySBold,
    outlineAccent,
    outlineNegative,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidPrimary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, rangeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.borderColor}: ${outlineSolidPrimary};
                ${tokens.borderColorError}: ${outlineNegative};
                ${tokens.borderColorSuccess}: ${outlineAccent};

                ${tokens.dividerColor}: ${textPrimary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};

                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};
                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldBorderColorError}: ${outlineNegative};
                ${tokens.textFieldBorderColorErrorFocus}: ${outlineNegative};
                ${tokens.textFieldBorderColorSuccess}: ${outlineAccent};
                ${tokens.textFieldBorderColorSuccessFocus}: ${outlineAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};
                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
            `,
        },
        size: {
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyS.fontSize};
                ${tokens.dividerFontWeight}: ${bodySBold.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftContentMargin}: 0 0.375rem 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.75rem;

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                ${tokens.leftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyS.lineHeight};
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.background}: ${surfaceSolidPrimary};
                ${tokens.borderColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: ${surfaceSolidCard};
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.borderColorReadOnly}: ${outlineSolidPrimary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};
                ${tokens.dividerColorReadOnly}: ${textSecondary};
                ${tokens.readOnlyOpacity}: 1;
                ${tokens.dividerOpacityReadOnly}: 1;
                ${tokens.rightContentOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
            `,
        },
    },
};
