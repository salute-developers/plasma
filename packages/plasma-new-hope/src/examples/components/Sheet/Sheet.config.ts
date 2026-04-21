import {
    overlayBlur,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { sheetTokens } from '../../../components/Sheet';

export const config = {
    defaults: {
        view: 'default',
        handlePlacement: 'outer',
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
