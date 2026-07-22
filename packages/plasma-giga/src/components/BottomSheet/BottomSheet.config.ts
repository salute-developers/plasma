import { css, bottomSheetTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    outlineTransparentPrimary,
    overlayBlur,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidTertiary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryHover,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${bottomSheetTokens.overlayColor}: ${overlaySoft};
                ${bottomSheetTokens.overlayWithBlurColor}: ${overlayBlur};
                ${bottomSheetTokens.contentBackgroundColor}: ${surfaceSolidCard};
                ${bottomSheetTokens.handleBackgroundColor}: ${surfaceSolidTertiary};

                ${bottomSheetTokens.closeIconColor}: ${textPrimary};
                ${bottomSheetTokens.closeIconBackgroundColor}: ${surfaceTransparentSecondary};
                ${bottomSheetTokens.closeIconBackgroundColorHover}: ${surfaceTransparentSecondaryHover};

                ${bottomSheetTokens.dividerColor}: ${outlineTransparentPrimary};
            `,
        },
        size: {
            m: css`
                ${bottomSheetTokens.borderRadius}: 2.25rem 2.25rem 0 0;

                ${bottomSheetTokens.closeIconSize}: 2.5rem;
                ${bottomSheetTokens.closeIconRadius}: 50%;
                ${bottomSheetTokens.closeIconOffset}: 1.5rem;

                ${bottomSheetTokens.handleGap}: 0.375rem;
                ${bottomSheetTokens.handleWidth}: 3rem;
                ${bottomSheetTokens.handleHeight}: 0.25rem;
                ${bottomSheetTokens.handleBorderRadius}: 0.625rem;

                ${bottomSheetTokens.dividerWidth}: 0.0625rem;
            `,
        },
    },
};
