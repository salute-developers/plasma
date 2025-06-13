import {
    carouselNewConfig,
    component,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ComponentProps } from 'react';
import React from 'react';

import { CarouselOld } from './Legacy/Carousel';
import { config } from './Carousel.config';

const mergedConfig = mergeConfig(carouselNewConfig, config);
const CarouselNew = component(mergedConfig);

type PropsOld = ComponentProps<typeof CarouselOld>;

type PropsNew = ComponentProps<typeof CarouselNew> & { index?: never };

type CarouselProps = PropsOld | PropsNew;

const CarouselComponent = (props: CarouselProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    if (typeof props.index === 'number') {
        return <CarouselOld ref={ref} {...props} />;
    }

    return <CarouselNew ref={ref} {...props} />;
};

const Carousel = fixedForwardRef(CarouselComponent);

export { Carousel };
export type { CarouselProps };
