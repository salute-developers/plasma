import { css } from '@linaria/core';

import { classes } from '../../../../../tokens';
import { StyledContent, StyledContentWrapper } from '../../VerticalTabs.styles';

export const base = css`
    &.${classes.tabsStretch} {
        height: 100%;

        ${StyledContentWrapper}, ${StyledContent}, ${StyledContent} > button {
            height: 100%;
            margin-top: 0;
        }
    }
`;
