// TODO: switch engine
// import { css } from '../../../engines/styled-components';
// import { css } from '../../../engines/linaria';
import { css } from '@linaria/core';

export const base = css`
    color: var(--plasma-button-color);
    background-color: var(--plasma-button-bg-color);

    :hover {
        color: var(--plasma-button-color-hover);
        background-color: var(--plasma-button-bg-color-hover, var(--plasma-button-bg-color));
    }

    :active {
        color: var(--plasma-button-color-active);
        background-color: var(--plasma-button-bg-color-active, var(--plasma-button-bg-color));

        /* TODO: */
        scale: 1.02;
        opacity: 0.8;
    }
`;
