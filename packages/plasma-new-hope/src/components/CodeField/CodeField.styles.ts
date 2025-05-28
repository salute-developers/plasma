import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './CodeField.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min-content;
    align-items: center;

    &.${classes.captionAlignLeft} {
        align-items: start;
    }
`;

export const CodeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CodeGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const Separator = styled.div`
    width: var(${tokens.separatorWidth});
`;

export const ItemInput = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
    text-align: center;
`;

export const CaptionWrapper = styled.div<{ captionAlign: 'left' | 'center'; widthValue?: string }>`
    text-align: ${({ captionAlign }) => captionAlign};
    align-self: ${({ captionAlign }) => captionAlign};
    width: ${({ widthValue }) => widthValue || 'auto'};
    white-space: pre-line;
`;
