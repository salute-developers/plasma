import { css, keyframes, InterpolationFunction } from 'styled-components';

import { skeletonGradient, skeletonGradientLighter } from '../tokens';

const loading = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100vw);
    }
`;

export interface SkeletonGradientProps {
    lighter?: boolean;
}

export const applySkeletonGradient: InterpolationFunction<SkeletonGradientProps> = ({ lighter }) =>
    css`
        position: relative;
        overflow: hidden;
        z-index: 1; /* for safari */

        &::before {
            content: '';
            position: absolute;
            animation: ${loading} 4s linear infinite;
            background-image: ${lighter ? skeletonGradientLighter : skeletonGradient};
            top: 0;
            left: -100vw;
            width: 200vw;
            height: 100%;
        }
    `;
