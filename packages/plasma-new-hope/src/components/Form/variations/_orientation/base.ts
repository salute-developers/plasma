/* stylelint-disable selector-max-universal */

import { css } from 'styled-components';

import { classes } from '../../Form.tokens';

export const base = css`
    &.${classes.vertical} {
        flex-direction: column;

        & > * {
            width: 100%;
            min-width: 0;
        }
    }

    &.${classes.horizontal} {
        flex-direction: row;
        align-items: flex-start;

        & > * {
            flex: 1 1 0%;
            width: auto;
            min-width: 0;
        }
    }
`;
