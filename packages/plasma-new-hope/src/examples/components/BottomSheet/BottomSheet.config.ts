import { css } from 'styled-components';

import { bottomSheetTokens } from '../../../components/BottomSheet';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${bottomSheetTokens.overlayColor}: var(--overlay-soft);
                ${bottomSheetTokens.overlayWithBlurColor}: var(--overlay-blur);
                ${bottomSheetTokens.contentBackgroundColor}: var(--surface-solid-card);
                ${bottomSheetTokens.handleBackgroundColor}: var(--surface-solid-tertiary);

                ${bottomSheetTokens.closeIconColor}: var(--text-primary);
                ${bottomSheetTokens.closeIconBackgroundColor}: var(--surface-transparent-secondary);
                ${bottomSheetTokens.closeIconBackgroundColorHover}: var(--surface-transparent-secondary-hover);

                ${bottomSheetTokens.dividerColor}: var(--outline-transparent-primary);
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
