import { css } from '@linaria/core';

// здесь будет импорт непосредственно из темы, например
// import { containerTokens } from '@salutejs/plasma-themes/tokens';
import { containerTokens } from './tokens';

export const config = {
    variations: {
        view: {
            onDark: css`
                ${containerTokens.onDark}
            `,
            onLight: css`
                ${containerTokens.onLight}
            `,
        },
    },
};
