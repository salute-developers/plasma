import {
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
import { css, numberInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
        },
        size: {
            s: css`
                ${tokens.rootMinWidth}: 8.75rem;
                ${tokens.iconButtonHeight}: 2.625rem;
                ${tokens.iconButtonWidth}: 2.625rem;
                ${tokens.iconButtonPadding}: 1rem;
                ${tokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${tokens.iconButtonRadius}: 0.625rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.625rem;
                ${tokens.textWrapperHeight}: 2.625rem;
                ${tokens.textWrapperPadding}: 0.688rem 0.875rem;
                ${tokens.rootBorderWidth}: 0.125rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

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
