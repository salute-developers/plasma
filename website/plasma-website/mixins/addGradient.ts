import { css, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
    0 {
        background-position: 0;
    }
    100% {
        background-position: 100%;
    }
`;

export const addGradient = css`
    background: linear-gradient(to right, rgba(255, 255, 255, 0.96) 0% 50%, #2a72f8 100%);
    background-size: 200%;
    background-position: 0;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    animation: 0.3s ${gradientAnimation} forwards;
`;
