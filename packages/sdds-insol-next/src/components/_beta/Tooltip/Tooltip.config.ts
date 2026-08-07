import { css, _beta_tooltipTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyS, surfaceSolidCardBrightness, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.boxShadow}: none;
                ${tokens.dropShadow}: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16))
                    drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08));
                ${tokens.color}: ${textPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.6875rem 0.875rem;
                ${tokens.gap}: 0.375rem;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: 0%;
            `,
        },
    },
};
