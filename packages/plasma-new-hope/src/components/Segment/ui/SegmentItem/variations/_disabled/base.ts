import { css } from 'styled-components';

import { classes, tokens } from '../../../../tokens';
import { RightContent } from '../../SegmentItem.styles';

export const base = css`
    &[disabled] {
        cursor: not-allowed;

        &:hover {
            color: var(${tokens.itemColor});
            background-color: var(${tokens.itemBackgroundColor});

            ${RightContent} {
                color: var(${tokens.itemColor});
            }

            ${RightContent}.${classes.segmentAdditionalText} {
                color: var(${tokens.itemAdditionalColor});
            }
        }

        &.${classes.selectedSegmentItem}:hover {
            color: var(${tokens.itemSelectedColor});
            background-color: var(${tokens.itemSelectedBackgroundColor});

            ${RightContent} {
                color: var(${tokens.itemSelectedColor});
            }

            ${RightContent}.${classes.segmentAdditionalText} {
                color: var(${tokens.itemSelectedAdditionalColor});
            }
        }
    }
`;
