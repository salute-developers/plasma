import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from './ProgressBarCircular.tokens';

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: var(${tokens.width});
    height: var(${tokens.height});
`;

export const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`;

export const StyledBackgroundCircle = styled.circle<{ customStrokeWidth?: number }>`
    fill: none;
    stroke: var(${tokens.backgroundStroke});
    stroke-width: ${({ customStrokeWidth }) =>
        customStrokeWidth ? `${customStrokeWidth}px` : `var(${tokens.backgroundStrokeWidth})`};
`;

export const StyledProgressCircle = styled.circle<{ customStrokeWidth?: number }>`
    fill: none;
    stroke: var(${tokens.progressStroke});
    stroke-width: ${({ customStrokeWidth }) =>
        customStrokeWidth ? `${customStrokeWidth}px` : `var(${tokens.progressStrokeWidth})`};
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease-in-out;
`;

export const StyledContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(${tokens.contentColor});
    font-family: var(${tokens.contentFontFamily});
    font-size: var(${tokens.contentFontSize});
    font-style: var(${tokens.contentFontStyle});
    font-weight: var(${tokens.contentFontWeight});
    letter-spacing: var(${tokens.contentLetterSpacing});
    line-height: var(${tokens.contentLineHeight});

    display: flex;
    align-items: center;
    justify-content: center;
`;
