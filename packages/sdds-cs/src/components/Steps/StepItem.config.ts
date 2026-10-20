import {
    inverseTextPrimary,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    textPrimary,
    textPrimaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

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
        },
    },
};
