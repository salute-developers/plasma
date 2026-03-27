import {
    bodyS,
    bodyXS,
    onDarkTextPrimary,
    shadowDownSoftM,
    surfaceAccent,
    surfaceSolidCard,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';
import { _beta_tooltipTokens as tokens } from 'src/components/_beta/Tooltip';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.boxShadow}: ${shadowDownSoftM};
                ${tokens.color}: ${textPrimary};
            `,
            accent: css`
                ${tokens.backgroundColor}: ${surfaceAccent};
                ${tokens.boxShadow}: ${shadowDownSoftM};
                ${tokens.color}: ${onDarkTextPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.625rem 0.875rem;
                ${tokens.gap}: 0.375rem;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};
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
            `,
        },
    },
};
