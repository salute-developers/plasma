import { css } from '@linaria/core';

import { classes } from '../../../../tokens';
import { StyledContent, StyledContentWrapper } from '../../SegmentGroup.styles';

export const base = css`
    &.${classes.segmentVertical} {
        flex-direction: column;

        ${StyledContentWrapper} {
            flex-direction: column;
        }

        ${StyledContent} {
            flex-direction: column;
        }
    }
`;
