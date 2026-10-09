import {
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceSolidTertiary,
    surfaceSolidTertiaryActive,
    surfaceSolidTertiaryHover,
    textAccent,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, drawerTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${drawerTokens.background}: ${surfaceSolidCard};
                ${drawerTokens.shadow}: 0 3.75rem 7rem -0.5rem rgba(0, 0, 0, 0.08);
                ${drawerTokens.contentBackgroundColor}: ${surfaceSolidCard};
                ${drawerTokens.closeIconColor}: ${textAccent};

                ${drawerTokens.scrollbarWidth}: 0.25rem;
                ${drawerTokens.scrollbarOffsetRight}: 0.25rem;
                ${drawerTokens.scrollbarThumbBackgroundColor}: ${surfaceSolidTertiary};
                ${drawerTokens.scrollbarThumbBackgroundColorHover}: ${surfaceSolidTertiaryHover};
                ${drawerTokens.scrollbarThumbBackgroundColorActive}: ${surfaceSolidTertiaryActive};
                ${drawerTokens.scrollbarTrackBackgroundColor}: ${surfaceSolidPrimary};
            `,
        },
        size: {
            m: css`
                ${drawerTokens.padding}: 1.5rem;
            `,
        },
        borderRadius: {
            none: css`
                ${drawerTokens.borderRadius}: 0;
            `,
            default: css`
                ${drawerTokens.borderRadius}: 1.25rem;
            `,
        },
    },
};

export const headerConfig = {
    base: css`
        padding-bottom: 1.5rem;
    `,
};

export const contentConfig = {
    variations: {
        view: {
            default: css`
                padding-right: 1rem;
            `,
        },
    },
};
