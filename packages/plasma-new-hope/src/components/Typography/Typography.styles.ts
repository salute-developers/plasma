import { css } from '@linaria/core';
import { applyHyphens, applyHyphensNormal } from 'src/mixins';

import { classes, tokens } from './tokens';

export const base = css`
    margin: 0;
    padding: 0;

    border: 0;

    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    &.${classes.typoMedium} {
        font-weight: var(${tokens.typoFontWeightMedium});
    }

    &.${classes.typoBold} {
        font-weight: var(${tokens.typoFontWeightBold});
    }

    &.${classes.typoExtraBold} {
        font-weight: var(${tokens.typoFontWeightExtraBold}, var(${tokens.typoFontWeight}));
    }

    &.${classes.typoIsNumeric} {
        font-variant-numeric: tabular-nums;
    }

    &.${classes.typoIsItalic} {
        font-style: italic;
    }

    &.${classes.typoWithNoWrap} {
        white-space: nowrap;
    }

    ${applyHyphensNormal};

    &.${classes.typoWithBreakWord} {
        ${applyHyphens};
    }
`;
