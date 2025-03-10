import { css } from '@linaria/core';

import { classes, tokens } from '../../tokens';
import { applyHyphens, applyHyphensNormal } from '../../../../mixins';

export const base = css`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    text-transform: uppercase;

    &.${classes.typoWithNoWrap} {
        white-space: nowrap;
    }

    ${applyHyphensNormal};

    &.${classes.typoWithBreakWord} {
        ${applyHyphens};
    }
`;
