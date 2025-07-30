import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { addFocus } from '../../../../../mixins';
import { classes, tokens } from '../../../tokens';

export const StyledContent = styled.div`
    display: inline-block;
    width: fit-content;

    padding: 0 var(${tokens.itemContentPaddingClear}, var(${tokens.itemContentPadding}));
`;

export const TabItemValue = styled.span`
    color: var(${tokens.itemValueColor});

    font-family: var(${tokens.valueFontFamily}, var(${tokens.fontFamily}));
    font-size: var(${tokens.valueFontSize}, var(${tokens.fontSize}));
    font-style: var(${tokens.valueFontStyle}, var(${tokens.fontStyle}));
    font-weight: var(${tokens.valueFontWeight}, var(${tokens.fontWeight}));
    letter-spacing: var(${tokens.valueLetterSpacing}, var(${tokens.letterSpacing}));
    line-height: var(${tokens.valueLineHeight}, var(${tokens.lineHeight}));
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

export const base = css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(${tokens.itemContentGap});

    padding: var(${tokens.itemPaddingClear}, var(${tokens.itemPadding}));

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

    &.${classes.tabsTruncate} {
        ${StyledContent} {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        ${TabItemValue} {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
