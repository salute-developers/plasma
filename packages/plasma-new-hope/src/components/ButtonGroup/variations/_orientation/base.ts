import { css } from '@linaria/core';

import { classes, tokens } from '../../ButtonGroup.tokens';
import { buttonClasses } from '../../../Button';

export const base = css`
    flex-direction: var(${tokens.buttonGroupOrientation});

    &.${classes.vertical} .${buttonClasses.buttonItem} {
        width: auto;
    }
`;
