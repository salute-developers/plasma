import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { classes, tokens } from '../../../../tokens';
import { RightContent } from '../../SegmentItem.styles';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    ${applyHover(`
        &:hover {
            color: var(${tokens.itemColorHover});
            background-color: var(${tokens.itemBackgroundColorHover});

            ${RightContent} {
                color: var(${tokens.itemColorHover});
            }

            ${RightContent}.${classes.segmentAdditionalText} {
                color: var(${tokens.itemAdditionalColorHover});
            }
        }
    `)}

    &.${classes.selectedSegmentItem} {
        color: var(${tokens.itemSelectedColor});

        ${RightContent} {
            color: var(${tokens.itemSelectedColor});
        }

        ${RightContent}.${classes.segmentAdditionalText} {
            color: var(${tokens.itemSelectedAdditionalColor});
        }

        ${applyHover(`
            &:hover {
                color: var(${tokens.itemSelectedColorHover});

                ${RightContent} {
                    color: var(${tokens.itemSelectedColorHover});
                }

                ${RightContent}.${classes.segmentAdditionalText} {
                    color: var(${tokens.itemSelectedAdditionalColorHover});
                }
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
