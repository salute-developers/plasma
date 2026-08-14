import styled from 'styled-components';
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

        ${tokens.shimmerDuration}: ${({ animationDuration }) =>
            animationDuration !== undefined ? `${animationDuration}ms` : `var(${tokens.shimmerDuration})`};

        ${applySkeletonShimmerGradient(`var(${privateTokens.lineSkeletonGradient})`, tokens.shimmerDuration)};
    }

    &.${classes.pulseAnimation} {
        ${privateTokens.skeletonFadeInColor}: ${({ customFadeInColor }) =>
            customFadeInColor || `var(${tokens.fadeInColor})`};
        ${privateTokens.skeletonFadeOutColor}: ${({ customFadeOutColor }) =>
            customFadeOutColor || `var(${tokens.fadeOutColor})`};

        ${tokens.pulseDuration}: ${({ animationDuration }) =>
            animationDuration !== undefined ? `${animationDuration}ms` : `var(${tokens.pulseDuration})`};

        ${applySkeletonPulseGradient(
            privateTokens.skeletonFadeInColor,
            privateTokens.skeletonFadeOutColor,
            tokens.pulseDuration,
        )};
    }
`;
