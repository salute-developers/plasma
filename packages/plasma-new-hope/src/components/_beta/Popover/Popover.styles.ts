import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './Popover.tokens';

export const base = css`
    border-radius: var(${tokens.borderRadius});
`;

export const Wrapper = styled.div`
    position: relative;
    background: var(${tokens.backgroundColor});
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    box-shadow: var(${tokens.boxShadow});
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: var(${tokens.iconOffset});
    right: var(${tokens.iconOffset});
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
    line-height: 0;
    color: var(${tokens.iconColor});

    &:hover {
        color: var(${tokens.iconColorHover});
    }

    &:active {
        color: var(${tokens.iconColorActive});
    }
`;
