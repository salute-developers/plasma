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
                ${sheetTokens.sheetOverlayColor}: var(--overlay-soft);
                ${sheetTokens.sheetOverlayWithBlurColor}: var(--overlay-blur);
                ${sheetTokens.contentBackgroundColor}: var(--surface-solid-card);
                ${sheetTokens.handleBackgroundColor}: var(--surface-solid-tertiary);
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
