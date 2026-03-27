import {
    inverseSurfaceSolidDefault,
    onDarkSurfaceSolidDefault,
    onLightSurfaceSolidDefault,
    surfaceSolidTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, dividerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: css`
                ${dividerTokens.background}: ${surfaceSolidTertiary};
            `,
            dark: css`
                ${dividerTokens.background}: ${onDarkSurfaceSolidDefault};
            `,
            light: css`
                ${dividerTokens.background}: ${onLightSurfaceSolidDefault};
            `,
            // TODO поменять на корректный токен --inverse-surface-transparent-tertiary когда он появится
            inverse: css`
                ${dividerTokens.background}: ${inverseSurfaceSolidDefault};
            `,
        },
        size: {
            m: css`
                ${dividerTokens.borderRadius}: 0.0625rem;
            `,
        },
        orientation: {
            horizontal: css`
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
            vertical: css`
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
        },
    },
};
