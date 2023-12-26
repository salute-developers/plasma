import { css } from '@linaria/core';

import { classes } from '../../../../tokens';
import { StyledContent, StyledContentWrapper } from '../../SegmentGroup.styles';

export const base = css`
    &.${classes.segmentStretch} {
        width: 100%;

        ${StyledContentWrapper}, ${StyledContent}, ${StyledContent} > button {
            width: 100%;
        }
    }
`;
