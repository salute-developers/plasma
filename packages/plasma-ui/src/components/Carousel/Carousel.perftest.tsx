import React, { useRef, useCallback } from 'react';
import { CarouselItemVirtual } from '@salutejs/plasma-core';
import { useVirtual } from '@salutejs/use-virtual';

import { Row } from '../Grid';

import {
    CarouselGridWrapper,
    Carousel,
    CarouselLite,
    CarouselVirtual,
    CarouselItem,
    CarouselCol,
    useRemoteHandlers,
} from '.';

const items = Array(100)
    .fill({
        title: 'Заголовок',
        subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        imageSrc: '/images/320_320_n.jpg',
    })
    .map(({ title, subtitle, imageSrc }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
    }));

const basicCarouselStyle = { paddingTop: '1.25rem', paddingBottom: '1.25rem' };

const basicProps = {
    displayGrid: true,
    animatedScrollByIndex: true,
    scrollAlign: 'start' as const,
    scrollSnapType: 'mandatory' as const,
    scrollSnapAlign: 'start' as const,
    detectActive: true,
    detectThreshold: 0.5,
};

export const Basic = () => {
    const {
        animatedScrollByIndex,
        scrollAlign,
        scrollSnapType,
        scrollSnapAlign,
        detectActive,
        detectThreshold,
    } = basicProps;

    const axis = 'x';
    const delay = 30;
    const longDelay = 150;
    const [index, setIndex] = useRemoteHandlers({
        initialIndex: 0,
        axis,
        delay,
        longDelay,
        min: 0,
        max: items.length - 1,
    });

    return (
        <CarouselGridWrapper>
            <Carousel
                id="carousel"
                as={Row}
                axis={axis}
                index={index}
                animatedScrollByIndex={animatedScrollByIndex}
                scrollAlign={scrollAlign}
                scrollSnapType={scrollSnapType}
                detectActive={detectActive as true}
                detectThreshold={detectThreshold}
                onIndexChange={setIndex}
                style={basicCarouselStyle}
            >
                {items.map(({ title, subtitle }, i) => (
                    <CarouselCol
                        key={`item:${i}`}
                        size={3}
                        sizeXL={4}
                        scrollSnapAlign={scrollSnapAlign}
                        aria-label={`${i + 1} из ${items.length}`}
                        aria-selected={i === index}
                    >
                        {title}
                        {subtitle}
                    </CarouselCol>
                ))}
            </Carousel>
        </CarouselGridWrapper>
    );
};

const carouselItemWidth = 450;
const carouselVirtualStyle = { paddingTop: '1.25rem', paddingBottom: '1.25rem', height: '22rem' };
const carouselItemVirtualStyle = { width: `${carouselItemWidth}px` };

export const CarouselVirtualBasic = () => {
    // INFO: deviceScale = 1 (Mobile), deviceScale = 2 (Sberbox, TV, Portal)
    const parentRef = useRef(null);
    const axis = 'x';

    const gap = 40;

    const { visibleItems, totalSize } = useVirtual({
        itemCount: 100,
        parentRef,
        axis,
        // estimateSize должен возвращать значение в px.
        estimateSize: useCallback(() => carouselItemWidth + gap, [carouselItemWidth, gap]),
        overscan: 6,
    });

    return (
        <CarouselGridWrapper>
            <CarouselVirtual ref={parentRef} as={Row} axis={axis} style={carouselVirtualStyle} virtualSize={totalSize}>
                {visibleItems.map(({ index: i, start }) => {
                    const { title, subtitle } = items[i];
                    return (
                        <CarouselItemVirtual
                            key={`item:${i}`}
                            left={start}
                            style={carouselItemVirtualStyle}
                            aria-label={`${i + 1} из ${items.length}`}
                        >
                            {title}
                            {subtitle}
                        </CarouselItemVirtual>
                    );
                })}
            </CarouselVirtual>
        </CarouselGridWrapper>
    );
};

const verticalStyle = {
    height: '100vh',
    maxHeight: '40rem',
    width: '100%',
    maxWidth: '22.5rem',
    margin: '0 auto',
    padding: '0.75rem',
};

const verticalCarouselItemStyle = { padding: '0.75rem 0' };

export const Vertical = () => {
    const {
        animatedScrollByIndex,
        scrollAlign,
        scrollSnapType,
        scrollSnapAlign,
        detectActive,
        detectThreshold,
    } = basicProps;

    const axis = 'y';
    const [index, setIndex] = useRemoteHandlers({
        initialIndex: 0,
        axis,
        delay: 30,
        longDelay: 150,
        min: 0,
        max: items.length - 1,
    });

    return (
        <Carousel
            id="carousel"
            axis={axis}
            index={index}
            animatedScrollByIndex={animatedScrollByIndex}
            scrollAlign={scrollAlign}
            scrollSnapType={scrollSnapType}
            detectActive={detectActive as true}
            detectThreshold={detectThreshold}
            onIndexChange={setIndex}
            paddingStart="50%"
            paddingEnd="50%"
            style={verticalStyle}
        >
            {items.map(({ title, subtitle }, i) => (
                <CarouselItem
                    key={`item:${i}`}
                    scrollSnapAlign={scrollSnapAlign}
                    style={verticalCarouselItemStyle}
                    aria-label={`${i + 1} из ${items.length}`}
                    aria-selected={i === index}
                >
                    {title}
                    {subtitle}
                </CarouselItem>
            ))}
        </Carousel>
    );
};

const carouselLiteBasicProps = {
    displayGrid: true,
    scrollAlign: 'start' as const,
    scrollSnapType: 'mandatory' as const,
    scrollSnapAlign: 'start' as const,
};

export const CarouselLiteBasic = () => {
    const { scrollAlign, scrollSnapType, scrollSnapAlign } = carouselLiteBasicProps;

    const axis = 'x';
    const delay = 30;
    const longDelay = 150;
    const [index] = useRemoteHandlers({
        initialIndex: 40,
        axis,
        delay,
        longDelay,
        min: 0,
        max: items.length - 1,
    });

    return (
        <CarouselGridWrapper>
            <CarouselLite
                id="carousel-lite"
                as={Row}
                axis={axis}
                index={index}
                scrollAlign={scrollAlign}
                scrollSnapType={scrollSnapType}
                style={basicCarouselStyle}
            >
                {items.map(({ title, subtitle }, i) => (
                    <CarouselCol
                        key={`item:${i}`}
                        size={3}
                        sizeXL={4}
                        scrollSnapAlign={scrollSnapAlign}
                        aria-label={`${i + 1} из ${items.length}`}
                        aria-selected={i === index}
                    >
                        {title}
                        {subtitle}
                    </CarouselCol>
                ))}
            </CarouselLite>
        </CarouselGridWrapper>
    );
};
