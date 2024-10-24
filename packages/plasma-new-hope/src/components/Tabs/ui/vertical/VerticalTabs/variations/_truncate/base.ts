import { css } from '@linaria/core';

import { classes } from '../../../../../tokens';
import { StyledContent } from '../../VerticalTabs.styles';

export const base = css`
    &.${classes.tabsTruncate} {
        max-width: 100%;

        ${StyledContent} {
            max-width: 100%;
        }
    }
`;
