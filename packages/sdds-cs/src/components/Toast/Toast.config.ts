import {
    bodyM,
    onDarkSurfaceSolidPrimaryBrightness,
    onDarkTextAccent,
    onDarkTextAccentMinor,
    onDarkTextPrimary,
    onLightSurfaceSolidPrimaryBrightness,
    onLightTextAccent,
    onLightTextAccentMinor,
    onLightTextPrimary,
    surfaceSolidCardBrightness,
    textAccent,
    textAccentMinor,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        closeIconType: 'thin',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: ${textPrimary};
                ${toastTokens.background}: ${surfaceSolidCardBrightness};

                ${toastTokens.closeIconColor}: ${textAccent};
                ${toastTokens.closeIconColorOnHover}: ${textAccentMinor};
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            dark: css`
                ${toastTokens.color}: ${onDarkTextPrimary};
                ${toastTokens.background}: ${onDarkSurfaceSolidPrimaryBrightness};

                ${toastTokens.closeIconColor}: ${onDarkTextAccent};
                ${toastTokens.closeIconColorOnHover}: ${onDarkTextAccentMinor};
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            light: css`
                ${toastTokens.color}: ${onLightTextPrimary};
                ${toastTokens.background}: ${onLightSurfaceSolidPrimaryBrightness};

                ${toastTokens.closeIconColor}: ${onLightTextAccent};
                ${toastTokens.closeIconColorOnHover}: ${onLightTextAccentMinor};
            `,
        },
        size: {
            s: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5rem 0.75rem;

                ${toastTokens.fontFamily}: ${bodyM.fontFamily};
                ${toastTokens.fontSize}: ${bodyM.fontSize};
                ${toastTokens.fontStyle}: ${bodyM.fontStyle};
                ${toastTokens.fontWeight}: ${bodyM.fontWeight};
                ${toastTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${toastTokens.lineHeight}: ${bodyM.lineHeight};

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.5rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.125rem -0.0625rem 0.75rem;
            `,
        },
        closeIconType: {
            thin: css`
                ${toastTokens.closeIconButtonSize}: 1.5rem;
                ${toastTokens.closeIconSize}: 1.5rem;
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.pilledBorderRadius}: 1.5rem;

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
