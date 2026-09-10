import styled, { css } from 'styled-components';

import { degreeMask } from './assets/degree';
import { percentMask } from './assets/percent';
import { lcdFont } from './assets/font';
import { tokens } from './Numbers.tokens';

export const base = css`
    @font-face {
        font-family: 'SBLCD';
        src: url('${lcdFont}') format('opentype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.2em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const StyledMinus = styled.span`
    letter-spacing: 0.13em;
`;

export const StyledValue = styled.span`
    display: inline-flex;
    align-items: flex-end;
    gap: var(${tokens.unitGap});
`;

export const StyledDigits = styled.span`
    display: inline-flex;
    align-items: flex-end;
    gap: var(${tokens.valueGap});
`;

export const StyledFraction = styled.span`
    display: inline-flex;
    align-items: flex-end;
    gap: var(${tokens.fractionGap});
    font-size: var(${tokens.fractionFontSize});
    letter-spacing: 0.05em;
`;

export const StyledSeparator = styled.span`
    font-size: var(${tokens.separatorFontSize});
    letter-spacing: 0.05em;
`;

export const StyledDegree = styled.span`
    align-self: flex-start;
    font-family: var(${tokens.unitFontFamily});
    letter-spacing: 0;
    width: var(${tokens.degreeWidth});
    height: var(${tokens.fontSize});
    background-color: currentColor;
    mask-image: url('${degreeMask}');
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
`;

export const StyledPercent = styled.span`
    align-self: flex-end;
    font-family: var(${tokens.unitFontFamily});
    letter-spacing: 0;
    width: var(${tokens.percentWidth});
    height: var(${tokens.fontSize});
    background-color: currentColor;
    mask-image: url('${percentMask}');
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
`;
