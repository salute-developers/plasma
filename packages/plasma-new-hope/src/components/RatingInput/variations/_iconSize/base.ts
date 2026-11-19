import { css } from 'styled-components';

import { Content, LimitLabel, Scale, Star, Stars } from '../../RatingInput.styles';
import { classes, tokens } from '../../RatingInput.tokens';

export const base = css`
    row-gap: var(${tokens.valueGap});

    &.${classes.bottomLabels} {
        row-gap: var(${tokens.valueGapWithLimitLabels});
    }

    ${Content} > ${LimitLabel}:first-child {
        margin-inline-end: var(${tokens.sideLabelsGap});
    }

    ${Content} > ${LimitLabel}:last-child {
        margin-inline-start: var(${tokens.sideLabelsGap});
    }

    ${Scale} {
        gap: var(${tokens.limitLabelsGap});
    }

    ${Stars} {
        gap: var(${tokens.iconsGap});
    }

    ${Star} {
        width: var(${tokens.iconSize});
        height: var(${tokens.iconSize});
    }
`;
