import {
    bodyM,
    outlineSolidPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidPrimary,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        viewCurrentPage: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${paginationTokens.buttonColor}: ${textAccent};
                ${paginationTokens.buttonColorHover}: ${textAccentMinor};
                ${paginationTokens.buttonColorActive}: ${textAccentActive};
                ${paginationTokens.buttonBackgroundColor}: ${surfaceClear};
                ${paginationTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${paginationTokens.buttonBackgroundColorActive}: ${surfaceClear};
                ${paginationTokens.buttonHoverColor}: ${textAccentMinor};
                ${paginationTokens.buttonActiveColor}: ${textAccentActive};
                ${paginationTokens.buttonArrowColor}: ${textAccent};
                ${paginationTokens.buttonArrowColorHover}: ${textAccentMinor};
                ${paginationTokens.buttonArrowColorActive}: ${textAccentActive};

                ${paginationTokens.inputBackgroundColor}: ${surfaceSolidCard};
                ${paginationTokens.selectBackgroundColor}: ${surfaceSolidCard};
                ${paginationTokens.inputBorderColor}: ${outlineSolidPrimary};

                ${paginationTokens.paginationColor}: ${textPrimary};
                ${paginationTokens.paginationHelperTextColor}: ${textSecondary};
                ${paginationTokens.buttonFocusColor}: ${surfaceAccent};
                ${paginationTokens.paginationDisabledButtonColor}: ${textSecondary};
                ${paginationTokens.paginationDisabledButtonBackgroundColor}: ${surfaceClear};
            `,
        },
        viewCurrentPage: {
            default: css`
                ${paginationTokens.paginationCurrentButtonColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: ${surfaceSolidPrimary};
                ${paginationTokens.paginationCurrentButtonHoverColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: ${surfaceSolidPrimary};
                ${paginationTokens.paginationCurrentButtonActiveColor}: ${textPrimary};
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: ${surfaceSolidPrimary};
            `,
        },
        size: {
            s: css`
                ${paginationTokens.paginationFontFamily}: ${bodyM.fontFamily};
                ${paginationTokens.paginationFontSize}: ${bodyM.fontSize};
                ${paginationTokens.paginationFontStyle}: ${bodyM.fontStyle};
                ${paginationTokens.paginationFontWeight}: ${bodyM.fontWeight};
                ${paginationTokens.paginationLetterSpacing}: ${bodyM.letterSpacing};
                ${paginationTokens.paginationLineHeight}: ${bodyM.lineHeight};

                ${paginationTokens.buttonHeight}: 2.5rem;
                ${paginationTokens.buttonWidth}: 2.5rem;
                ${paginationTokens.buttonWidthShorter}: 1.75rem;
                ${paginationTokens.paginationInputWidth}: 3rem;
                ${paginationTokens.buttonRadius}: 0.75rem;
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
                ${paginationTokens.inputBorderWidth}: 0.125rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
