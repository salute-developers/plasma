import { RectSkeleton, RectSkeletonProps } from '@salutejs/plasma-ui';
import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

export const ratios = {
    '1 / 1': '100',
    '3 / 4': '133.3333',
    '4 / 3': '75',
    '9 / 16': '177.7778',
    '16 / 9': '56.25',
    '1 / 2': '200',
    '2 / 1': '50',
};

export type CardRatio = keyof typeof ratios;

export interface CardSkeletonProps extends PropsWithChildren<Omit<RectSkeletonProps, 'height' | 'width'>> {
    /** Соотношение сторон */
    ratio?: CardRatio;
    /** Нестандартное соотношение сторон в процентах */
    customRatio?: string;
    /** Ширина скелетона карточки */
    width?: string | number;
    /** Высота скелетона карточки */
    height?: string | number;
}

const StyledCardSkeleton = styled(RectSkeleton)<{ ratio?: CardRatio; customRatio?: string }>`
    ${({ ratio, customRatio }) =>
        (ratio || customRatio) &&
        css`
            height: 0;
            padding-bottom: ${ratio ? ratios[ratio] : customRatio}%;
        `}
`;

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ children, ...restProps }) => {
    return (
        <StyledCardSkeleton height={0} width="100%" ratio="3 / 4" {...restProps}>
            {children}
        </StyledCardSkeleton>
    );
};
