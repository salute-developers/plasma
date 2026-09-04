import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    ${applyHover(`
        &:hover {
            color: var(${tokens.itemColorHover});
            background-color: var(${tokens.itemBackgroundColorHover});
        }
    `)}

    &.${classes.selectedSegmentItem} {
        color: var(${tokens.itemSelectedColor});

        ${applyHover(`
            &:hover {
                color: var(${tokens.itemSelectedColorHover});
            }
        `)}

        /* фон в single-режиме рисует StyledThumb (SegmentGroup); здесь он нужен только для multiple */
        &.${classes.segmentMultipleSelection} {
            background-color: var(${tokens.itemSelectedBackgroundColor});

            ${applyHover(`
                &:hover {
                    background-color: var(${tokens.itemSelectedBackgroundColorHover});
                }
            `)}
        }
    }
`;
