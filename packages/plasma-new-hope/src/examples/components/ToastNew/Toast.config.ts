import {
    bodyXS,
    surfaceSolidCardBrightness,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { toastNewTokens as toastTokens } from '../../../components/Toast/ToastNew';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};

                ${toastTokens.closeIconColor}: ${textSecondary};
                ${toastTokens.closeIconColorOnHover}: ${textSecondary};
            `,
        },
        size: {
            m: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5625rem 0.75rem;
                ${toastTokens.closeIconSize}: 1rem;
                ${toastTokens.closeIconButtonSize}: 1rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.125rem;

                ${toastTokens.fontFamily}: ${bodyXS.fontFamily};
                ${toastTokens.fontSize}: ${bodyXS.fontSize};
                ${toastTokens.fontStyle}: ${bodyXS.fontStyle};
                ${toastTokens.fontWeight}: ${bodyXS.fontWeight};
                ${toastTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${toastTokens.lineHeight}: ${bodyXS.lineHeight};
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.borderRadius}: 1.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.25rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
