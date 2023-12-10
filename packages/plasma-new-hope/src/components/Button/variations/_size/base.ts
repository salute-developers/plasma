import { css } from '@linaria/core';

import { tokens } from '../../Button.tokens';

export const base = css`
    height: var(${tokens.buttonHeight});
    /* TODO: #714 move these calc's to plasma-mapping | ds-generator and add Math.round() */
    padding: 0 var(${tokens.buttonPadding}, calc(var(${tokens.buttonHeight}) * 1.618 / 4));

    font-family: var(${tokens.buttonFontFamily});
    font-size: var(${tokens.buttonFontSize});
    font-style: var(${tokens.buttonFontStyle});
    font-weight: var(${tokens.buttonFontWeight});
    letter-spacing: var(${tokens.buttonLetterSpacing});
    line-height: var(${tokens.buttonLineHeight});

    /* TODO: #710 make it token API ? */
    --plasma_private-btn-outline-size: var(--plasma-button-outline-size, 0.125rem);
`;
