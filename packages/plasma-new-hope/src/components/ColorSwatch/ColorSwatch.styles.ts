import styled, { css } from 'styled-components';

import { tokens } from './ColorSwatch.tokens';

const size = `var(${tokens.colorSwatchSize}, 1.75rem)`;
const radius = `var(${tokens.colorSwatchRadius}, 62.5rem)`;
const alphaOverlayColor = `var(${tokens.alphaOverlayColor}, transparent)`;
const alphaOverlayBackground = `var(${tokens.alphaOverlayBackground}, transparent)`;

export const base = css`
    -webkit-tap-highlight-color: transparent;
    border: none;
    appearance: none;
    display: block;
    line-height: 1;
    position: relative;
    width: ${size};
    height: ${size};
    min-width: ${size};
    min-height: ${size};
    border-radius: ${radius};
    color: inherit;
    text-decoration: none;
`;

export const ColorSwatchAlphaOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: ${radius};
    background-size: 0.5rem 0.5rem;
    background-position: 0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;

    background-image: linear-gradient(45deg, ${alphaOverlayColor} 25%, transparent 25%),
        linear-gradient(-45deg, ${alphaOverlayColor} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${alphaOverlayColor} 75%),
        linear-gradient(-45deg, ${alphaOverlayBackground} 75%, ${alphaOverlayColor} 75%);
`;

export const ColorSwatchShadowOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: ${radius};
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0.0625rem inset, rgb(0, 0, 0, 0.15) 0 0 0.25rem inset;
`;

export const ColorSwatchColorOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: ${radius};
`;

export const ColorSwatchChildrenOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: ${radius};
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
