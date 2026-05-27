import { css } from 'styled-components';

import { classes, tokens } from './List.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;

    &.${classes.hasListBackground} {
        background: var(${tokens.listBackground});
        border-radius: var(${tokens.listBorderRadius});
        padding: var(${tokens.listPadding});
    }
`;
