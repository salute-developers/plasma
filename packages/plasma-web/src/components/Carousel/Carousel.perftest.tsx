import React from 'react';

import { CarouselCard } from './Carousel.examples';

import { Carousel, CarouselItem } from '.';

const items = Array(25)
    .fill({
        title: 'Слайд',
        subtitle: 'Описание слайда',
        imageSrc: 'images/320_320_n.jpg',
        imageAlt: 'Картинка',
    })
    .map(({ title, subtitle, imageSrc, imageAlt }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
        imageAlt: `${imageAlt} ${i}`,
    }));
const defaultStyle = { margin: '0 -0.5rem' };
const defaultCarouselItemStyle = { width: '20rem', padding: '0 0.5rem' };

export const Default = () => {
    return (
        <Carousel index={0} style={defaultStyle}>
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
