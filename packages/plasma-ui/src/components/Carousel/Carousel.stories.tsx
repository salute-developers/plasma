import React, { useRef, useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import type { SnapType, SnapAlign, CarouselLiteProps } from '@salutejs/plasma-core';
import { CarouselItemVirtual } from '@salutejs/plasma-core';
import { useVirtual } from '@salutejs/use-virtual';
import styled from 'styled-components';
import { withPerformance, InteractionTaskArgs, PublicInteractionTask } from 'storybook-addon-performance';
import { fireEvent, waitFor } from '@testing-library/dom';
import { IconChevronLeft, IconChevronRight } from '@salutejs/plasma-icons';

import { useThemeContext } from '../../hooks';
import { isSberBox } from '../../utils';
import { ProductCard, MusicCard, GalleryCard } from '../Card/Card.examples';
import { DeviceThemeProvider } from '../Device';
import { Row } from '../Grid';
import { Button } from '../Button';
import { Body3 } from '../Typography/Body';

import { ScalingColCard, scaleCallback, scaleResetCallback, ScalingColCardProps } from './Carousel.examples';

import {
    CarouselGridWrapper,
    Carousel,
    CarouselLite,
    CarouselVirtual,
    CarouselItem,
    CarouselCol,
    useRemoteHandlers,
    CarouselProps,
    CarouselColProps,
} from '.';

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

const ChevronLeft: React.FC = React.memo(() => {
    return <IconChevronLeft size="s" color="#fff" />;
});

const ChevronRight: React.FC = React.memo(() => {
    return <IconChevronRight size="s" color="#fff" />;
});

function isSelected(element: HTMLElement) {
    return () => {
        const ariaSelected = element.getAttribute('aria-selected');
        if (ariaSelected === 'true') {
            return Promise.resolve();
        }
        return Promise.reject();
    };
}

const interactionTasksArrowRight: PublicInteractionTask[] = [
    {
        name: 'Short ArrowRight press',
        run: async ({ container }: InteractionTaskArgs): Promise<void> => {
            const element = container.querySelector('#carousel');
            const selected = container.querySelector('[aria-selected="true"]');
            const nextSibling = selected?.nextSibling;

            if (element && selected && nextSibling) {
                fireEvent.keyDown(element, { key: 'ArrowRight', code: 'ArrowRight', charCode: 39 });
                await waitFor(isSelected(nextSibling as HTMLElement));
            }
        },
    },
];

const items = Array(100)
    .fill({
        title: 'Заголовок',
        subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        imageSrc: `${process.env.PUBLIC_URL}/images/320_320_n.jpg`,
    })
    .map(({ title, subtitle, imageSrc }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
    }));

const enabledStateStyle = { display: 'block' };
const disabledStateStyle = { display: 'none' };

const snapTypes = ['mandatory', 'proximity'] as SnapType[];
const snapAlign = ['start', 'center', 'end'] as SnapAlign[];

const isSberbox = isSberBox();

export default {
    title: 'Controls/Carousel',
} as Meta;

const basicCarouselStyle = { paddingTop: '1.25rem', paddingBottom: '1.25rem' };

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

Basic.decorators = [withPerformance];

Basic.story = {
    name: 'Basic',
    parameters: {
        performance: {
            interactions: interactionTasksArrowRight,
            disable: false,
        },
    },
};

Basic.args = {
    displayGrid: true,
    animatedScrollByIndex: true,
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

CarouselVirtualBasic.decorators = [withPerformance];

CarouselVirtualBasic.args = {
    displayGrid: true,
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

Vertical.decorators = [withPerformance];

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

const musicPageSectionStyle = { margin: '1.75rem 0' };
const musicPageTitleStyle = { marginBottom: '1rem' };

export const MusicPage: Story<MusicPageProps> = ({ scrollSnapType, scrollSnapAlign }) => {
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

MusicPage.args = {
    displayGrid: true,
    scrollSnapType: 'mandatory',
    scrollSnapAlign: 'start',
};

MusicPage.argTypes = {
    ...Basic.argTypes,
};

const centerItemCarouselStyle = { paddingTop: '5rem' };

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

CenterItem.story = {
    name: 'CenterItem',
    parameters: {
        performance: {
            interactions: interactionTasksArrowRight,
            disable: false,
        },
    },
};

CenterItem.args = {
    ...Basic.args,
};

CenterItem.argTypes = {
    ...Basic.argTypes,
};

export const AccessabilityDemo = () => {
    const [index, setIndex] = React.useState(0);
    const [ariaLive, setAriaLive] = React.useState<'off' | 'polite'>('off');

    const enableAriaLive = React.useCallback(() => {
        setAriaLive('polite');
    }, []);

    const disableAriaLive = React.useCallback(() => {
        setAriaLive('off');
    }, []);

    const changeIndexPrev = React.useCallback(() => {
        setIndex((i) => (i > 0 ? i - 1 : items.length - 1));
    }, []);

    const changeIndexNext = React.useCallback(() => {
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

export const CarouselLiteBasic: Story<CarouselLiteProps & CarouselColProps & { displayGrid: boolean }> = ({
    scrollAlign,
    scrollSnapType,
    scrollSnapAlign,
}) => {
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
                                imageSrc={`${process.env.PUBLIC_URL}/images/320_320_${i % 12}.jpg`}
                                focused={i === index}
                            />
                        </CarouselCol>
                    ))}
                </CarouselLite>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
};

CarouselLiteBasic.decorators = [withPerformance];

CarouselLiteBasic.args = {
    displayGrid: true,
    scrollAlign: 'start',
    scrollSnapType: 'mandatory',
    scrollSnapAlign: 'start',
};

CarouselLiteBasic.argTypes = {
    scrollAlign: {
        control: {
            type: 'select',
            options: ['center', 'start', 'end'],
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
