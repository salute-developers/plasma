import { css } from '@linaria/core';

export const base = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    width: 100%;
    max-width: var(--plasma_private-grid-max-width, unset);
    gap: calc(var(--plasma_private-grid-gap) * 2);
`;
