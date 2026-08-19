import styled from 'styled-components';
import { applySkeletonPulseGradient, applySkeletonShimmerGradient } from 'src/mixins';

import { classes, privateTokens, tokens } from '../tokens';

export const Wrapper = styled.div<{ animationDuration?: number }>`
    display: contents;

    .apply-skeleton-gradient {
        &.${classes.shimmerAnimation} {
            ${tokens.shimmerDuration}: ${({ animationDuration }) =>
                animationDuration !== undefined ? `${animationDuration}ms` : `var(${tokens.shimmerDuration})`};

            ${applySkeletonShimmerGradient(`var(${privateTokens.lineSkeletonGradient})`, tokens.shimmerDuration)};
        }

        &.${classes.pulseAnimation} {
            ${tokens.pulseDuration}: ${({ animationDuration }) =>
                animationDuration !== undefined ? `${animationDuration}ms` : `var(${tokens.pulseDuration})`};

            ${applySkeletonPulseGradient(
                privateTokens.skeletonFadeInColor,
                privateTokens.skeletonFadeOutColor,
                tokens.pulseDuration,
            )};
        }
    }
`;
