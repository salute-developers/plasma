import {
    onDarkTextSecondary,
    onDarkTextSecondaryActive,
    onDarkTextSecondaryHover,
    shadowDownSoftM,
    surfaceAccent,
    surfaceSolidCard,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';
import { _beta_popoverTokens as tokens } from 'src/components/_beta/Popover';

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
                ${tokens.iconColor}: ${textSecondary};
                ${tokens.iconColorHover}: ${textSecondaryHover};
                ${tokens.iconColorActive}: ${textSecondaryActive};
            `,
            accent: css`
                ${tokens.backgroundColor}: ${surfaceAccent};
                ${tokens.boxShadow}: ${shadowDownSoftM};
                ${tokens.iconColor}: ${onDarkTextSecondary};
                ${tokens.iconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.iconColorActive}: ${onDarkTextSecondaryActive};
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem;
                ${tokens.iconOffset}: 0.75rem;
            `,
            m: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.625rem;
                ${tokens.iconOffset}: 0.625rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem;
                ${tokens.iconOffset}: 0.5rem;
            `,
        },
    },
};
