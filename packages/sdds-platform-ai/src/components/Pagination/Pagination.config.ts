import {
    bodyM,
    bodyMBold,
    inverseTextPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'm',
    },
    variations: {
        view: {
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
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
