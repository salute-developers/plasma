import { css } from '@linaria/core';

import { tokens } from '../Link.tokens';

const getColor = (cssVar: string) => `
    color: var(${cssVar}, var(${tokens.linkColor}));

    ::before {
        opacity: 1;
    }
`;

export const base = css`
    color: var(${tokens.linkColor});

    ::before {
        border-bottom: var(${tokens.linkUnderlineBorder}) solid currentColor;
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
