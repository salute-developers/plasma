import {
    bodyM,
    bodyS,
    bodySBold,
    outlineAccent,
    outlineSolidPrimary,
    surfaceSolidCard,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPrimary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, numberInputTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        segmentation: 'solid',
        shape: 'cornered',
        inputBackgroundType: 'clear',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: ${textAccent};
                ${tokens.errorColor}: ${textNegative};

                ${tokens.colorSolid}: ${textPrimary};
                ${tokens.additionalTextColorSolid}: ${textTertiary};
                ${tokens.backgroundColorSolid}: ${surfaceSolidCard};
                ${tokens.wrapperBorderColor}: ${outlineSolidPrimary};
                ${tokens.wrapperBorderColorFocus}: ${outlineAccent};

                ${tokens.iconButtonColor}: ${textAccent};
                ${tokens.iconButtonBackgroundColor}: ${surfaceSolidCard};
                ${tokens.iconButtonColorSolidHover}: ${textAccentMinor};
                ${tokens.iconButtonColorSolidActive}: ${textAccentActive};

                ${tokens.actionButtonDisabledOpacity}: 0;
                ${tokens.actionButtonDisabledCursor}: default;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
        },
        size: {
            s: css`
                ${tokens.rootMinWidth}: 7.5rem;
                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${tokens.iconButtonRadius}: 0.75rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0;
                ${tokens.inputWrapperBorderRadius}: 0.75rem;
                ${tokens.textWrapperHeight}: 2.5rem;
                ${tokens.textWrapperPadding}: 0.5rem 0.375rem;
                ${tokens.rootBorderWidth}: 0.125rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.additionalTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.additionalTextFontSize}: ${bodyS.fontSize};
                ${tokens.additionalTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.additionalTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.additionalTextLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.additionalTextLineHeight}: ${bodyS.lineHeight};

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
        },
        shape: {
            cornered: css``,
            pilled: css`
                ${tokens.iconButtonRadius}: 50%;
            `,
        },
        inputBackgroundType: {
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
            `,
        },
        segmentation: {
            solid: css`
                ${tokens.iconButtonSegmentationRadius}: 0;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
