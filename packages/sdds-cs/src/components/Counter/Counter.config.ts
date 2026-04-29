import { css, counterTokens } from '@salutejs/plasma-new-hope/emotion';
import {
    surfaceSolidTertiary,
    textPrimary,
    surfaceNegative,
    onDarkTextPrimary,
    bodyS,
} from '@salutejs/sdds-themes/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${counterTokens.color}: ${textPrimary};
                ${counterTokens.background}: ${surfaceSolidTertiary};
            `,
            negative: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                ${counterTokens.background}: ${surfaceNegative};
            `,
        },
        size: {
            s: css`
                ${counterTokens.borderRadius}: 1.25rem;
                ${counterTokens.height}: 1.25rem;
                ${counterTokens.padding}: 0 0.375rem;

                ${counterTokens.fontFamily}: ${bodyS.fontFamily};
                ${counterTokens.fontSize}: ${bodyS.fontSize};
                ${counterTokens.fontStyle}: ${bodyS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyS.lineHeight};
            `,
        },
    },
};
