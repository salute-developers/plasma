import React, { useRef, useContext, useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import type { SnapType, SnapAlign } from '@salutejs/plasma-core';
import { CarouselItemVirtual } from '@salutejs/plasma-core';
import * as tokens from '@salutejs/plasma-tokens';
import { useVirtual } from '@salutejs/use-virtual';
import { ThemeContext } from 'styled-components';

import { isSberBox } from '../../utils';
import { ProductCard, MusicCard, GalleryCard } from '../Card/Card.examples';
import { DeviceThemeProvider } from '../Device';
import { Row } from '../Grid';
import { Body3 } from '../Typography/Body';

import { ScalingColCard, scaleCallback, scaleResetCallback, ScalingColCardProps } from './Carousel.examples';

import {
    CarouselGridWrapper,
    Carousel,
    CarouselVirtual,
    CarouselItem,
    CarouselCol,
    useRemoteHandlers,
    CarouselProps,
    CarouselColProps,
} from '.';

const items = Array(100)
    .fill({
        title: 'Заголовок',
        subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        imageSrc: `${process.env.PUBLIC_URL}/images/320_320_n.jpg`,
    })
    .map(({ title, subtitle, imageSrc }, i) => ({
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
    }));

const snapTypes = ['mandatory', 'proximity'] as SnapType[];
const snapAlign = ['start', 'center', 'end'] as SnapAlign[];

const isSberbox = isSberBox();

export default {
    title: 'Controls/Carousel',
} as Meta;

export const Basic: Story<CarouselProps & CarouselColProps & { displayGrid: boolean }> = ({
    animatedScrollByIndex,
    scrollAlign,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}) => {
    const axis = 'x';
    const delay = isSberbox ? 300 : 30;
    const longDelay = isSberbox ? 1500 : 150;
    const [index, setIndex] = useRemoteHandlers({
        initialIndex: 0,
        axis,
        delay,
        longDelay,
        min: 0,
        max: items.length - 1,
    });

    return (
        <DeviceThemeProvider>
            <CarouselGridWrapper>
                <Carousel
                    as={Row}
                    axis={axis}
                    index={index}
                    animatedScrollByIndex={animatedScrollByIndex}
                    scrollAlign={scrollAlign}
                    scrollSnapType={scrollSnapType}
                    detectActive={detectActive as true}
                    detectThreshold={detectThreshold}
                    onIndexChange={(i) => setIndex(i)}
                    style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                >
                    {items.map(({ title, subtitle }, i) => (
                        <CarouselCol
                            key={`item:${i}`}
                            size={3}
                            sizeXL={4}
                            scrollSnapAlign={scrollSnapAlign}
                            aria-label={`${i + 1} из ${items.length}`}
                        >
                            <ProductCard
                                title={title}
                                subtitle={subtitle}
                                imageSrc={`${process.env.PUBLIC_URL}/images/320_320_${i % 12}.jpg`}
                                focused={i === index}
                            />
                        </CarouselCol>
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

Basic.args = {
    displayGrid: true,
    animatedScrollByIndex: isSberbox,
    scrollAlign: 'start',
    scrollSnapType: !isSberbox ? 'mandatory' : undefined,
    scrollSnapAlign: !isSberbox ? 'start' : undefined,
    detectActive: true,
    detectThreshold: 0.5,
};

Basic.argTypes = {
    scrollAlign: {
        control: {
            type: 'select',
            options: ['center', 'start', 'end', 'activeDirection'],
        },
    },
    scrollSnapType: {
        control: {
            type: 'inline-radio',
            options: snapTypes,
        },
    },
    scrollSnapAlign: {
        control: {
            type: 'inline-radio',
            options: snapAlign,
        },
    },
};

const CarouselVirtualBasicComponent = () => {
    // deviceScale = 1 (Mobile), deviceScale = 2 (Sberbox, TV, Portal)
    const { deviceScale } = useContext(ThemeContext);
    const parentRef = useRef(null);
    const axis = 'x';

    const width = deviceScale === 1 ? 320 : 450;
    const gap = deviceScale === 1 ? 30 : 40;

    const { visibleItems, totalSize, currentIndex } = useVirtual({
        itemCount: 100,
        parentRef,
        axis,
        // estimateSize должен возвращать значение в px.
        estimateSize: useCallback(() => width + gap, [width, gap]),
        overscan: 6,
    });

    return (
        <CarouselGridWrapper>
            <CarouselVirtual
                ref={parentRef}
                as={Row}
                axis={axis}
                style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', height: '22rem' }}
                virtualSize={totalSize}
            >
                {visibleItems.map(({ index: i, start }) => {
                    const { title, subtitle } = items[i];
                    return (
                        <CarouselItemVirtual
                            key={`item:${i}`}
                            left={start}
                            style={{ width: `${width}px` }}
                            aria-label={`${i + 1} из ${items.length}`}
                        >
                            <GalleryCard
                                title={title}
                                subtitle={subtitle}
                                focused={i === currentIndex}
                                imageSrc={`${process.env.PUBLIC_URL}/images/320_320_${i % 12}.jpg`}
                                imageRatio="1 / 1"
                                tabIndex={i === currentIndex ? 0 : -1}
                            />
                        </CarouselItemVirtual>
                    );
                })}
            </CarouselVirtual>
        </CarouselGridWrapper>
    );
};

export const CarouselVirtualBasic = () => {
    /**
     * Если вы используете виртуализацию, скорее всего также следует отключить анимацию
     * при фокусе на текуший элемент. Что продемонстрировано в данном примере через lowPerformance режим.
     */
    return (
        <DeviceThemeProvider lowPerformance>
            <CarouselVirtualBasicComponent />
        </DeviceThemeProvider>
    );
};

CarouselVirtualBasic.args = {
    displayGrid: true,
};

export const Vertical: Story<CarouselProps & CarouselColProps & { displayGrid: boolean }> = ({
    animatedScrollByIndex,
    scrollAlign,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}) => {
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
        <DeviceThemeProvider>
            <Carousel
                axis={axis}
                index={index}
                animatedScrollByIndex={animatedScrollByIndex}
                scrollAlign={scrollAlign}
                scrollSnapType={scrollSnapType}
                detectActive={detectActive as true}
                detectThreshold={detectThreshold}
                onIndexChange={(i) => setIndex(i)}
                paddingStart="50%"
                paddingEnd="50%"
                style={{
                    height: '100vh',
                    maxHeight: '40rem',
                    width: '100%',
                    maxWidth: '22.5rem',
                    margin: '0 auto',
                    padding: '0.75rem',
                }}
            >
                {items.map(({ title, subtitle }, i) => (
                    <CarouselItem
                        key={`item:${i}`}
                        scrollSnapAlign={scrollSnapAlign}
                        style={{ padding: '0.75rem 0' }}
                        aria-label={`${i + 1} из ${items.length}`}
                    >
                        <GalleryCard
                            title={title}
                            subtitle={subtitle}
                            focused={i === index}
                            imageSrc={`${process.env.PUBLIC_URL}/images/320_320_${i % 12}.jpg`}
                            imageRatio="1 / 1"
                            scaleOnFocus
                            tabIndex={0}
                        />
                    </CarouselItem>
                ))}
            </Carousel>
        </DeviceThemeProvider>
    );
};

Vertical.args = {
    ...Basic.args,
};

Vertical.argTypes = {
    ...Basic.argTypes,
};

interface MusicPageProps {
    displayGrid: boolean;
    scrollSnapType: SnapType;
    scrollSnapAlign: SnapAlign;
}

export const MusicPage: Story<MusicPageProps> = ({ scrollSnapType, scrollSnapAlign }) => {
    return (
        <DeviceThemeProvider>
            <section style={{ margin: '1.75rem 0' }}>
                <Body3 style={{ marginBottom: '1rem' }}>Новые альбомы</Body3>
                <CarouselGridWrapper>
                    <Carousel as={Row} axis="x" index={0} scrollSnapType={scrollSnapType}>
                        {items.map((item, i) => (
                            <CarouselCol key={`item:${i}`} size={2} sizeM={1.5} scrollSnapAlign={scrollSnapAlign}>
                                <MusicCard {...item} imageRatio="1 / 1" />
                            </CarouselCol>
                        ))}
                    </Carousel>
                </CarouselGridWrapper>
            </section>
            <section style={{ margin: '1.75rem 0' }}>
                <Body3 style={{ marginBottom: '1rem' }}>Хиты и чарты</Body3>
                <CarouselGridWrapper>
                    <Carousel as={Row} axis="x" index={0} scrollSnapType={scrollSnapType}>
                        {items.map((item, i) => (
                            <CarouselCol key={`item:${i}`} size={4} sizeM={3} scrollSnapAlign={scrollSnapAlign}>
                                <MusicCard {...item} imageRatio="16 / 9" />
                            </CarouselCol>
                        ))}
                    </Carousel>
                </CarouselGridWrapper>
            </section>
            <section style={{ margin: '1.75rem 0' }}>
                <Body3 style={{ marginBottom: '1rem' }}>Жанры и настроения</Body3>
                <CarouselGridWrapper>
                    <Carousel as={Row} axis="x" index={0} scrollSnapType={scrollSnapType}>
                        {items.map((item, i) => (
                            <CarouselCol key={`item:${i}`} size={3} sizeM={2} scrollSnapAlign={scrollSnapAlign}>
                                <MusicCard {...item} imageRatio="16 / 9" />
                            </CarouselCol>
                        ))}
                    </Carousel>
                </CarouselGridWrapper>
            </section>
        </DeviceThemeProvider>
    );
};

MusicPage.args = {
    displayGrid: true,
    scrollSnapType: 'mandatory',
    scrollSnapAlign: 'start',
};

MusicPage.argTypes = {
    ...Basic.argTypes,
};

export const CenterItem: Story<CarouselProps & ScalingColCardProps & { displayGrid: boolean }> = ({
    animatedScrollByIndex,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}) => {
    const delay = isSberbox ? 300 : 30;
    const longDelay = isSberbox ? 1500 : 150;
    const [index, setIndex] = useRemoteHandlers({
        initialIndex: 0,
        axis: 'x',
        delay,
        longDelay,
        min: 0,
        max: items.length - 1,
    });

    return (
        <DeviceThemeProvider>
            <CarouselGridWrapper>
                <Carousel
                    as={Row}
                    axis="x"
                    index={index}
                    animatedScrollByIndex={animatedScrollByIndex}
                    scrollSnapType={scrollSnapType}
                    detectActive={detectActive}
                    detectThreshold={detectThreshold}
                    scaleCallback={scaleCallback}
                    scaleResetCallback={scaleResetCallback}
                    onIndexChange={(i) => setIndex(i)}
                    paddingStart="50%"
                    paddingEnd="50%"
                    style={{ paddingTop: '5rem' }}
                >
                    {items.map((item, i) => (
                        <ScalingColCard
                            key={`item:${i}`}
                            scrollSnapAlign={scrollSnapAlign}
                            isActive={i === index}
                            item={item}
                            tabIndex={0}
                            aria-label={`${i + 1} из ${items.length}`}
                        />
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

CenterItem.args = {
    ...Basic.args,
};

CenterItem.argTypes = {
    ...Basic.argTypes,
};
