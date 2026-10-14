import { surfaceSolidCard, surfaceSolidTertiary } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, sheetTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
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
