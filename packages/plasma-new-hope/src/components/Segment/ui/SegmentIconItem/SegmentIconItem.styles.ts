import styled, { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { tokens } from '../../tokens';

export const StyledIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: var(${tokens.iconItemContentPadding});
`;

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 0;
    white-space: nowrap;
    z-index: 2;

    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: var(${tokens.itemMarginLeft});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:first-child {
        margin-left: 0;
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0.063rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) + var(--plasma_private-clip-outline-radius))',
    })};
`;
