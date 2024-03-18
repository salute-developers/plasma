import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { caption } from '../../mixins';

export const base = css`
    display: flex;
    align-items: center;
`;

export const StyledTrack = styled.div`
    width: 100%;
    position: relative;
`;

export const StyledProgress = styled.div<{ value: number }>`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: ${({ value }) => `${value}%`};
`;

export const StyledValue = styled.span`
    ${caption};
`;
