import { styled } from '@linaria/react';
import { applyRoundness, applySkeletonPulseGradient, applySkeletonShimmerGradient } from 'src/mixins';

import { classes, privateTokens, tokens } from '../tokens';

import type { StyledRectProps } from './RectSkeleton.types';

export const StyledRectSkeleton = styled.div<StyledRectProps>`
    position: relative;
    overflow: hidden;
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    ${privateTokens.lineSkeletonRoundness}: ${({ roundness }) => roundness};
    ${applyRoundness(`var(${privateTokens.lineSkeletonRoundness})`)};

    &.${classes.shimmerAnimation} {
        ${privateTokens.lineSkeletonGradient}: ${({ gradientColor }) =>
            gradientColor || `var(${tokens.gradientColor})`};

        ${applySkeletonShimmerGradient(`var(${privateTokens.lineSkeletonGradient})`, tokens.shimmerDuration)};
    }

    &.${classes.pulseAnimation} {
        ${privateTokens.skeletonFadeInColor}: ${({ customFadeInColor }) =>
            customFadeInColor || `var(${tokens.fadeInColor})`};
        ${privateTokens.skeletonFadeOutColor}: ${({ customFadeOutColor }) =>
            customFadeOutColor || `var(${tokens.fadeOutColor})`};

        ${applySkeletonPulseGradient(
            privateTokens.skeletonFadeInColor,
            privateTokens.skeletonFadeOutColor,
            tokens.pulseDuration,
        )};
    }
`;
