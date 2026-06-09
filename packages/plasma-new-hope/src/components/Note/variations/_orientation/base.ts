import { css } from 'styled-components';

import { classes, tokens } from '../../Note.tokens';
import { ActionContentContainer, ContentWrapper } from '../../Note.styles';

export const base = css`
    &.${classes.orientationHorizontal} {
        flex-direction: row;

        ${ContentWrapper} {
            flex: 1;
            min-width: 0;
        }

        ${ActionContentContainer} {
            align-self: flex-start;
            margin: var(${tokens.actionContentMargin});
        }

        .${classes.closeIcon} {
            position: static;
            right: unset;
            top: unset;
            padding: 0;
            align-self: flex-start;
            margin: var(${tokens.closeIconMargin});
        }

        &.${classes.hasClose} {
            padding-right: var(${tokens.closeIconRight});
        }
    }
`;
