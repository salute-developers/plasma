import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from './ProgressBarCircular.tokens';

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: var(${tokens.height});
    height: var(${tokens.height});
`;

export const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`;

export const StyledBackgroundCircle = styled.circle<{ customStrokeWidth?: number }>`
    fill: none;
    r: ${({ customStrokeWidth = `var(${tokens.strokeSize})` }) =>
        `calc(50px - calc(calc(50px / var(${tokens.size})) * ${customStrokeWidth}))`};
    stroke: var(${tokens.backgroundStroke});
    stroke-width: ${({ customStrokeWidth = `var(${tokens.strokeSize})` }) =>
        `calc(calc(50px / var(${tokens.size})) * calc(${customStrokeWidth}) * 2)`};
`;

export const StyledProgressCircle = styled.circle<{ customStrokeWidth?: number; percent?: number }>`
    --percentage: ${({ percent }) => percent ?? 0};
    --radius: ${({ customStrokeWidth = `var(${tokens.strokeSize})` }) =>
        `calc(50px - calc(calc(50px / var(${tokens.size})) * ${customStrokeWidth}))`};
    --circumference: calc(calc(2 * 3.1415926535) * var(--radius));
    --dashoffset: calc(var(--circumference) - (var(--percentage, 0) * var(--circumference) / 100));

    fill: none;
    stroke: var(${tokens.progressStroke});
    stroke-width: ${({ customStrokeWidth = `var(${tokens.strokeSize})` }) =>
        `calc(calc(50px / var(${tokens.size})) * calc(${customStrokeWidth}) * 2)`};
    stroke-linecap: round;
    r: var(--radius);
    stroke-dasharray: var(--circumference);
    stroke-dashoffset: var(--dashoffset);
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
