import styled, { css } from 'styled-components';

import { classes, tokens } from './CodeField.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min-content;
    align-items: center;

    &.${classes.captionAlignLeft} {
        align-items: flex-start;
    }
`;

export const CodeWrapper = styled.div`
    position: relative;
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

export const ItemInput = styled.div`
    position: relative;
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ItemCaret = styled.span`
    position: absolute;
    width: 0.0625rem;
    background-color: var(${tokens.caretColor});
    animation: caretBlink 1s step-end infinite;

    @keyframes caretBlink {
        0%,
        50% {
            opacity: 1;
        }

        50.01%,
        100% {
            opacity: 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

export const ItemValue = styled.span`
    position: relative;

    ${ItemCaret} {
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
    }
`;

export const ItemPlaceholder = styled.span`
    opacity: 0.54;
`;

export const NativeInput = styled.input`
    position: absolute;
    z-index: 1;
    inset: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    appearance: none;
    opacity: 1;
    color: transparent;
    caret-color: transparent;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    line-height: 1;
    letter-spacing: -0.5em;
    cursor: text;

    &::selection {
        color: transparent;
        background: transparent;
    }

    &:autofill,
    &:-webkit-autofill {
        color: transparent !important;
        -webkit-text-fill-color: transparent !important;
        background: transparent !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const CaptionWrapper = styled.div<{ captionAlign: 'left' | 'center'; widthValue?: string }>`
    text-align: ${({ captionAlign }) => captionAlign};
    align-self: ${({ captionAlign }) => captionAlign};
    width: ${({ widthValue }) => widthValue || 'auto'};
    white-space: pre-line;
`;
