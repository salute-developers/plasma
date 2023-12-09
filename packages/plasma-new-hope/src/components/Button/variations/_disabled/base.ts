import { css } from '@linaria/core';

import { classes } from '../../Button.tokens';

/* NOTE: check _view/base.css */
/* we use tokens from _view */
/* I don't like this but it's better to kepp disabled separtly */
/* because some projects don't need disabled */
/* so we don't want to keep `:not(:disabled)` inside _view */

export const base = css`
    .${String(classes.buttonRoot)} {
        :disabled {
            opacity: var(--plasma-button-disabled-opacity);
            cursor: not-allowed;

            :hover,
            :active {
                scale: none;

                color: var(--plasma-button-color);
                background-color: var(--plasma-button-bg-color);
            }
        }
    }
`;
