import { css, sheetTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    overlayBlur,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${sheetTokens.sheetOverlayColor}: ${overlaySoft};
                ${sheetTokens.sheetOverlayWithBlurColor}: ${overlayBlur};
                ${sheetTokens.contentBackgroundColor}: ${surfaceSolidCard};
                ${sheetTokens.handleBackgroundColor}: ${surfaceSolidTertiary};
            `,
        },
        handlePlacement: {
            inner: css`
                ${sheetTokens.handleMarginTop}: -2.375rem;
            `,
            outer: css`
                ${sheetTokens.handleMarginTop}: -1.375rem;
            `,
        },
    },
};
