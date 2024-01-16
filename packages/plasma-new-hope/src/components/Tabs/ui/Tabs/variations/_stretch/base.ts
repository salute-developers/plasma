import { css } from '@linaria/core';

import { classes } from '../../../../tokens';
import { StyledContent, StyledContentWrapper } from '../../Tabs.styles';

export const base = css`
    &.${classes.tabsStretch} {
        width: 100%;

        ${StyledContentWrapper}, ${StyledContent}, ${StyledContent} > button {
            width: 100%;
        }
    }
`;
