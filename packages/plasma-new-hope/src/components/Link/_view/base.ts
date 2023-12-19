import { css } from '@linaria/core';

const getColor = (cssVar: string) => `
    color: var(${cssVar}, var(--plasma-link-color));

    ::before {
        opacity: 1;
    }
`;

export const base = css`
    font-family: var(--plasma-link-font-family);

    color: var(--plasma-link-color);

    ::before {
        border-bottom: var(--plasma-link-underline-border) solid currentColor;
    }

    &:hover {
        ${getColor('--plasma-link-color-hover')};
    }

    &:active {
        ${getColor('--plasma-link-color-active')};
    }

    &:visited {
        ${getColor('--plasma-link-color-visited')};
    }

    &:visited:hover {
        ${getColor('--plasma-link-color-visited-hover')};
    }

    &:visited:active {
        ${getColor('--plasma-link-color-visited-active')};
    }
`;
