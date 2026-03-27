import {
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidPrimary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceSolidPrimary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceSolidDefault};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceSolidPrimary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceAccent};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            positive: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceSolidPrimary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfacePositive};
                ${progressTokens.valueColor}: ${textTertiary};
            `,

            negative: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceSolidPrimary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceNegative};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
        },
        size: {
            m: css`
                ${progressTokens.trackHeight}: 0.25rem;
                ${progressTokens.trackBorderRadius}: 0.125rem;

                ${progressTokens.progressFilledHeight}: 0.375rem;
                ${progressTokens.progressFilledBorderRadius}: 0.375rem;

                ${progressTokens.valueMarginLeft}: 0.5rem;
            `,
        },
    },
};
