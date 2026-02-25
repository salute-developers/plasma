import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { applyRoundness, applySkeletonPulseGradient, applySkeletonShimmerGradient } from 'src/mixins';

import { classes, privateTokens, tokens } from '../tokens';

import type { StyledVisibleLineProps } from './LineSkeleton.types';

export const base = css`
    display: flex;
    align-items: center;

    width: 100%;
`;

export const StyledVisibleLine = styled.div<StyledVisibleLineProps>`
    position: relative;
    overflow: hidden;

    width: 100%;

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
