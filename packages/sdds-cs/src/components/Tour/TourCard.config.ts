import { tourCardTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    h4Bold,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceSolidCard,
    textAccent,
    textAccentActive,
    textAccentHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.descriptionColor}: ${textSecondary};
                ${tokens.paginationNumberColor}: ${textSecondary};
                ${tokens.dotBackground}: ${surfaceAccent};
                ${tokens.dotBackgroundHover}: ${surfaceAccentHover};
                ${tokens.dotBackgroundActive}: ${surfaceAccentActive};
                ${tokens.dotActiveBackground}: ${textPrimary};
                ${tokens.dotActiveBackgroundHover}: ${textPrimaryHover};
                ${tokens.dotActiveBackgroundActive}: ${textPrimaryActive};
                ${tokens.closeButtonColor}: ${textAccent};
                ${tokens.closeButtonColorHover}: ${textAccentHover};
                ${tokens.closeButtonColorActive}: ${textAccentActive};
                ${tokens.closeButtonBackgroundColor}: transparent;
                ${tokens.closeButtonFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${tokens.padding}: 1rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.gap}: 1.5rem;

                ${tokens.imageBorderRadius}: 0.5rem;
                ${tokens.imageMargin}: 0 0 1.5rem 0;

                ${tokens.textGap}: 0.25rem;
                ${tokens.textPadding}: 0;
                ${tokens.textPaddingExtra}: 0;

                ${tokens.titleFontFamily}: ${h4Bold.fontFamily};
                ${tokens.titleFontSize}: ${h4Bold.fontSize};
                ${tokens.titleFontStyle}: ${h4Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h4Bold.fontWeight};
                ${tokens.titleFontLineHeight}: ${h4Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${tokens.descriptionFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.paginationNumberFontFamily}: ${bodyS.fontFamily};
                ${tokens.paginationNumberFontSize}: ${bodyS.fontSize};
                ${tokens.paginationNumberFontStyle}: ${bodyS.fontStyle};
                ${tokens.paginationNumberFontWeight}: ${bodyS.fontWeight};
                ${tokens.paginationNumberFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.dotsGap}: 0.5rem;
                ${tokens.dotSize}: 0.5rem;
                ${tokens.dotContainerMargin}: 1.5rem 0 0 0;

                ${tokens.actionButtonsMargin}: 1.5rem auto 0 auto;

                ${tokens.skipButtonMargin}: 0.25rem 0 0 0;

                ${tokens.closeButtonIconSize}: 1.5rem;
                ${tokens.closeButtonWidth}: 1.5rem;
                ${tokens.closeButtonHeight}: 1.5rem;
                ${tokens.closeButtonRadius}: 0.5rem;
            `,
        },
    },
};
