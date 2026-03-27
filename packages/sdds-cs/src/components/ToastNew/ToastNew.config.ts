import {
    bodyM,
    surfaceSolidCardBrightness,
    textAccent,
    textAccentMinor,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, toastNewTokens as toastTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};

                ${toastTokens.closeIconColor}: ${textAccent};
                ${toastTokens.closeIconColorOnHover}: ${textAccentMinor};
            `,
        },
        size: {
            s: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5rem 0.75rem;
                ${toastTokens.closeIconSize}: 1.5rem;
                ${toastTokens.closeIconButtonSize}: 1.5rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.125rem -0.0625rem 0.75rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.5rem -0.0625rem 0rem;

                ${toastTokens.fontFamily}: ${bodyM.fontFamily};
                ${toastTokens.fontSize}: ${bodyM.fontSize};
                ${toastTokens.fontStyle}: ${bodyM.fontStyle};
                ${toastTokens.fontWeight}: ${bodyM.fontWeight};
                ${toastTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${toastTokens.lineHeight}: ${bodyM.lineHeight};
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.borderRadius}: 1.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
