import { css, _beta_tooltipTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyS, shadowDownHardM, surfaceSolidCardBrightness, textPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.boxShadow}: ${shadowDownHardM};
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
            `,
        },
    },
};
