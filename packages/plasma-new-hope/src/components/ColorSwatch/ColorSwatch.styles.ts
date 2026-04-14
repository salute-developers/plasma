import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './ColorSwatch.tokens';

export const base = css`
    --plasma-colorswatch-cs-size: var(${tokens.colorSwatchSize}, 1.75rem);
    --plasma-colorswatch-cs-radius: var(${tokens.colorSwatchRadius}, 62.5rem);
    --plasma-colorswatch-alpha-overlay-color: var(${tokens.alphaOverlayColor});
    --plasma-colorswatch-alpha-overlay-bg: var(${tokens.alphaOverlayBackground});

    -webkit-tap-highlight-color: transparent;
    border: none;
    appearance: none;
    display: block;
    line-height: 1;
    position: relative;
    width: var(--plasma-colorswatch-cs-size);
    height: var(--plasma-colorswatch-cs-size);
    min-width: var(--plasma-colorswatch-cs-size);
    min-height: var(--plasma-colorswatch-cs-size);
    border-radius: var(--plasma-colorswatch-cs-radius);
    color: inherit;
    text-decoration: none;
`;

export const ColorSwatchAlphaOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: var(--plasma-colorswatch-cs-radius);
    background-size: 0.5rem 0.5rem;
    background-position: 0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;

    background-image: linear-gradient(45deg, var(--plasma-colorswatch-alpha-overlay-color) 25%, transparent 25%),
        linear-gradient(-45deg, var(--plasma-colorswatch-alpha-overlay-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--plasma-colorswatch-alpha-overlay-color) 75%),
        linear-gradient(-45deg, var(--plasma-alpha-overlay-bg) 75%, var(--plasma-colorswatch-alpha-overlay-color) 75%);
`;

export const ColorSwatchShadowOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: var(--plasma-colorswatch-cs-radius);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0.0625rem inset, rgb(0, 0, 0, 0.15) 0 0 0.25rem inset;
`;

export const ColorSwatchColorOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: var(--plasma-colorswatch-cs-radius);
`;

export const ColorSwatchChildrenOverlay = styled.span`
    position: absolute;
    inset: 0;
    border-radius: var(--plasma-colorswatch-cs-radius);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
