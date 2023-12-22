import { styled } from '@linaria/react';

import { applyRoundness, applySkeletonGradient } from '../../../mixins';

import type { StyledRectProps } from './RectSkeleton.types';

export const StyledRectSkeleton = styled.div<StyledRectProps>`
    position: relative;
    overflow: hidden;
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    --plasma_private-line-skeleton-roundness: ${({ roundness }) => roundness};
    ${applyRoundness('var(--plasma_private-line-skeleton-roundness)')};

    --plasma_private-line-skeleton-gradient: ${({ gradientColor }) => gradientColor};
    ${applySkeletonGradient('var(--plasma_private-line-skeleton-gradient)')};
`;
