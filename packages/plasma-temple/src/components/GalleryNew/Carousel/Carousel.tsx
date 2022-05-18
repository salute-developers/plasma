import React from 'react';
import styled, { css } from 'styled-components';
import { Carousel as PlasmaCarousel, CarouselProps } from '@salutejs/plasma-ui';

import { useDelayedActivation } from '../../../hooks/useDelayedActivation';

const StyledCarousel = styled(PlasmaCarousel)<{ initialized: boolean }>`
    ${({ initialized }) =>
        !initialized &&
        css`
            scroll-behavior: unset;
        `}
`;

export function Carousel(props: CarouselProps) {
    /* Если индекс карусели изначально не равен 0, то выполняется проскролл до нужного элемента
       в результате происходит не очень красивый эффект автоматического скролла при открытии страницы,
       т.к. включена анимация скролла. Чтобы избежать данного эффекта, изначально анимация отключена и
       включается только после не большой задержки.
    */
    const initialized = useDelayedActivation();

    return <StyledCarousel {...props} initialized={initialized} />;
}
