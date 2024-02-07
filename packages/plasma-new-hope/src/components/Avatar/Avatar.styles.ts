import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from './Avatar.tokens';
import { AvatarProps } from './Avatar.types';

export const base = css`
    position: relative;
`;

export const Wrapper = styled.div<{ isScalable?: AvatarProps['isScalable'] }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(${tokens.backgroundColor});
    overflow: hidden;

    &:hover,
    &:focus {
        scale: ${({ isScalable }) => (isScalable ? `var(${tokens.scaleHover})` : '1')};
        cursor: ${({ isScalable }) => (isScalable ? 'pointer' : 'inherit')};
    }
`;

export const StatusIcon = styled.div<{ backgroundColor: string; isScalable?: AvatarProps['isScalable'] }>`
    position: absolute;
    top: calc(1.02 * 0.85 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
    left: calc(1.02 * 0.85 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
    width: var(${tokens.statusIconSize});
    height: var(${tokens.statusIconSize});
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const Text = styled.span`
    font-size: var(${tokens.fontSize});
    font-weight: var(${tokens.fontWeight});
    line-height: var(${tokens.lineHeight});
    background-image: var(${tokens.color});
    background-color: var(${tokens.color});
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
