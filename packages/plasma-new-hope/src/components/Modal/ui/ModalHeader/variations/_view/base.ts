import { css } from 'styled-components';

import { classes, tokens } from '../../../../Modal.tokens';

export const base = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    padding: var(${tokens.modalHeaderPadding});

    &.${classes.headerAbsolute} {
        position: absolute;
        inset-inline: 0;
        top: 0;
        z-index: 1;
    }
`;
