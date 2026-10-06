import { css, toastNewTokens as toastTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyXS,
    inverseSurfaceSolidCardBrightness,
    inverseTextPrimary,
    inverseTextSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: ${inverseTextPrimary};
                ${toastTokens.background}: ${inverseSurfaceSolidCardBrightness};

                ${toastTokens.closeIconColor}: ${inverseTextSecondary};
                ${toastTokens.closeIconColorOnHover}: ${inverseTextSecondary};
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
