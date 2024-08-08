import { css, sheetTokens } from '@salutejs/plasma-new-hope/styled-components';

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
