import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { addFocus } from '../../../../../mixins';
import { tokens } from '../../../tokens';

export const base = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;

    gap: var(${tokens.itemContentGap});
    padding: var(${tokens.itemPaddingClear}, var(${tokens.itemPadding}));

    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:first-child {
        margin-left: 0;
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) + 0.063rem)',
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

export const StyledContent = styled.div`
    display: inline-block;
    width: fit-content;

    padding: 0 var(${tokens.itemContentPaddingClear}, var(${tokens.itemContentPadding}));
`;

export const TabItemValue = styled.span`
    color: var(${tokens.itemValueColor});
`;

export const RightContent = styled.div`
    display: flex;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;
