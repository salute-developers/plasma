import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { classes, tokens } from '../Link.tokens';

const getColor = (cssVar: string) => `
    color: var(${cssVar}, var(${tokens.linkColor}));
`;

const underline = `
    text-decoration: underline solid var(${tokens.linkUnderlineColor}, currentColor)
        var(${tokens.linkUnderlineBorder}, auto);
    text-underline-offset: var(${tokens.linkUnderlineOffset}, auto);
`;

export const base = css`
    /* TODO: Удалить после обновления конфигов во всех дсп */
    font-family: var(${tokens.linkFontFamily});

    color: var(${tokens.linkColor});

    &.${classes.linkUnderlineAlways} {
        ${underline}
    }

    ${applyHover(`
        &.${classes.linkUnderlineHover}:hover {
            ${underline}
        }

        &:hover {
            ${getColor(tokens.linkColorHover)};
        }

        &:visited:hover {
            ${getColor(tokens.linkColorVisitedHover)};
        }
    `)}

    &:active {
        ${getColor(tokens.linkColorActive)};
    }

    &:visited {
        ${getColor(tokens.linkColorVisited)};
    }

    &:visited:active {
        ${getColor(tokens.linkColorVisitedActive)};
    }
`;
