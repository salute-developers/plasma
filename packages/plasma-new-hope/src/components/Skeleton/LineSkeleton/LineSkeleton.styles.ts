import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyRoundness, applySkeletonGradient } from '../../../mixins';

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

    --plasma_private-line-skeleton-roundness: ${({ roundness }) => roundness};
    ${applyRoundness('var(--plasma_private-line-skeleton-roundness)')};

    --plasma_private-line-skeleton-gradient: ${({ gradientColor }) => gradientColor};
    ${applySkeletonGradient('var(--plasma_private-line-skeleton-gradient)')};
`;
