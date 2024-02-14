import { css } from '@linaria/core';

import { classes } from '../../../../Panel.tokens';
import { ButtonWrapper } from '../../PanelHeader.styles';

export const base = css`
    height: fit-content;
    display: flex;
    flex-direction: row;

    &.${classes.hasHeader} {
        position: absolute;
        width: 100%;
        justify-content: space-between;

        ${ButtonWrapper} {
            background: transparent;
        }

        &.${classes.isRightClose} {
            justify-content: flex-end;
        }
    }
`;
