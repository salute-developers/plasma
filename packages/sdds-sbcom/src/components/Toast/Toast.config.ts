import {
    bodyXS,
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
} from '@salutejs/sdds-themes/tokens/sdds_sbcom';
import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${toastTokens.fontFamily}: ${bodyXS.fontFamily};
                ${toastTokens.fontSize}: ${bodyXS.fontSize};
                ${toastTokens.fontStyle}: ${bodyXS.fontStyle};
                ${toastTokens.fontWeight}: ${bodyXS.fontWeight};
                ${toastTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${toastTokens.lineHeight}: ${bodyXS.lineHeight};

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
