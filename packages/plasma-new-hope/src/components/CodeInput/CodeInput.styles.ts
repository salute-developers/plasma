import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './CodeInput.tokens';

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

export const ItemInput = styled.input<{ hide?: boolean }>`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
    text-align: center;
    caret-color: transparent;
    caret: none;
    opacity: ${({ hide }) => (hide ? '0' : '1')};
`;

export const ItemWrapper = styled.div`
    position: relative;
`;

export const ItemCircle = styled.div<{ filled?: boolean }>`
    position: absolute;
    top: calc(50% - calc(var(${tokens.codeItemCircleSize}) / 2));
    left: calc(50% - calc(var(${tokens.codeItemCircleSize}) / 2));
    width: var(${tokens.codeItemCircleSize});
    height: var(${tokens.codeItemCircleSize});
    box-sizing: border-box;
    border: var(${tokens.codeItemCircleBorderWidth}) solid var(${tokens.codeColor});
    border-radius: 100%;
    background-color: 'transparent';

    &.${classes.itemCirlceFilled} {
        background-color: var(${tokens.codeColor});
    }
`;

export const CaptionWrapper = styled.div<{ captionAlign: 'left' | 'center'; widthValue?: string }>`
    text-align: ${({ captionAlign }) => captionAlign};
    align-self: ${({ captionAlign }) => captionAlign};
    width: ${({ widthValue }) => widthValue || 'auto'};
    white-space: pre-line;
`;
