import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css`
    position: relative;
    display: block;
    box-sizing: border-box;
    overflow: hidden;

    height: inherit;
    border-radius: inherit;
    width: var(--plasma_private-image-width);
    height: var(--plasma_private-image-height);
    padding-bottom: var(--plasma_private-image-pading-bottom);
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export const StyledDivImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
`;
