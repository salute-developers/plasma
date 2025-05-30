import { css } from 'styled-components';

import { classes, tokens } from '../Link.tokens';

const getColor = (cssVar: string) => `
    color: var(${cssVar}, var(${tokens.linkColor}));
`;

export const base = css`
    color: var(${tokens.linkColor});

    &.${classes.linkUnderlineAlways}, &.${classes.linkUnderlineHover}:hover {
        text-decoration: underline solid var(${tokens.linkUnderlineColor}, currentColor)
            var(${tokens.linkUnderlineBorder}, auto);
        text-underline-offset: var(${tokens.linkUnderlineOffset}, auto);
    }

    &:hover {
        ${getColor(tokens.linkColorHover)};
    }

    &:active {
        ${getColor(tokens.linkColorActive)};
    }

    &:visited {
        ${getColor(tokens.linkColorVisited)};
    }

    &:visited:hover {
        ${getColor(tokens.linkColorVisitedHover)};
    }

    &:visited:active {
        ${getColor(tokens.linkColorVisitedActive)};
    }
`;
