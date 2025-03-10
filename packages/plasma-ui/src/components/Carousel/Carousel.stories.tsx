import React, { useRef, useCallback, memo, useState } from 'react';
import type { FC } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import type { SnapType, SnapAlign, CarouselLiteProps } from '@salutejs/plasma-core';
import { CarouselItemVirtual } from '@salutejs/plasma-core';
import { useVirtual } from '@salutejs/use-virtual';
import styled from 'styled-components';
import { IconChevronLeft, IconChevronRight } from '@salutejs/plasma-icons';

import { useThemeContext } from '../../hooks';
import { isSberBox } from '../../utils';
import { ProductCard, MusicCard, GalleryCard } from '../Card/Card.examples';
import { DeviceThemeProvider } from '../Device';
import { Row } from '../Grid';
import { Button } from '../Button';
import { Body3 } from '../Typography/Body';
import { InContainer, WithGridLines } from '../../helpers/StoryDecorators';

import { ScalingColCard, scaleCallback, scaleResetCallback } from './Carousel.examples';
import type { ScalingColCardProps } from './Carousel.examples';

import {
    CarouselGridWrapper,
    Carousel,
    CarouselLite,
    CarouselVirtual,
    CarouselItem,
    CarouselCol,
    useRemoteHandlers,
} from '.';
import type { CarouselProps, CarouselColProps } from '.';

const meta: Meta<CarouselProps> = {
    title: 'Navigation/Carousel',
    component: Carousel,
    decorators: [WithGridLines, InContainer],
};

export default meta;

type DisplayGrid = { displayGrid: boolean };

type StoryPropsBasic = CarouselProps & CarouselColProps & DisplayGrid;

type StoryCarouselLitePropsBasic = CarouselLiteProps & CarouselColProps & DisplayGrid;

type StoryCenterItemProps = CarouselProps & ScalingColCardProps & DisplayGrid;

type MusicPageProps = {
    scrollSnapType: SnapType;
    scrollSnapAlign: SnapAlign;
} & DisplayGrid;

const isSberbox = isSberBox();

const enabledStateStyle = { display: 'block' };
const disabledStateStyle = { display: 'none' };

const snapTypes = ['mandatory', 'proximity'] as SnapType[];
const snapAlign = ['start', 'center', 'end'] as SnapAlign[];

const StyledWrapper = styled.div`
    width: 32.5rem;
    margin-left: auto;
    margin-right: auto;
`;

const StyledCarouselWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
`;

const StyledCarousel = styled(Carousel)`
    & > div {
        display: block;
    }
`;

const StyledControls = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
`;

const StyledCarouselItem = styled(CarouselItem)`
    width: 16.5rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
`;

const ChevronLeft: FC = memo(() => {
    return <IconChevronLeft size="s" color="#fff" />;
});

const ChevronRight: FC = memo(() => {
    return <IconChevronRight size="s" color="#fff" />;
});

const items = Array(100)
    .fill({
        title: 'Заголовок',
        subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        imageSrc: 'images/320_320_n.jpg',
    })
    .map(({ title, subtitle, imageSrc }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
    }));

const basicCarouselStyle = { paddingTop: '1.25rem', paddingBottom: '1.25rem' };

const StoryBasic = ({
    animatedScrollByIndex,
    scrollAlign,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}: StoryPropsBasic) => {
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
                            <ProductCard
                                title={title}
                                subtitle={subtitle}
                                imageSrc={`images/320_320_${i % 12}.jpg`}
                                focused={i === index}
                            />
                        </CarouselCol>
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

export const Basic: StoryObj<StoryPropsBasic> = {
    argTypes: {
        scrollAlign: {
            options: ['center', 'start', 'end', 'activeDirection'],
            control: {
                type: 'select',
            },
        },
        scrollSnapType: {
            options: snapTypes,
            control: {
                type: 'inline-radio',
            },
        },
        scrollSnapAlign: {
            options: snapAlign,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        displayGrid: true,
        animatedScrollByIndex: true,
        scrollAlign: 'start',
        scrollSnapType: !isSberbox ? 'mandatory' : undefined,
        scrollSnapAlign: !isSberbox ? 'start' : undefined,
        detectActive: true,
        detectThreshold: 0.5,
    },
    render: (args) => <StoryBasic {...args} />,
};

const CarouselVirtualBasicComponent = () => {
    // INFO: deviceScale = 1 (Mobile), deviceScale = 2 (Sberbox, TV, Portal)
    const { deviceScale } = useThemeContext();
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
                                imageSrc={`images/320_320_${i % 12}.jpg`}
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

export const CarouselVirtualBasic: StoryObj = {
    args: {
        displayGrid: true,
    },
    render: () => {
        /**
         * Если вы используете виртуализацию, скорее всего также следует отключить анимацию
         * при фокусе на текущий элемент. Что продемонстрировано в данном примере через lowPerformance режим.
         */
        return (
            <DeviceThemeProvider lowPerformance>
                <CarouselVirtualBasicComponent />
            </DeviceThemeProvider>
        );
    },
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

const StoryVertical = ({
    animatedScrollByIndex,
    scrollAlign,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}: StoryPropsBasic) => {
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
                        <GalleryCard
                            title={title}
                            subtitle={subtitle}
                            focused={i === index}
                            imageSrc={`images/320_320_${i % 12}.jpg`}
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

export const Vertical: StoryObj<StoryPropsBasic> = {
    argTypes: { ...Basic.argTypes },
    args: { ...Basic.args },
    render: (args) => <StoryVertical {...args} />,
};

const musicPageSectionStyle = { margin: '1.75rem 0' };

const musicPageTitleStyle = { marginBottom: '1rem' };

const StoryMusicPage = ({ scrollSnapType, scrollSnapAlign }: MusicPageProps) => {
    return (
        <DeviceThemeProvider>
            <section style={musicPageSectionStyle}>
                <Body3 style={musicPageTitleStyle}>Новые альбомы</Body3>
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
            <section style={musicPageSectionStyle}>
                <Body3 style={musicPageTitleStyle}>Хиты и чарты</Body3>
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
            <section style={musicPageSectionStyle}>
                <Body3 style={musicPageTitleStyle}>Жанры и настроения</Body3>
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

export const MusicPage: StoryObj<MusicPageProps> = {
    argTypes: {
        ...Basic.argTypes,
    },
    args: {
        displayGrid: true,
        scrollSnapType: 'mandatory',
        scrollSnapAlign: 'start',
    },
    render: (args) => <StoryMusicPage {...args} />,
};

const centerItemCarouselStyle = { paddingTop: '5rem' };

const StoryCenterItem = ({
    animatedScrollByIndex,
    scrollSnapType,
    scrollSnapAlign,
    detectActive,
    detectThreshold,
}: StoryCenterItemProps) => {
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
                    id="carousel"
                    as={Row}
                    axis="x"
                    index={index}
                    animatedScrollByIndex={animatedScrollByIndex}
                    scrollSnapType={scrollSnapType}
                    detectActive={detectActive}
                    detectThreshold={detectThreshold}
                    scaleCallback={scaleCallback}
                    scaleResetCallback={scaleResetCallback}
                    onIndexChange={setIndex}
                    paddingStart="50%"
                    paddingEnd="50%"
                    style={centerItemCarouselStyle}
                >
                    {items.map((item, i) => (
                        <ScalingColCard
                            key={`item:${i}`}
                            scrollSnapAlign={scrollSnapAlign}
                            isActive={i === index}
                            item={item}
                            tabIndex={0}
                            aria-label={`${i + 1} из ${items.length}`}
                            aria-selected={i === index}
                        />
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

export const CenterItem: StoryObj<StoryCenterItemProps> = {
    argTypes: {
        ...Basic.argTypes,
    },
    args: {
        ...Basic.args,
    },
    render: (args) => <StoryCenterItem {...args} />,
};

const StoryAccessibilityDemo = () => {
    const [index, setIndex] = useState(0);
    const [ariaLive, setAriaLive] = useState<'off' | 'polite'>('off');

    const enableAriaLive = useCallback(() => {
        setAriaLive('polite');
    }, []);

    const disableAriaLive = useCallback(() => {
        setAriaLive('off');
    }, []);

    const changeIndexPrev = useCallback(() => {
        setIndex((i) => (i > 0 ? i - 1 : items.length - 1));
    }, []);

    const changeIndexNext = useCallback(() => {
        setIndex((i) => (i < items.length - 1 ? i + 1 : 0));
    }, []);

    return (
        <StyledWrapper>
            <StyledCarouselWrapper
                id="carousel-example"
                aria-label="Пример карусели с доступностью"
                onFocus={enableAriaLive}
                onBlur={disableAriaLive}
                onMouseOver={enableAriaLive}
                onMouseLeave={disableAriaLive}
            >
                <StyledControls>
                    <Button
                        contentLeft={<ChevronLeft />}
                        onClick={changeIndexPrev}
                        aria-controls="carousel-example"
                        aria-label="Предыдущий слайд"
                        view="clear"
                    />
                    <Button
                        contentLeft={<ChevronRight />}
                        onClick={changeIndexNext}
                        aria-controls="carousel-example"
                        aria-label="Следующий слайд"
                        view="clear"
                    />
                </StyledControls>
                <StyledCarousel axis="y" index={index} scrollSnapType="none" aria-live={ariaLive}>
                    {items.map((item, i) => (
                        <StyledCarouselItem key={item.id} aria-label={`${i + 1} из ${items.length}`}>
                            <GalleryCard
                                id={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                imageSrc={item.imageSrc}
                                style={i === index ? enabledStateStyle : disabledStateStyle}
                            />
                        </StyledCarouselItem>
                    ))}
                </StyledCarousel>
            </StyledCarouselWrapper>
        </StyledWrapper>
    );
};

export const AccessibilityDemo: StoryObj = {
    render: () => <StoryAccessibilityDemo />,
};

const StoryCarouselLiteBasic = ({ scrollAlign, scrollSnapType, scrollSnapAlign }: StoryCarouselLitePropsBasic) => {
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
        <DeviceThemeProvider>
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
                            <ProductCard
                                title={title}
                                subtitle={subtitle}
                                imageSrc={`images/320_320_${i % 12}.jpg`}
                                focused={i === index}
                            />
                        </CarouselCol>
                    ))}
                </CarouselLite>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

export const CarouselLiteBasic: StoryObj<StoryCarouselLitePropsBasic> = {
    argTypes: {
        scrollAlign: {
            options: ['center', 'start', 'end'],
            control: {
                type: 'select',
            },
        },
        scrollSnapType: {
            options: snapTypes,
            control: {
                type: 'inline-radio',
            },
        },
        scrollSnapAlign: {
            options: snapAlign,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        displayGrid: true,
        scrollAlign: 'start',
        scrollSnapType: 'mandatory',
        scrollSnapAlign: 'start',
    },
    render: (args) => <StoryCarouselLiteBasic {...args} />,
};
