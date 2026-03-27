import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceSolidSecondary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
    },
    variations: {
        view: {
            default: css`
                ${paginationTokens.buttonColor}: ${inverseTextPrimary};
                ${paginationTokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${paginationTokens.buttonColorActive}: ${inverseTextPrimaryActive};
                ${paginationTokens.buttonHoverColor}: ${inverseTextPrimary};
                ${paginationTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${paginationTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${paginationTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${paginationTokens.buttonActiveColor}: ${inverseTextPrimary};
                ${paginationTokens.buttonArrowColor}: ${inverseTextSecondary};
                ${paginationTokens.buttonArrowColorHover}: ${inverseTextSecondaryHover};
                ${paginationTokens.buttonArrowColorActive}: ${inverseTextSecondaryHover};

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: ${surfaceTransparentSecondary};
                ${paginationTokens.inputBorderColor}:transparent;
                ${paginationTokens.selectBackgroundColor}: color-mix(
                    in srgb,
                    ${inverseTextPrimary},
                    ${surfaceSolidDefault} 85%
                );

                ${paginationTokens.paginationColor}: ${textPrimary};
                ${paginationTokens.paginationHelperTextColor}: ${textSecondary};
                ${paginationTokens.buttonFocusColor}: ${surfaceAccent};
            `,
            secondary: css`
                ${paginationTokens.buttonColor}: ${textPrimary};
                ${paginationTokens.buttonColorHover}: ${textPrimaryHover};
                ${paginationTokens.buttonColorActive}: ${textPrimaryActive};
                ${paginationTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${paginationTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${paginationTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
                ${paginationTokens.buttonHoverColor}: ${textPrimary};
                ${paginationTokens.buttonActiveColor}: ${textPrimary};
                ${paginationTokens.buttonArrowColor}: ${textSecondary};
                ${paginationTokens.buttonArrowColorHover}: ${textSecondaryHover};
                ${paginationTokens.buttonArrowColorActive}: ${textSecondaryHover};

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: ${surfaceTransparentSecondary};
                ${paginationTokens.selectBackgroundColor}: ${surfaceSolidSecondary};
                ${paginationTokens.inputBorderColor}: transparent;

                ${paginationTokens.paginationColor}: ${textPrimary};
                ${paginationTokens.paginationHelperTextColor}: ${textSecondary};
                ${paginationTokens.buttonFocusColor}: ${surfaceAccent};
            `,
            clear: css`
                ${paginationTokens.buttonColor}: ${textPrimary};
                ${paginationTokens.buttonColorHover}: ${textPrimaryHover};
                ${paginationTokens.buttonColorActive}: ${textPrimaryActive};
                ${paginationTokens.buttonBackgroundColor}: ${surfaceClear};
                ${paginationTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${paginationTokens.buttonBackgroundColorActive}: ${surfaceClear};
                ${paginationTokens.buttonHoverColor}: ${textPrimary};
                ${paginationTokens.buttonActiveColor}: ${textPrimary};
                ${paginationTokens.buttonArrowColor}: ${textSecondary};
                ${paginationTokens.buttonArrowColorHover}: ${textSecondaryHover};
                ${paginationTokens.buttonArrowColorActive}: ${textSecondaryHover};

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: ${surfaceTransparentSecondary};
                ${paginationTokens.selectBackgroundColor}: ${surfaceSolidCard};
                ${paginationTokens.inputBorderColor}: transparent;

                ${paginationTokens.paginationColor}: ${textPrimary};
                ${paginationTokens.paginationHelperTextColor}: ${textSecondary};
                ${paginationTokens.buttonFocusColor}: ${surfaceAccent};
            `,
        },
        viewCurrentPage: {
            default: css`
                ${paginationTokens.paginationCurrentButtonColor}: ${inverseTextPrimary};
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: ${surfaceSolidDefault};
                ${paginationTokens.paginationCurrentButtonHoverColor}: ${inverseTextPrimary};
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    ${inverseTextPrimary},
                    ${surfaceSolidDefault} 85%
                );
                ${paginationTokens.paginationCurrentButtonActiveColor}: ${inverseTextPrimary};
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    ${inverseTextPrimary},
                    ${surfaceSolidDefault} 80%
                );
            `,
            secondary: css`
                ${paginationTokens.paginationCurrentButtonColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${paginationTokens.paginationCurrentButtonHoverColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    ${inverseTextPrimary},
                    ${surfaceTransparentSecondary} 85%
                );
                ${paginationTokens.paginationCurrentButtonActiveColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    ${inverseTextPrimary},
                    ${surfaceTransparentSecondary} 80%
                );
            `,
            clear: css`
                ${paginationTokens.paginationCurrentButtonColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: ${surfaceClear};
                ${paginationTokens.paginationCurrentButtonHoverColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(in srgb, ${textPrimary}, ${surfaceClear} 95%);
                ${paginationTokens.paginationCurrentButtonActiveColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(in srgb, ${textPrimary}, ${surfaceClear} 90%);
            `,
        },
        size: {
            l: css`
                ${paginationTokens.paginationFontFamily}: ${bodyL.fontFamily};
                ${paginationTokens.paginationFontSize}: ${bodyL.fontSize};
                ${paginationTokens.paginationFontStyle}: ${bodyL.fontStyle};
                ${paginationTokens.paginationFontWeight}: ${bodyLBold.fontWeight};
                ${paginationTokens.paginationLetterSpacing}: ${bodyL.letterSpacing};
                ${paginationTokens.paginationLineHeight}: ${bodyL.lineHeight};

                ${paginationTokens.buttonHeight}: 3.5rem;
                ${paginationTokens.buttonWidth}: 3rem;
                ${paginationTokens.buttonWidthShorter}: 2.25rem;
                ${paginationTokens.paginationInputWidth}: 4rem;
                ${paginationTokens.buttonRadius}: 0.875rem;
                ${paginationTokens.paginationIconSize}: 1.2rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.45rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.5rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPadding}: 1rem 1rem 1rem 1rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.875rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 1rem;
                ${paginationTokens.selectTargetPadding}: 1.5rem 0 1.5rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.875rem;
                ${paginationTokens.inputWidth}: 4rem;
                ${paginationTokens.inputHeight}: 3.5rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
            m: css`
                ${paginationTokens.paginationFontFamily}: ${bodyM.fontFamily};
                ${paginationTokens.paginationFontSize}: ${bodyM.fontSize};
                ${paginationTokens.paginationFontStyle}: ${bodyM.fontStyle};
                ${paginationTokens.paginationFontWeight}: ${bodyMBold.fontWeight};
                ${paginationTokens.paginationLetterSpacing}: ${bodyM.letterSpacing};
                ${paginationTokens.paginationLineHeight}: ${bodyM.lineHeight};

                ${paginationTokens.buttonHeight}: 3rem;
                ${paginationTokens.buttonWidth}: 3rem;
                ${paginationTokens.buttonWidthShorter}: 2rem;
                ${paginationTokens.paginationInputWidth}: 3.5rem;
                ${paginationTokens.buttonRadius}: 0.75rem;
                ${paginationTokens.paginationIconSize}: 1.05rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.3rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.375rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.875rem;
                ${paginationTokens.selectTargetPadding}: 1.25rem 0 1.25rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.75rem;
                ${paginationTokens.inputWidth}: 3.5rem;
                ${paginationTokens.inputHeight}: 3rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
            s: css`
                ${paginationTokens.paginationFontFamily}: ${bodyS.fontFamily};
                ${paginationTokens.paginationFontSize}: ${bodyS.fontSize};
                ${paginationTokens.paginationFontStyle}: ${bodyS.fontStyle};
                ${paginationTokens.paginationFontWeight}: ${bodySBold.fontWeight};
                ${paginationTokens.paginationLetterSpacing}: ${bodyS.letterSpacing};
                ${paginationTokens.paginationLineHeight}: ${bodyS.lineHeight};

                ${paginationTokens.buttonHeight}: 2.5rem;
                ${paginationTokens.buttonWidth}: 2.5rem;
                ${paginationTokens.buttonWidthShorter}: 1.75rem;
                ${paginationTokens.paginationInputWidth}: 3rem;
                ${paginationTokens.buttonRadius}: 0.625rem;
                ${paginationTokens.paginationIconSize}: 0.9rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.15rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPadding}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.75rem;
                ${paginationTokens.selectTargetPadding}: 1rem 0 1rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.625rem;
                ${paginationTokens.inputWidth}: 3rem;
                ${paginationTokens.inputHeight}: 2.5rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
            xs: css`
                ${paginationTokens.paginationFontFamily}: ${bodyXS.fontFamily};
                ${paginationTokens.paginationFontSize}: ${bodyXS.fontSize};
                ${paginationTokens.paginationFontStyle}: ${bodyXS.fontStyle};
                ${paginationTokens.paginationFontWeight}: ${bodyXSBold.fontWeight};
                ${paginationTokens.paginationLetterSpacing}: ${bodyXS.letterSpacing};
                ${paginationTokens.paginationLineHeight}: ${bodyXS.lineHeight};

                ${paginationTokens.buttonHeight}: 2rem;
                ${paginationTokens.paginationInputWidth}: 2.5rem;
                ${paginationTokens.buttonRadius}: 0.5rem;
                ${paginationTokens.buttonWidth}: 2rem;
                ${paginationTokens.buttonWidthShorter}: 1.5rem;
                ${paginationTokens.paginationIconSize}: 0.75rem;
                ${paginationTokens.paginationIconDoubleSize}: 1rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1rem;
                ${paginationTokens.selectItemPadding}: 0.5rem 0.5rem 0.5rem 0.5rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.25rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.5rem;
                ${paginationTokens.selectTargetPadding}: 0.75rem 0 0.75rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.5rem;
                ${paginationTokens.inputWidth}: 2.5rem;
                ${paginationTokens.inputHeight}: 2rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
