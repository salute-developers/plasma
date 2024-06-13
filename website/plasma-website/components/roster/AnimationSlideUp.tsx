import { css } from 'styled-components';

export const AnimationSlideUp = css`
    animation: slideUp 120ms ease-in forwards;

    @keyframes slideUp {
        0% {
            transform: translateY(0.5rem);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
