import { css } from '@linaria/core';

export const base = css`
    box-shadow: inset 0 calc(var(--plasma-tabs-underline-height) * -1) 0 var(--plasma-tabs-active-underline-color);
    color: var(--plasma-tabs-active-color);

    :hover {
        cursor: var(--plasma-tabs-cursor);
    }
`;
