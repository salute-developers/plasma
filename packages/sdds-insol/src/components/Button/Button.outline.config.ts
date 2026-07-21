import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    surfaceAccent,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

// INFO: Rounded radius. Should be removed after token will be added in theme
const roundedRadius = '1000px';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            secondary: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};

                ${buttonTokens.buttonBorderColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonBorderColorHover}: transparent;

                ${buttonTokens.buttonBackgroundColor}: transparent;
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${buttonTokens.buttonHeight}: 4rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyLBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyL.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: ${surfaceAccent};
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
    },
};
