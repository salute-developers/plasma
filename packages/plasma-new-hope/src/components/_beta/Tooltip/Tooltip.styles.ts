import styled, { css } from 'styled-components';

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
    filter: var(${tokens.dropShadow}, none);
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

export const Tail = styled.div<{ side: 'top' | 'right' | 'bottom' | 'left' }>`
    position: absolute;
    pointer-events: none;
    width: ${({ side }) =>
        side === 'left' || side === 'right' ? `var(${tokens.tailHeight})` : `var(${tokens.tailWidth})`};
    height: ${({ side }) =>
        side === 'left' || side === 'right' ? `var(${tokens.tailWidth})` : `var(${tokens.tailHeight})`};

    ${({ side }) => ({
        [side]: '100%',
    })}

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
