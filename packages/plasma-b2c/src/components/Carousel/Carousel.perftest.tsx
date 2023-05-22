import React from 'react';
import styled from 'styled-components';

import { Image } from '../Image';
// TODO: https://github.com/salute-developers/plasma/issues/507
import { Headline4, Footnote1 } from '../Typography';

import { Carousel, CarouselItem } from '.';

type alignType = 'center' | 'start' | 'end';

const items = Array(25)
    .fill({
        title: 'Заголовок',
        subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        imageSrc: 'images/320_320_n.jpg',
    })
    .map(({ title, subtitle, imageSrc }, i) => ({
        id: i,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
    }));

const StyledCard = styled.div`
    position: relative;
    border-radius: 1rem;
`;
const StyledCardContent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.72rem;
    color: #fff;
`;

const defaultCarouselStyle = { margin: '0 -0.5rem' };
const defaultCarouselItemStyle = { width: 550, padding: '0 0.5rem' };
const onIndexChange = () => {};
const defaultProps = {
    align: 'center',
};

export const Default = () => {
    const { align } = defaultProps;

    return (
        <Carousel
            style={defaultCarouselStyle}
            index={0}
            detectActive
            onIndexChange={onIndexChange}
            scrollAlign={align as alignType}
        >
            {items.map((item) => (
                <CarouselItem key={item.id} style={defaultCarouselItemStyle} scrollSnapAlign={align as alignType}>
                    <StyledCard>
                        <Image src={item.imageSrc} ratio="16 / 9" base="div" />
                        <StyledCardContent>
                            <Headline4>{item.title}</Headline4>
                            <Footnote1>{item.subtitle}</Footnote1>
                        </StyledCardContent>
                    </StyledCard>
                </CarouselItem>
            ))}
        </Carousel>
    );
};
