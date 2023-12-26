import { styled } from '@linaria/react';

import type { StyledRootProps } from './Image.types';

export const ratios = {
    '1 / 1': '100',
    '1/1': '100',
    '3 / 4': '133.3333',
    '3/4': '133.3333',
    '4 / 3': '75',
    '4/3': '75',
    '9 / 16': '177.7778',
    '9/16': '177.7778',
    '16 / 9': '56.25',
    '16/9': '56.25',
    '1 / 2': '200',
    '1/2': '200',
    '2 / 1': '50',
    '2/1': '50',
};

export const StyledRoot = styled.div<StyledRootProps>`
    position: relative;
    display: block;
    box-sizing: border-box;
    overflow: hidden;

    height: inherit;
    border-radius: inherit;
    width: ${({ $width }) => $width || '100%'};
    height: ${({ $height }) => $height || '0'};
    padding-bottom: ${({ $ratio, $customRatio }) => ($ratio ? `${ratios[$ratio]}%` : $customRatio)};
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
