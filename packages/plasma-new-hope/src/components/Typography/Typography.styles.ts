import { css } from '@linaria/core';

import { applyHyphens, applyHyphensNormal } from '../../mixins';

import { classes, tokens } from './tokens';

export const base = css`
    margin: 0;
    padding: 0;

    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    border: 0;

    &.${classes.typoBold} {
        font-weight: var(${tokens.typoFontWeightBold});
    }

    &.${classes.typoMedium} {
        font-weight: var(${tokens.typoFontWeightMedium});
    }

    &.${classes.typoWithNoWrap} {
        white-space: nowrap;
    }

    &.${classes.typoIsNumeric} {
        font-variant-numeric: tabular-nums;
    }

    ${applyHyphensNormal};

    &.${classes.typoWithBreakWord} {
        ${applyHyphens};
    }
`;
