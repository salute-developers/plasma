import styled, { css } from 'styled-components';

import { tokens } from './Popover.tokens';

export const base = css`
    border-radius: var(${tokens.borderRadius});
    outline: none;
`;

export const Wrapper = styled.div`
    position: relative;
    background: var(${tokens.backgroundColor});
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    box-shadow: var(${tokens.boxShadow});
    filter: var(${tokens.dropShadow}, none);
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

export const Tail = styled.div<{ side: 'top' | 'right' | 'bottom' | 'left' }>`
    position: absolute;
    pointer-events: none;
    width: ${({ side }) =>
        side === 'left' || side === 'right' ? `var(${tokens.tailHeight})` : `var(${tokens.tailWidth})`};
    height: ${({ side }) =>
        side === 'left' || side === 'right' ? `var(${tokens.tailWidth})` : `var(${tokens.tailHeight})`};

    top: ${({ side }) => (side === 'top' ? '100%' : 'auto')};
    right: ${({ side }) => (side === 'right' ? '100%' : 'auto')};
    bottom: ${({ side }) => (side === 'bottom' ? '100%' : 'auto')};
    left: ${({ side }) => (side === 'left' ? '100%' : 'auto')};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: var(${tokens.tailWidth});
        height: var(${tokens.tailHeight});
        background: var(${tokens.backgroundColor});
        transform: translate(-50%, -50%)
            ${({ side }) =>
                ({
                    top: 'rotate(180deg)',
                    right: 'rotate(-90deg)',
                    bottom: 'rotate(0deg)',
                    left: 'rotate(90deg)',
                }[side])};
        clip-path: shape(
            from 100% 100%,
            line to 0% 100%,
            curve to 50% 0% with calc(25% - var(${tokens.tailSideCurvature}) * 1.24939)
                calc(50% - var(${tokens.tailSideCurvature}) * 3.90435),
            curve to 100% 100% with calc(75% + var(${tokens.tailSideCurvature}) * 1.24939)
                calc(50% - var(${tokens.tailSideCurvature}) * 3.90435),
            close
        );
    }
`;
