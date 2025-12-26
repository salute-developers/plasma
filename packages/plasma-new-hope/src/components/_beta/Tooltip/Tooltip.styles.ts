import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './Tooltip.tokens';

export const base = css`
    border-radius: var(${tokens.borderRadius});
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: var(${tokens.gap});
    background: var(${tokens.backgroundColor});
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    box-shadow: var(${tokens.boxShadow});
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: var(${tokens.color});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;

export const IconWrapper = styled.div`
    flex: none;
    line-height: 0;
`;
