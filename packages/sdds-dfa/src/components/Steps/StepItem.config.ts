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
    textAccent,
    textAccentHover,
} from '@salutejs/sdds-themes/tokens/sdds_dfa';

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
                ${tokens.activeTitleColor}: ${textAccent};
                ${tokens.activeTitleColorHover}: ${textAccentHover};
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceAccent};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceAccentHover};
                ${tokens.completedTitleColor}: ${textPrimary};
                ${tokens.completedTitleColorHover}: ${textPrimaryHover};

                ${tokens.completedBulletBackground}: ${textAccent};
                ${tokens.completedBulletBackgroundHover}: ${textAccentHover};

                ${tokens.bulletActiveBackground}: ${textAccent};

                ${tokens.dividerColor}: ${surfaceAccent};
            `,
            negative: css`
                ${tokens.activeTitleColor}: ${textNegative};
                ${tokens.activeTitleColorHover}: ${textNegativeHover};
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceNegative};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceNegativeHover};
                ${tokens.completedTitleColor}: ${textNegative};
                ${tokens.completedTitleColorHover}: ${textNegativeHover};

                ${tokens.completedBulletBackground}: ${textNegative};
                ${tokens.completedBulletBackgroundHover}: ${textNegativeHover};

                ${tokens.bulletActiveBackground}: ${textNegative};

                ${tokens.dividerColor}: ${surfaceNegative};
            `,
            warning: css`
                ${tokens.activeTitleColor}: ${textWarning};
                ${tokens.activeTitleColorHover}: ${textWarningHover};
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfaceWarning};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceWarningHover};
                ${tokens.completedTitleColor}: ${textWarning};
                ${tokens.completedTitleColorHover}: ${textWarningHover};

                ${tokens.completedBulletBackground}: ${textWarning};
                ${tokens.completedBulletBackgroundHover}: ${textWarningHover};

                ${tokens.bulletActiveBackground}: ${textWarning};

                ${tokens.dividerColor}: ${surfaceWarning};
            `,
            positive: css`
                ${tokens.activeTitleColor}: ${textPositive};
                ${tokens.activeTitleColorHover}: ${textPositiveHover};
                ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.completedIndicatorBackground}: ${surfacePositive};
                ${tokens.completedIndicatorBackgroundHover}: ${surfacePositiveHover};
                ${tokens.completedTitleColor}: ${textPositive};
                ${tokens.completedTitleColorHover}: ${textPositiveHover};

                ${tokens.completedBulletBackground}: ${textPositive};
                ${tokens.completedBulletBackgroundHover}: ${textPositiveHover};

                ${tokens.bulletActiveBackground}: ${textPositive};

                ${tokens.dividerColor}: ${surfacePositive};
            `,
        },
    },
};
