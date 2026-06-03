import styled from 'styled-components';
import { applySkeletonPulseGradient, applySkeletonShimmerGradient } from 'src/mixins';

import { classes, privateTokens } from '../tokens';

export const Wrapper = styled.div`
    display: contents;

    .apply-skeleton-gradient {
        &.${classes.shimmerAnimation} {
            ${applySkeletonShimmerGradient(`var(${privateTokens.lineSkeletonGradient})`)};
        }

        &.${classes.pulseAnimation} {
            ${applySkeletonPulseGradient(privateTokens.skeletonFadeInColor, privateTokens.skeletonFadeOutColor)};
        }
    }
`;
