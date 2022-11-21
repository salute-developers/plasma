import React from 'react';
import { action } from '@storybook/addon-actions';

import { HeroSlideProps } from '../HeroSlide/HeroSlide';

import { HeroSlider } from './HeroSlider';

export default {
    title: 'Components/HeroSlider',
};

const items = Array.from({ length: 6 }, (_, index) => ({
    title: index % 2 === 0 ? 'Почему кошки так долго спят?' : 'Правда ли, что попугаи умеют разговаривать?',
    src: index % 2 === 0 ? './images/cat.png' : './images/parrot.png',
    withMask: index % 2 === 1,
    id: index,
}));

const getImageProps = (index: number): Partial<Pick<HeroSlideProps, 'imageFit' | 'imagePosition' | 'imageWidth'>> => {
    if (index % 2 === 0) {
        return {
            imagePosition: 'top right',
            imageFit: 'scale-down',
            imageWidth: '50%',
        };
    }
    return {
        imagePosition: 'center center',
    };
};

export const Default: React.FC = () => (
    <HeroSlider
        time={10000}
        onItemClick={action('onClick')}
        items={items}
        buttonText="Click To"
        getImageProps={getImageProps}
    />
);
