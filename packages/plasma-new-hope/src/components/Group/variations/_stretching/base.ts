import { css } from 'styled-components';

import { buttonClasses } from '../../../Button';
import { chipClasses } from '../../../Chip';
import { classes } from '../../Group.tokens';

export const base = css`
    &.${classes.filledStretching} {
        width: 100%;

        &.${classes.horizontal} > .${buttonClasses.buttonItem}, &.${classes.horizontal} > .${chipClasses.chipItem} {
            flex: 1 1 0;
            width: auto;
        }

        &.${classes.vertical} > .${buttonClasses.buttonItem}, &.${classes.vertical} > .${chipClasses.chipItem} {
            width: 100%;
        }
    }
`;
