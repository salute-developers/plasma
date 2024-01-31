import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from './Avatar.tokens';
import { AvatarProps, ActionTypes } from './Avatar.types';

export const base = css`
    position: relative;
`;

export const Wrapper = styled.div<{ actionType?: AvatarProps['actionType']; actionIcon?: string }>`
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
        scale: ${({ actionType }) => (actionType === ActionTypes.SCALE ? `var(${tokens.scaleHover})` : '1')};
        cursor: ${({ actionType }) => (actionType ? 'pointer' : 'inherit')};

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            display: ${({ actionType }) => (actionType === ActionTypes.HOVER ? 'flex' : 'none')};
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            // TODO: заменить на компонент Overlay
            background-color: ${({ actionIcon }) => (actionIcon ? 'var(--on-dark-overlay-soft' : 'transparent')};
            background-image: ${({ actionIcon }) => (actionIcon ? `url(${actionIcon})` : 'none')};
            background-repeat: no-repeat;
            background-size: 30%;
            background-position: center center;
            cursor: pointer;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const StatusIcon = styled.div<{ backgroundColor: string }>`
    position: absolute;
    top: calc(0.85 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
    left: calc(0.85 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
    width: var(${tokens.statusIconSize});
    height: var(${tokens.statusIconSize});
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
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
