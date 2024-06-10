import { css } from '@linaria/core';

import { sheetTokens } from '../../../../components/Sheet';

export const config = {
    defaults: {
        view: 'default',
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
    },
};
