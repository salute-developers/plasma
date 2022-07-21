import React, { useState } from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { IconChevronLeft, IconChevronRight } from '@salutejs/plasma-icons';

import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { SmartPaginationDots } from '../PaginationDots';

import { CarouselCard } from './Carousel.examples';

import { Carousel, CarouselItem } from '.';

export default {
    title: 'Controls/Carousel',
    component: Carousel,
    decorators: [InSpacingDecorator],
    argTypes: {
        align: {
            control: {
                type: 'inline-radio',
                options: ['center', 'start', 'end'],
            },
        },
    },
} as Meta;

const items = Array(25)
    .fill({
        title: 'Слайд',
        subtitle: 'Описание слайда',
        imageSrc: `${process.env.PUBLIC_URL}/images/320_320_n.jpg`,
        imageAlt: 'Картинка',
    })
    .map(({ title, subtitle, imageSrc, imageAlt }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
        imageAlt: `${imageAlt} ${i}`,
    }));

const defaultCarouselStyle = { margin: '0 -0.5rem' };
const defaultCarouselItemStyle = { width: '20rem', padding: '0 0.5rem' };

export const Default = () => {
    return (
        <Carousel index={0} style={defaultCarouselStyle}>
            {items.map((item) => (
                <CarouselItem key={item.id} style={defaultCarouselItemStyle}>
                    <CarouselCard
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                    />
                </CarouselItem>
            ))}
        </Carousel>
    );
};

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
const StyledControls = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
`;
const StyledCarousel = styled(Carousel)`
    display: flex;
    padding: 0.5rem 0;
`;
const StyledCarouselItem = styled(CarouselItem)`
    width: 32.5rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
`;

const enabledStateStyle = { display: 'block' };
const disabledStateStyle = { display: 'none' };

const ChevronLeft: React.FC = React.memo(() => {
    return <IconChevronLeft size="s" color="#fff" />;
});

const ChevronRight: React.FC = React.memo(() => {
    return <IconChevronRight size="s" color="#fff" />;
});

export const AccessabilityDemo = () => {
    const [index, setIndex] = useState(0);
    const [ariaLive, setAriaLive] = useState<'off' | 'polite'>('off');

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
                <StyledCarousel index={index} scrollSnapType="none" ariaLive={ariaLive}>
                    {items.map((item, i) => (
                        <StyledCarouselItem key={item.id} aria-label={`${i + 1} из ${items.length}`}>
                            <CarouselCard
                                id={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                href="#"
                                imageBase="img"
                                style={i === index ? enabledStateStyle : disabledStateStyle}
                            />
                        </StyledCarouselItem>
                    ))}
                </StyledCarousel>
                <SmartPaginationDots items={items} index={index} visibleItems={7} onIndexChange={setIndex} />
            </StyledCarouselWrapper>
        </StyledWrapper>
    );
};
