import { FlattenSimpleInterpolation, css, keyframes } from 'styled-components';
import { Breakpoint, mediaQuery } from '@salutejs/plasma-b2c';

export const SBSansTextMono = css`
    font-family: 'SB Sans Text Mono', Helvetica, Arial, sans-serif;
`;

export const iconButtonFade = css`
    cursor: pointer;

    &&&:hover {
        opacity: 1;
    }

    transition: opacity 0.1s;
`;

const gradientAnimation = keyframes`
    0 {
        background-position: 0;
    }
    100% {
        background-position: 50%;
    }
`;

export const addGradient = css`
    background: linear-gradient(to right, rgba(255, 255, 255, 0.96) 0% 50%, #2a72f8 100%);
    background-size: 70%;
    background-position: 0;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    animation: 0.3s ${gradientAnimation} reverse;
`;

export const multipleMediaQuery = (sizes: Array<Breakpoint>) => (func: FlattenSimpleInterpolation | string) =>
    sizes.map((size) => mediaQuery(size)(func));
