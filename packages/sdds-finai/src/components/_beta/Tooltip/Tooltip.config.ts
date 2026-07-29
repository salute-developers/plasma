import { css, _beta_tooltipTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodyXS,
    inverseSurfaceSolidCardBrightness,
    inverseTextPrimary,
    shadowDownHardM,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${inverseSurfaceSolidCardBrightness};
                ${tokens.boxShadow}: ${shadowDownHardM};
                ${tokens.color}: ${inverseTextPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.75rem 0.875rem;
                ${tokens.gap}: 0.375rem;
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
