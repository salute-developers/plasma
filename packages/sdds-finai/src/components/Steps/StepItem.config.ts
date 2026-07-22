import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    inverseTextPrimary,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    surfaceAccent,
    surfaceAccentHover,
    surfaceNegative,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    surfaceWarning,
    surfaceWarningHover,
    textNegative,
    textNegativeHover,
    textPositive,
    textPositiveHover,
    textPrimary,
    textPrimaryHover,
    textWarning,
    textWarningHover,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.completedIndicatorColor}: ${inverseTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${inverseTextPrimary};
                ${tokens.completedIndicatorBackground}: ${surfaceSolidDefault};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.completedTitleColor}: ${textPrimary};
                ${tokens.completedTitleColorHover}: ${textPrimaryHover};

                ${tokens.dividerColor}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceAccent};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceAccentHover};
                ${tokens.completedTitleColor}: ${textPrimary};
                ${tokens.completedTitleColorHover}: ${textPrimaryHover};

                ${tokens.dividerColor}: ${surfaceAccent};
            `,
            negative: css`
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceNegative};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceNegativeHover};
                ${tokens.completedTitleColor}: ${textNegative};
                ${tokens.completedTitleColorHover}: ${textNegativeHover};

                ${tokens.dividerColor}: ${surfaceNegative};
            `,
            warning: css`
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceWarning};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceWarningHover};
                ${tokens.completedTitleColor}: ${textWarning};
                ${tokens.completedTitleColorHover}: ${textWarningHover};

                ${tokens.dividerColor}: ${surfaceWarning};
            `,
            positive: css`
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfacePositive};
                ${tokens.completedIndicatorBackgroundHover}: ${surfacePositiveHover};
                ${tokens.completedTitleColor}: ${textPositive};
                ${tokens.completedTitleColorHover}: ${textPositiveHover};

                ${tokens.dividerColor}: ${surfacePositive};
            `,
        },
    },
};
