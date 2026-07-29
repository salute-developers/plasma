import {
    bodyS,
    bodyXS,
    inverseSurfaceSolidCard,
    inverseTextPrimary,
    onDarkSurfaceSolidSecondary,
    shadowDownHardS,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, _beta_tooltipTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${inverseSurfaceSolidCard};
                ${tokens.boxShadow}: ${shadowDownHardS};
                ${tokens.color}: ${inverseTextPrimary};
            `,
            secondary: css`
                ${tokens.backgroundColor}: ${onDarkSurfaceSolidSecondary};
                ${tokens.boxShadow}: ${shadowDownHardS};
                ${tokens.color}: ${inverseTextPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 0.5rem 0.75rem;
                ${tokens.gap}: 0.25rem;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: -10%;
            `,
            s: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 0.5rem 0.75rem;
                ${tokens.gap}: 0.25rem;
                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};
                ${tokens.tailWidth}: 14px;
                ${tokens.tailHeight}: 6px;
                ${tokens.tailSideCurvature}: -10%;
            `,
        },
    },
};
