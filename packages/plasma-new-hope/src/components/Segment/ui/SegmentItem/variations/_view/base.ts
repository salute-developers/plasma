import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';
import { RightContent } from '../../SegmentItem.styles';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

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

    &.${classes.selectedSegmentItem} {
        color: var(${tokens.itemSelectedColor});
        background-color: var(${tokens.itemSelectedBackgroundColor});

        ${RightContent} {
            color: var(${tokens.itemSelectedColor});
        }

        ${RightContent}.${classes.segmentAdditionalText} {
            color: var(${tokens.itemSelectedAdditionalColor});
        }

        &:hover {
            color: var(${tokens.itemSelectedColorHover});
            background-color: var(${tokens.itemSelectedBackgroundColorHover});

            ${RightContent} {
                color: var(${tokens.itemSelectedColorHover});
            }

            ${RightContent}.${classes.segmentAdditionalText} {
                color: var(${tokens.itemSelectedAdditionalColorHover});
            }
        }
    }
`;
