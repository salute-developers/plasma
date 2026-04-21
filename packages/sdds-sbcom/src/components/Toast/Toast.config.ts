import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
     */
    onDarkSurfaceSolidPrimaryBrightness,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onLightSurfaceSolidPrimaryBrightness,
    onLightTextPrimary,
    onLightTextSecondary,
    surfaceSolidCardBrightness,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        closeIconType: 'default',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};

                ${toastTokens.closeIconColor}: ${textSecondary};
                ${toastTokens.closeIconColorOnHover}: ${textSecondary};
            `,
            positive: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};
                ${toastTokens.contentLeftColor}: ${textPositive};

                ${toastTokens.closeIconColor}: ${textSecondary};
                ${toastTokens.closeIconColorOnHover}: ${textSecondary};
            `,
            negative: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};
                ${toastTokens.contentLeftColor}: ${textNegative};

                ${toastTokens.closeIconColor}: ${textSecondary};
                ${toastTokens.closeIconColorOnHover}: ${textSecondary};
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            dark: css`
                ${toastTokens.color}: ${onDarkTextPrimary};
                ${toastTokens.background}: ${onDarkSurfaceSolidPrimaryBrightness};

                ${toastTokens.closeIconColor}: ${onDarkTextSecondary};
                ${toastTokens.closeIconColorOnHover}: ${onDarkTextSecondary};
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            light: css`
                ${toastTokens.color}: ${onLightTextPrimary};
                ${toastTokens.background}: ${onLightSurfaceSolidPrimaryBrightness};

                ${toastTokens.closeIconColor}: ${onLightTextSecondary};
                ${toastTokens.closeIconColorOnHover}: ${onLightTextSecondary};
            `,
        },
        size: {
            m: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5625rem 0.75rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${toastTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.125rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.5rem;
            `,
        },
        closeIconType: {
            default: css`
                ${toastTokens.closeIconButtonSize}: 1rem;
                ${toastTokens.closeIconSize}: 1.5rem;
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.pilledBorderRadius}: 1.5rem;

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.25rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
