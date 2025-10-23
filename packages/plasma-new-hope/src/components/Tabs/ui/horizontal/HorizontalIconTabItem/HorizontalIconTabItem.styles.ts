import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { addFocus } from 'src/mixins';

import { tokens } from '../../../tokens';

export const StyledContent = styled.div`
    display: inline-block;
    width: fit-content;
`;

export const ActionContent = styled.div`
    display: flex;
    margin-left: var(${tokens.actionContentMarginLeft});
`;

export const base = css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(${tokens.itemContentGap});

    appearance: none;
    border: none;
    outline: none;
    cursor: var(${tokens.itemCursorOverNotSelected}, var(${tokens.itemCursor}));
    white-space: nowrap;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent;

    &:first-child {
        margin-left: 0;
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0.063rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'var(--border-radius-m , calc(var(--plasma_private-outline-radius) + 0.063rem))',
        customFocusRules: `
            &.focus-visible:focus,
            &[data-focus-visible-added] {
                &::before {
                    z-index: 1;
                    outline: none;
                    box-shadow: 0 0 0 0.063rem var(${tokens.outlineFocusColor});
                }
            }
        `,
    })};
`;
